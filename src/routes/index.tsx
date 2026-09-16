import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero480 from "@/assets/optimized/hero-480.webp.asset.json";
import hero720 from "@/assets/optimized/hero-720.webp.asset.json";
import receber480 from "@/assets/optimized/receber-480.webp.asset.json";
import receber720 from "@/assets/optimized/receber-720.webp.asset.json";
import nhBonus1 from "@/assets/optimized/bonus1-540.webp.asset.json";
import nhBonus2 from "@/assets/optimized/bonus2-540.webp.asset.json";
import nhBonus3 from "@/assets/optimized/bonus3-540.webp.asset.json";
import nhBonus4 from "@/assets/optimized/bonus4-540.webp.asset.json";
import demo1 from "@/assets/optimized/demo1-640.webp.asset.json";
import demo2 from "@/assets/optimized/demo2-640.webp.asset.json";
import demo3 from "@/assets/optimized/demo3-640.webp.asset.json";
import demo4 from "@/assets/optimized/demo4-640.webp.asset.json";
import demo5 from "@/assets/optimized/demo5-640.webp.asset.json";
import demo6 from "@/assets/optimized/demo6-640.webp.asset.json";
import bloco1Imagem from "@/assets/catalogo-novo/1-Photoroom.png.asset.json";
import bloco2Imagem1 from "@/assets/catalogo-novo/2.jpg.asset.json";
import bloco2Imagem2 from "@/assets/catalogo-novo/3.jpg.asset.json";
import bloco2Imagem3 from "@/assets/catalogo-novo/4.jpg.asset.json";
import bloco2Imagem4 from "@/assets/catalogo-novo/5.jpg.asset.json";
import bloco2Imagem5 from "@/assets/catalogo-novo/6.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catálogo Visual das Plantas Medicinais" },
      {
        name: "description",
        content: "+200 soluções naturais organizadas de forma simples, visual e prática.",
      },
      { property: "og:title", content: "Catálogo Visual das Plantas Medicinais" },
      {
        property: "og:description",
        content: "+200 soluções naturais, plantas, preparos, utilizações e cuidados em um catálogo visual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Catálogo Visual das Plantas Medicinais" },
      {
        name: "twitter:description",
        content: "+200 soluções naturais, plantas, preparos, utilizações e cuidados em um catálogo visual.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: bloco1Imagem.url,
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_BASICO = "https://pay.cakto.com.br/ibaapmw";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/3bvoj8e_1076779";
const TODAY = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo" }).format(new Date());

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
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8A96B]" />
      <span className="text-[#C8A96B] text-xs tracking-[0.4em]">✦</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8A96B]" />
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
  return (
    <div className="w-full text-center py-2.5 px-4 text-xs md:text-sm font-semibold tracking-wide"
      style={{
        background: "rgba(239, 68, 68, 0.15)",
        color: "#F87171",
        borderBottom: "1px solid rgba(239, 68, 68, 0.40)",
      }}>
      ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <b className="text-[#FCA5A5]">{TODAY}</b>
    </div>
  );
}

/* -------------------- 3. GALLERY MARQUEE -------------------- */

