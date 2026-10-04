import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImagem from "../../1.png";
import planoBasicoHabitosImagem from "@/assets/catalogo-novo/plano-basico-novo.png.asset.json";
import bloco2Imagem1 from "../../2.jpg";
import bloco2Imagem2 from "../../3.jpg";
import bloco2Imagem3 from "../../4.jpg";
import bloco2Imagem4 from "../../5.jpg";
import bloco2Imagem5 from "../../6.jpg";
import demonstrativo1 from "../../7.jpg";
import demonstrativo2 from "../../8.jpg";
import demonstrativo3 from "../../9.jpg";
import demonstrativo4 from "../../10.jpg";
import demonstrativo5 from "../../11.jpg";
import receberImagem from "../../2.png";
import bonus1Imagem from "@/assets/limites-corporais/bonus-1-540.webp.asset.json";
import bonus2Imagem from "@/assets/limites-corporais/bonus-2-540.webp.asset.json";
import bonus3Imagem from "@/assets/limites-corporais/bonus-3-540.webp.asset.json";
import bonus4Imagem from "@/assets/limites-corporais/bonus-4-540.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manual Visual dos Hábitos Atômicos" },
      {
        name: "description",
        content: "Uma leitura visual e simplificada das principais ideias de Hábitos Atômicos, organizada para você entender conceitos complexos de forma clara, rápida e fácil de aplicar.",
      },
      { property: "og:title", content: "Manual Visual dos Hábitos Atômicos" },
      {
        property: "og:description",
        content: "Mais de 30 situações do dia a dia para conversar com sua filha sobre corpo, toque e limites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Manual Visual dos Hábitos Atômicos" },
      {
        name: "twitter:description",
        content: "Uma leitura visual e simplificada das principais ideias de Hábitos Atômicos, organizada para você entender conceitos complexos de forma clara, rápida e fácil de aplicar.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: planoBasicoHabitosImagem.url,
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_BASICO = "https://pay.cakto.com.br/mo5x2co";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/33d9xgo_1146876";
const PAGINAS_MANUAL = [
  bloco2Imagem1,
  bloco2Imagem2,
  bloco2Imagem3,
  bloco2Imagem4,
  bloco2Imagem5,
];

function scrollToOffer(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* -------------------- BASE UI -------------------- */

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative px-6 md:px-10 py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function GoldOrnament() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-antique-gold" />
      <span className="text-antique-gold text-xs tracking-[0.4em]">✦</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-antique-gold" />
    </div>
  );
}

function CTAButton({ children, href, onClick, variant = "primary" }: { children: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void; variant?: "primary" | "ghost" }) {
  const base =
    "cta-pulse group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-md font-semibold text-base md:text-lg tracking-wide transition-all duration-300 uppercase";
  const styles =
    variant === "primary"
      ? { backgroundColor: "#E85D04", color: "#FFFFFF" }
      : { backgroundColor: "transparent", color: "#F4A261", border: "1px solid #F4A261" };
  const cls = variant === "primary" ? `${base} shadow-cta text-white` : `${base}`;
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.backgroundColor = "#C94F0A";
    else {
      e.currentTarget.style.backgroundColor = "rgba(200,169,107,0.1)";
    }
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.backgroundColor = "#E85D04";
    else e.currentTarget.style.backgroundColor = "transparent";
  };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls} style={styles} onMouseEnter={enter} onMouseLeave={leave}>
        {children}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={styles} onMouseEnter={enter} onMouseLeave={leave}>
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`shrink-0 w-6 h-6 rounded-full bg-[#E85D04]/15 border border-[#E85D04]/40 flex items-center justify-center text-[#E85D04] text-sm ${className}`}>
      ✓
    </span>
  );
}

/* -------------------- 1. TOP OFFER BAR -------------------- */

function TopOfferBar() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo" }).format(new Date()));
  }, []);

  return (
    <div className="w-full text-center py-2.5 px-4 text-xs md:text-sm font-semibold tracking-wide"
      style={{
        background: "rgba(201, 79, 10, 0.15)",
        color: "#C94F0A",
        borderBottom: "1px solid rgba(201, 79, 10, 0.40)",
      }}>
      ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today && <>• <b className="text-[#E85D04]">{today}</b></>}
    </div>
  );
}

