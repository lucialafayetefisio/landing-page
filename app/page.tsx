"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

/* ─── CONSTANTES ─── */
const WA = "https://api.whatsapp.com/send?l=pt_BR&phone=5521972796543";
const IG = "https://instagram.com/lucialafayetefisio";
const TEL = "tel:+5521972796543";
// Leblon, RJ — embed público sem API key
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Av.%20Ataulfo%20de%20Paiva%201175%2C%20Leblon%2C%20Rio%20de%20Janeiro&t=&z=16&ie=UTF8&iwloc=&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Ataulfo%20de%20Paiva%2C%201175%2C%20sala%20205%2C%20Leblon%2C%20Rio%20de%20Janeiro";

/* ─── FADE-IN ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── DADOS ─── */
const servicos = [
  {
    img: "/images/demo-osteo.jpeg",
    titulo: "Osteopatia",
    desc: "Principal especialidade. Abordagem global que trata a causa real do problema, não só o sintoma.",
  },
  {
    img: "/images/demo-fisio.png",
    titulo: "Fisioterapia",
    desc: "Avaliação individualizada para dor, disfunções musculoesqueléticas e reabilitação funcional.",
    contain: true,
  },
  {
    img: "/images/demo-pilates.png",
    titulo: "Pilates",
    desc: "Individual ou em grupo. Método aplicado com precisão, adaptado aos seus objetivos.",
  },
  {
    img: "/images/demo-ondas.jpeg",
    titulo: "Ondas de Choque",
    desc: "Alta eficácia para tendinopatias, fascites e calcificações em poucos atendimentos.",
  },
];

const depoimentos = [
  {
    nome: "@edilzab",
    texto:
      "Excelente profissional!! Dedicada, atenciosa e empática!! Cuidou da minha mãe com muito carinho e cuidado. Super indico!!",
  },
  {
    nome: "@ineslsilveira",
    texto:
      "Ah essa é top demais, profissional atenciosa e comprometida do que faz!",
  },
  {
    nome: "@simonefgon",
    texto:
      "Recomendo demais! Comprometida ao máximo com o paciente.",
  },
];

