import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero480 from "@/assets/catalogo-optimized/hero-480.webp.asset.json";
import hero720 from "@/assets/catalogo-optimized/hero-720.webp.asset.json";
import bloco2Imagem1 from "@/assets/catalogo-optimized/pagina-2-640.webp.asset.json";
import bloco2Imagem2 from "@/assets/catalogo-optimized/pagina-3-640.webp.asset.json";
import bloco2Imagem3 from "@/assets/catalogo-optimized/pagina-4-640.webp.asset.json";
import bloco2Imagem4 from "@/assets/catalogo-optimized/pagina-5-640.webp.asset.json";
import bloco2Imagem5 from "@/assets/catalogo-optimized/pagina-6-640.webp.asset.json";
import demonstrativo1 from "@/assets/catalogo-optimized/pagina-7-640.webp.asset.json";
import demonstrativo2 from "@/assets/catalogo-optimized/pagina-8-640.webp.asset.json";
import demonstrativo3 from "@/assets/catalogo-optimized/pagina-9-640.webp.asset.json";
import demonstrativo4 from "@/assets/catalogo-optimized/pagina-10-640.webp.asset.json";
import demonstrativo5 from "@/assets/catalogo-optimized/pagina-11-640.webp.asset.json";
import receber480 from "@/assets/catalogo-optimized/receber-480.webp.asset.json";
import receber720 from "@/assets/catalogo-optimized/receber-720.webp.asset.json";
import bonus1Imagem from "@/assets/catalogo-optimized/bonus-1-540.webp.asset.json";
import bonus2Imagem from "@/assets/catalogo-optimized/bonus-2-540.webp.asset.json";
import bonus3Imagem from "@/assets/catalogo-optimized/bonus-3-540.webp.asset.json";
import bonus4Imagem from "@/assets/catalogo-optimized/bonus-4-540.webp.asset.json";
import planoBasico480 from "@/assets/catalogo-optimized/plano-basico-480.webp.asset.json";
import planoBasico720 from "@/assets/catalogo-optimized/plano-basico-720.webp.asset.json";
import planoCompleto480 from "@/assets/catalogo-optimized/plano-completo-480.webp.asset.json";
import planoCompleto720 from "@/assets/catalogo-optimized/plano-completo-720.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escolha & Troca — Decisões Alimentares" },
      {
        name: "description",
        content: "Compare opções, encontre alternativas e faça escolhas alimentares mais claras no dia a dia.",
      },
      { property: "og:title", content: "Escolha & Troca — Decisões Alimentares" },
      {
        property: "og:description",
        content: "Uma cartilha visual para comparar opções e fazer escolhas alimentares mais claras.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Escolha & Troca — Decisões Alimentares" },
      {
        name: "twitter:description",
        content: "Uma cartilha visual para comparar opções e fazer escolhas alimentares mais claras.",
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

const CHECKOUT_BASICO = "https://pay.cakto.com.br/94hc3rk_1115511";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/39omqox";
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
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#A8C686]" />
      <span className="text-[#A8C686] text-xs tracking-[0.4em]">✦</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#A8C686]" />
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
    <section className="relative overflow-hidden py-14 md:py-20 bg-[#142019] border-y border-[#A8C686]/15">
      <div className="text-center px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Veja os <span className="text-gradient-gold">materiais</span> que você vai receber
        </h2>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#142019] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#142019] to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[60vw] sm:w-[42vw] md:w-[26vw] lg:w-[19vw] xl:w-[17vw]">
              <div className="rounded-lg overflow-hidden border border-[#A8C686]/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-[#0C120E]">
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
  { src: demonstrativo1.url, alt: "Página demonstrativa sobre babosa" },
  { src: demonstrativo2.url, alt: "Página demonstrativa sobre gengibre" },
  { src: demonstrativo3.url, alt: "Página demonstrativa sobre calêndula" },
  { src: demonstrativo4.url, alt: "Página demonstrativa sobre lavanda" },
  { src: demonstrativo5.url, alt: "Página demonstrativa sobre arnica" },
];

