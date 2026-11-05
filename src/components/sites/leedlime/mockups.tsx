"use client";

import { useEffect, useState } from "react";
import {
  ArrowUp,
  Bell,
  Check,
  CircleHelp,
  Code2,
  FileText,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  Lightbulb,
  Paperclip,
  Plus,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { demoPeople } from "./content";

export function HeroMockup() {
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    if (!searching) return;
    const timer = setTimeout(() => setSearching(false), 1400);
    return () => clearTimeout(timer);
  }, [searching]);
  function exportRows() {
    const blob = new Blob(
      [
        "Name,Role,Company\n" +
          demoPeople.map((p) => `${p.name},${p.role},${p.company}`).join("\n"),
      ],
      { type: "text/csv" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "prototype-demo.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="relative mx-auto mt-12 flex min-h-[400px] w-full max-w-[560px] flex-col justify-start py-12 lg:mt-0">
      <div className="product-shadow relative z-10 mt-24 ml-auto w-[95%] rounded-2xl border border-white/40 bg-white/10 p-1.5 backdrop-blur-sm">
        <div className="overflow-hidden rounded-xl border border-black/5 bg-[#fafafa]">
          <div className="flex h-12 items-center justify-between border-b border-black/5 px-4">
            <span className="flex items-center gap-3 text-[11px] tracking-widest uppercase">
              <span className="h-4 w-4 rounded bg-foreground p-1">
                <span className="block h-2 w-2 rounded-xs bg-background" />
              </span>
              Lorem ipsum
            </span>
            <span className="flex items-center gap-3 text-foreground/40">
              <Bell size={12} />
              <CircleHelp size={12} />
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-[9px]">
                LI
              </span>
            </span>
          </div>
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="mb-0.5 text-sm font-medium tracking-tight">
                  Lorem ipsum
                </h2>
                <p className="text-[10px] text-foreground/50">
                  Lorem ipsum: <strong className="font-medium">1,482</strong>{" "}
                  dolor sit amet
                </p>
              </div>
              <button
                onClick={exportRows}
                className="rounded bg-foreground px-2 py-1 text-[10px] text-background"
              >
                Export CSV
              </button>
            </div>
            <div className="mb-2 grid grid-cols-12 gap-3 border-b border-black/5 px-1 pb-2 text-[9px] font-bold tracking-widest uppercase text-foreground/40">
              <span />
              <span className="col-span-5">Lorem</span>
              <span className="col-span-4">Ipsum</span>
              <span className="col-span-2 text-right">Dolor</span>
            </div>
            {demoPeople.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-12 items-center gap-3 rounded-md px-1 py-2 hover:bg-black/5"
              >
                <input
                  type="checkbox"
                  aria-label={`Select ${p.name}`}
                  className="h-3 w-3 accent-lime-600"
                />
                <div className="col-span-5 flex min-w-0 items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-[#1477b9] text-[9px] font-bold text-white">
                    in
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-[11px] font-medium">
                      {p.name}
                    </span>
                    <span className="truncate text-[9px] text-foreground/50">
                      {p.role}
                    </span>
                  </span>
                </div>
                <div className="col-span-4 flex min-w-0 items-center gap-1.5 text-[10px] text-foreground/70">
                  <span className="shrink-0 rounded bg-black/5 p-0.5 text-[8px]">
                    ▦
                  </span>
                  <span className="truncate">{p.company}</span>
                </div>
                <span
                  className={`col-span-2 justify-self-end rounded px-1.5 py-0.5 text-[9px] ${i === 0 ? "bg-blue-500/10 text-blue-700" : i === 2 ? "bg-amber-500/10 text-amber-700" : "bg-lime-500/20 text-lime-800"}`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="float-card absolute top-0 -left-4 z-20 w-[260px] rounded-2xl border border-white/60 bg-white/20 p-1.5 shadow-[0_30px_60px_#0000001a] backdrop-blur-md md:-left-8 md:w-[300px]">
        <div className="rounded-xl border border-black/10 bg-[#fafafa] p-4 shadow-inner">
          <h3 className="mb-4 flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-500" />
            Lorem ipsum dolor
          </h3>
          <label
            htmlFor="demo-website"
            className="mb-2 block text-[9px] font-bold tracking-wider uppercase text-foreground/50"
          >
            Lorem ipsum amet
          </label>
          <div className="mb-5 flex items-center gap-2 rounded-md border border-black/10 bg-black/5 px-3 py-2">
            <Globe size={12} className="text-foreground/30" />
            <input
              id="demo-website"
              defaultValue="lorem.dev"
              className="min-w-0 bg-transparent font-mono text-[11px] outline-none"
            />
          </div>
          <div className="flex items-center justify-between border-t border-black/5 pt-4">
            <span
              role="status"
              className="flex items-center gap-1.5 text-[10px] text-foreground/50"
            >
              <span
                className={`h-3 w-3 rounded-full border-2 border-foreground/20 border-t-foreground/80 ${searching ? "animate-spin" : ""}`}
              />
              {searching ? "Lorem ipsum..." : "Lorem ipsum..."}
            </span>
            <button
              onClick={() => setSearching(true)}
              disabled={searching}
              className="rounded bg-foreground px-3 py-1.5 text-[10px] font-bold text-background disabled:opacity-50"
            >
              {searching ? "..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MatchRows() {
  return (
    <div className="flex w-[260px] max-w-full flex-col gap-2.5 px-4">
      {demoPeople.slice(0, 2).map((p, i) => (
        <div
          key={p.name}
          className="flex items-center justify-between rounded-[14px] border border-black/8 bg-white px-4 py-3 shadow-sm"
        >
          <span className="flex flex-col">
            <span className="text-[13.5px] leading-none font-medium tracking-tight">
              {p.name}
            </span>
            <span className="mt-1 text-[10px] text-black/50">{p.role}</span>
          </span>
          <span
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ${i ? "bg-red-50 text-red-400" : "bg-green-50 text-green-700"}`}
          >
            {i ? "30%" : "98%"} Ipsum{" "}
            {i ? <X size={10} /> : <Check size={10} />}
          </span>
        </div>
      ))}
    </div>
  );
}

export function MessageMockup() {
  return (
    <div className="w-[240px] rounded-xl border border-black/10 bg-white text-left shadow-xl">
      <div className="flex items-center justify-between border-b border-black/5 px-3 py-2.5 text-xs font-bold">
        Lorem ipsum{" "}
        <span className="flex gap-2 text-black/50">
          <Plus size={12} />
          <X size={12} />
        </span>
      </div>
      <div className="flex gap-2.5 border-b border-black/5 px-3 py-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4ddcf] text-xs font-medium">
          LI
        </span>
        <div>
          <p className="text-xs font-bold">
            Lorem Ipsum <span className="font-normal text-black/40">1st</span>
          </p>
          <p className="text-[10px]">Dolor sit amet | Ipsum</p>
        </div>
      </div>
      <div className="p-3">
        <div className="h-[65px] rounded-xl border border-black/5 bg-[#f4f2ee] p-2.5 text-[11px] text-black/50">
          Lorem ipsum...
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-black/5 px-3 py-2">
        <span className="flex items-center gap-2 text-black/50">
          <ImageIcon size={12} />
          <Paperclip size={12} />
          <span className="text-[9px]">GIF</span>
        </span>
        <span className="rounded-full bg-black/10 px-3 py-1 text-[11px] text-black/40">
          Lorem
        </span>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div
      className="flex aspect-[1817/1037] w-full overflow-hidden rounded-[14px] border border-black/5 bg-white text-[clamp(4px,1vw,11px)] shadow-2xl"
      aria-label="Illustrative editable dashboard"
    >
      <aside className="flex w-[21%] shrink-0 flex-col border-r border-black/5 p-[2%]">
        <div className="mb-6 flex items-center gap-1 font-semibold">
          <span className="rounded-full bg-lime-200 p-1">✳</span>Teyochat
        </div>
        {[LayoutDashboard, Users, SlidersHorizontal, Code2].map((Icon, i) => (
          <div
            key={i}
            className={`mb-2 flex items-center gap-2 rounded-md px-2 py-2 ${i === 0 ? "bg-black/5" : ""}`}
          >
            <Icon className="w-[1em]" />
            <span>
              {["Lorem ipsum", "Dolor sit", "Consectetur", "Ipsum amet"][i]}
            </span>
          </div>
        ))}
        <div className="mt-auto space-y-3">
          <div className="rounded bg-black/3 p-3">
            <span className="text-[.8em]">LOREM IPSUM</span>
            <p className="mt-3">13 / 100 ipsum</p>
            <div className="mt-2 h-1 rounded bg-black/5">
              <div className="h-1 w-1/3 rounded bg-lime-600" />
            </div>
          </div>
          <span className="flex gap-2">
            <Settings className="w-[1em]" />
            Lorem ipsum
          </span>
          <span className="flex gap-2">
            <CircleHelp className="w-[1em]" />
            Dolor sit amet
          </span>
          <div className="border-t pt-3">
            Lorem Ipsum
            <br />
            <span className="text-black/40">lorem@example.com</span>
          </div>
        </div>
      </aside>
      <div className="flex-1 p-[3%]">
        <div className="mb-[4%] flex items-center justify-between">
          <span className="text-[1.8em] font-semibold">Lorem ipsum dolor</span>
          <span className="text-black/40">☼</span>
        </div>
        <div className="mb-[3%] grid grid-cols-3 gap-[2%]">
          {["Lorem ipsum", "Dolor sit amet", "Consectetur"].map((t, i) => (
            <div
              key={t}
              className="rounded-lg border border-black/5 p-[10%] shadow-sm"
            >
              <span className="text-[1.5em] text-[#8b83f6]">
                {["♧", "▤", "↗"][i]}
              </span>
              <p className="mt-4 text-black/50">{t}</p>
              <strong className="text-[1.7em]">{[13, 4, 33][i]}</strong>
              <span className="ml-1 text-[.8em]">lorem</span>
            </div>
          ))}
        </div>
        <span className="text-[.8em]">LOREM IPSUM</span>
        <div className="mt-2 mb-4 grid grid-cols-3 gap-2">
          {["Lorem ipsum", "Dolor amet", "Ipsum sit"].map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded border border-black/5 p-[6%] shadow-sm"
            >
              <Users className="w-[1.1em]" />
              <span>
                {t}
                <small className="block text-black/40">
                  Lorem ipsum dolor...
                </small>
              </span>
              <span className="ml-auto">›</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-black/5"
            >
              <div className="border-b border-black/5 p-3 font-medium">
                {i ? "Lorem ipsum" : "Dolor sit amet"}
                <span className="float-right text-[.8em] text-black/40">
                  Lorem
                </span>
              </div>
              {Array.from({ length: 5 }, (_, j) => (
                <div key={j} className="border-b border-black/5 px-3 py-[4%]">
                  <small className="text-black/40">13 ipsum dolor</small>
                  <p className="mt-1 font-medium">{demoPeople[j % 4].name}</p>
                  <p className="mt-0.5 truncate text-[.8em] text-black/40">
                    Lorem ipsum dolor sit amet | Consectetur...
                  </p>
                </div>
              ))}
              <div className="py-3 text-center">Lorem ipsum ›</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DifferentiationMockup({ kind }: { kind: "match" | "sync" }) {
  return (
    <div className="relative mb-8 flex h-[350px] flex-col items-end justify-end overflow-hidden rounded-sm border border-black/4 bg-[#f8f9f8] pt-12 pl-10 sm:h-[380px] sm:pt-14 sm:pl-12">
      <div
        className={`absolute inset-0 scale-110 bg-cover opacity-70 ${kind === "match" ? "bg-[url('/sites/leedlime/images/field-paint.jpg')] bg-left" : "bg-[url('/sites/leedlime/images/hills-smudge-art.jpg')] bg-right"}`}
      />
      <div className="relative h-full w-full translate-x-px translate-y-1 rounded-tl-[20px] border border-white/60 bg-white/40 pt-2 pl-2 backdrop-blur-md">
        <div className="h-full rounded-tl-2xl bg-white p-6 sm:p-7">
          {kind === "match" ? (
            <>
              <div className="mb-4 text-[9px] font-semibold tracking-widest text-black/30">
                LOREM
              </div>
              <ul className="space-y-2 text-xs text-black/70">
                {["Lorem", "50–200 ipsum", "Dolor amet", "Ipsum A"].map((t) => (
                  <li key={t}>
                    <span className="mr-2.5 text-lime-500">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="my-5 h-px bg-black/5" />
              <MatchRows />
            </>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between text-[10px] tracking-widest">
                <span className="text-[#8b83f6]">● LOREM IPSUM...</span>
                <span className="text-[9px] text-black/30">IPSUM 1S AMET</span>
              </div>
              <div className="space-y-2.5">
                {demoPeople.map((p, i) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between rounded-[10px] border border-black/6 px-4 py-3 text-xs font-semibold shadow-sm"
                  >
                    {p.name}
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] ${i ? "bg-lime-500/10 text-lime-700" : "bg-[#eeedfe] text-[#8b83f6]"}`}
                    >
                      {i ? "Lorem" : "Ipsum..."}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const prompts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Quisque vitae mauris et lorem, sed tempor ipsum.",
  "Nunc dolor sit amet, consectetur adipiscing elit.",
];
export function AiMockup() {
  const [text, setText] = useState("");
  const [preset, setPreset] = useState<number | null>(null);
  useEffect(() => {
    if (preset !== null) return;
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % (prompts[0].length + 30);
      setText(prompts[0].slice(0, i));
    }, 80);
    return () => clearInterval(timer);
  }, [preset]);
  return (
    <div className="flex w-full flex-col items-center rounded-[24px] border border-black/8 bg-[#f9f9f9] p-6 text-foreground shadow-2xl md:rounded-[32px] md:p-12">
      <span className="mb-10 flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs text-black/60 md:mb-16">
        <SlidersHorizontal size={14} />
        Lorem ipsum
      </span>
      <h3 className="mb-8 flex items-center gap-3 text-3xl font-medium tracking-tight md:mb-12 md:text-4xl">
        <Sparkles size={30} fill="#da7756" color="#da7756" />
        Lorem ipsum dolor
      </h3>
      <div className="mb-6 w-full max-w-3xl rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm">
        <p className="min-h-[60px] p-2 text-[15px] font-medium text-black/80 md:text-[17px]">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <div className="mt-6 flex justify-between">
          <span className="flex gap-2">
            <span className="rounded-lg border p-2 text-black/50">
              <Plus size={18} />
            </span>
            <span className="rounded-lg border p-2 text-black/50">
              <SlidersHorizontal size={18} />
            </span>
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden text-[13px] text-black/50 md:block">
              Lorem Ipsum 5⌄
            </span>
            <button
              aria-label="Play prompt preview"
              onClick={() => {
                setPreset(0);
                setText("Lorem ipsum dolor sit amet. ✓");
              }}
              className="rounded-lg bg-[#da7756] p-2 text-white"
            >
              <ArrowUp size={18} />
            </button>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {[Plus, Code2, Lightbulb, FileText, Globe].map((Icon, i) => (
          <button
            key={i}
            onClick={() => {
              setPreset(i);
              setText(prompts[i % 3]);
            }}
            className={`flex items-center gap-2 rounded-full border border-black/10 px-3.5 py-1.5 text-[13px] font-medium text-black/70 shadow-sm hover:bg-black/5 ${preset === i ? "bg-lime-50" : "bg-white"}`}
          >
            <Icon size={14} />
            {["Lorem", "Ipsum", "Dolor", "Amet", "Sit amet"][i]}
          </button>
        ))}
      </div>
    </div>
  );
}
