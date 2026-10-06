import { useState } from "react";
import type { ReactElement } from "react";

const STORAGE_KEY = "edmovimento-consent";

type Choice = "granted" | "denied";
type GtagFn = (...args: unknown[]) => void;

function readChoice(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Sem armazenamento disponível: a escolha vale só para esta visita.
  }
}

function sendConsent(choice: Choice): void {
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (!gtag) return;
  gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

export default function CookieBanner(): ReactElement | null {
  const [visible, setVisible] = useState<boolean>(() => readChoice() === null);

  function choose(choice: Choice): void {
    saveChoice(choice);
    sendConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      data-testid="cookie-banner"
      className="fixed inset-x-4 bottom-4 z-[60] rounded-2xl border border-[#e2e8f0] bg-white p-5 text-[#1e293b] shadow-xl sm:right-auto sm:max-w-md"
    >
      <p className="text-sm leading-relaxed text-[#475569]">
        Usamos cookies para medir se nossos anúncios geram contatos. Você escolhe se aceita ou
        recusa.{" "}
        <a
          data-testid="cookie-privacy-link"
          href="/privacidade/"
          className="font-semibold text-[#2D6A4F] underline underline-offset-4"
        >
          Política de privacidade
        </a>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          data-testid="cookie-accept"
          onClick={() => choose("granted")}
          className="rounded-full bg-[#2D6A4F] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1e4e3a]"
        >
          Aceitar
        </button>
        <button
          type="button"
          data-testid="cookie-decline"
          onClick={() => choose("denied")}
          className="rounded-full border border-[#cbd5e1] px-5 py-2 text-sm font-semibold text-[#334155] transition-colors hover:bg-[#f1f5f9]"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
