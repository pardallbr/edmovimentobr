function ContactSection(): ReactElement {
  const [googleReviews, setGoogleReviews] = useState({ rating: 5.0, total: 78 });

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.total === "number") {
          setGoogleReviews({
            rating: data.rating ?? 5.0,
            total: data.total,
          });
        }
      })
      .catch((err) => console.error("Erro ao carregar avaliações do Google:", err));
  }, []);

  return (
    <motion.section {...fadeUp} id="contato" data-testid="contact-section" className="relative overflow-hidden bg-[#2d6a4f] px-5 py-20 text-white lg:px-10 lg:py-24">
      <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[44px] border-white/10" />
      <div className="absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[#52b788]/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p data-testid="contact-kicker" className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9dfb8]">Vamos conversar?</p>
          <h2 data-testid="contact-title" className="mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-tight tracking-[-0.055em] sm:text-5xl">Desenvolvimento exige escuta, técnica e parceria.</h2>
          <p data-testid="contact-description" className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">Conte um pouco sobre o que você está buscando. O primeiro passo pode ser uma conversa clara, cuidadosa e sem compromisso.</p>
        </div>
        <div data-testid="contact-card" className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7">
          <div data-testid="contact-location" className="flex gap-3 border-b border-white/15 pb-5">
            <MapPin className="mt-0.5 shrink-0 text-[#ffcf53]" size={20} />
            <div>
              <p data-testid="contact-location-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Atendimento</p>
              <p data-testid="contact-location-value" className="mt-1 font-semibold">Jundiaí e região</p>
            </div>
          </div>
          <div data-testid="contact-google-profile" className="flex gap-3 border-b border-white/15 py-5">
            <Star className="mt-0.5 shrink-0 fill-[#ffcf53] text-[#ffcf53]" size={20} />
            <div className="min-w-0 flex-1">
              <p data-testid="contact-google-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Perfil no Google</p>
              <p data-testid="contact-google-rating" className="mt-1 font-semibold">
                {googleReviews.rating.toFixed(1).replace(".", ",")} · {googleReviews.total} avaliações
              </p>
              <a data-testid="contact-google-button" href={googleProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver perfil, avaliações e rotas no Google; abre em nova aba" className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[#2d6a4f]">
                Ver no Google <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div data-testid="contact-directions" className="flex gap-3 border-b border-white/15 py-5">
            <Compass className="mt-0.5 shrink-0 text-[#a9dfb8]" size={20} />
            <div>
              <p data-testid="contact-directions-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Orientações</p>
              <p data-testid="contact-directions-value" className="mt-1 text-sm leading-relaxed text-white/75">Confirme pelo WhatsApp o local disponível e as orientações antes de vir.</p>
            </div>
          </div>
          <div data-testid="contact-phone" className="flex gap-3 py-5">
            <MessageCircle className="mt-0.5 shrink-0 text-[#6bea91]" size={20} />
            <div>
              <p data-testid="contact-phone-label" className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">WhatsApp</p>
              <p data-testid="contact-phone-value" className="mt-1 font-semibold">{whatsappDisplayPhone}</p>
            </div>
          </div>
          <a data-testid="contact-whatsapp-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2 rounded-full bg-[#25d366] text-[#0c3b25] hover:bg-[#6bea91]")}>
            Quero agendar uma conversa <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
