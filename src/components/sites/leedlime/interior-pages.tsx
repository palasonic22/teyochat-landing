import { Fragment } from "react";
import { Mail } from "lucide-react";
import { ContactForm } from "./contact-form";
import { contactContent, legalContent, loremText } from "./interior-content";

export function ContactPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <div className="flex min-h-screen w-full flex-col items-center px-6 py-24 md:py-32">
        <div className="grid w-full max-w-[1100px] items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col pt-4 md:pt-12">
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-[0.12em] text-foreground/50 uppercase">
                {contactContent.eyebrow}
              </span>
            </div>
            <h1 className="mb-6 max-w-lg font-serif text-4xl leading-[1.25] tracking-[-0.02em] text-foreground md:text-5xl md:leading-none">
              {contactContent.heading}
            </h1>
            <p className="mb-12 max-w-md text-[16px] leading-relaxed font-medium text-foreground/60 md:text-[17px]">
              {contactContent.description}
            </p>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-black/5 bg-black/5 text-foreground/70 shadow-sm">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </div>
              <div className="flex flex-col justify-center py-1">
                <h2 className="mb-2 text-[15px] leading-none font-bold text-foreground">
                  Email us
                </h2>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-[14px] font-medium text-foreground/60 transition-colors hover:text-foreground"
                >
                  {contactContent.email}
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-black/[0.08] bg-white p-6 shadow-[0_4px_24px_rgb(0,0,0,0.04)] md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const page = legalContent[kind];

  return (
    <main className="flex w-full flex-1 flex-col">
      <article className="bg-background py-32">
        <div className="mx-auto max-w-4xl px-6">
          <header className="mb-20">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Legal
            </p>
            <h1 className="font-serif text-5xl leading-[1.25] font-normal tracking-[-0.02em] text-foreground md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 text-sm leading-5 text-muted-foreground/60">
              Placeholder content · Not a published policy
            </p>
          </header>
          <div className="text-[18px] leading-[1.8] font-normal text-foreground">
            {page.sections.map((section, sectionIndex) => (
              <Fragment key={sectionIndex}>
                <h2
                  className={`${sectionIndex === 0 ? "mt-0" : "mt-[2.5em]"} mb-[0.8em] font-sans text-[28px] leading-[1.3] font-semibold tracking-[-0.01em]`}
                >
                  {sectionIndex + 1}.{" "}
                  {loremText(
                    section.headingLength - String(sectionIndex + 1).length - 2,
                  )}
                </h2>
                {section.blocks.map((block, blockIndex) =>
                  block.kind === "list" ? (
                    <ul key={blockIndex} className="mt-[1.75em] list-disc pl-6">
                      {block.lengths.map((length, itemIndex) => (
                        <li key={itemIndex} className="mb-[0.8em]">
                          {loremText(length)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={blockIndex}
                      className={blockIndex > 0 ? "mt-[1.75em]" : ""}
                    >
                      {block.lengths.map((length, clauseIndex) => (
                        <Fragment key={clauseIndex}>
                          {clauseIndex > 0 && <br />}
                          {block.lengths.length > 1 &&
                            `${sectionIndex + 1}.${clauseIndex + 1}. `}
                          {loremText(
                            length - (block.lengths.length > 1 ? 5 : 0),
                          )}
                        </Fragment>
                      ))}
                    </p>
                  ),
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
