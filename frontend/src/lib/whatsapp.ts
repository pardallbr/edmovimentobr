const WHATSAPP_PHONE = "5511995415005";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre as sessões de Psicomotricidade para meu filho(a).";

export function whatsappUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  const query = new URLSearchParams({ text: message }).toString();
  return `https://wa.me/${WHATSAPP_PHONE}?${query}`;
}

export const whatsappDisplayPhone = "+55 (11) 99541-5005";