/* ─── ÍCONES ─── */
const IconWA = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconIG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDepo, setActiveDepo] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showTop, setShowTop] = useState(false);
  const [servicoSel, setServicoSel] = useState("Avaliação");

  /* scroll para navbar + botao voltar ao topo */
  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setShowTop(y > 600);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* scrollspy — destaca a secao ativa no menu */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = ["servicos", "sobre", "depoimentos", "atendimento", "contato"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════
          TOP BAR — visível só em desktop
      ══════════════════════════════════════ */}
      <div className="flex bg-[#cc3366] text-white py-2 px-4 justify-between md:justify-end gap-3 md:gap-6 text-xs">
        <a href={TEL} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          aria-label="Ligar para Dra. Lúcia Lafayete">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Ligar
        </a>
        <a href={WA} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <IconWA className="w-3.5 h-3.5" /> Fale Conosco
        </a>
        <a href={IG} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <IconIG className="w-3.5 h-3.5" /> Instagram
        </a>
      </div>

      {/* ══════════════════════════════════════
          NAVBAR — sticky, blur ao rolar
      ══════════════════════════════════════ */}
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "0 1px 0 #f0f0f0",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between min-h-16 md:min-h-28">
          {/* Logo SVG */}
          <a href="#" className="flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo-nova.png"
              alt="Dra. Lúcia Lafayete — Fisioterapia e Osteopatia"
              width={220}
              height={88}
              className="h-24 md:h-28 w-auto object-contain"
              priority
              style={{ filter: 'drop-shadow(0 3px 10px rgba(13, 90, 99, 0.25))' }}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href}
                  className={`text-sm font-medium transition-colors relative
                    ${activeSection === n.href
                      ? "text-[#cc3366]"
                      : "text-[#555] hover:text-[#cc3366]"}`}>
                  {n.label}
                  <span className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full
                    bg-[#cc3366] transition-opacity duration-300
                    ${activeSection === n.href ? "opacity-100" : "opacity-0"}`} />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href={WA} target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#cc3366] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b02d59] transition-colors">
            <IconWA className="w-4 h-4" />
            Agendar
          </a>

          {/* Mobile: ícone WA + hamburger */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0 pl-1">
            <a href={WA} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-3 py-2 rounded-full"
              aria-label="WhatsApp">
              <IconWA className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="p-2 flex flex-col gap-[5px]">
              <span className={`block w-5 h-0.5 bg-[#333] transition-all duration-300 origin-center
                ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#333] transition-all duration-300
                ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#333] transition-all duration-300 origin-center
                ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden md:hidden border-t border-gray-100 bg-white">
          <div className="px-5 py-5 flex flex-col gap-5">
            {navItems.map((n) => (
              <a key={n.href} href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#333] text-base font-medium border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                {n.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#cc3366] text-white text-sm font-semibold py-3.5 rounded-full mt-1">
              <IconWA />
              Agendar pelo WhatsApp
            </a>
            <a href={IG} target="_blank" rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 border border-gray-200 text-[#555] text-sm font-medium py-3 rounded-full">
              <IconIG />
              Instagram
            </a>
          </div>
        </motion.div>
      </nav>

      {/* ══════════════════════════════════════
          HERO — foto full-bleed de fundo
          Mobile: rosto enquadrado + scrim escuro, texto no topo-esquerda
          PC: foto ancorada à direita, texto à esquerda
      ══════════════════════════════════════ */}
      <section id="home" className="relative overflow-hidden min-h-[calc(100svh-8.5rem)] md:min-h-[calc(100svh-9.5rem)]">
        {/* Doutora como fundo — full-bleed cobrindo o hero */}
        <div className="absolute inset-0">
          <Image
            src="/images/lucia-bg.png"
            alt="Dra. Lúcia Lafayete — Fisioterapeuta"
            fill
            className="object-cover object-center md:object-contain md:object-right"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay MOBILE — escurece a base (texto legível) mantendo rosto/corpo no topo livre */}
        <div className="absolute inset-0 md:hidden" style={{
          background: "linear-gradient(to top, rgba(13,90,99,0.72) 0%, rgba(13,90,99,0.28) 38%, transparent 62%)",
        }} aria-hidden />

        {/* Overlay DESKTOP — escuro à esquerda (texto), transparente à direita (foto) */}
        <div className="hidden md:block absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(13,90,99,0.74) 0%, rgba(13,90,99,0.48) 36%, rgba(13,90,99,0.1) 62%, transparent 78%)",
        }} aria-hidden />

        {/* Conteúdo — texto sobreposto no rodapé (mobile) e à esquerda (desktop), tudo visível na 1ª dobra */}
        <div className="relative z-10 h-full min-h-[calc(100svh-8.5rem)] md:min-h-[calc(100svh-9.5rem)] max-w-6xl mx-auto px-5
          flex flex-col justify-end md:justify-center pt-20 pb-12 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-left">
            <h1 className="hero-display-name text-5xl md:text-7xl font-semibold leading-[0.88]
              tracking-[-0.035em] mb-5 text-white text-wrap-balance">
              <span className="block text-xl md:text-2xl font-medium italic tracking-normal leading-none mb-2 text-white/90">
                Dra.
              </span>
              <span className="block">Lúcia</span>
              <span className="block">Lafayete</span>
            </h1>

            <p className="text-base md:text-lg text-white leading-relaxed mb-5">
              Consultório no Leblon, Rio de Janeiro.
            </p>

            <div className="flex flex-row gap-2 md:gap-3">
              <motion.a
                href={WA} target="_blank" rel="noreferrer"
                whileTap={{ scale: 0.96 }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#cc3366] text-white
                  font-semibold px-4 py-3.5 rounded-full text-sm shadow-lg active:bg-[#b02d59]
                  hover:bg-[#b02d59] transition-colors">
                <IconWA />
                Agendar
              </motion.a>
              <a href="#servicos"
                className="flex-1 flex items-center justify-center px-4 py-3.5 rounded-full text-sm
                  font-medium border border-white/40 text-white hover:border-white/70
                  transition-colors">
                Ver serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          SERVIÇOS
      ══════════════════════════════════════ */}
      <section id="servicos" className="py-16 md:py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Serviços
            </h2>
            <p className="text-[#69727d] text-center text-sm md:text-base max-w-xl mx-auto mb-12">
              Atendimento individual para cuidar da dor e recuperar movimentos.
            </p>
          </FadeIn>

          {/* Grid: 2 col em mobile, 4 em desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {servicos.map((s, i) => (
              <FadeIn key={s.titulo} delay={i * 0.08}>
                <motion.div whileTap={{ scale: 0.98 }} className="flex flex-col items-center text-center">
                  {/* Imagem contida, sem crop. Fisioterapia sobe a imagem para mostrar o rosto */}
                  <div className="w-full mb-4 rounded-2xl overflow-hidden shadow-sm
                    flex items-center justify-center" style={{ height: "220px" }}>
                    <Image
                      src={s.img}
                      alt={s.titulo}
                      width={300}
                      height={148}
                      className={`w-full h-full object-cover ${s.contain ? "object-[50%_32%]" : "object-center"}`}
                    />
                  </div>
                  <h3 className="text-[#222] font-bold text-sm md:text-base mb-1"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    {s.titulo}
                  </h3>
                  <p className="text-[#69727d] text-xs md:text-sm leading-relaxed hidden sm:block">
                    {s.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Tags extras */}
          <FadeIn delay={0.25}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["Reabilitação Funcional", "Pós-operatório"].map((tag) => (
                <span key={tag}
                  className="px-3 py-1.5 rounded-full border border-[#e0d6cc] text-xs text-[#69727d]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* CTA mobile centralizado */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex justify-center">
              <a href={WA} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-[#cc3366] text-white text-sm
                  font-semibold px-6 py-3.5 rounded-full hover:bg-[#b02d59] transition-colors">
                <IconWA />
                Agendar uma avaliação
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOBRE
      ══════════════════════════════════════ */}
      <section id="sobre" className="py-16 md:py-24 px-5"
        style={{ background: "linear-gradient(160deg, #f8f8f8 0%, #ffe8f0 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-[#cc3366] text-xs font-bold uppercase tracking-widest text-center mb-2">
              Sobre
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-10"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Quem é a Dra. Lúcia Lafayete?
            </h2>
          </FadeIn>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Foto — em mobile sobe, em desktop fica à direita */}
            <FadeIn delay={0.15} className="order-first lg:order-last flex-shrink-0">
              <div className="w-56 sm:w-72 md:w-80 mx-auto rounded-3xl overflow-hidden shadow-xl"
                style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/lucia-fundo-2.jpg"
                  alt="Dra. Lúcia Lafayete — Fisioterapeuta"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </FadeIn>

            {/* Texto */}
            <FadeIn delay={0.05} className="flex-1">
              <div className="space-y-4 text-[#4a4a4a] text-sm md:text-base leading-relaxed">
                <p>
                  Sou fisioterapeuta e osteopata em formação pela Escola de
                  Osteopatia de Madrid (EOM). Trabalho com uma abordagem
                  individualizada para cuidar de disfunções, recuperar movimentos
                  e melhorar a funcionalidade.
                </p>
                <p>
                  Meu atendimento integra Fisioterapia, Osteopatia, Reabilitação
                  Pós-Operatória, Dry Needling e Recovery, de acordo com as
                  necessidades de cada paciente.
                </p>
                <p>
                  Acredito que cada corpo tem uma história e que o tratamento
                  deve olhar para a pessoa como um todo{"  "}não apenas para o sintoma.
                </p>
                <p>
                  Meu propósito é ajudar você a se movimentar melhor, recuperar
                  sua autonomia e viver com mais qualidade.
                </p>
                <p className="text-[#cc3366] font-medium">
                  Cuidado personalizado. Tratamento baseado em movimento.
                  Resultados que fazem diferença.
                </p>
                <p className="text-xs text-[#69727d]">
                  CREFITO-2 · 290936-F
                </p>
              </div>

              <a href={WA} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#cc3366] text-white
                  font-semibold px-6 py-3.5 rounded-full mt-8 text-sm
                  hover:bg-[#b02d59] transition-colors shadow-md">
                <IconWA />
                Agendar uma avaliação
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMO FUNCIONA
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-12"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Como funciona
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "01", titulo: "Fale pelo WhatsApp", desc: "Sem formulários. Primeiro contato direto e sem espera." },
              { n: "02", titulo: "Avaliação inicial", desc: "Escuta do histórico, exame físico, exame dinâmico e definição das prioridades." },
              { n: "03", titulo: "Plano de tratamento", desc: "Individualizado, com evolução monitorada a cada sessão." },
            ].map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.1}>
                <div className="flex gap-4 md:flex-col md:gap-3 md:items-center md:text-center
                  items-start p-5 rounded-2xl bg-[#fafafa] border border-gray-100">
                  <span className="text-3xl md:text-5xl font-bold text-[#cc3366]/15 flex-shrink-0"
                    style={{ fontFamily: "Sora, sans-serif" }}>{p.n}</span>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[#222] mb-1"
                      style={{ fontFamily: "Sora, sans-serif" }}>{p.titulo}</h3>
                    <p className="text-xs md:text-sm text-[#69727d] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════════ */}
      <section id="depoimentos" className="py-16 md:py-24 px-5"
        style={{ background: "linear-gradient(160deg, #f8f8f8, #ffe8f0)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}>
              O que dizem os pacientes
            </h2>
            <p className="text-[#69727d] text-center text-sm max-w-xl mx-auto mb-10">
              Relatos de quem já foi atendido.
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <motion.div
              key={activeDepo}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed mb-6 italic">
                &ldquo;{depoimentos[activeDepo].texto}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#cc2366] flex items-center justify-center flex-shrink-0">
                  <IconIG className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#222] text-sm">{depoimentos[activeDepo].nome}</p>
                  <p className="text-[#69727d] text-xs">via Instagram</p>
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {depoimentos.map((_, i) => (
                <button key={i} onClick={() => setActiveDepo(i)}
                  className={`h-2 rounded-full transition-all duration-300
                    ${i === activeDepo ? "bg-[#cc3366] w-6" : "bg-gray-300 w-2"}`}
                  aria-label={`Depoimento ${i + 1}`} />
              ))}
            </div>

            {/* Setas — touch-friendly */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => setActiveDepo((p) => (p - 1 + depoimentos.length) % depoimentos.length)}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                  hover:border-[#cc3366] hover:text-[#cc3366] active:scale-95 transition-all"
                aria-label="Anterior">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveDepo((p) => (p + 1) % depoimentos.length)}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                  hover:border-[#cc3366] hover:text-[#cc3366] active:scale-95 transition-all"
                aria-label="Próximo">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ATENDIMENTO + MAPA
      ══════════════════════════════════════ */}
      <section id="atendimento" className="py-16 md:py-24 px-5"
        style={{ background: "linear-gradient(135deg, #0d5a63, #106c77)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Onde atendo
            </h2>
            <p className="text-white/75 text-center text-sm max-w-xl mx-auto mb-12">
              Atendimento com hora marcada no Leblon.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cards */}
            <div className="flex flex-col gap-4">
              {/* Consultório */}
              <FadeIn delay={0.05}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white/50">
                    Consultório
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    Inspirit Fisio · Leblon
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Av. Ataulfo de Paiva, 1175 / 205<br />
                    Leblon, Rio de Janeiro<br />
                    Apenas com agendamento
                  </p>
                  <a href={WA} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#cc3366] text-white
                      text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b02d59]
                      transition-colors active:scale-95">
                    <IconWA className="w-4 h-4" />
                    Agendar
                  </a>
                </div>
              </FadeIn>

              {/* Opção adicional — atendimento domiciliar sem competir com o consultório */}
              <FadeIn delay={0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest mb-2 text-white/45">
                    Disponibilidade adicional
                  </p>
                  <h3 className="text-base font-semibold text-white/90 mb-2"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    Atendimento a domicílio
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Disponível sob consulta, conforme a região e a agenda.
                    Solicite informações pelo WhatsApp.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Mapa */}
            <FadeIn delay={0.12}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
                style={{ minHeight: "320px" }}>
                {/* Cabeçalho do quadro */}
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 flex items-center gap-3
                  border-b border-white/15">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <p className="text-white/70 text-xs font-medium">
                    📍 Av. Ataulfo de Paiva, 1175 · Leblon
                  </p>
                </div>
                <iframe
                  title="Localização — Av. Ataulfo de Paiva 1175, Leblon, Rio de Janeiro"
                  src={MAPS_EMBED}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRÉ-AGENDAMENTO — seletor rapido que abre o WhatsApp
      ══════════════════════════════════════ */}
      <section id="agendar" className="py-16 md:py-24 px-5 bg-[#fdf5f8]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Agende sua avaliação
            </h2>
            <p className="text-[#69727d] text-center text-sm max-w-xl mx-auto mb-8">
              Escolha o serviço e fale pelo WhatsApp.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            {/* Seletor de servico */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
              <label htmlFor="servico" className="block text-xs font-bold uppercase
                tracking-widest text-[#69727d] mb-3">
                O que você procura?
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6" role="radiogroup"
                aria-label="Serviço desejado">
                {["Avaliação", "Osteopatia", "Fisioterapia", "Pilates", "Ondas de Choque"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    role="radio"
                    aria-checked={servicoSel === s}
                    onClick={() => setServicoSel(s)}
                    className={`px-3 py-2.5 rounded-full text-sm font-medium transition-all
                      border ${servicoSel === s
                        ? "bg-[#cc3366] text-white border-[#cc3366]"
                        : "bg-white text-[#555] border-gray-200 hover:border-[#cc3366] hover:text-[#cc3366]"}`}>
                    {s}
                  </button>
                ))}
              </div>

              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
                Olá! Gostaria de agendar uma{" "}
                <strong className="text-[#cc3366]">{servicoSel.toLowerCase()}</strong>{" "}
                com a Dra. Lúcia Lafayete.
              </p>

              <a
                href={`${WA}&text=${encodeURIComponent(
                  `Olá, Lúcia! Gostaria de agendar um atendimento de ${servicoSel}.`
                )}`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white
                  w-full font-semibold py-4 rounded-full text-sm hover:bg-[#1fb959]
                  transition-colors active:scale-[0.98]">
                <IconWA className="w-5 h-5" />
                Abrir WhatsApp com a mensagem
              </a>

              <p className="text-[#a0a0a0] text-xs text-center mt-4">
                Você pode editar a mensagem antes de enviar. Sem compromisso.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section id="faq" className="py-16 md:py-24 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Perguntas frequentes
            </h2>
            <p className="text-[#69727d] text-center text-sm max-w-xl mx-auto mb-10">
              Dúvidas comuns sobre o atendimento.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {[
                {
                  q: "Como funciona o agendamento?",
                  a: "Tudo pelo WhatsApp. Você envia uma mensagem, conversamos sobre o que precisa e combinamos o melhor horário. Não há recepção — o atendimento é direto comigo.",
                },
                {
                  q: "Você atende convênios?",
                  a: "O atendimento é particular. Você pode solicitar a nota fiscal e declarar os valores como dedução em saúde no seu imposto de renda.",
                },
                {
                  q: "Para quem é o atendimento?",
                  a: "O atendimento é individual, voltado a adultos e conduzido diretamente por mim, do início ao fim, com atenção às necessidades e aos objetivos de cada pessoa.",
                },
                {
                  q: "Preciso de encaminhamento médico?",
                  a: "Não. Você pode agendar diretamente. No caso de condições mais complexas, posso solicitar exames ou contato com o seu médico.",
                },
              ].map((item, i) => (
                <details key={i}
                  className="group border border-gray-100 rounded-2xl bg-[#fafafa]
                  overflow-hidden open:bg-white transition-colors">
                  <summary
                    className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer
                    list-none text-[#222] font-semibold text-sm md:text-base">
                    {item.q}
                    <svg className="w-4 h-4 flex-shrink-0 text-[#cc3366] transition-transform
                      duration-300 group-open:rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-[#69727d] leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════ */}
      <section id="contato" className="py-16 md:py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222] text-center mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Pronto para agendar?
            </h2>
            <p className="text-[#69727d] text-center text-sm max-w-xl mx-auto mb-12">
              Agende diretamente pelo WhatsApp.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* WA */}
            <FadeIn delay={0.05}>
              <a href={WA} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100
                  shadow-sm hover:shadow-md hover:border-[#cc3366]/20 transition-all active:scale-98">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <IconWA className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#222] text-sm">WhatsApp</p>
                  <p className="text-[#cc3366] text-xs font-medium mt-0.5">(21) 97279-6543</p>
                </div>
              </a>
            </FadeIn>

            {/* Endereço */}
            <FadeIn delay={0.1}>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer"
                aria-label="Abrir localização do consultório no Google Maps"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100
                  shadow-sm hover:shadow-md hover:border-[#cc3366]/20 transition-all active:scale-98">
                <div className="w-12 h-12 rounded-full bg-[#f5f0eb] flex items-center justify-center">
                  <Image src="/images/building.png" alt="Endereço" width={28} height={28}
                    className="w-7 h-7 object-contain" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#222] text-sm">Consultório · Inspirit Fisio</p>
                  <p className="text-[#69727d] text-xs mt-0.5">Av. Ataulfo de Paiva, 1175/205</p>
                </div>
              </a>
            </FadeIn>

            {/* Instagram */}
            <FadeIn delay={0.15}>
              <a href={IG} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100
                  shadow-sm hover:shadow-md hover:border-[#cc3366]/20 transition-all active:scale-98">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433]
                  via-[#e6683c] to-[#cc2366] flex items-center justify-center">
                  <IconIG className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#222] text-sm">Instagram</p>
                  <p className="text-[#69727d] text-xs mt-0.5">@lucialafayetefisio</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-[#0d5a63] text-white py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start
            gap-8 justify-between mb-8">

            {/* Logo + descrição */}
            <div className="flex flex-col items-center md:items-start gap-3 max-w-xs">
              <Image
                src="/images/logo.svg"
              alt="Dra. Lúcia Lafayete"
              width={200}
              height={70}
                className="h-20 w-auto object-contain brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1))' }}
              />
              <p className="text-white/65 text-xs text-center md:text-left leading-relaxed">
                Fisioterapeuta e osteopata em formação pela EOM.
                Atendimento personalizado no Leblon.
              </p>
              <div className="flex gap-3">
                <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                    hover:bg-[#cc3366] transition-colors">
                  <IconWA className="w-4 h-4" />
                </a>
                <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                    hover:bg-[#cc3366] transition-colors">
                  <IconIG className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Nav */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="font-bold text-xs uppercase tracking-wider mb-1">Navegação</p>
              {navItems.map((n) => (
                <a key={n.href} href={n.href}
                  className="text-white/60 text-sm hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </div>

            {/* Contato */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="font-bold text-xs uppercase tracking-wider mb-1">Contato</p>
              <p className="text-white/60 text-sm">Inspirit Fisio</p>
              <p className="text-white/60 text-sm">Av. Ataulfo de Paiva, 1175 / 205</p>
              <p className="text-white/60 text-sm">Leblon, Rio de Janeiro</p>
              <a href={WA} target="_blank" rel="noreferrer"
                className="text-white/60 text-sm hover:text-white transition-colors">
                Agendar pelo WhatsApp
              </a>
              <a href={TEL} className="text-white/60 text-sm hover:text-white transition-colors"
          aria-label="Ligar para Dra. Lúcia Lafayete">
                (21) 97279-6543
              </a>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row
            items-center justify-between gap-2">
            <p className="text-white/40 text-xs text-center">
              © 2025 Dra. Lúcia Lafayete Fisioterapia — Todos os direitos reservados.
            </p>
            <p className="text-white/25 text-xs">CREFITO-2 · 290936-F · Leblon · RJ</p>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════
          STICKY MOBILE CTA — barra inferior
          Aparece após 300px de scroll
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: scrolled ? 0 : 80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden
          bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a href={WA} target="_blank" rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#cc3366] text-white
            text-sm font-semibold py-3 rounded-full active:bg-[#b02d59] transition-colors">
          <IconWA />
          Agendar pelo WhatsApp
        </a>
        <a href={IG} target="_blank" rel="noreferrer"
          className="w-12 flex items-center justify-center border border-gray-200
            rounded-full text-gray-500 hover:text-[#cc3366] transition-colors"
          aria-label="Instagram">
          <IconIG />
        </a>
      </motion.div>

      {/* ══════════════════════════════════════
          VOLTAR AO TOPO — aparece ao rolar
      ══════════════════════════════════════ */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-24 md:bottom-6 left-6 z-50 w-11 h-11 rounded-full
          bg-white border border-gray-200 text-[#cc3366] shadow-lg flex items-center
          justify-center hover:bg-[#cc3366] hover:text-white hover:border-[#cc3366]
          transition-colors pointer-events-none"
        style={{ pointerEvents: showTop ? "auto" : "none" }}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>

      {/* ══════════════════════════════════════
          FLOATING WA — só desktop
      ══════════════════════════════════════ */}
      <motion.a
        href={WA} target="_blank" rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366]
          rounded-full items-center justify-center shadow-2xl">
        <IconWA className="w-7 h-7 text-white" />
      </motion.a>

    </div>
  );
}
