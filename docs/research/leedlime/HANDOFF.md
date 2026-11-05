# Teyochat reference prototype

Run `npm run dev` from the project folder, or `npm run check` to run lint, strict TypeScript and the production build. The four requested pages are `/`, `/contact`, `/privacy`, and `/terms`. The original `/privacy-policy` and `/terms-of-service` paths redirect to their local equivalents.

## Edit points

- Marketing headings, paragraphs, FAQs, demo data and primary destinations: `src/components/sites/leedlime/content.ts`.
- Contact and legal placeholder text: `src/components/sites/leedlime/interior-content.ts`.
- Colors, fonts, radii and motion: `src/app/globals.css`.
- Navigation, wordmark, footer and mobile menu: `src/components/sites/leedlime/site-shell.tsx`.
- Homepage sections: `homepage.tsx`; editable dashboard/search/AI illustrations: `mockups.tsx` in the same folder.

## Verification

- `npm run check`: lint, typecheck and production build pass.
- Matched desktop source/local inspection at 1600×1111 and mobile at 390×844; tablet navigation checked at768; additional320px overflow check.
- Complete desktop homepage sweep with real wheel input: every reveal displayed; no remaining hidden observed elements.
- Monthly20/39/99 ↔ yearly17/33/83 pricing switch verified in the rendered UI.
- FAQ opens, closes and switches between questions; menu opens, closes and follows anchors; clipboard feedback verified.
- Contact native validation rejects empty required fields; valid local submission shows explicit preview-only result.
- Contact/privacy/terms navigation and source-path redirects verified.
- Public image files checked for actual JPEG/WOFF2 type and dimensions; browser reports no broken images or production console errors.

## Remaining differences and prototype behavior

This is a close visual rebuild with the agreed Lorem Ipsum substitutions, not an exact pixel match. Placeholder word widths alter wrapping and some section heights. The dashboard and miniature UI are editable approximations of the source, with neutral sample data. Brand mark, endorsement badges, founder portrait and directory badges are neutral replacements. Motion uses CSS/IntersectionObserver rather than source deployment bundles.

Homepage navigation targets working local anchors. Book a Call, login/signup, social links and out-of-scope footer routes retain Leedlime destinations. AI links open provider homepages without the original prefilled marketing prompt. Contact delivery, live AI, customer authentication, payment and third-party chat integration are not configured. Search/export/chat controls use local demo behavior. Legal pages are explicitly placeholders. Metadata is set to noindex/nofollow for this prototype.

Screenshots and source/local hero comparisons are in `docs/design-references/leedlime/`. Research measurements and asset provenance are in this folder. No deployment or commit was made.
