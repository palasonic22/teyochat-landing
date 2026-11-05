# Leedlime reference prototype

User scope: homepage, contact, privacy, terms. Match source composition before Teyochat customization. Explicit override: length-matched Lorem Ipsum for substantive copy. Keep functional navigation labels. Teyochat wordmark/neutral mark replaces Leedlime identity. No source analytics, chat service, payment or form API is carried over.

## Route and file ownership

| Source                                 | Local                     | Owner                                 |
| -------------------------------------- | ------------------------- | ------------------------------------- |
| https://leedlime.com/                  | /                         | page.tsx + homepage.tsx + mockups.tsx |
| https://leedlime.com/contact/          | /contact                  | interior-pages.tsx + contact route    |
| https://leedlime.com/privacy-policy/   | /privacy, /privacy-policy | interior pages + aliases              |
| https://leedlime.com/terms-of-service/ | /terms, /terms-of-service | interior pages + aliases              |

Shared: layout.tsx, globals.css, site-shell.tsx. Assets: public/sites/leedlime. Text: content.ts and interior-page data. Root owns shared styles/components and homepage; interior-pages agent owns only interior components/routes.

## Measured system

- Page cap 1240px; centered 1px border. Background #f9f8f6, ink #161412, border black 5%, muted #6b6b6b.
- Inter Sans variable source font; Newsreader 400/500 for editorial headings; system monospace for eyebrows/prices.
- Sticky header 64px, 32px mobile/48px desktop side padding. Navigation visible at 768px; mobile frosted overlay with rounded white panel.
- Split hero at 1024px; min-height90vh. Left padding32/48px, effective top96px (source pt-42 class has no emitted rule), bottom96px mobile/128px desktop. Heading48 mobile/60 tablet/72 desktop, line1.05 mobile/1 desktop, tracking-.02em. Body18/20, weight300, line1.625 mobile/1.4 desktop. Right artwork cover and overlapping editable UI cards.
- All page sections observed top-to-bottom. Desktop headings48, mobile30-36. Sections generally64 mobile/96 desktop vertical, 24/48 side padding.
- Homepage order: hero; dark marquee; three painted workflow cards; platform heading + painted dashboard + six feature cards; two differentiation cards; dark AI demo; founder quote; pricing; FAQ; dark Ask AI grid; clouds CTA; four-column footer + directory marquee.
- Workflow cards: image250px, rounded16; 3 columns >=768. Feature grid 1/2/3 columns at mobile/768/1024. Differentiation2 columns >=768.
- Pricing yearly default17/33/83; monthly20/39/99. FAQ12 items; source initial first answer is present in DOM but its rendered height is zero. Local starts collapsed and permits one answer open. Source nav Pricing goes /pricing but footer targets missing #pricing: local maps both to working #pricing because only4 pages requested.
- Source motion: staggered initial/reveal translation/opacity, repeating floating search card, horizontal logo marquees, looping typed AI prompt, hover lifts/scales. No sticky scroll narrative or Framer; source Astro+React.
- Source contact has 2 columns >=1024 and shared footer. Legal content cap896, padding24, vertical128. Legal headings60/48, body18/1.8.

## Deliberate content substitutions

Lorem Ipsum preserves approximate lengths, section count and paragraph/list structure. Product mockups rebuilt as editable HTML with neutral dummy data; dashboard screenshot rebuilt as a dashboard component. Founder photo and endorsement badges replaced with neutral placeholders. Actual public painting/font/icon assets are mapped in assets.json. Exact line wraps can vary with placeholder word lengths.

## Link/function behavior

In-scope routes and homepage anchors stay local. Book a Call, signup/login and out-of-scope footer links retain source destinations; those point to Leedlime services. AI links open provider landing pages without submitting a source marketing prompt. Copy prompt copies prototype placeholder text. Contact validates locally and reports that delivery is not configured; no external form API. Demo/export/search controls operate on local mock data.

## Evidence

Source screenshots in docs/design-references/leedlime, named for viewport/state. Initial browser zoom90% was normalized by creating fresh comparison tabs. Final matched source/local screenshots use identical DOM viewports1600×1111 desktop and390×844 mobile.