/* -------------------- 3. GALLERY MARQUEE -------------------- */

function GalleryMarquee() {
  const loop = [...PAGINAS_MANUAL, ...PAGINAS_MANUAL];
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-surface-raised border-y border-antique-gold/15">
      <div className="text-center px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Veja uma amostra dos materiais que você vai receber
        </h2>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-surface-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-surface-raised to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[60vw] sm:w-[42vw] md:w-[26vw] lg:w-[19vw] xl:w-[17vw]">
              <div className="rounded-lg overflow-hidden border border-antique-gold/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-canvas">
                <img src={src} alt={`Prévia ${(i % PAGINAS_MANUAL.length) + 1}`} width="640" height="905" loading="lazy" fetchPriority="low" decoding="async" className="w-full h-auto block" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- 6. PHOTO CAROUSEL (Demonstrativo) -------------------- */

const DEMONSTRATIVO_IMAGES = [
  { src: demonstrativo1, alt: "Situação sobre presentes oferecidos por pessoas desconhecidas" },
  { src: demonstrativo2, alt: "Situação sobre respeitar a escolha da criança ao receber abraços" },
  { src: demonstrativo3, alt: "Situação sobre respeitar limites durante brincadeiras de cócegas" },
  { src: demonstrativo4, alt: "Situação sobre privacidade no banheiro" },
  { src: demonstrativo5, alt: "Situação sobre respeitar a escolha da criança ao receber beijos" },
];

function DemonstrativoCarousel() {
  const loop = [...DEMONSTRATIVO_IMAGES, ...DEMONSTRATIVO_IMAGES];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-surface to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((img, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[62vw] sm:w-[44vw] md:w-[28vw] lg:w-[20vw] xl:w-[18vw]">
              <div className="rounded-lg overflow-hidden border border-antique-gold/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-canvas">
                <img src={img.src} alt={img.alt} width="640" height="905" loading="lazy" fetchPriority="low" decoding="async" className="w-full h-auto block" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------- FAQ -------------------- */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="premium-card rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left p-5 md:p-6">
        <span className="font-medium text-ink pr-4">{q}</span>
        <span className={`text-antique-gold text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-ink/70 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ==================================================================== */
/* PAGE                                                                  */
/* ==================================================================== */

function Index() {
  return (
    <main className="min-h-screen bg-canvas text-ink overflow-x-hidden">
      {/* 1 · TOP OFFER BAR */}
      <TopOfferBar />

      {/* 2 · HERO */}
      <Section className="pt-16 md:pt-24">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            Pare de encarar uma leitura complexa e comece a entender as ideias de Hábitos Atômicos de forma simples.
          </h1>

          <div className="max-w-xl mx-auto mb-8">
            <img
              src={planoBasicoHabitosImagem.url}
              width="1080"
              height="1080"
              alt="Manual Visual dos Hábitos Atômicos"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>

          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
            Uma leitura visual e simplificada das principais ideias de <strong>Hábitos Atômicos</strong>, organizada para você entender conceitos complexos de forma clara, rápida e fácil de aplicar.
          </p>

          <div>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
            <p className="text-xs text-ink/50 mt-4 tracking-wide">📩 <strong>Você recebe tudo na hora, direto no seu e-mail e WhatsApp.</strong></p>
          </div>
        </div>
      </Section>

      {/* 3 · GALLERY MARQUEE */}
      <GalleryMarquee />

      {/* 4 · MATERIAIS / FEATURES */}
      <Section className="bg-surface">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">
            O Manual Visual dos Hábitos Atômicos possui
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              i: "🧩",
              t: "CONCEITOS COMPLEXOS EM FORMATO SIMPLES",
              d: "As principais ideias são organizadas de forma visual para facilitar a compreensão e ajudar você a enxergar como os conceitos se conectam.",
            },
            {
              i: "👀",
              t: "VISUAL E FÁCIL DE ENTENDER",
              d: "Ilustrações, mapas, comparações e elementos visuais ajudam a transformar explicações complexas em uma experiência de leitura mais clara.",
            },
            {
              i: "💬",
              t: "EXPLICAÇÕES DIRETAS",
              d: "Você encontra explicações objetivas para entender o que cada conceito significa, sem precisar passar por uma leitura pesada.",
            },
            {
              i: "⭐",
              t: "LEVE PARA A PRÁTICA",
              d: "Além de entender as ideias, você encontra exemplos e aplicações para relacionar o conteúdo com situações da sua própria rotina.",
            },
          ].map((c) => (
            <div key={c.t} className="premium-card rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-2xl mb-4">
                {c.i}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ink">{c.t}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <CTAButton onClick={scrollToOffer}>EU QUERO O MATERIAL</CTAButton>
        </div>
      </Section>

      {/* 5 · DEMONSTRATIVO CAROUSEL */}
      <Section className="bg-surface py-10 md:py-14">
        <DemonstrativoCarousel />
      </Section>

      {/* 6 · URGENCY BANNER */}
      <Section>
        <div className="relative gold-border rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,var(--terracotta),transparent_60%)]" />
          <div className="relative">
            <GoldOrnament />
            <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight mb-4">
              Você consegue explicar o que realmente significa um conceito depois de ler sobre ele?
            </h2>
            <p className="text-ink/70 mb-8">Aproveite a oferta por tempo limitado.</p>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
          </div>
        </div>
      </Section>

      {/* 7 · FOR WHOM */}
      <Section className="bg-surface-raised border-y border-antique-gold/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Este material é ideal para você que deseja:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Entender as principais ideias de Hábitos Atômicos sem enfrentar uma leitura pesada",
            "Transformar conceitos complexos em explicações simples e fáceis de visualizar",
            "Visualizar os conceitos através de ilustrações e mapas",
            "Ter um material para consultar sempre que precisar relembrar uma ideia",
            "Enxergar como os conceitos se conectam ao longo do conteúdo",
          ].map((t) => (
            <article key={t} className="premium-card rounded-xl p-6">
              <CheckIcon className="mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-ink">{t}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* 8 · EVERYTHING YOU RECEIVE */}
      <Section className="bg-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Tudo o que você vai <span className="text-gradient-gold">receber</span>
          </h2>
        </div>

        <div className="premium-card rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={receberImagem}
              width="1080"
              height="1080"
              alt="Manual Visual dos Hábitos Atômicos com quatro bônus exclusivos"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>

          <div>
            <p className="text-ink/85 mb-6">
              Você não precisa passar horas tentando organizar mentalmente cada conceito.
              <br />
              Abra o material, escolha um assunto, veja a explicação visual e avance pelo conteúdo de forma simples.
            </p>

            <h3 className="text-2xl font-semibold mb-5 text-gradient-gold">Manual Visual dos Hábitos Atômicos</h3>

            <ul className="space-y-3">
              {[
                "Fundamentos dos hábitos",
                "Pequenas mudanças e efeito acumulado",
                "Identidade e comportamento",
                "Ciclo dos hábitos",
                "Construção de bons hábitos",
                "Como tornar hábitos mais óbvios",
                "Como tornar hábitos mais atrativos",
                "Como tornar hábitos mais fáceis",
                "Como tornar hábitos mais satisfatórios",
                "Redução de maus hábitos",
                "Ambiente e comportamento",
                "Gatilhos e contexto",
                "Consistência e acompanhamento",
                "Aplicação prática",
                "Mapas visuais",
                "Infográficos",
                "Ilustrações",
                "Comparações visuais",
                "Checklists",
                "Exercícios de aplicação",
                "Espaços para anotações",
                "Consulta visual",
                "Material organizado",
                "Acesso imediato",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-ink/90">
                  <CheckIcon />{b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 9 · BONUS */}
      <Section className="bg-surface-raised border-y border-antique-gold/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-antique-gold text-sm tracking-[0.3em] uppercase mb-2">E NÃO PARA POR AÍ...</div>
          <p className="text-ink/70 text-sm tracking-[0.2em] uppercase mb-3">VOCÊ TAMBÉM VAI RECEBER</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            🎁 <span className="text-gradient-gold">4 Bônus Exclusivos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: bonus1Imagem.url,
              t: "MAPA VISUAL DOS HÁBITOS",
              d: "Um material de consulta rápida com os principais conceitos organizados visualmente. Veja como as ideias se conectam em mapas, esquemas e representações simples para revisar o conteúdo com muito mais facilidade.",
            },
            {
              img: bonus2Imagem.url,
              t: "30 IDEIAS DE HÁBITOS PARA APLICAR",
              d: "Uma seleção de 30 ideias práticas para transformar conhecimento em ações do cotidiano. As ideias são organizadas para facilitar a escolha de pequenos comportamentos que você pode começar a colocar em prática.",
            },
            {
              img: bonus3Imagem.url,
              t: "PLANNER VISUAL DE HÁBITOS",
              d: "Um planner para organizar, acompanhar e visualizar os hábitos que você deseja construir. Planeje seus hábitos, registre sua execução e acompanhe sua evolução de forma simples e visual.",
            },
            {
              img: bonus4Imagem.url,
              t: "GUIA PARA NÃO ABANDONAR SEUS HÁBITOS",
              d: "Um guia rápido para entender o que pode atrapalhar sua constância e como voltar ao ritmo quando sair do plano. Uma ferramenta prática para reorganizar sua rotina e continuar avançando.",
            },
          ].map((b, i) => (
            <div key={b.t} className="premium-card rounded-xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-surface-soft to-canvas">
                <img
                  src={b.img}
                  alt={b.t}
                  width="540"
                  height="540"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="text-antique-gold text-[10px] tracking-[0.3em] uppercase mb-2">BÔNUS #{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2 text-ink">{b.t}</h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-4">{b.d}</p>

                <div className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#E85D04]/10 border border-[#E85D04]/35 text-xs">
                  <span className="text-ink/60">Valor: <s>R$29</s></span>
                  <span className="text-[#E85D04] font-bold">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 · PLANS / OFERTA */}
      <Section id="oferta" className="bg-surface">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#C94F0A]/15 border border-[#C94F0A]/40 text-[#C94F0A] text-xs md:text-sm font-semibold tracking-wider mb-5">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold">Escolha a opção ideal para você</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* PLANO BÁSICO */}
          <article className="premium-card rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-wider text-ink">PLANO BÁSICO</h3>

            <div className="mb-6">
              <img
                src={heroImagem}
                width="1080"
                height="1080"
                alt="Mockup do Plano Básico"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-ink/80 mb-4 font-medium">Você recebe:</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-ink/85 text-sm">
                <CheckIcon />
                <span>Manual Visual dos Hábitos Atômicos</span>
              </li>
            </ul>

            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-ink/60 mb-1">
                De <span className="text-[#C94F0A] line-through">R$29,90</span> por:
              </div>
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#E85D04" }}>R$19,90</div>
              <div className="text-sm text-ink/70 mt-1">ou 2x de R$9,95 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-antique-gold text-xs">
                💰 Você economiza R$10,00
              </div>
            </div>

            <CTAButton href={CHECKOUT_BASICO} variant="ghost">QUERO O BÁSICO</CTAButton>
          </article>

          {/* PLANO COMPLETO */}
          <article className="rounded-2xl p-8 flex flex-col relative gold-border shadow-gold gold-glow">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 tracking-wider text-gradient-gold mt-3">PLANO COMPLETO</h3>
            <p className="text-center text-ink/75 text-sm mb-5">⚡ 2x mais conteúdos</p>

            <div className="mb-6">
              <img
                src={receberImagem}
                width="1080"
                height="1080"
                alt="Mockup do Plano Completo"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-ink/85 mb-4 font-medium">Você recebe:</p>

            <ul className="space-y-3 mb-6">
              {[
                "Manual Visual dos Hábitos Atômicos",
                "Fundamentos dos hábitos",
                "Identidade e comportamento",
                "Ciclo dos hábitos",
                "Construção de bons hábitos",
                "Redução de maus hábitos",
                "Ambiente e comportamento",
                "Aplicações práticas",
                "Mapas visuais",
                "Infográficos",
                "Ilustrações",
                "Checklists",
                "Exercícios de aplicação",
                "Consulta visual",
                "Material organizado",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}

              {[
                "Bônus #1 — Mapa Visual dos Hábitos",
                "Bônus #2 — 30 Ideias de Hábitos Para Aplicar",
                "Bônus #3 — Planner Visual de Hábitos",
                "Bônus #4 — Guia Para Não Abandonar Seus Hábitos",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-antique-gold/15 border border-antique-gold/40 flex items-center justify-center text-antique-gold text-sm">🎁</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-ink/60 mb-1">
                De <span className="text-[#C94F0A] line-through">R$49,90</span> por:
              </div>
              <div className="text-5xl md:text-6xl font-bold" style={{ color: "#E85D04" }}>R$29,90</div>
              <div className="text-sm text-ink/70 mt-1">ou 5x de R$5,98 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-antique-gold text-xs">
                💰 Você economiza R$20,00
              </div>
            </div>

            <CTAButton href={CHECKOUT_COMPLETO}>
              <span className="text-center">QUERO O PLANO COMPLETO</span>
            </CTAButton>

            <p className="text-xs text-ink/50 mt-4 text-center tracking-wide">🔒 Compra 100% segura&nbsp; • &nbsp;Acesso imediato</p>
          </article>
        </div>
      </Section>

      {/* 11 · GUARANTEE */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto text-center premium-card rounded-2xl p-10 md:p-14">
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="w-32 h-32 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center">
              <svg className="w-16 h-16 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 013 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285v0Z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-antique-gold uppercase mb-1">100% Garantia</div>
              <div className="text-3xl font-bold text-gradient-gold">VITALÍCIA</div>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Você tem garantia vitalícia no Manual Visual dos Hábitos Atômicos.</h2>
          <p className="text-ink/75 leading-relaxed max-w-xl mx-auto mb-3">
            Se o conteúdo não fizer sentido para o que você procura, não facilitar sua compreensão ou você simplesmente decidir que não quer continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta.
          </p>
          <p className="text-antique-gold font-semibold tracking-wide mb-2">Sem burocracia.</p>
          <p className="text-ink/85 leading-relaxed max-w-xl mx-auto">O risco fica do nosso lado.</p>
        </div>
      </Section>

      {/* 12 · HOW ACCESS WORKS */}
      <Section className="bg-surface-raised border-y border-antique-gold/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">Como é o Acesso</h2>
          <p className="text-antique-gold text-xs tracking-[0.4em] uppercase">(PASSO A PASSO)</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              i: "🛒",
              t: "Conclua sua compra",
              d: "Depois que o pagamento for confirmado, seu acesso será liberado.",
            },
            {
              i: "📩",
              t: "Entre na área de membros",
              d: "Os materiais ficarão organizados em um único lugar para você acessar.",
            },
            {
              i: "📱",
              t: "Acesse os materiais",
              items: [
                "Manual Visual dos Hábitos Atômicos",
                "Bônus 01 — Mapa Visual dos Hábitos",
                "Bônus 02 — 30 Ideias de Hábitos Para Aplicar",
                "Bônus 03 — Planner Visual de Hábitos",
                "Bônus 04 — Guia Para Não Abandonar Seus Hábitos",
              ],
            },
            {
              i: "🧠",
              t: "Comece sua leitura",
              items: [
                "Escolha um conceito",
                "Veja a explicação visual",
                "Entenda a ideia principal",
                "Observe os exemplos",
                "Relacione com sua rotina",
                "Use as ferramentas práticas",
                "Volte ao material sempre que quiser revisar um conceito",
              ],
            },
          ].map((s, i) => (
            <div key={s.t} className="premium-card rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-2xl mx-auto mb-4">{s.i}</div>
              <div className="text-antique-gold text-[10px] tracking-[0.3em] uppercase mb-2">0{i + 1}</div>
              <h3 className="text-lg font-semibold mb-2 text-ink">{s.t}</h3>
              {s.d && <p className="text-sm text-ink/65 leading-relaxed">{s.d}</p>}
              {s.items && (
                <ul className="space-y-2 text-sm text-ink/70 text-left inline-block">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-antique-gold">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton onClick={scrollToOffer}>QUERO MEU ACESSO AGORA</CTAButton>
        </div>
      </Section>

      {/* 13 · FAQ */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">Perguntas <span className="text-gradient-gold">Frequentes</span></h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {[
            {
              q: "O que é o Manual Visual dos Hábitos Atômicos?",
              a: "É um material digital que organiza e apresenta as principais ideias de Hábitos Atômicos de forma visual, simples e fácil de entender. O conteúdo utiliza explicações, ilustrações, mapas, exemplos e ferramentas práticas para facilitar a compreensão.",
            },
            {
              q: "O material serve para mim mesmo que eu não goste de leituras longas?",
              a: "Sim. A proposta do material é justamente facilitar a compreensão por meio de uma apresentação mais visual e objetiva, tornando a experiência de leitura mais leve.",
            },
            {
              q: "Preciso ter lido o livro para usar o material?",
              a: "Não. O material foi organizado para apresentar os conceitos de forma independente e facilitar a compreensão mesmo para quem ainda não teve contato completo com o conteúdo.",
            },
            {
              q: "Posso acessar pelo celular?",
              a: "Sim. O material é digital e pode ser acessado pelos dispositivos compatíveis com a leitura de PDF.",
            },
            {
              q: "O acesso é imediato?",
              a: "Sim. Depois da confirmação do pagamento, as instruções de acesso são enviadas para você.",
            },
            {
              q: "O material pode ser impresso?",
              a: "Sim. O material foi desenvolvido em formato digital e pode ser impresso para uso pessoal, caso você prefira fazer a leitura no papel.",
            },
            {
              q: "Os 4 bônus já estão incluídos?",
              a: "Sim. No Plano Completo, os quatro bônus são incluídos sem custo adicional.",
            },
            {
              q: "O acesso possui mensalidade?",
              a: "Não. Trata-se de uma compra única. Você não precisa pagar mensalidade para continuar acessando o material.",
            },
            {
              q: "Posso voltar ao material sempre que quiser?",
              a: "Sim. Depois de receber o acesso, você pode retornar ao material para revisar os conceitos e consultar as ferramentas sempre que precisar.",
            },
            {
              q: "Como funciona a garantia?",
              a: "Você possui garantia vitalícia conforme as condições da oferta. Caso decida que o material não é adequado para você, poderá solicitar o reembolso dentro das condições estabelecidas.",
            },
            {
              q: "Preciso comprar algum material para usar as atividades?",
              a: "Não. O material já foi organizado para que você possa utilizar as ferramentas e exercícios apresentados. Se quiser, também pode imprimir as páginas de aplicação para facilitar o uso.",
            },
          ].map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <Section className="text-center">
        <GoldOrnament />

        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto leading-tight mb-8">
          <span className="text-gradient-gold">Você não precisa enfrentar uma leitura pesada para começar a entender as ideias.</span>
          <br />
          Tenha uma experiência visual, simples e organizada para compreender os principais conceitos de Hábitos Atômicos.
        </h2>

        <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>

        <div className="mt-16 pt-8 border-t border-antique-gold/15 max-w-3xl mx-auto space-y-4 text-xs md:text-[13px] text-ink/45 leading-relaxed text-center">
          <p className="text-center text-ink/55 tracking-wider">Copyright © 2026 | Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.</p>
          <p>O <strong>Manual Visual dos Hábitos Atômicos</strong> é um material digital independente, criado para fins educacionais e de organização de conteúdo. O material apresenta e organiza ideias relacionadas ao tema de hábitos de forma visual e simplificada.</p>
          <p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais, sujeitando os infratores às sanções previstas na legislação aplicável.</p>
        </div>
      </Section>
    </main>
  );
}