function DemonstrativoCarousel() {
  const loop = [...DEMONSTRATIVO_IMAGES, ...DEMONSTRATIVO_IMAGES];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#0D1510] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#0D1510] to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((img, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[62vw] sm:w-[44vw] md:w-[28vw] lg:w-[20vw] xl:w-[18vw]">
              <div className="rounded-lg overflow-hidden border border-[#A8C686]/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-[#0C120E]">
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
        <span className="font-medium text-[#F1F3E8] pr-4">{q}</span>
        <span className={`text-[#A8C686] text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-[#F1F3E8]/70 leading-relaxed">{a}</p>
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
    <main className="min-h-screen bg-[#101812] text-[#F1F3E8] overflow-x-hidden">
      {/* 1 · TOP OFFER BAR */}
      <TopOfferBar />

      {/* 2 · HERO */}
      <Section className="pt-16 md:pt-24">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#F1F3E8]">
            Compare opções, encontre alternativas e faça escolhas alimentares mais claras no dia a dia.
          </h1>

          <div className="max-w-xl mx-auto mb-8">
             <img
                src={hero480.url}
                srcSet={`${hero480.url} 480w, ${hero720.url} 720w`}
               sizes="(max-width: 640px) calc(100vw - 48px), 576px"
               width="1080"
               height="1080"
               alt="Escolha e Troca"
               loading="eager"
               fetchPriority="high"
               decoding="sync"
               className="w-full h-auto subtle-float"
             />
          </div>

          <p className="text-[#F1F3E8]/80 text-base md:text-lg leading-relaxed mb-8">
            Uma cartilha visual para você saber o que observar, comparar e trocar quando estiver no supermercado, em casa, no restaurante ou no delivery — sem precisar decorar listas enormes ou ficar procurando informações toda vez.
          </p>

          <div>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
            <p className="text-xs text-[#F1F3E8]/50 mt-4 tracking-wide">📩 Você recebe tudo na hora, direto no seu e-mail.</p>
          </div>
        </div>
      </Section>

      {/* 3 · GALLERY MARQUEE */}
      <GalleryMarquee />

      {/* 4 · MATERIAIS / FEATURES */}
      <Section className="bg-[#0D1510]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Os materiais do <span className="text-gradient-gold">ESCOLHA &amp; TROCA</span> possuem
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: "⚖️", t: "COMPARAÇÕES A × B", d: "Coloque duas opções lado a lado e veja quais critérios observar antes de decidir." },
            { i: "👀", t: "VISUAL E FÁCIL DE CONSULTAR", d: "As informações são organizadas em guias, tabelas, checklists e comparações para você encontrar rapidamente o que procura." },
            { i: "🔄", t: "ALTERNATIVAS PARA QUANDO NÃO ENCONTRAR", d: "Se a primeira opção não estiver disponível, você encontra uma lógica simples para procurar outra alternativa e comparar novamente." },
            { i: "⚡", t: "DECISÃO RÁPIDA", d: "Quando você estiver com pressa, use o Modo 30 Segundos para organizar sua decisão sem precisar analisar tudo novamente." },
          ].map((c) => (
            <div key={c.t} className="premium-card rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#A8C686]/10 border border-[#A8C686]/30 flex items-center justify-center text-2xl mb-4">{c.i}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#F1F3E8]">{c.t}</h3>
              <p className="text-sm text-[#F1F3E8]/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <CTAButton onClick={scrollToOffer}>EU QUERO O ESCOLHA &amp; TROCA</CTAButton>
        </div>
      </Section>

      {/* 5 · DEMONSTRATIVO CAROUSEL */}
      <Section className="bg-[#0D1510] py-10 md:py-14">
        <DemonstrativoCarousel />
      </Section>

      {/* 6 · URGENCY BANNER */}
      <Section>
        <div className="relative gold-border rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, rgba(168,198,134,0.28), transparent 60%)" }} />
          <div className="relative">
            <GoldOrnament />
            <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight mb-4">
              Quantas vezes você já ficou em dúvida diante de duas opções e não soube qual escolher?
            </h2>
            <p className="text-[#F1F3E8]/70 mb-8">Aproveite a oferta por tempo limitado.</p>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
          </div>
        </div>
      </Section>

      {/* 7 · FOR WHOM */}
      <Section className="bg-[#142019] border-y border-[#A8C686]/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Este material é ideal para <span className="text-gradient-gold">você que deseja:</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Comparar opções alimentares sem depender de listas decoradas" },
            { t: "Saber o que observar antes de escolher um produto ou refeição" },
            { t: "Parar de ficar procurando informações diferentes toda vez que surgir uma dúvida" },
            { t: "Encontrar alternativas quando a primeira opção não estiver disponível" },
            { t: "Ter uma ferramenta visual para consultar no supermercado, em casa, no restaurante ou no delivery" },
            { t: "Tomar decisões alimentares com mais clareza no dia a dia" },
          ].map((c) => (
            <article key={c.t} className="premium-card rounded-xl p-6">
              <CheckIcon className="mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-[#F1F3E8]">{c.t}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* 8 · EVERYTHING YOU RECEIVE */}
      <Section className="bg-[#0D1510]">
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
              alt="Escolha e Troca com quatro bônus exclusivos"
              loading="lazy"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] text-xs font-semibold mb-4">⚡ ACESSO IMEDIATO</span>
            <p className="text-[#F1F3E8]/85 mb-2">Você não precisa passar horas estudando informações antes de tomar uma decisão.</p>
            <p className="text-[#F1F3E8]/70 mb-6">Você encontra a situação que está vivendo, consulta os critérios apresentados, compara as opções e decide.</p>
            <h3 className="text-2xl font-semibold mb-5 text-gradient-gold">ESCOLHA &amp; TROCA</h3>
            <ul className="space-y-3">
            {[
              "Guias organizados por categorias",
              "Guia de Pães",
              "Guia de Bebidas",
              "Guia de Iogurtes & Derivados",
              "Guia de Cereais & Acompanhamentos",
              "Guia de Lanches",
              "Guia de Café da Manhã",
              "Guia de Almoço",
              "Guia de Jantar",
              "Guia de Sobremesas",
              "Guia de Restaurante",
              "Guia de Delivery",
              "Comparador A × B",
              "Tabela de critérios de comparação",
              "Guia “O Que Devo Observar?”",
              "Guia “Não Encontrei”",
              "Tabela de Trocas",
              "Modo 30 Segundos",
              "Cartão de Decisão Rápida",
              "Mapa Rápido da Cartilha",
              "Página de Minhas Decisões",
              "Consulta simples e visual",
              "Acesso imediato",
            ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[#F1F3E8]/90">
                  <CheckIcon />{b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 9 · BONUS */}
      <Section className="bg-[#142019] border-y border-[#A8C686]/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[#A8C686] text-sm tracking-[0.3em] uppercase mb-2">E NÃO PARA POR AÍ...</div>
          <p className="text-[#F1F3E8]/70 text-sm tracking-[0.2em] uppercase mb-3">VOCÊ TAMBÉM VAI RECEBER</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            🎁 <span className="text-gradient-gold">4 Bônus Exclusivos</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
               img: bonus1Imagem.url,
               t: "GUIA DE MOLHOS & TEMPEROS",
               d: "Um guia visual para observar, comparar e encontrar alternativas entre molhos, temperos e acompanhamentos.",
            },
            {
               img: bonus2Imagem.url,
              t: "GUIA DE FAST-FOOD",
              d: "Um guia para analisar as opções disponíveis, comparar escolhas e encontrar possíveis alternativas quando estiver em uma situação de fast-food.",
            },
            {
               img: bonus3Imagem.url,
              t: "CHECKLIST DE SUPERMERCADO",
              d: "Uma lista organizada por categorias para levar às compras, conferir o que você precisa e facilitar suas decisões diante das opções disponíveis.",
            },
            {
               img: bonus4Imagem.url,
              t: "RAIO-X DO RÓTULO",
              d: "Um guia visual para localizar as principais informações do rótulo e comparar produtos semelhantes com mais organização.",
            },
          ].map((b, i) => (
            <div key={b.t} className="premium-card rounded-xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-[#1B2A20] to-[#0C120E]">
                <img src={b.img} alt={b.t} width="540" height="540" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[#A8C686] text-[10px] tracking-[0.3em] uppercase mb-2">BÔNUS #{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{b.t}</h3>
                <p className="text-sm text-[#F1F3E8]/65 leading-relaxed mb-4">{b.d}</p>
                <div className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/35 text-xs">
                  <span className="text-[#F1F3E8]/60">Valor: <s>R$29</s></span>
                  <span className="text-[#22C55E] font-bold">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 · PLANS / OFERTA */}
      <Section id="oferta" className="bg-[#0D1510]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#F87171] text-xs md:text-sm font-semibold tracking-wider mb-5">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold">Escolha a opção ideal para você</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* PLANO BÁSICO */}
          <article className="premium-card rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-wider text-[#F1F3E8]">PLANO BÁSICO</h3>
            <div className="mb-6">
               <img src={planoBasico480.url} srcSet={`${planoBasico480.url} 480w, ${planoBasico720.url} 720w`} sizes="(max-width: 1023px) calc(100vw - 112px), 448px" width="720" height="720" alt="Mockup do Plano Básico" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <p className="text-[#F1F3E8]/80 mb-4 font-medium">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {["ESCOLHA & TROCA"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#F1F3E8]/85 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-[#F1F3E8]/60 mb-1">De <s className="text-[#EF4444]">R$29,90</s> por:</div>
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#22C55E" }}>R$19,90</div>
              <div className="text-sm text-[#F1F3E8]/70 mt-1">ou 2x de R$9,95 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#A8C686]/10 border border-[#A8C686]/30 text-[#A8C686] text-xs">💰 Você economiza R$10,00</div>
            </div>
            <CTAButton href={CHECKOUT_BASICO} variant="ghost">QUERO O BÁSICO</CTAButton>
          </article>

          {/* PLANO COMPLETO */}
          <article className="rounded-2xl p-8 flex flex-col relative gold-border shadow-gold gold-glow">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 tracking-wider text-gradient-gold mt-3">PLANO COMPLETO</h3>
            <p className="text-center text-[#F1F3E8]/75 text-sm mb-5">⚡ 4x mais conteúdos</p>
            <div className="mb-6">
               <img src={planoCompleto480.url} srcSet={`${planoCompleto480.url} 480w, ${planoCompleto720.url} 720w`} sizes="(max-width: 1023px) calc(100vw - 112px), 448px" width="720" height="720" alt="Mockup do Plano Completo" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <p className="text-[#F1F3E8]/85 mb-4 font-medium">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {[
                "ESCOLHA & TROCA",
                "Guias por categorias",
                "Comparações A × B",
                "Guia de Pães",
                "Guia de Bebidas",
                "Guia de Iogurtes & Derivados",
                "Guia de Cereais & Acompanhamentos",
                "Guia de Lanches",
                "Guia de Refeições",
                "Guia de Restaurante",
                "Guia de Delivery",
                "Guia “O Que Devo Observar?”",
                "Guia “Não Encontrei”",
                "Tabela de Trocas",
                "Modo 30 Segundos",
                "Cartão de Decisão Rápida",
                "Consulta visual",
                "Acesso imediato",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#F1F3E8]/90 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}
              {[
                "Bônus #1 — Guia de Molhos & Temperos",
                "Bônus #2 — Guia de Fast-Food",
                "Bônus #3 — Checklist de Supermercado",
                "Bônus #4 — Raio-X do Rótulo",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#F1F3E8]/90 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#A8C686]/15 border border-[#A8C686]/40 flex items-center justify-center text-[#A8C686] text-sm">🎁</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-[#F1F3E8]/60 mb-1">De <s className="text-[#EF4444]">R$49,90</s> por:</div>
              <div className="text-5xl md:text-6xl font-bold" style={{ color: "#22C55E" }}>R$29,90</div>
              <div className="text-sm text-[#F1F3E8]/70 mt-1">ou 5x de R$5,98 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#A8C686]/10 border border-[#A8C686]/30 text-[#A8C686] text-xs">💰 Você economiza R$20,00</div>
            </div>
            <CTAButton href={CHECKOUT_COMPLETO}>
              <span className="text-center">QUERO O PLANO COMPLETO</span>
            </CTAButton>
            <p className="text-xs text-[#F1F3E8]/50 mt-4 text-center tracking-wide">🔒 Compra 100% segura&nbsp; • &nbsp;Aceso imediato</p>
          </article>
        </div>

      </Section>

      {/* 11 · GUARANTEE */}
      <Section className="bg-[#0D1510]">
        <div className="max-w-3xl mx-auto text-center premium-card rounded-2xl p-10 md:p-14">
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#A8C686]/10 border border-[#A8C686]/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#A8C686]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285v0Z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#A8C686] uppercase mb-1">100% Garantia</div>
              <div className="text-3xl font-bold text-gradient-gold">VITALÍCIA</div>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Você tem garantia vitalícia no ESCOLHA &amp; TROCA.</h2>
          <p className="text-[#F1F3E8]/75 leading-relaxed max-w-xl mx-auto mb-3">Se o material não fizer sentido para o que você procura, não facilitar suas consultas ou você simplesmente decidir que não quer continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta.</p>
          <p className="text-[#A8C686] font-semibold tracking-wide mb-2">Sem burocracia.</p>
          <p className="text-[#F1F3E8]/85 leading-relaxed max-w-xl mx-auto">O risco fica do nosso lado.</p>
        </div>
      </Section>

      {/* 12 · HOW ACCESS WORKS */}
      <Section className="bg-[#142019] border-y border-[#A8C686]/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">Como é o Acesso</h2>
          <p className="text-[#A8C686] text-xs tracking-[0.4em] uppercase">(PASSO A PASSO)</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: "🛒", t: "Conclua sua compra", d: "Depois que o pagamento for confirmado, seu acesso será liberado." },
            { i: "📩", t: "Entre na área de membros", d: "Os materiais ficarão organizados em um único lugar para você acessar." },
            { i: "📱", t: "Acesse os materiais", items: ["ESCOLHA & TROCA", "Bônus 01 — Guia de Molhos & Temperos", "Bônus 02 — Guia de Fast-Food", "Bônus 03 — Checklist de Supermercado", "Bônus 04 — Raio-X do Rótulo"] },
            { i: "⚖️", t: "Comece a escolher", items: ["Identifique o que você está escolhendo", "Observe os critérios apresentados", "Compare as opções", "Procure uma alternativa quando necessário", "Tome sua decisão", "Volte à cartilha sempre que surgir uma nova dúvida"] },
          ].map((s, i) => (
            <div key={s.t} className="premium-card rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#A8C686]/10 border border-[#A8C686]/30 flex items-center justify-center text-2xl mx-auto mb-4">{s.i}</div>
              <div className="text-[#A8C686] text-[10px] tracking-[0.3em] uppercase mb-2">0{i + 1}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#F1F3E8]">{s.t}</h3>
              {s.d && <p className="text-sm text-[#F1F3E8]/65 leading-relaxed">{s.d}</p>}
              {s.items && (
                <ul className="space-y-2 text-sm text-[#F1F3E8]/70 text-left inline-block">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-[#A8C686]">✓</span>
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
            { q: "O que é o ESCOLHA & TROCA?", a: "É uma cartilha visual de decisões alimentares criada para ajudar você a observar, comparar e encontrar alternativas diante das opções disponíveis no dia a dia. Ela reúne guias, comparações, checklists e ferramentas de consulta para situações como supermercado, refeições, restaurante e delivery." },
            { q: "O material serve para quem não entende muito de alimentação?", a: "Sim. A proposta é justamente organizar as informações de maneira simples e visual. Você não precisa dominar termos técnicos para utilizar os guias. A cartilha mostra o que observar e como comparar dentro das situações apresentadas." },
            { q: "Posso acessar pelo celular?", a: "Sim. O material foi pensado para ser visual e fácil de consultar, inclusive pelo celular. Você também poderá acessar pelo computador ou tablet." },
            { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento, as instruções de acesso são enviadas para você." },
            { q: "Os materiais podem ser impressos?", a: "Sim. Os materiais podem ser utilizados digitalmente e também podem ser impressos para consulta, de acordo com as configurações do seu arquivo e impressora." },
            { q: "Os 4 bônus já estão incluídos?", a: "Sim. No Plano Completo, você recebe os quatro bônus sem pagamento adicional: Guia de Molhos & Temperos, Guia de Fast-Food, Checklist de Supermercado e Raio-X do Rótulo." },
            { q: "O acesso possui mensalidade?", a: "Não. É uma compra única. Você não precisa pagar mensalidade para continuar acessando o material." },
            { q: "Posso revisar o material sempre que quiser?", a: "Sim. Depois de adquirir o produto, você poderá voltar aos materiais sempre que precisar consultar uma categoria, comparação, checklist ou guia." },
            { q: "Como funciona a garantia?", a: "Você possui garantia vitalícia. Se o material não fizer sentido para o que você procura, não facilitar suas consultas ou você decidir que não deseja continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta." },
            { q: "Preciso ter ingredientes específicos para usar o guia?", a: "Não. A proposta do ESCOLHA & TROCA é justamente ajudar você a tomar decisões entre as opções que estão disponíveis. Quando uma opção não estiver disponível, você pode utilizar a seção de trocas para procurar uma alternativa e comparar novamente." },
          ].map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <Section className="text-center">
        <GoldOrnament />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto leading-tight mb-8">
          <span className="text-gradient-gold">Compare opções, encontre alternativas</span> e faça escolhas alimentares mais claras no dia a dia.
        </h2>
        <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
        <div className="mt-16 pt-8 border-t border-[#A8C686]/15 max-w-3xl mx-auto space-y-4 text-xs md:text-[13px] text-[#F1F3E8]/45 leading-relaxed text-center">
          <p className="text-center text-[#F1F3E8]/55 tracking-wider">Copyright © 2026 | Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.</p>
          <p>O ESCOLHA &amp; TROCA é um material digital independente, criado para fins educacionais e práticos relacionados à organização de informações e decisões alimentares.</p>
          <p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais, sujeitando os infratores às sanções previstas na legislação aplicável.</p>
        </div>
      </Section>
    </main>
  );
}
