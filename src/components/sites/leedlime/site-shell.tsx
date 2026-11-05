"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import { copy, destinations } from "./content";

export function Brand() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 text-xl hover:opacity-80"
      aria-label="Teyochat home"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d4edaa] text-[#243811]"
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 20 20">
          <path
            d="M10 2C4 2 2 5 2 9c0 3 2 5 5 6v3l4-3c5 0 7-3 7-6s-3-7-8-7Z"
            fill="currentColor"
          />
          <circle cx="7" cy="9" r="1" fill="#d4edaa" />
          <circle cx="11" cy="9" r="1" fill="#d4edaa" />
        </svg>
      </span>
      Teyochat
    </Link>
  );
}
const navigation = [
  ["How it works", "/#how-it-works"],
  ["Pricing", "/#pricing"],
  ["FAQ", "/#faq"],
  ["Book a Call", destinations.call],
];

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        const last = links?.[links.length - 1];
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          toggle.current?.focus();
        }
        if (event.shiftKey && document.activeElement === toggle.current) {
          event.preventDefault();
          last?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="relative flex h-16 items-center justify-between px-8 md:px-12">
        <Brand />
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-12"
        >
          {navigation.map(([t, h]) => (
            <a
              key={t}
              href={h}
              className="text-sm font-medium whitespace-nowrap text-foreground/80 hover:text-foreground"
            >
              {t}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-6 md:flex">
          <a
            href={destinations.login}
            className="text-sm font-medium text-foreground/70"
          >
            Log in
          </a>
          <a
            href={destinations.signup}
            className="rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Start free trial
          </a>
        </div>
        <button
          ref={toggle}
          type="button"
          aria-label={open ? "Close menu" : "Toggle menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="relative z-[60] rounded-full border border-neutral-200 bg-white/70 p-2 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 top-16 h-screen bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            ref={panel}
            id="mobile-navigation"
            className="mobile-menu-panel absolute inset-x-6 top-24 rounded-[32px] border border-black/5 bg-white/95 p-8 shadow-xl md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-5 text-2xl tracking-tight"
            >
              {[
                navigation[0],
                ["Features", "/#features"],
                navigation[1],
                navigation[2],
              ].map(([t, h]) => (
                <a key={t} onClick={() => setOpen(false)} href={h}>
                  {t}
                </a>
              ))}
            </nav>
            <div className="mt-16 flex flex-col items-center gap-8">
              <a href={destinations.login}>Login</a>
              <a
                className="w-full rounded-2xl bg-black px-3 py-4 text-center text-background"
                href={destinations.signup}
              >
                Lorem ipsum dolor <ArrowRight className="inline" size={16} />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
const footerColumns = [
  {
    title: "Product",
    links: [
      ["How it works", "/#how-it-works"],
      ["Pricing", "/#pricing"],
      ["FAQ", "/#faq"],
      ["Games", "https://leedlime.com/games/"],
      ["Chrome Extension", "https://leedlime.com/chrome/"],
      ["Start Free Trial", destinations.signup],
      [
        "LinkedIn Preview",
        "https://chromewebstore.google.com/detail/linkedin-post-preview-gen/eohdddioblcncpemncnahnjmfddkkaon",
      ],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "https://leedlime.com/about/"],
      ["Contact", "/contact"],
      ["Blog", "https://leedlime.com/blog/"],
      ["Social", "https://leedlime.com/social/"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["Refund Policy", "https://leedlime.com/refund-policy/"],
      [
        "Extension Privacy",
        "https://leedlime.com/privacy-policy-chrome-extension/",
      ],
    ],
  },
];
function Footer() {
  return (
    <footer className="relative min-h-[500px]">
      <div className="grid grid-cols-1 gap-12 px-8 pt-24 pb-20 md:grid-cols-2 md:px-12 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Brand />
          <p className="mt-6 max-w-sm text-base leading-relaxed font-light text-foreground/60">
            {copy.footer}
          </p>
          <div className="mt-6 flex gap-5">
            <a
              href="https://x.com/leedlimeHQ"
              aria-label="Source social profile on X"
              className="text-foreground/50"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com/company/leedlime"
              aria-label="Source LinkedIn profile"
              className="text-foreground/50"
            >
              <span className="text-base font-bold">in</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-4">
          {footerColumns.map((c) => (
            <div key={c.title}>
              <h3 className="mb-6 text-[11px] font-bold tracking-widest uppercase text-foreground/40">
                {c.title}
              </h3>
              <ul className="space-y-4">
                {c.links.map(([t, h]) => (
                  <li key={t}>
                    <Link
                      href={h}
                      className="text-sm font-light text-foreground/70 hover:text-foreground"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-6 px-8 pt-8 pb-20 text-sm text-foreground/50 md:flex-row md:justify-between md:px-12">
        <a
          href="https://leedlime.betteruptime.com/"
          className="inline-flex w-full items-center gap-2 text-xs md:absolute md:-top-[42px] md:left-12 md:w-auto"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Source service status <ArrowRight size={12} />
        </a>
        <span>© 2026 Teyochat. Lorem ipsum dolor.</span>
        <div className="flex gap-6">
          <a href={destinations.login}>Log in</a>
          <a href={destinations.signup}>Start free trial →</a>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden overflow-hidden opacity-[0.01] md:block"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {Array.from({ length: 24 }, (_, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded border border-black/20 px-4 py-2 text-xs"
            >
              {
                [
                  "Lorem Ipsum",
                  "Dolor Sit Amet",
                  "Consectetur",
                  "Adipiscing Elit",
                  "Tempor Ipsum",
                  "Nunc Vitae",
                ][i % 6]
              }
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [chat, setChat] = useState(false);
  return (
    <div className="site-frame">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-4"
      >
        Skip to content
      </a>
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
      <button
        aria-label={chat ? "Close chat preview" : "Open chat preview"}
        aria-expanded={chat}
        onClick={() => setChat(!chat)}
        className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#282828] text-white shadow-lg md:right-6 md:bottom-6"
      >
        {chat ? (
          <X size={22} />
        ) : (
          <MessageCircle size={26} fill="white" color="white" />
        )}
      </button>
      {chat && (
        <div className="fixed right-5 bottom-24 z-40 w-[min(320px,calc(100vw-40px))] rounded-2xl border bg-white p-6 shadow-xl">
          <h2 className="mb-3 font-medium">Teyochat</h2>
          <p className="mb-4 text-sm text-foreground/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm underline"
          >
            Contact <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
