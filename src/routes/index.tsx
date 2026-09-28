import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero480 from "@/assets/limites-corporais/hero-480.webp.asset.json";
import hero720 from "@/assets/limites-corporais/hero-720.webp.asset.json";
import bloco2Imagem1 from "@/assets/limites-corporais/pagina-1-640.webp.asset.json";
import bloco2Imagem2 from "@/assets/limites-corporais/pagina-2-640.webp.asset.json";
import bloco2Imagem3 from "@/assets/limites-corporais/pagina-3-640.webp.asset.json";
import bloco2Imagem4 from "@/assets/limites-corporais/pagina-4-640.webp.asset.json";
import bloco2Imagem5 from "@/assets/limites-corporais/pagina-5-640.webp.asset.json";
import demonstrativo1 from "@/assets/limites-corporais/demonstrativo-6-640.webp.asset.json";
import demonstrativo2 from "@/assets/limites-corporais/demonstrativo-7-640.webp.asset.json";
import demonstrativo3 from "@/assets/limites-corporais/demonstrativo-8-640.webp.asset.json";
import demonstrativo4 from "@/assets/limites-corporais/demonstrativo-9-640.webp.asset.json";
import demonstrativo5 from "@/assets/limites-corporais/demonstrativo-10-640.webp.asset.json";
import receber480 from "@/assets/limites-corporais/receber-480.webp.asset.json";
import receber720 from "@/assets/limites-corporais/receber-720.webp.asset.json";
import bonus1Imagem from "@/assets/limites-corporais/bonus-1-540.webp.asset.json";
import bonus2Imagem from "@/assets/limites-corporais/bonus-2-540.webp.asset.json";
import bonus3Imagem from "@/assets/limites-corporais/bonus-3-540.webp.asset.json";
import bonus4Imagem from "@/assets/limites-corporais/bonus-4-540.webp.asset.json";
import planoBasico480 from "@/assets/limites-corporais/plano-basico-480.webp.asset.json";
import planoBasico720 from "@/assets/limites-corporais/plano-basico-720.webp.asset.json";
import planoCompleto480 from "@/assets/limites-corporais/plano-completo-480.webp.asset.json";
import planoCompleto720 from "@/assets/limites-corporais/plano-completo-720.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manual Visual dos Limites Corporais" },
      {
        name: "description",
        content: "Ensine seu filho a reconhecer limites, dizer não e pedir ajuda em situações do dia a dia.",
      },
      { property: "og:title", content: "Manual Visual dos Limites Corporais" },
      {
        property: "og:description",
        content: "Mais de 30 situações do dia a dia para conversar com seu filho sobre corpo, toque e limites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Manual Visual dos Limites Corporais" },
      {
        name: "twitter:description",
        content: "Mais de 30 situações do dia a dia para conversar com seu filho sobre corpo, toque e limites.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: hero480.url,
        imageSrcSet: `${hero480.url} 480w, ${hero720.url} 720w`,
        imageSizes: "(max-width: 640px) calc(100vw - 48px), 576px",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_BASICO = "https://pay.cakto.com.br/mo5x2co";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/33d9xgo_1146876";
const PAGINAS_MANUAL = [
  bloco2Imagem1.url,
  bloco2Imagem2.url,
  bloco2Imagem3.url,
  bloco2Imagem4.url,
  bloco2Imagem5.url,
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
      ? { backgroundColor: "#22C55E", color: "#fff" }
      : { backgroundColor: "transparent", color: "#C8A96B", border: "1px solid #C8A96B" };
  const cls = variant === "primary" ? `${base} shadow-cta text-white` : `${base}`;
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.backgroundColor = "#16A34A";
    else {
      e.currentTarget.style.backgroundColor = "rgba(200,169,107,0.1)";
    }
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.backgroundColor = "#22C55E";
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
    <span className={`shrink-0 w-6 h-6 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] text-sm ${className}`}>
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
        background: "rgba(239, 68, 68, 0.15)",
        color: "#F87171",
        borderBottom: "1px solid rgba(239, 68, 68, 0.40)",
      }}>
      ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today && <b className="text-[#FCA5A5]">{today}</b>}
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
          Veja os <span className="text-gradient-gold">materiais</span> que você vai receber
        </h2>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-surface-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-surface-raised to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[60vw] sm:w-[42vw] md:w-[26vw] lg:w-[19vw] xl:w-[17vw]">
              <div className="rounded-lg overflow-hidden border border-antique-gold/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-canvas">
                <img src={src} alt={`Prévia ${(i % PAGINAS_MANUAL.length) + 1}`} width="640" height="905" loading="lazy" decoding="async" className="w-full h-auto block" draggable={false} />
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
  { src: demonstrativo1.url, alt: "Situação sobre presentes oferecidos por pessoas desconhecidas" },
  { src: demonstrativo2.url, alt: "Situação sobre respeitar a escolha da criança ao receber abraços" },
  { src: demonstrativo3.url, alt: "Situação sobre respeitar limites durante brincadeiras de cócegas" },
  { src: demonstrativo4.url, alt: "Situação sobre privacidade no banheiro" },
  { src: demonstrativo5.url, alt: "Situação sobre respeitar a escolha da criança ao receber beijos" },
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
                <img src={img.src} alt={img.alt} width="640" height="905" loading="lazy" decoding="async" className="w-full h-auto block" draggable={false} />
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
            Ensine seu filho a reconhecer limites, dizer “não” e pedir ajuda em situações do dia a dia.
          </h1>

          <div className="max-w-xl mx-auto mb-8">
              <img
                src={hero480.url}
                srcSet={`${hero480.url} 480w, ${hero720.url} 720w`}
               sizes="(max-width: 640px) calc(100vw - 48px), 576px"
               width="1080"
               height="1080"
               alt="Manual Visual dos Limites Corporais"
               loading="eager"
               fetchPriority="high"
               decoding="sync"
               className="w-full h-auto subtle-float"
             />
          </div>

          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
            +30 situações do dia a dia para ensinar seu filho sobre corpo, toque e limites. Um manual visual para você saber o que conversar, o que falar e como praticar com seu filho — sem precisar inventar exemplos ou descobrir sozinho como abordar assuntos delicados.
          </p>

          <div>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
            <p className="text-xs text-ink/50 mt-4 tracking-wide">📩 Você recebe tudo na hora, direto no seu e-mail.</p>
          </div>
        </div>
      </Section>

      {/* 3 · GALLERY MARQUEE */}
      <GalleryMarquee />

      {/* 4 · MATERIAIS / FEATURES */}
      <Section className="bg-surface">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Os materiais do <span className="text-gradient-gold">Manual Visual dos Limites Corporais</span> possuem
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: "🧩", t: "+30 SITUAÇÕES DO DIA A DIA", d: "Você encontra situações práticas para conversar com seu filho sobre corpo, toque, desconforto, limites, segredos e pedidos de ajuda." },
            { i: "👀", t: "VISUAL E FÁCIL DE CONSULTAR", d: "Cada situação é apresentada de maneira visual para você entender rapidamente o assunto e saber como conduzir a conversa." },
            { i: "💬", t: "FRASES E PERGUNTAS PRONTAS", d: "Você encontra sugestões do que falar e perguntas para ajudar seu filho a pensar, responder e participar da conversa." },
            { i: "⭐", t: "PRÁTICAS PARA FAZER JUNTO", d: "Além de conversar, você encontra pequenas atividades para transformar o aprendizado em algo que a criança possa praticar no cotidiano." },
          ].map((c) => (
            <div key={c.t} className="premium-card rounded-xl p-6">
               <div className="w-14 h-14 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-2xl mb-4">{c.i}</div>
               <h3 className="text-lg font-semibold mb-2 text-ink">{c.t}</h3>
               <p className="text-sm text-ink/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <CTAButton onClick={scrollToOffer}>EU QUERO O MANUAL VISUAL</CTAButton>
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
              Quantas vezes você já quis conversar sobre esses assuntos com seu filho, mas não soube exatamente o que dizer?
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
            Este material é ideal para <span className="text-gradient-gold">você que deseja:</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Ensinar seu filho que ele pode dizer “não” quando não se sentir confortável" },
            { t: "Conversar sobre corpo e limites sem precisar criar exemplos na hora" },
            { t: "Ter situações prontas para abordar assuntos delicados de maneira natural" },
            { t: "Ajudar seu filho a reconhecer quando precisa procurar um adulto de confiança" },
            { t: "Ensinar frases simples para expressar desconforto e pedir ajuda" },
            { t: "Criar oportunidades para conversar sobre segurança no cotidiano" },
          ].map((c) => (
            <article key={c.t} className="premium-card rounded-xl p-6">
              <CheckIcon className="mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-ink">{c.t}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* 8 · EVERYTHING YOU RECEIVE */}
      <Section className="bg-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">Tudo o que você vai <span className="text-gradient-gold">receber</span></h2>
        </div>
        <div className="premium-card rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={receber480.url}
              srcSet={`${receber480.url} 480w, ${receber720.url} 720w`}
              sizes="(max-width: 767px) calc(100vw - 96px), 528px"
              width="760"
              height="760"
               alt="Manual Visual dos Limites Corporais com quatro bônus exclusivos"
              loading="lazy"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>
          <div>
            <p className="text-ink/85 mb-2">Você não precisa esperar surgir uma situação difícil para começar essa conversa.</p>
            <p className="text-ink/70 mb-6">Você escolhe uma situação, lê o conteúdo, entende como abordar o assunto e coloca a atividade em prática com seu filho.</p>
            <h3 className="text-2xl font-semibold mb-5 text-gradient-gold">Manual Visual dos Limites Corporais</h3>
            <ul className="space-y-3">
            {[
              "+30 situações prontas",
              "Situações sobre corpo e limites",
              "Situações sobre toque e contato físico",
              "Situações sobre dizer “não”",
              "Situações sobre segredos e pedidos inadequados",
              "Situações sobre pedir ajuda",
              "Adultos de confiança",
              "Situações envolvendo escola e familiares",
              "Situações envolvendo outras crianças",
              "Situações envolvendo internet e telas",
              "O que a criança precisa entender",
              "O que você pode falar",
              "Perguntas para fazer ao seu filho",
              "Atividades para praticar",
              "Consulta visual",
              "Material organizado por situações",
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
               t: "20 FRASES PARA ENSINAR SEU FILHO A DIZER “NÃO”",
               d: "Um material com frases simples que a criança pode aprender e praticar para expressar desconforto, recusar algo e pedir ajuda quando necessário.",
            },
            {
               img: bonus2Imagem.url,
              t: "20 CARTÕES “O QUE VOCÊ FARIA?”",
              d: "Cartões com situações do cotidiano para você apresentar ao seu filho, ouvir o que ele faria e transformar cada situação em uma conversa.",
            },
            {
               img: bonus3Imagem.url,
              t: "MAPA DOS ADULTOS DE CONFIANÇA",
              d: "Uma atividade visual para ajudar seu filho a identificar pessoas de confiança que ele pode procurar quando estiver com medo, desconfortável ou precisar de ajuda.",
            },
            {
               img: bonus4Imagem.url,
              t: "GUIA “COMO CONVERSAR SEM ASSUSTAR SEU FILHO”",
              d: "Um guia prático para ajudar você a abordar limites corporais com linguagem simples, respeitando o ritmo da criança e aproveitando situações naturais do cotidiano.",
            },
          ].map((b, i) => (
            <div key={b.t} className="premium-card rounded-xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-surface-soft to-canvas">
                <img src={b.img} alt={b.t} width="540" height="540" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-antique-gold text-[10px] tracking-[0.3em] uppercase mb-2">BÔNUS #{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{b.t}</h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-4">{b.d}</p>
                <div className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/35 text-xs">
                  <span className="text-ink/60">Valor: <s>R$29</s></span>
                  <span className="text-[#22C55E] font-bold">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 · PLANS / OFERTA */}
      <Section id="oferta" className="bg-surface">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#F87171] text-xs md:text-sm font-semibold tracking-wider mb-5">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold">Escolha a opção ideal para você</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* PLANO BÁSICO */}
          <article className="premium-card rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-wider text-ink">PLANO BÁSICO</h3>
            <div className="mb-6">
               <img src={planoBasico480.url} srcSet={`${planoBasico480.url} 480w, ${planoBasico720.url} 720w`} sizes="(max-width: 1023px) calc(100vw - 112px), 448px" width="720" height="720" alt="Mockup do Plano Básico" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <p className="text-ink/80 mb-4 font-medium">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {["Manual Visual dos Limites Corporais"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/85 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-ink/60 mb-1">De <s className="text-[#EF4444]">R$29,90</s> por:</div>
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#22C55E" }}>R$19,90</div>
              <div className="text-sm text-ink/70 mt-1">ou 2x de R$9,95 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-antique-gold text-xs">💰 Você economiza R$10,00</div>
            </div>
            <CTAButton href={CHECKOUT_BASICO} variant="ghost">QUERO O BÁSICO</CTAButton>
          </article>

          {/* PLANO COMPLETO */}
          <article className="rounded-2xl p-8 flex flex-col relative gold-border shadow-gold gold-glow">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 tracking-wider text-gradient-gold mt-3">PLANO COMPLETO</h3>
            <p className="text-center text-ink/75 text-sm mb-5">⚡ 4x mais conteúdos</p>
            <div className="mb-6">
               <img src={planoCompleto480.url} srcSet={`${planoCompleto480.url} 480w, ${planoCompleto720.url} 720w`} sizes="(max-width: 1023px) calc(100vw - 112px), 448px" width="720" height="720" alt="Mockup do Plano Completo" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <p className="text-ink/85 mb-4 font-medium">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Manual Visual dos Limites Corporais",
                "+30 situações práticas",
                "Situações sobre corpo e limites",
                "Situações sobre toque",
                "Situações sobre dizer “não”",
                "Situações sobre segredos",
                "Situações sobre pedir ajuda",
                "Adultos de confiança",
                "Situações do cotidiano",
                "O que a criança precisa entender",
                "O que você pode falar",
                "Perguntas para conversar",
                "Práticas para fazer junto",
                "Consulta visual",
                "Situações organizadas",
                "Acesso imediato",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}
              {[
                "Bônus #1 — 20 Frases para Ensinar seu Filho a Dizer “Não”",
                "Bônus #2 — 20 Cartões “O Que Você Faria?”",
                "Bônus #3 — Mapa dos Adultos de Confiança",
                "Bônus #4 — Guia “Como Conversar Sem Assustar Seu Filho”",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-antique-gold/15 border border-antique-gold/40 flex items-center justify-center text-antique-gold text-sm">🎁</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-ink/60 mb-1">De <s className="text-[#EF4444]">R$49,90</s> por:</div>
              <div className="text-5xl md:text-6xl font-bold" style={{ color: "#22C55E" }}>R$29,90</div>
              <div className="text-sm text-ink/70 mt-1">ou 5x de R$5,98 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-antique-gold text-xs">💰 Você economiza R$20,00</div>
            </div>
            <CTAButton href={CHECKOUT_COMPLETO}>
              <span className="text-center">QUERO O PLANO COMPLETO</span>
            </CTAButton>
            <p className="text-xs text-ink/50 mt-4 text-center tracking-wide">🔒 Compra 100% segura&nbsp; • &nbsp;Pagamento único</p>
          </article>
        </div>

      </Section>

      {/* 11 · GUARANTEE */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto text-center premium-card rounded-2xl p-10 md:p-14">
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285v0Z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-antique-gold uppercase mb-1">100% Garantia</div>
              <div className="text-3xl font-bold text-gradient-gold">VITALÍCIA</div>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Você tem garantia vitalícia no Manual Visual dos Limites Corporais.</h2>
          <p className="text-ink/75 leading-relaxed max-w-xl mx-auto mb-3">Se o material não fizer sentido para o que você procura, não facilitar suas conversas ou você simplesmente decidir que não quer continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta.</p>
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
            { i: "🛒", t: "Conclua sua compra", d: "Depois que o pagamento for confirmado, seu acesso será liberado." },
            { i: "📩", t: "Entre na área de membros", d: "Os materiais ficarão organizados em um único lugar para você acessar." },
            { i: "📱", t: "Acesse os materiais", items: ["Manual Visual dos Limites Corporais", "Bônus 01 — 20 Frases para Ensinar seu Filho a Dizer “Não”", "Bônus 02 — 20 Cartões “O Que Você Faria?”", "Bônus 03 — Mapa dos Adultos de Confiança", "Bônus 04 — Guia “Como Conversar Sem Assustar Seu Filho”"] },
            { i: "🛡️", t: "Comece a conversar", items: ["Escolha uma situação", "Leia o que a criança precisa entender", "Use a sugestão de fala", "Faça as perguntas", "Pratique junto", "Volte ao manual sempre que quiser conversar sobre outra situação"] },
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
            { q: "O que é o Manual Visual dos Limites Corporais?", a: "É um material visual com +30 situações do dia a dia para ajudar pais a conversar com os filhos sobre corpo, toque, limites, dizer “não” e pedir ajuda. Cada situação traz orientação do que a criança precisa entender, o que o adulto pode falar, perguntas e uma prática." },
            { q: "O material serve para quem não sabe muito sobre educação corporal?", a: "Sim. O material foi organizado para facilitar a conversa mesmo quando o adulto não sabe exatamente como começar ou o que dizer." },
            { q: "Posso acessar pelo celular?", a: "Sim. O material fica disponível digitalmente e pode ser acessado pelo celular, tablet ou computador." },
            { q: "O acesso é imediato?", a: "Sim. Depois da confirmação do pagamento, o acesso aos materiais é liberado." },
            { q: "Os materiais podem ser impressos?", a: "Sim. O material principal foi desenvolvido em formato visual e A4, permitindo também a impressão para uso físico." },
            { q: "Os 4 bônus já estão incluídos?", a: "Sim. No Plano Completo, os quatro bônus já fazem parte da oferta, sem cobrança adicional." },
            { q: "O acesso possui mensalidade?", a: "Não. Trata-se de uma compra única, conforme as condições apresentadas na oferta." },
            { q: "Posso revisar o material sempre que quiser?", a: "Sim. Depois de receber o acesso, você pode retornar ao material sempre que quiser consultar outra situação ou retomar uma conversa." },
            { q: "Como funciona a garantia?", a: "A garantia é vitalícia. Caso o material não faça sentido para o que você procura, não facilite suas conversas ou você decida não continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta." },
            { q: "Preciso ter materiais específicos para usar o manual?", a: "Não. O manual foi pensado para ser utilizado com situações e conversas simples do cotidiano. Algumas práticas podem envolver brincadeiras, encenações ou os próprios materiais disponíveis em casa." },
          ].map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <Section className="text-center">
        <GoldOrnament />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto leading-tight mb-8">
          <span className="text-gradient-gold">Ensine seu filho a reconhecer seus limites,</span> expressar o que sente e saber quando pedir ajuda.
        </h2>
        <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
        <div className="mt-16 pt-8 border-t border-antique-gold/15 max-w-3xl mx-auto space-y-4 text-xs md:text-[13px] text-ink/45 leading-relaxed text-center">
          <p className="text-center text-ink/55 tracking-wider">Copyright © 2026 | Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.</p>
          <p>O Manual Visual dos Limites Corporais é um material digital independente, criado para fins educacionais e práticos sobre conversas familiares relacionadas a corpo, limites, segurança e comunicação com crianças.</p>
          <p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais, sujeitando os infratores às sanções previstas na legislação aplicável.</p>
        </div>
      </Section>
    </main>
  );
}