function GalleryMarquee() {
  const loop = [...PAGINAS_MANUAL, ...PAGINAS_MANUAL];
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-[#0F0F0F] border-y border-[#C8A96B]/10">
      <div className="text-center px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Veja os <span className="text-gradient-gold">materiais</span> que você vai receber
        </h2>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#0F0F0F] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#0F0F0F] to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[60vw] sm:w-[42vw] md:w-[26vw] lg:w-[19vw] xl:w-[17vw]">
              <div className="rounded-lg overflow-hidden border border-[#C8A96B]/20 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] bg-black">
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
  { src: demo1.url, alt: "Demonstrativo 1" },
  { src: demo2.url, alt: "Demonstrativo 2" },
  { src: demo3.url, alt: "Demonstrativo 3" },
  { src: demo4.url, alt: "Demonstrativo 4" },
  { src: demo5.url, alt: "Demonstrativo 5" },
  { src: demo6.url, alt: "Demonstrativo 6" },
];

function DemonstrativoCarousel() {
  const loop = [...DEMONSTRATIVO_IMAGES, ...DEMONSTRATIVO_IMAGES];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#080808] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#080808] to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((img, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[62vw] sm:w-[44vw] md:w-[28vw] lg:w-[20vw] xl:w-[18vw]">
              <div className="rounded-lg overflow-hidden border border-[#C8A96B]/20 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] bg-black">
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
        <span className="font-medium text-[#F5F5F5] pr-4">{q}</span>
        <span className={`text-[#C8A96B] text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-[#F5F5F5]/70 leading-relaxed">{a}</p>
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
    <main className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] overflow-x-hidden">
      {/* 1 · TOP OFFER BAR */}
      <TopOfferBar />

      {/* 2 · HERO */}
      <Section className="pt-16 md:pt-24">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
            <span className="text-gradient-gold">+200 soluções naturais</span> organizadas de forma simples, visual e prática.
          </h1>

          <div className="max-w-xl mx-auto mb-8">
             <img
               src={bloco1Imagem.url}
               sizes="(max-width: 640px) calc(100vw - 48px), 576px"
               width="1080"
               height="1080"
               alt="Catálogo Visual das Plantas Medicinais"
               loading="eager"
               fetchPriority="high"
               decoding="sync"
               className="w-full h-auto subtle-float"
             />
          </div>

          <p className="text-[#F5F5F5]/80 text-base md:text-lg leading-relaxed mb-8">
            Tenha +200 soluções naturais organizadas em um único catálogo visual, com informações sobre plantas, formas de preparo, utilizações e cuidados — tudo estruturado para você consultar com facilidade sempre que precisar.
          </p>

          <ul className="space-y-3 mb-10 inline-block text-left">
            {[
              "Encontre rapidamente a planta ou informação que procura.",
              "Consulte as informações de forma visual e organizada.",
              "Veja diferentes formas de utilização e preparo.",
              "Tenha um material simples para consultar sempre que precisar.",
              "Organize seu conhecimento sobre plantas medicinais em um único lugar.",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#F5F5F5]/90">
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
            <p className="text-xs text-[#F5F5F5]/50 mt-4 tracking-wide">📩 Você recebe tudo na hora, direto no seu e-mail.</p>
          </div>
        </div>
      </Section>

      {/* 3 · GALLERY MARQUEE */}
      <GalleryMarquee />

      {/* 4 · MATERIAIS / FEATURES */}
      <Section className="bg-[#080808]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">
            O <span className="text-gradient-gold">Catálogo Visual das Plantas Medicinais</span> possui
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: "🌿", t: "+200 SOLUÇÕES ORGANIZADAS", d: "Informações organizadas para facilitar a consulta e encontrar rapidamente o que você procura." },
            { i: "🔎", t: "CONSULTA VISUAL", d: "Conteúdo apresentado de forma visual para tornar a localização das informações mais simples." },
            { i: "🫖", t: "FORMAS DE PREPARO", d: "Veja as principais formas de preparo apresentadas de maneira clara e organizada." },
            { i: "📋", t: "CONSULTA RÁPIDA", d: "Encontre uma planta, necessidade ou informação sem precisar percorrer todo o material." },
          ].map((c) => (
            <div key={c.t} className="premium-card rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/30 flex items-center justify-center text-2xl mb-4">{c.i}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#F5F5F5]">{c.t}</h3>
              <p className="text-sm text-[#F5F5F5]/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto mb-6 text-[#F5F5F5]">
            Tenha +200 soluções naturais em um material simples de compreender, visualizar e consultar.
          </p>
          <CTAButton onClick={scrollToOffer}>EU QUERO O CATÁLOGO VISUAL</CTAButton>
        </div>
      </Section>

      {/* 5 · DEMONSTRATIVO CAROUSEL */}
      <Section className="bg-[#080808] py-10 md:py-14">
        <DemonstrativoCarousel />
      </Section>

      {/* 6 · URGENCY BANNER */}
      <Section>
        <div className="relative gold-border rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, rgba(200,169,107,0.25), transparent 60%)" }} />
          <div className="relative">
            <GoldOrnament />
            <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight mb-4">
              Quantas vezes você já precisou procurar uma informação sobre uma planta e não encontrou facilmente?
            </h2>
            <p className="text-[#F5F5F5]/70 mb-8">Aproveite a oferta por tempo limitado.</p>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
          </div>
        </div>
      </Section>

      {/* 7 · FOR WHOM */}
      <Section className="bg-[#0F0F0F] border-y border-[#C8A96B]/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Este material é ideal para <span className="text-gradient-gold">você que deseja</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "ENCONTRAR INFORMAÇÕES COM FACILIDADE", d: "Tenha plantas e informações organizadas em um único catálogo visual." },
            { t: "TORNAR A CONSULTA MAIS SIMPLES", d: "Veja as informações de maneira objetiva, visual e organizada." },
            { t: "ENCONTRAR RAPIDAMENTE O QUE PROCURA", d: "Consulte uma planta ou categoria sem precisar procurar em diferentes lugares." },
            { t: "ECONOMIZAR TEMPO", d: "Tenha as informações reunidas em um único material de consulta." },
            { t: "TER TUDO ORGANIZADO", d: "Use índices, categorias e fichas para localizar o conteúdo com mais facilidade." },
            { t: "TER UMA FERRAMENTA DE CONSULTA", d: "Tenha um material para consultar sempre que precisar." },
          ].map((c) => (
            <article key={c.t} className="premium-card rounded-xl p-6">
              <CheckIcon className="mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-2 text-[#F5F5F5]">{c.t}</h3>
              <p className="text-sm text-[#F5F5F5]/65 leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 8 · EVERYTHING YOU RECEIVE */}
      <Section className="bg-[#080808]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">Tudo o que você vai <span className="text-gradient-gold">receber</span></h2>
        </div>
        <div className="premium-card rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={receber720.url}
              srcSet={`${receber480.url} 480w, ${receber720.url} 720w`}
              sizes="(max-width: 767px) calc(100vw - 96px), 528px"
              width="720"
              height="720"
              alt="Catálogo Visual das Plantas Medicinais"
              loading="lazy"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] text-xs font-semibold mb-4">⚡ ACESSO IMEDIATO</span>
            <p className="text-[#F5F5F5]/85 mb-2">Tudo foi organizado para ser simples de utilizar e consultar.</p>
            <p className="text-[#F5F5F5]/70 mb-6">Você pode escolher uma planta, localizar a informação desejada e voltar ao conteúdo sempre que precisar.</p>
            <h3 className="text-2xl font-semibold mb-5 text-gradient-gold">Catálogo Visual das Plantas Medicinais</h3>
            <ul className="space-y-3">
            {[
              "+200 soluções naturais organizadas visualmente",
              "Plantas medicinais organizadas",
              "Fichas de consulta",
              "Principais utilizações",
              "Formas de preparo",
              "Partes utilizadas",
              "Cuidados importantes",
              "Consulta por necessidade",
              "Índice de plantas",
              "Índice por necessidade",
              "Acesso imediato",
            ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[#F5F5F5]/90">
                  <CheckIcon />{b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 9 · BONUS */}
      <Section className="bg-[#0F0F0F] border-y border-[#C8A96B]/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[#C8A96B] text-sm tracking-[0.3em] uppercase mb-2">E NÃO PARA POR AÍ...</div>
          <p className="text-[#F5F5F5]/70 text-sm tracking-[0.2em] uppercase mb-3">VOCÊ TAMBÉM VAI RECEBER</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            🎁 <span className="text-gradient-gold">4 Bônus Exclusivos</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: nhBonus1.url,
              t: "Lista da Farmácia Natural",
              d: "Uma lista prática para organizar as principais plantas e itens que você pode ter na sua farmácia natural.",
            },
            {
              img: nhBonus2.url,
              t: "Guia Visual de Preparos",
              d: "Um guia visual com diferentes formas de preparo apresentadas de maneira simples, organizada e fácil de consultar.",
            },
            {
              img: nhBonus3.url,
              t: "Fichas de Consulta Rápida",
              d: "Fichas práticas para consultar rapidamente as principais informações sobre as plantas medicinais.",
            },
            {
              img: nhBonus4.url,
              t: "Checklist da Farmácia Natural",
              d: "Um checklist para organizar sua farmácia natural e acompanhar os itens que você já possui e os que deseja adicionar.",
            },
          ].map((b, i) => (
            <div key={b.t} className="premium-card rounded-xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                <img src={b.img} alt={b.t} width="540" height="540" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#C8A96B] text-[10px] tracking-[0.3em] uppercase mb-2">BÔNUS #{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{b.t}</h3>
                <p className="text-sm text-[#F5F5F5]/65 leading-relaxed mb-4">{b.d}</p>
                <div className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/35 text-xs">
                  <span className="text-[#F5F5F5]/60">Valor: <s>R$27</s></span>
                  <span className="text-[#22C55E] font-bold">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 · PLANS / OFERTA */}
      <Section id="oferta" className="bg-[#080808]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#F87171] text-xs md:text-sm font-semibold tracking-wider mb-5">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold">Escolha a opção ideal para você</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* PLANO BÁSICO */}
          <article className="premium-card rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-wider text-[#F5F5F5]">PLANO BÁSICO</h3>
            <div className="mb-6">
              <img src={hero720.url} srcSet={`${hero480.url} 480w, ${hero720.url} 720w`} sizes="(max-width: 1023px) calc(100vw - 112px), 448px" width="720" height="720" alt="Mockup do Plano Básico" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <p className="text-[#F5F5F5]/80 mb-4 font-medium">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {["Catálogo Visual das Plantas Medicinais"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#F5F5F5]/85 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-[#F5F5F5]/60 mb-1">De <s className="text-[#EF4444]">R$37,90</s> por:</div>
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#22C55E" }}>R$27,90</div>
              <div className="text-sm text-[#F5F5F5]/70 mt-1">ou 2x de R$13,95 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/30 text-[#C8A96B] text-xs">💰 Você economiza R$10,00</div>
            </div>
            <CTAButton href={CHECKOUT_BASICO} variant="ghost">QUERO O BÁSICO</CTAButton>
          </article>

          {/* PLANO COMPLETO */}
          <article className="rounded-2xl p-8 flex flex-col relative gold-border shadow-gold gold-glow">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#C8A96B] text-black text-xs font-bold tracking-wider whitespace-nowrap">
              ⭐ 92% das pessoas aproveitam a oferta completa
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 tracking-wider text-gradient-gold mt-3">PLANO COMPLETO</h3>
            <p className="text-center text-[#F5F5F5]/75 text-sm mb-5">⚡ 4x mais conteúdos</p>
            <div className="mb-6">
              <img src={receber720.url} srcSet={`${receber480.url} 480w, ${receber720.url} 720w`} sizes="(max-width: 1023px) calc(100vw - 112px), 448px" width="720" height="720" alt="Mockup do Plano Completo" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <p className="text-[#F5F5F5]/85 mb-4 font-medium">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Catálogo Visual das Plantas Medicinais",
                "+200 soluções naturais organizadas visualmente",
                "Plantas medicinais organizadas",
                "Fichas de consulta",
                "Principais utilizações",
                "Formas de preparo",
                "Partes utilizadas",
                "Cuidados importantes",
                "Consulta por necessidade",
                "Índice de plantas",
                "Índice por necessidade",
                "Acesso imediato",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#F5F5F5]/90 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}
              {[
                "Bônus #1 — Lista da Farmácia Natural",
                "Bônus #2 — Guia Visual de Preparos",
                "Bônus #3 — Fichas de Consulta Rápida",
                "Bônus #4 — Checklist da Farmácia Natural",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#F5F5F5]/90 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] text-sm">🎁</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-[#F5F5F5]/60 mb-1">De <s className="text-[#EF4444]">R$67,90</s> por:</div>
              <div className="text-5xl md:text-6xl font-bold" style={{ color: "#22C55E" }}>R$37,90</div>
              <div className="text-sm text-[#F5F5F5]/70 mt-1">ou 5x de R$7,58 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/30 text-[#C8A96B] text-xs">💰 Você economiza R$30,00</div>
            </div>
            <CTAButton href={CHECKOUT_COMPLETO}>QUERO O PLANO COMPLETO</CTAButton>
            <p className="text-xs text-[#F5F5F5]/50 mt-4 text-center tracking-wide">📩 Você recebe tudo na hora, direto no seu e-mail.</p>
          </article>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <GoldOrnament />
          <p className="text-lg md:text-2xl font-semibold leading-snug text-[#F5F5F5]">
            Quando as informações estão organizadas, fica muito mais fácil encontrar aquilo que você procura.
          </p>
          <p className="text-[#F5F5F5]/70 mt-4">
            Tenha plantas, utilizações, preparos e cuidados reunidos em um único material visual para consultar sempre que precisar.
          </p>
        </div>
      </Section>

      {/* 11 · GUARANTEE */}
      <Section className="bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center premium-card rounded-2xl p-10 md:p-14">
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#C8A96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285v0Z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#C8A96B] uppercase mb-1">100% Garantia</div>
              <div className="text-3xl font-bold text-gradient-gold">VITALÍCIA</div>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Você tem garantia vitalícia no Catálogo Visual das Plantas Medicinais.
          </h2>
          <p className="text-[#F5F5F5]/75 mb-4">Isso significa que, a qualquer momento, se você achar que:</p>
          <ul className="space-y-3 mb-6 inline-block text-left">
            {[
              "o material não faz sentido para seus objetivos",
              "o conteúdo não ajuda na sua consulta",
              "ou simplesmente não quiser continuar com o produto",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[#F5F5F5]/85">
                <CheckIcon /><span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#F5F5F5]/90 font-medium mb-2">👉 você pode solicitar o reembolso.</p>
          <p className="text-[#C8A96B] font-semibold tracking-wide mb-6">Sem prazo. Sem burocracia. Sem explicação obrigatória.</p>
          <div className="gold-divider my-6" />
          <p className="text-[#F5F5F5]/70 leading-relaxed max-w-xl mx-auto mb-3">
            Essa garantia existe porque acreditamos no valor prático do material.
          </p>
          <p className="text-[#F5F5F5]/70 leading-relaxed max-w-xl mx-auto mb-3">
            Você não está comprando apenas informação. Está adquirindo uma biblioteca visual criada para facilitar a consulta e organização das informações sobre plantas medicinais.
          </p>
          <p className="text-[#F5F5F5]/85 leading-relaxed max-w-xl mx-auto">
            Se não fizer sentido para você, o risco fica do nosso lado.
          </p>
        </div>
      </Section>

      {/* 12 · HOW ACCESS WORKS */}
      <Section className="bg-[#0F0F0F] border-y border-[#C8A96B]/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">Como é o Acesso</h2>
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase">(PASSO A PASSO)</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: "🛒", t: "Conclua sua compra", d: "Após a confirmação do pagamento, seu acesso é liberado automaticamente." },
            { i: "📩", t: "Entre na área de membros", d: "Todo o conteúdo ficará organizado para acesso imediato." },
            { i: "📱", t: "Acesse os materiais", items: ["Catálogo Visual das Plantas Medicinais", "Bônus 01 — Lista da Farmácia Natural", "Bônus 02 — Guia Visual de Preparos", "Bônus 03 — Fichas de Consulta Rápida", "Bônus 04 — Checklist da Farmácia Natural"] },
            { i: "📚", t: "Comece a consultar", items: ["Escolha uma planta ou categoria", "Encontre a informação desejada", "Consulte as formas de preparo", "Veja os cuidados importantes", "Volte ao material sempre que precisar"] },
          ].map((s, i) => (
            <div key={s.t} className="premium-card rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/30 flex items-center justify-center text-2xl mx-auto mb-4">{s.i}</div>
              <div className="text-[#C8A96B] text-[10px] tracking-[0.3em] uppercase mb-2">0{i + 1}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#F5F5F5]">{s.t}</h3>
              {s.d && <p className="text-sm text-[#F5F5F5]/65 leading-relaxed">{s.d}</p>}
              {s.items && (
                <ul className="space-y-2 text-sm text-[#F5F5F5]/70 text-left inline-block">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-[#C8A96B]">✓</span>
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
            { q: "O que é o Catálogo Visual das Plantas Medicinais?", a: "É um material digital em PDF que reúne +200 soluções naturais e informações sobre plantas medicinais de forma visual, organizada e fácil de consultar." },
            { q: "O material serve para iniciantes?", a: "Sim. O conteúdo foi estruturado para facilitar a consulta, inclusive para quem está começando a conhecer as plantas medicinais." },
            { q: "Posso acessar pelo celular?", a: "Sim. Como o produto é digital, você poderá acessar o material pelo celular e por outros dispositivos compatíveis com PDF." },
            { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento, o acesso aos materiais é liberado automaticamente." },
            { q: "Os materiais podem ser impressos?", a: "Sim. Por serem materiais em PDF, você pode optar por utilizá-los digitalmente ou imprimir os conteúdos para consulta física." },
            { q: "Os 4 bônus já estão incluídos?", a: "Sim. No Plano Completo, os quatro bônus são entregues gratuitamente junto com o Catálogo Visual." },
            { q: "O acesso possui mensalidade?", a: "Não. É uma compra única. Você não precisa pagar mensalidade para continuar acessando o material." },
            { q: "Posso revisar o material sempre que quiser?", a: "Sim. O material fica disponível para você consultar novamente sempre que precisar." },
            { q: "Como funciona a garantia?", a: "A garantia é vitalícia. Se o material não fizer sentido para seus objetivos, não ajudar na sua consulta ou você simplesmente não quiser continuar com o produto, poderá solicitar o reembolso." },
            { q: "O material substitui orientação de um profissional de saúde?", a: "Não. O catálogo é um material educacional e de consulta. Informações sobre saúde, sintomas, medicamentos, condições específicas ou situações individuais devem ser avaliadas com um profissional de saúde qualificado." },
          ].map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <Section className="text-center">
        <GoldOrnament />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto leading-tight mb-8">
          Tenha <span className="text-gradient-gold">+200 soluções naturais</span> organizadas em um catálogo simples de consultar.
        </h2>
        <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
        <div className="mt-16 pt-8 border-t border-[#C8A96B]/15 max-w-3xl mx-auto space-y-4 text-xs md:text-[13px] text-[#F5F5F5]/45 leading-relaxed text-left">
          <p className="text-center text-[#F5F5F5]/55 tracking-wider">Copyright © 2026 | Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.</p>
          <p>O Catálogo Visual das Plantas Medicinais é um material independente de caráter educacional. As informações apresentadas não substituem orientação, diagnóstico ou tratamento realizado por profissional de saúde qualificado.</p>
          <p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais, sujeitando os infratores às sanções previstas na legislação aplicável.</p>
        </div>
      </Section>
    </main>
  );
}
