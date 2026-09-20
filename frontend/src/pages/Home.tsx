import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  Check,
  ChevronDown,
  CircleDot,
  Compass,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Move3d,
  Quote,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappDisplayPhone,
  whatsappUrl,
} from "@/lib/whatsapp";

const heroImage =
  "https://static.wixstatic.com/media/ca1e43_a8c3b88b760647bebec80ffb81b5301f~mv2.jpg/v1/fill/w_1200,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/educacao-do-movimento.jpg";
const aboutImage =
  "https://static.wixstatic.com/media/ca1e43_40d046b5c59142c5a3add3987efd7322~mv2.jpg/v1/crop/x_0,y_187,w_3265,h_3601/fill/w_700,h_770,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_0051.jpg";

const specialties = [
  {
    number: "01",
    title: "Educação Física e Psicomotricidade",
    detail: "Pós-graduação · 500h",
    tone: "sage",
  },
  {
    number: "02",
    title: "Psicomotricidade",
    detail: "Pós-graduação · 720h",
    tone: "honey",
  },
  {
    number: "03",
    title: "Neuropsicomotricidade",
    detail: "Pós-graduação · 720h",
    tone: "peach",
  },
  {
    number: "04",
    title: "Psicomotricidade Clínica, TGD e TEA",
    detail: "Pós-graduação · 720h",
    tone: "sky",
  },
  {
    number: "05",
    title: "ABA aplicada ao autismo",
    detail: "Pós-graduação · 780h",
    tone: "lavender",
  },
] as const;

const approachItems = [
  {
    icon: Move3d,
    title: "Corpo em ação",
    text: "Equilíbrio, coordenação e consciência corporal em experiências que fazem sentido para cada criança.",
  },
  {
    icon: Brain,
    title: "Intervenção com sentido",
    text: "Atividades estruturadas e recursos adequados transformam objetivos clínicos em experiências compreensíveis para cada criança.",
  },
  {
    icon: HeartHandshake,
    title: "Olhar individual",
    text: "Cada encontro respeita o ritmo, os interesses e as necessidades da criança e da sua família.",
  },
];

const signs = [
  "Dificuldade para correr, saltar ou se equilibrar",
  "Desafios com recorte, desenho ou coordenação fina",
  "Agitação ou dificuldade para sustentar uma brincadeira",
  "Pouca confiança para experimentar movimentos novos",
];

const faqs = [
  {
    question: "Para qual idade a psicomotricidade é indicada?",
    answer:
      "O trabalho pode acompanhar diferentes fases do desenvolvimento infantil e da adolescência. A conversa inicial ajuda a entender o momento da criança e qual caminho faz sentido.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "Começamos com uma conversa com a família para conhecer a rotina, o histórico e os objetivos. A avaliação e a observação orientada ajudam a construir os próximos passos do acompanhamento.",
  },
  {
    question: "Você atende crianças com TEA?",
    answer:
      "Sim. A formação inclui especializações em ABA, neuropsicomotricidade e psicomotricidade clínica, institucional e TGD/TEA. Cada atendimento é planejado de forma individualizada.",
  },
  {
    question: "O que levar para a sessão?",
    answer:
      "Roupas confortáveis e disponibilidade para participar já são um ótimo começo. No contato inicial, combinamos os detalhes do espaço e do atendimento.",
  },
];

