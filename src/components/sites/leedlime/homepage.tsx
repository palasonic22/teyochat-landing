/* eslint-disable @next/next/no-img-element -- Local reference art is intentionally rendered at source crop sizes. */
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  Globe,
  Layers,
  ListFilter,
  Search,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import { copy, destinations } from "./content";
import {
  AiMockup,
  DashboardMockup,
  DifferentiationMockup,
  HeroMockup,
  MatchRows,
  MessageMockup,
} from "./mockups";

function Cta({
  label = copy.hero.cta,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a href={destinations.signup} className={`primary-button ${className}`}>
      {label}
      <ArrowRight size={19} />
    </a>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow mb-6 text-foreground/50">{children}</div>;
}

function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-stretch border-b border-border lg:flex-row">
      <div className="relative z-10 flex w-full flex-col justify-center border-b border-border px-8 pt-24 pb-24 md:px-12 md:pb-32 lg:w-1/2 lg:border-r lg:border-b-0">
        <div className="reveal max-w-2xl lg:ml-auto">
          <h1 className="mb-6 font-serif text-5xl leading-[1.05] font-normal tracking-[-.02em] md:text-6xl lg:text-[72px]">
            {copy.hero.heading}
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed font-light text-foreground/70 md:text-xl">
            {copy.hero.body}
          </p>
          <div className="mb-6">
            <Cta className="w-full border border-neutral-800 ring-2 ring-foreground sm:w-auto" />
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-foreground/70 md:gap-6">
            {copy.hero.notes.map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c5e69e] text-[#55841b]">
                  <Check size={12} />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-muted/20 p-8 md:p-12 lg:min-h-0 lg:w-1/2 lg:p-16">
        <img
          src="/sites/leedlime/images/hills-smudge-art.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-90 saturate-90"
        />
        <div className="absolute inset-0 bg-background/40 mix-blend-overlay" />
        <HeroMockup />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="min-h-[273px] overflow-hidden border-y border-white/5 bg-neutral-950 pt-10 text-white">
      <p className="eyebrow text-center text-white/40">Lorem ipsum dolor sit</p>
      <div className="relative my-10 overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track">
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={i}
              className="flex h-14 w-[170px] items-center justify-center gap-2 whitespace-nowrap text-xl font-semibold text-white/75"
            >
              <span className="text-2xl">
                {["✳", "◉", "▱", "◒", "✺", "▰"][i % 6]}
              </span>
              {
                [
                  "Lorem ipsum",
                  "Dolor amet",
                  "Consectetur",
                  "Ipsum sit",
                  "Adipiscing",
                  "Lorem dolor",
                ][i % 6]
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mb-16 text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="section-heading mx-auto max-w-2xl">
          {copy.workflow.heading}
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {copy.workflow.cards.map((c, i) => (
          <article
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_4px_20px_#00000008]"
          >
            <div className="relative flex h-[250px] items-center justify-center overflow-hidden border-b border-black/3">
              <img
                src={`/sites/leedlime/images/painting${i + 1}.jpg`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#fafafa] to-transparent" />
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                {i === 0 ? (
                  <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm shadow-xl">
                    <Globe size={16} className="text-blue-200" />
                    <span className="font-mono font-medium">
                      loremipsum.com
                    </span>
                  </div>
                ) : i === 1 ? (
                  <MatchRows />
                ) : (
                  <MessageMockup />
                )}
              </div>
            </div>
            <div className="flex-1 px-8 pt-4 pb-8 text-center md:px-10 md:pb-10">
              <h3 className="mb-3 text-[17px] font-bold tracking-tight">
                {c.title}
              </h3>
              <p className="text-[13px] leading-relaxed font-medium text-foreground/60">
                {c.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const featureIcons = [
  Target,
  Search,
  ShieldCheck,
  ListFilter,
  Download,
  Layers,
];
const featureColors = [
  "bg-blue-500/10 text-blue-600",
  "bg-indigo-500/10 text-indigo-600",
  "bg-purple-500/10 text-purple-600",
  "bg-lime-500/10 text-lime-600",
  "bg-orange-500/10 text-orange-600",
  "bg-rose-500/10 text-rose-600",
];
function Platform() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-border py-16 md:py-24"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
      <div className="relative mx-auto mb-12 max-w-3xl px-6 text-center md:px-12">
        <Eyebrow>Lorem ipsum dolor</Eyebrow>
        <h2 className="section-heading mx-auto max-w-2xl">
          {copy.platform.heading}
        </h2>
        <a
          href={destinations.signup}
          className="mt-5 inline-flex rounded-sm bg-foreground px-6 py-3 text-base font-medium text-background shadow-lg hover:opacity-90"
        >
          {copy.platform.cta}
        </a>
      </div>
      <div className="relative mb-16 border-y border-border px-6 py-8 md:mb-24 md:px-12 md:py-24">
        <img
          src="/sites/leedlime/images/field-paint.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="relative rounded-[14px] border border-white/40 bg-white/10 p-1 backdrop-blur-sm md:rounded-[20px] md:p-1.5">
          <DashboardMockup />
        </div>
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:gap-8 md:px-12 lg:grid-cols-3">
        {copy.features.map((f, i) => {
          const Icon = featureIcons[i];
          return (
            <article
              key={i}
              className="rounded-2xl border border-black/5 bg-white p-8"
            >
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${featureColors[i]}`}
              >
                <Icon size={21} />
              </div>
              <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
                {i === 2 && (
                  <span className="rounded-full bg-purple-50 px-2 py-1 text-[8px] font-semibold tracking-wider text-purple-500 uppercase">
                    Lorem ipsum
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-foreground/60">
                {f.body}
              </p>
              <a
                href="#features"
                className="mt-6 flex items-center gap-1.5 text-[13px] font-bold text-foreground/80 transition-all hover:gap-2"
              >
                Lorem ipsum <span className="text-lime-600">→</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="border-b border-border px-8 py-16 md:px-12 md:py-24">
      <div className="mb-20 max-w-2xl">
        <Eyebrow>Lorem ipsum</Eyebrow>
        <h2 className="section-heading mb-6 text-4xl">{copy.why.heading}</h2>
        <p className="max-w-lg text-lg leading-relaxed text-foreground/60">
          {copy.why.body}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
        {copy.why.cards.map((c, i) => (
          <article key={i} className="min-w-0">
            <DifferentiationMockup kind={i ? "sync" : "match"} />
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`rounded border p-1 ${i ? "border-purple-100 bg-purple-50 text-purple-400" : "border-blue-100 bg-blue-50 text-blue-500"}`}
              >
                {i ? <Layers size={14} /> : <Target size={14} />}
              </span>
              <h3 className="font-serif text-2xl tracking-tight">{c.title}</h3>
            </div>
            <p className="leading-relaxed font-light text-foreground/70">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="border-t border-white/5 bg-neutral-950 px-6 py-16 text-white md:px-12 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="eyebrow mb-6 text-white/40">Lorem ipsum</div>
        <h2 className="section-heading mb-6 max-w-3xl">{copy.ai.heading}</h2>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
          {copy.ai.body}
        </p>
        <a
          href={destinations.signup}
          className="mb-16 rounded-sm bg-neutral-100 px-8 py-3.5 font-medium text-foreground transition-transform hover:-translate-y-0.5"
        >
          Lorem ipsum sit
        </a>
        <AiMockup />
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="border-b border-border px-6 pt-16 pb-16 text-center md:px-12 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1000px]">
        <blockquote className="mb-12 font-serif text-2xl leading-tight tracking-tight md:text-4xl md:leading-12 lg:text-5xl">
          {copy.quote}
        </blockquote>
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-[#dde1d5] text-[#78846b]">
          <UserRound size={45} strokeWidth={1} />
        </div>
        <p className="text-sm font-medium">Lorem I.</p>
        <p className="text-sm font-light text-foreground/50">Lorem, Ipsum</p>
        <div className="mt-20">
          <h3 className="mb-8 font-serif text-2xl tracking-tight md:text-3xl">
            Lorem ipsum sit?
          </h3>
          <Cta label="Lorem ipsum dolor sit amet" className="text-base" />
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Lorem",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    monthly: 20,
    yearly: 17,
    annual: 200,
    count: 100,
    seats: 1,
    personas: 1,
  },
  {
    name: "Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    monthly: 39,
    yearly: 33,
    annual: 390,
    count: 200,
    seats: 2,
    personas: 3,
  },
  {
    name: "Sit",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    monthly: 99,
    yearly: 83,
    annual: 990,
    count: 1000,
    seats: 5,
    personas: 5,
  },
];
function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="pt-32">
      <div className="mb-16 px-4 text-center md:px-12">
        <h2 className="section-heading mb-6 text-4xl font-medium">
          {copy.pricing.heading}
        </h2>
        <p className="mx-auto max-w-xl text-lg font-light text-muted-foreground">
          {copy.pricing.body}
        </p>
      </div>
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-full border border-border p-1">
          <button
            type="button"
            aria-pressed={!yearly}
            onClick={() => setYearly(false)}
            className={`rounded-full px-6 py-2.5 text-sm transition-colors ${!yearly ? "bg-muted font-semibold" : "font-medium text-muted-foreground"}`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={yearly}
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm transition-colors ${yearly ? "bg-muted font-semibold" : "font-medium text-muted-foreground"}`}
          >
            Yearly{" "}
            <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-bold tracking-wider text-background uppercase">
              2 Months Off
            </span>
          </button>
        </div>
      </div>
      <div className="grid gap-px border-y border-border bg-border md:grid-cols-3">
        {plans.map((p, i) => (
          <article
            key={p.name}
            className={`relative border-t-8 bg-background px-10 py-10 md:px-12 lg:px-16 lg:py-16 ${i === 1 ? "border-lime-500/90" : "border-background"}`}
          >
            {i === 1 && (
              <span className="absolute top-4 right-5 rounded-full border border-foreground/20 px-3 py-1 text-[10px] tracking-wide uppercase">
                Lorem ipsum
              </span>
            )}
            <div className="mb-8">
              <h3 className="mb-2 font-serif text-4xl font-medium">{p.name}</h3>
              <p className="h-10 text-sm font-light text-muted-foreground">
                {p.desc}
              </p>
            </div>
            <div className="mb-8">
              <p className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-medium tracking-tight lg:text-5xl">
                  ${yearly ? p.yearly : p.monthly}
                </span>
                <span className="text-sm font-light text-muted-foreground">
                  /month
                </span>
              </p>
              <p className="mt-1 h-6 text-xs font-light text-muted-foreground">
                {yearly ? `Lorem ipsum • $${p.annual}/yr` : "Lorem ipsum dolor"}
              </p>
            </div>
            <a
              href={destinations.signup}
              className={`mb-10 flex w-full justify-center rounded-md border px-3 py-4 font-medium transition-transform hover:-translate-y-0.5 ${i === 1 ? "border-foreground bg-foreground text-background" : "border-neutral-300"}`}
            >
              Lorem ipsum dolor
            </a>
            <ul className="space-y-4">
              {[
                `${p.count} Lorem / ipsum`,
                "Lorem ipsum",
                `${p.personas} Lorem ipsum (sit)`,
                `${p.seats} Lorem`,
                ...(i === 2
                  ? ["Lorem / ipsum amet", "Lorem ipsum (Dolor / Amet)"]
                  : []),
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 border-b border-dashed border-border pb-4 text-sm leading-snug font-light text-foreground/80 last:border-0 last:pb-0"
                >
                  <Check size={16} className="shrink-0 text-foreground/50" />
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section
      id="faq"
      className="border-b border-border px-8 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto mb-16 max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-serif text-3xl leading-none tracking-tight md:text-4xl">
          {copy.faq.heading}
        </h2>
      </div>
      <div className="mx-auto max-w-3xl border-t border-border">
        {copy.faq.questions.map((q, i) => (
          <div key={i} className="border-b border-border">
            <h3>
              <button
                id={`faq-question-${i}`}
                aria-expanded={active === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setActive(active === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium"
              >
                <span>{q}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-foreground/40 transition-transform ${active === i ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              hidden={active !== i}
              className="pr-8 pb-8 text-base leading-relaxed font-light text-foreground/60"
            >
              {copy.faq.answers[i % 3]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const aiProviders = [
  { name: "ChatGPT", icon: "chatgpt", url: "https://chatgpt.com/" },
  { name: "Claude", icon: "claude-ai", url: "https://claude.ai/new" },
  { name: "Gemini", icon: "gemini-ai", url: "https://gemini.google.com/app" },
  {
    name: "Perplexity",
    icon: "perplexity-ai",
    url: "https://www.perplexity.ai/search",
  },
  { name: "Grok", icon: "grok", url: "https://grok.com/" },
];
function AskAi() {
  const [copied, setCopied] = useState(false);
  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <section className="flex flex-col border-b border-neutral-800 bg-foreground text-background lg:flex-row">
      <div className="flex w-full flex-col justify-center p-12 lg:w-1/2 lg:p-16 xl:p-24">
        <div className="eyebrow mb-6 text-background/50">Ask AI</div>
        <h2 className="section-heading mb-6 text-4xl font-medium">
          {copy.ask.heading}
        </h2>
        <p className="max-w-md text-lg leading-relaxed font-light text-background/70 md:text-xl">
          {copy.ask.body}
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-px border-t border-neutral-800 bg-neutral-800 sm:grid-cols-3 lg:w-1/2 lg:border-t-0 lg:border-l">
        {aiProviders.map((p) => (
          <a
            key={p.name}
            target="_blank"
            rel="noopener noreferrer"
            href={p.url}
            className="group flex flex-col items-center justify-center gap-2 bg-foreground px-2 py-8 transition-colors hover:bg-[#252321]"
          >
            <img
              src={`/sites/leedlime/icons/${p.icon}.png`}
              alt=""
              className="h-10 w-10 object-contain opacity-80 brightness-0 invert transition-transform group-hover:scale-105"
            />
            <span className="text-xs font-medium sm:text-sm">Ask {p.name}</span>
          </a>
        ))}
        <button
          onClick={copyPrompt}
          aria-label={copied ? "Copied" : "Copy prompt"}
          className="flex flex-col items-center justify-center gap-2 bg-foreground px-2 py-8 text-sm font-medium hover:bg-[#252321]"
        >
          {copied ? <Check size={35} /> : <Copy size={35} />}
          <span role="status">{copied ? "Copied" : "Copy prompt"}</span>
        </button>
        <a
          href={destinations.call}
          className="col-span-2 bg-foreground p-4 text-center text-xs font-medium hover:bg-[#252321] sm:col-span-3 sm:text-sm lg:p-6"
        >
          Talk to a human
        </a>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-8 py-32 text-center md:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <img
          src="/sites/leedlime/images/clouds-painting.jpg"
          alt=""
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent" />
      </div>
      <div className="relative mx-auto mt-24 w-full max-w-3xl">
        <h2 className="mt-20 mb-8 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-[64px]">
          {copy.final.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-light text-balance text-foreground/60 md:text-xl">
          {copy.final.body}
        </p>
        <Cta className="w-full px-10 py-5 sm:w-auto" />
      </div>
    </section>
  );
}

export function Homepage() {
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = main.current?.querySelectorAll(
      "section:not(:first-child) h2, section article, blockquote",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    elements?.forEach((element) => {
      element.classList.add("observe-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <main ref={main}>
      <Hero />
      <TrustStrip />
      <Workflow />
      <Platform />
      <Why />
      <AiSection />
      <Founder />
      <Pricing />
      <Faq />
      <AskAi />
      <FinalCta />
    </main>
  );
}
