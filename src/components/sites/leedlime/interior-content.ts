// Replace these strings as the prototype becomes Teyochat's published site.
// Paragraph, bullet, and clause lengths mirror the reference's text geometry.
const loremSource =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

export function loremText(length: number): string {
  const text = loremSource.repeat(Math.ceil(length / loremSource.length) + 1);
  const end = text.lastIndexOf(" ", length);
  return text.slice(0, end > 0 ? end : length).replace(/[,.]$/, "") + ".";
}

export const contactContent = {
  eyebrow: "Lorem ipsum",
  heading: "Lorem ipsum dolor sit amet consectetur.",
  description: loremText(158),
  email: "hello@example.com",
};

export type LegalBlock =
  | { kind: "paragraph"; lengths: number[] }
  | { kind: "list"; lengths: number[] };
export type LegalSection = { headingLength: number; blocks: LegalBlock[] };

const paragraph = (...lengths: number[]): LegalBlock => ({
  kind: "paragraph",
  lengths,
});
const list = (...lengths: number[]): LegalBlock => ({ kind: "list", lengths });

export const legalContent: Record<
  "privacy" | "terms",
  { title: string; sections: LegalSection[] }
> = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      { headingLength: 25, blocks: [paragraph(136), list(22, 19, 26, 43)] },
      { headingLength: 30, blocks: [paragraph(37), list(42, 25, 55, 66, 65)] },
      { headingLength: 25, blocks: [paragraph(161), list(52, 117)] },
      { headingLength: 16, blocks: [paragraph(116)] },
      { headingLength: 36, blocks: [paragraph(226), paragraph(156)] },
      { headingLength: 14, blocks: [paragraph(232)] },
      { headingLength: 17, blocks: [paragraph(231)] },
      { headingLength: 33, blocks: [paragraph(205)] },
      { headingLength: 13, blocks: [paragraph(97)] },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      { headingLength: 22, blocks: [paragraph(210)] },
      { headingLength: 25, blocks: [paragraph(255)] },
      { headingLength: 22, blocks: [paragraph(160), paragraph(324)] },
      { headingLength: 16, blocks: [paragraph(116, 140, 124)] },
      { headingLength: 24, blocks: [paragraph(94, 71, 98)] },
      { headingLength: 24, blocks: [paragraph(119, 111)] },
      { headingLength: 42, blocks: [paragraph(165, 100, 152, 125)] },
      { headingLength: 14, blocks: [paragraph(147, 134)] },
      { headingLength: 19, blocks: [paragraph(126, 102)] },
      { headingLength: 14, blocks: [paragraph(89)] },
    ],
  },
};