const testimonialProofPoints = [
  "Escuta atenta para a história de cada criança",
  "Atividades pensadas para a rotina e os objetivos da família",
  "Comunicação clara para acompanhar cada pequena conquista",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Home() {
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);

  const checklistUrl = useMemo(() => {
    if (selectedSigns.length === 0) return whatsappUrl(DEFAULT_WHATSAPP_MESSAGE);
    return whatsappUrl(
      `Olá! Gostaria de conversar sobre alguns sinais no desenvolvimento do meu filho(a): ${selectedSigns.join(", ")}.`,
    );
  }, [selectedSigns]);

  const toggleSign = (sign: string) => {
    setSelectedSigns((current) =>
      current.includes(sign)
        ? current.filter((item) => item !== sign)
        : [...current, sign],
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#1e293b]">
      <header
        data-testid="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-[#dbe9df]/70 bg-[#fbfaf7]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#inicio" data-testid="brand-link" className="group flex items-center gap-2.5">
            <span data-testid="brand-mark" className="relative flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#2d6a4f] text-white shadow-[0_8px_18px_-10px_#2d6a4f] transition-transform duration-300 group-hover:-rotate-6">
              <Waves size={20} strokeWidth={2.5} />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#ffb703]" />
            </span>
            <span data-testid="brand-name" className="font-heading text-lg font-extrabold tracking-[-0.04em] text-[#2d6a4f]">EdMovimento</span>
          </a>

          <nav data-testid="desktop-navigation" className="hidden items-center gap-7 text-sm font-semibold text-[#64748b] lg:flex">
            <a data-testid="nav-about-link" href="#sobre" className="nav-link">Sobre</a>
            <a data-testid="nav-specialties-link" href="#especialidades" className="nav-link">Especialidades</a>
            <a data-testid="nav-approach-link" href="#abordagem" className="nav-link">Abordagem</a>
            <a data-testid="nav-clinical-link" href="#psicomotricidade" className="nav-link">Psicomotricidade</a>
            <a data-testid="nav-faq-link" href="#duvidas" className="nav-link">Dúvidas</a>
          </nav>

          <a
            data-testid="header-whatsapp-button"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "gap-2 rounded-full bg-[#25d366] px-4 text-[#0c3b25] shadow-[0_8px_20px_-12px_#25d366] hover:bg-[#1eae52] hover:text-white")}
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">Contato</span>
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" data-testid="hero-section" className="relative isolate mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 pb-20 pt-36 lg:grid-cols-[1.03fr_0.97fr] lg:px-10 lg:pb-28 lg:pt-44">
          <div className="soft-grid pointer-events-none absolute -left-44 top-20 -z-10 h-[480px] w-[480px] rounded-full opacity-70" />
          <motion.div {...fadeUp} className="relative z-10 max-w-2xl">
            <div data-testid="hero-eyebrow" className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9e8dc] bg-white/70 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#2d6a4f] shadow-sm">
              <Sparkles size={14} className="text-[#ffb703]" />
              Psicomotricidade infantil e juvenil
            </div>
            <h1 data-testid="hero-title" className="max-w-[680px] font-heading text-5xl font-extrabold leading-[1.02] tracking-[-0.065em] text-[#1e293b] sm:text-6xl lg:text-[4.65rem]">
              Desenvolvimento guiado por <span className="relative whitespace-nowrap text-[#2d6a4f]">ciência e movimento.<span className="scribble-line" /></span>
            </h1>
            <p data-testid="hero-description" className="mt-7 max-w-xl text-lg leading-relaxed text-[#64748b] sm:text-xl">
              Avaliação e intervenção psicomotora para apoiar cada criança em seu desenvolvimento motor e emocional — com técnica, vínculo e respeito ao seu ritmo.
            </p>
            <div data-testid="hero-actions" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a data-testid="hero-whatsapp-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "group gap-2 rounded-full bg-[#2d6a4f] px-6 text-white shadow-[0_16px_30px_-16px_#2d6a4f] hover:bg-[#24583f]") }>
                Agendar conversa via WhatsApp
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a data-testid="hero-about-link" href="#sobre" className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#2d6a4f] transition-colors duration-300 hover:bg-[#eef6ef]">
                Conhecer o trabalho <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
            <div data-testid="hero-credentials" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce8df] pt-5 text-xs font-semibold text-[#64748b]">
              <span data-testid="hero-location"><MapPin size={14} className="mr-1 inline text-[#e07a5f]" /> Jundiaí e região</span>
              <span data-testid="hero-cref"><Check size={14} className="mr-1 inline text-[#52b788]" /> CREF 091220-G/SP</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div className="absolute -right-4 top-4 h-32 w-32 rounded-full bg-[#ffb703]/25 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#52b788]/25 blur-3xl" />
            <div data-testid="hero-image-frame" className="relative overflow-hidden rounded-[40px] rounded-bl-[110px] border-[10px] border-white bg-[#eaf4ed] shadow-[0_30px_70px_-32px_rgba(45,106,79,0.65)]">
              <img data-testid="hero-image" src={heroImage} alt="Criança explorando uma atividade de equilíbrio ao ar livre" className="h-[470px] w-full object-cover sm:h-[540px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e4e3a]/35 via-transparent to-transparent" />
            </div>
            <div data-testid="hero-floating-note" className="float-slow absolute -bottom-5 left-3 flex max-w-[230px] items-center gap-3 rounded-2xl border border-white/90 bg-white/90 px-4 py-3 shadow-[0_18px_40px_-20px_rgba(30,41,59,0.5)] backdrop-blur-md sm:-left-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0df] text-[#e07a5f]"><HeartHandshake size={20} /></span>
              <p data-testid="hero-floating-note-text" className="text-xs font-bold leading-snug text-[#1e293b]">Cada conquista começa com um acompanhamento individualizado.</p>
            </div>
          </motion.div>
        </section>

        <section data-testid="trust-strip" className="border-y border-[#dce8df] bg-[#f2f8f3]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#dce8df] px-5 sm:grid-cols-4 lg:px-10">
            <div data-testid="trust-stat-specialties" className="px-3 py-7 text-center sm:py-8"><strong className="block font-heading text-3xl font-extrabold text-[#2d6a4f]">+5</strong><span data-testid="trust-stat-specialties-label" className="mt-1 block text-xs font-semibold text-[#64748b] sm:text-sm">pós-graduações</span></div>
            <div data-testid="trust-stat-experience" className="border-y border-[#dce8df] px-3 py-7 text-center sm:border-y-0 sm:py-8"><strong className="block font-heading text-3xl font-extrabold text-[#2d6a4f]">Desde 2019</strong><span data-testid="trust-stat-experience-label" className="mt-1 block text-xs font-semibold text-[#64748b] sm:text-sm">atuação especializada</span></div>
            <div data-testid="trust-stat-place" className="px-3 py-7 text-center sm:py-8"><strong className="block font-heading text-3xl font-extrabold text-[#2d6a4f]">Jundiaí</strong><span data-testid="trust-stat-place-label" className="mt-1 block text-xs font-semibold text-[#64748b] sm:text-sm">e região</span></div>
            <div data-testid="trust-stat-method" className="border-l-0 px-3 py-7 text-center sm:py-8"><strong className="block font-heading text-3xl font-extrabold text-[#2d6a4f]">100%</strong><span data-testid="trust-stat-method-label" className="mt-1 block text-xs font-semibold text-[#64748b] sm:text-sm">olhar individual</span></div>
          </div>
        </section>

        <motion.section {...fadeUp} id="sobre" data-testid="about-section" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-32">
          <div data-testid="about-image-frame" className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border-2 border-dashed border-[#ffb703]" />
            <div className="relative overflow-hidden rounded-[34px] rounded-tr-[100px] bg-[#eef5ef] p-3 shadow-[0_25px_55px_-30px_rgba(45,106,79,0.65)]">
              <img data-testid="about-image" src={aboutImage} alt="Profissional acolhendo uma criança durante uma atividade" className="h-[500px] w-full rounded-[27px] object-cover" />
            </div>
            <div data-testid="about-quote-card" className="absolute -bottom-7 -right-3 max-w-[250px] rounded-2xl border border-white bg-white p-4 shadow-[0_20px_40px_-22px_rgba(30,41,59,0.55)] sm:-right-8">
              <Quote size={22} className="mb-2 text-[#ffb703]" />
              <p data-testid="about-quote" className="font-heading text-sm font-bold leading-snug text-[#2d6a4f]">“A profissão que escolhi é incrivelmente gratificante.”</p>
            </div>
          </div>
          <div className="lg:pl-8">
            <p data-testid="about-kicker" className="section-kicker">Sobre o profissional</p>
            <h2 data-testid="about-title" className="section-title mt-4">Um olhar técnico, humano e cheio de possibilidades.</h2>
            <p data-testid="about-text-primary" className="mt-6 text-base leading-relaxed text-[#64748b] sm:text-lg">Sou <strong className="text-[#1e293b]">Vinicius Corrêa Tafarelo</strong>, professor de Educação Física e especialista em Psicomotricidade. Formado em 2010, atuo com psicomotricidade desde 2019, acompanhando crianças e adolescentes com técnica, cuidado e objetivos individualizados.</p>
            <p data-testid="about-text-secondary" className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">Meu trabalho combina avaliação, intervenção psicomotora e atividades significativas para a criança se expressar, ganhar autonomia e avançar em cada objetivo definido.</p>
            <div data-testid="about-credentials-list" className="mt-8 grid gap-3 sm:grid-cols-2">
              <div data-testid="about-credential-registration" className="flex items-center gap-3 rounded-xl bg-[#f2f8f3] p-3 text-sm font-semibold text-[#2d6a4f]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#52b788]"><Check size={16} /></span> CREF 091220-G/SP</div>
              <div data-testid="about-credential-psychomotricity" className="flex items-center gap-3 rounded-xl bg-[#fff5ea] p-3 text-sm font-semibold text-[#9a5a36]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#e07a5f]"><Check size={16} /></span> Especialista em Psicomotricidade</div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="especialidades" data-testid="specialties-section" className="bg-[#f2f8f3] px-5 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl"><p data-testid="specialties-kicker" className="section-kicker">Formação que acolhe</p><h2 data-testid="specialties-title" className="section-title mt-4">Conhecimento para cuidar de cada detalhe.</h2></div>
              <p data-testid="specialties-description" className="max-w-sm text-base leading-relaxed text-[#64748b]">Uma base sólida para transformar movimento em desenvolvimento, com responsabilidade e sensibilidade.</p>
            </div>
            <div data-testid="specialties-grid" className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              {specialties.map((specialty, index) => (
                <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.25 }} key={specialty.number} data-testid={`specialty-card-${index}`} className={cn("group relative overflow-hidden rounded-[26px] border border-white/80 p-6 shadow-[0_18px_35px_-28px_rgba(30,41,59,0.6)] lg:col-span-2", index === 0 && "lg:col-span-3", index === 3 && "lg:col-span-3", `card-${specialty.tone}`)}>
                  <span data-testid={`specialty-number-${index}`} className="font-mono text-xs font-bold tracking-[0.16em] opacity-60">{specialty.number}</span>
                  <h3 data-testid={`specialty-title-${index}`} className="mt-12 max-w-[240px] font-heading text-xl font-bold leading-tight tracking-[-0.03em] text-[#1e293b]">{specialty.title}</h3>
                  <p data-testid={`specialty-detail-${index}`} className="mt-3 text-sm font-semibold text-[#64748b]">{specialty.detail}</p>
                  <CircleDot size={62} strokeWidth={1} className="absolute -bottom-5 -right-5 opacity-10 transition-transform duration-500 group-hover:rotate-45" />
                </motion.article>
              ))}
              <article data-testid="specialty-mentoring-card" className="relative overflow-hidden rounded-[26px] bg-[#2d6a4f] p-6 text-white shadow-[0_18px_35px_-24px_rgba(45,106,79,0.8)] lg:col-span-2">
                <Sparkles size={20} className="text-[#ffcf53]" />
                <h3 data-testid="specialty-mentoring-title" className="mt-10 max-w-[210px] font-heading text-xl font-bold leading-tight tracking-[-0.03em]">E muito mais prática para a vida real.</h3>
                <p data-testid="specialty-mentoring-text" className="mt-3 text-sm leading-relaxed text-white/75">Mentoria, estimulação precoce, praxia, inclusão e aprendizagem motora.</p>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="abordagem" data-testid="approach-section" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p data-testid="approach-kicker" className="section-kicker">A abordagem</p><h2 data-testid="approach-title" className="section-title mt-4">Cada intervenção tem um propósito.</h2><p data-testid="approach-description" className="mt-6 text-base leading-relaxed text-[#64748b] sm:text-lg">A psicomotricidade clínica é um trabalho técnico e individualizado. Avaliamos necessidades, definimos objetivos e selecionamos recursos adequados para favorecer o desenvolvimento motor, emocional e funcional.</p><a data-testid="approach-whatsapp-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#2d6a4f] transition-colors duration-300 hover:text-[#e07a5f]">Tire suas dúvidas <ArrowUpRight size={17} /></a></div>
            <div data-testid="approach-list" className="grid gap-4">
              {approachItems.map(({ icon: Icon, title, text }, index) => <div data-testid={`approach-item-${index}`} key={title} className="group flex gap-5 rounded-2xl border border-[#e1ebe3] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d8c0] hover:shadow-[0_20px_40px_-28px_rgba(45,106,79,0.6)]"><span data-testid={`approach-icon-${index}`} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f2f8f3] text-[#2d6a4f] transition-colors duration-300 group-hover:bg-[#2d6a4f] group-hover:text-white"><Icon size={23} /></span><div><h3 data-testid={`approach-item-title-${index}`} className="font-heading text-lg font-bold text-[#1e293b]">{title}</h3><p data-testid={`approach-item-text-${index}`} className="mt-1 text-sm leading-relaxed text-[#64748b]">{text}</p></div></div>)}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="psicomotricidade" data-testid="clinical-section" className="bg-[#1e4e3a] px-5 py-24 text-white lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p data-testid="clinical-kicker" className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9dfb8]">Psicomotricidade clínica</p>
              <h2 data-testid="clinical-title" className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-[-0.06em] sm:text-5xl">Um acompanhamento técnico, construído para cada criança.</h2>
              <p data-testid="clinical-description" className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">A clínica começa pela compreensão do desenvolvimento. A partir da avaliação, definimos objetivos e organizamos uma intervenção individualizada, acompanhada de perto com a família.</p>
            </div>

            <div data-testid="clinical-process-grid" className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div data-testid="clinical-evaluation-card" className="rounded-[28px] border border-white/12 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-4"><span data-testid="clinical-evaluation-icon" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffcf53] text-[#6b4b08]"><Target size={23} /></span><span data-testid="clinical-evaluation-label" className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">01 · 02 · 03</span></div>
                <h3 data-testid="clinical-evaluation-title" className="mt-8 font-heading text-2xl font-bold tracking-[-0.04em]">Avaliação e devolutiva</h3>
                <p data-testid="clinical-evaluation-description" className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">Um processo de escuta, observação e análise para compreender habilidades, desafios e prioridades do desenvolvimento psicomotor.</p>
                <div data-testid="clinical-evaluation-steps" className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div data-testid="clinical-step-1" className="rounded-2xl border border-white/10 bg-white/5 p-4"><span data-testid="clinical-step-1-number" className="font-mono text-xs font-bold text-[#ffcf53]">01</span><p data-testid="clinical-step-1-text" className="mt-3 text-sm font-semibold text-white">Escuta inicial com a família</p></div>
                  <div data-testid="clinical-step-2" className="rounded-2xl border border-white/10 bg-white/5 p-4"><span data-testid="clinical-step-2-number" className="font-mono text-xs font-bold text-[#ffcf53]">02</span><p data-testid="clinical-step-2-text" className="mt-3 text-sm font-semibold text-white">Observação e avaliação</p></div>
                  <div data-testid="clinical-step-3" className="rounded-2xl border border-white/10 bg-white/5 p-4"><span data-testid="clinical-step-3-number" className="font-mono text-xs font-bold text-[#ffcf53]">03</span><p data-testid="clinical-step-3-text" className="mt-3 text-sm font-semibold text-white">Devolutiva e próximos passos</p></div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div data-testid="individual-plan-card" className="rounded-[28px] bg-[#f2f8f3] p-6 text-[#1e293b] sm:p-8">
                  <span data-testid="individual-plan-icon" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dcefe1] text-[#2d6a4f]"><Compass size={22} /></span>
                  <h3 data-testid="individual-plan-title" className="mt-6 font-heading text-2xl font-bold tracking-[-0.04em]">Plano individual</h3>
                  <p data-testid="individual-plan-description" className="mt-3 text-sm leading-relaxed text-[#64748b]">Cada intervenção parte das necessidades observadas e das metas combinadas com a família, com acompanhamento e ajustes ao longo do processo.</p>
                  <div data-testid="individual-plan-points" className="mt-5 flex flex-wrap gap-2"><span data-testid="individual-plan-point-1" className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#2d6a4f]">Objetivos claros</span><span data-testid="individual-plan-point-2" className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#2d6a4f]">Acompanhamento</span><span data-testid="individual-plan-point-3" className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#2d6a4f]">Ajustes necessários</span></div>
                </div>
                <div data-testid="family-guidance-card" className="rounded-[28px] bg-[#fff0df] p-6 text-[#1e293b] sm:p-8">
                  <span data-testid="family-guidance-icon" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#e07a5f]"><HeartHandshake size={22} /></span>
                  <h3 data-testid="family-guidance-title" className="mt-6 font-heading text-2xl font-bold tracking-[-0.04em]">Orientação familiar</h3>
                  <p data-testid="family-guidance-description" className="mt-3 text-sm leading-relaxed text-[#795b4b]">A família participa do processo com informações claras e recomendações técnicas possíveis de levar para a rotina.</p>
                  <a data-testid="family-guidance-whatsapp-button" href={whatsappUrl("Olá! Gostaria de entender como funciona a avaliação psicomotora e a orientação para a família.")} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#a65b3d] transition-colors duration-300 hover:text-[#2d6a4f]">Conversar sobre a avaliação <ArrowUpRight size={17} /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} data-testid="testimonials-section" className="border-y border-[#dce8df] bg-[#f2f8f3] px-5 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p data-testid="testimonials-kicker" className="section-kicker">Histórias reais</p>
              <h2 data-testid="testimonials-title" className="section-title mt-4">Confiança construída em cada encontro.</h2>
              <p data-testid="testimonials-description" className="mt-6 max-w-xl text-base leading-relaxed text-[#64748b] sm:text-lg">Os relatos das famílias serão publicados aqui somente com autorização. Enquanto isso, este espaço mostra o cuidado que guia cada atendimento.</p>
              <a data-testid="testimonials-whatsapp-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#2d6a4f] transition-colors duration-300 hover:text-[#e07a5f]">Quero conversar sobre o atendimento <ArrowUpRight size={17} /></a>
            </div>
            <div data-testid="testimonials-content" className="grid gap-3 sm:grid-cols-3 lg:gap-4">
              {testimonialProofPoints.map((point, index) => <div data-testid={`testimonial-proof-${index}`} key={point} className="relative rounded-[24px] border border-white bg-white p-5 shadow-[0_18px_35px_-28px_rgba(45,106,79,0.6)] sm:min-h-[190px]"><Quote size={22} className="text-[#ffb703]" /><p data-testid={`testimonial-proof-text-${index}`} className="mt-8 font-heading text-base font-bold leading-snug text-[#2d6a4f]">{point}</p><span data-testid={`testimonial-proof-label-${index}`} className="absolute bottom-5 left-5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#94a99a]">Princípio EdMovimento</span></div>)}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} data-testid="checklist-section" className="mx-5 mb-24 overflow-hidden rounded-[34px] bg-[#fff0df] lg:mx-auto lg:max-w-7xl">
          <div className="grid gap-12 px-6 py-12 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-16">
            <div><div data-testid="checklist-icon" className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#e07a5f] shadow-sm"><Target size={26} /></div><p data-testid="checklist-kicker" className="section-kicker text-[#a65b3d]">Um ponto de partida</p><h2 data-testid="checklist-title" className="section-title mt-4">Você percebe algum desses sinais?</h2><p data-testid="checklist-description" className="mt-5 text-base leading-relaxed text-[#795b4b]">Esta lista não é um diagnóstico. É só um convite para observar com carinho e iniciar uma conversa.</p><a data-testid="checklist-whatsapp-button" href={checklistUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2 rounded-full bg-[#e07a5f] px-5 text-white hover:bg-[#c9674d]") }><MessageCircle size={18} /> Conversar sobre isso</a></div>
            <div data-testid="checklist-options" className="space-y-3">
              {signs.map((sign, index) => { const isSelected = selectedSigns.includes(sign); return <button type="button" data-testid={`checklist-option-${index}`} key={sign} onClick={() => toggleSign(sign)} className={cn("flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300", isSelected ? "border-[#e07a5f] bg-white shadow-[0_12px_25px_-20px_#e07a5f]" : "border-[#f2d2bc] bg-white/55 hover:-translate-y-0.5 hover:bg-white")}><span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300", isSelected ? "border-[#e07a5f] bg-[#e07a5f] text-white" : "border-[#d9ad93] text-transparent")}>{isSelected && <Check size={14} strokeWidth={3} />}</span><span data-testid={`checklist-option-text-${index}`} className="text-sm font-semibold leading-relaxed text-[#795b4b]">{sign}</span></button>; })}
              <p data-testid="checklist-selection-status" className="px-1 pt-2 text-xs font-semibold text-[#a65b3d]">{selectedSigns.length === 0 ? "Selecione um ou mais itens para personalizar sua mensagem." : `${selectedSigns.length} ${selectedSigns.length === 1 ? "item selecionado" : "itens selecionados"}.`}</p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="duvidas" data-testid="faq-section" className="mx-auto max-w-4xl px-5 pb-24 lg:pb-32">
          <div className="text-center"><p data-testid="faq-kicker" className="section-kicker">Para as famílias</p><h2 data-testid="faq-title" className="section-title mt-4">Perguntas que aparecem por aqui.</h2><p data-testid="faq-description" className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#64748b]">Se a sua dúvida não estiver aqui, será um prazer conversar com você.</p></div>
          <div data-testid="faq-list" className="mt-10 divide-y divide-[#e1ebe3] border-y border-[#e1ebe3]">
            {faqs.map((faq, index) => <details data-testid={`faq-item-${index}`} key={faq.question} className="group py-5"><summary data-testid={`faq-question-${index}`} className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-base font-bold text-[#1e293b] outline-none transition-colors duration-300 group-open:text-[#2d6a4f] [&::-webkit-details-marker]:hidden">{faq.question}<ChevronDown size={19} className="shrink-0 text-[#52b788] transition-transform duration-300 group-open:rotate-180" /></summary><p data-testid={`faq-answer-${index}`} className="max-w-3xl pt-3 text-sm leading-relaxed text-[#64748b]">{faq.answer}</p></details>)}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="contato" data-testid="contact-section" className="relative overflow-hidden bg-[#2d6a4f] px-5 py-20 text-white lg:px-10 lg:py-24">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[44px] border-white/10" /><div className="absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[#52b788]/25 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div><p data-testid="contact-kicker" className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9dfb8]">Vamos conversar?</p><h2 data-testid="contact-title" className="mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-tight tracking-[-0.055em] sm:text-5xl">Desenvolvimento exige escuta, técnica e parceria.</h2><p data-testid="contact-description" className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">Conte um pouco sobre o que você está buscando. O primeiro passo pode ser uma conversa clara, cuidadosa e sem compromisso.</p></div>
            <div data-testid="contact-card" className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7"><div data-testid="contact-location" className="flex gap-3 border-b border-white/15 pb-5"><MapPin className="mt-0.5 shrink-0 text-[#ffcf53]" size={20} /><div><p data-testid="contact-location-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Atendimento</p><p data-testid="contact-location-value" className="mt-1 font-semibold">Jundiaí e região · São Paulo</p></div></div><div data-testid="contact-directions" className="flex gap-3 border-b border-white/15 py-5"><Compass className="mt-0.5 shrink-0 text-[#a9dfb8]" size={20} /><div><p data-testid="contact-directions-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Orientações</p><p data-testid="contact-directions-value" className="mt-1 text-sm leading-relaxed text-white/75">Confirme pelo WhatsApp o local disponível e as orientações antes de vir.</p></div></div><div data-testid="contact-phone" className="flex gap-3 py-5"><MessageCircle className="mt-0.5 shrink-0 text-[#6bea91]" size={20} /><div><p data-testid="contact-phone-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">WhatsApp</p><p data-testid="contact-phone-value" className="mt-1 font-semibold">{whatsappDisplayPhone}</p></div></div><a data-testid="contact-whatsapp-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2 rounded-full bg-[#25d366] text-[#0c3b25] hover:bg-[#6bea91]")}>Quero agendar uma conversa <ArrowUpRight size={18} /></a></div>
          </div>
        </motion.section>
      </main>

      <footer data-testid="site-footer" className="bg-[#1e4e3a] px-5 py-8 text-white/70 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><div><p data-testid="footer-brand" className="font-heading text-lg font-extrabold text-white">EdMovimento</p><p data-testid="footer-tagline" className="mt-1 text-xs">A vida em movimento.</p></div><div className="flex items-center gap-5"><p data-testid="footer-registration" className="text-xs">Vinicius Corrêa Tafarelo · CREF 091220-G/SP</p><a data-testid="footer-instagram-link" href="#inicio" aria-label="Instagram EdMovimento" className="rounded-full p-2 transition-colors duration-300 hover:bg-white/10 hover:text-white"><Instagram size={18} /></a></div></div>
      </footer>

      <a data-testid="floating-whatsapp-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Fale diretamente pelo WhatsApp" className="whatsapp-float group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#0c3b25] shadow-[0_12px_30px_-10px_#0c3b25] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"><MessageCircle size={25} /><span data-testid="floating-whatsapp-tooltip" className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-full bg-[#1e293b] px-3 py-2 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">Fale diretamente com o Prof. Vinicius</span></a>
    </div>
  );
}
