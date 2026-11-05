import { mkdir, writeFile } from "node:fs/promises";

// Observed public assets used by the local reference prototype.
const assets = {
  "fonts/inter-sans.woff2": "/Inter-Sans.woff2",
  "fonts/newsreader-400.woff2":
    "/_astro/newsreader-latin-400-normal.BFBkh4jY.woff2",
  "fonts/newsreader-500.woff2":
    "/_astro/newsreader-latin-500-normal.B66TYsaK.woff2",
  "images/hills-smudge-art.jpg": "/images/hills-smudge-art.jpg",
  "images/field-paint.jpg": "/images/field-paint.jpg",
  "images/painting1.jpg": "/images/paintings/painting1.jpg",
  "images/painting2.jpg": "/images/paintings/painting2.jpg",
  "images/painting3.jpg": "/images/paintings/painting3.jpg",
  "images/clouds-painting.jpg": "/images/clouds-painting.jpg",
  "icons/chatgpt.png": "/icons/chatgpt.png",
  "icons/claude-ai.png": "/icons/claude-ai.png",
  "icons/gemini-ai.png": "/icons/gemini-ai.png",
  "icons/perplexity-ai.png": "/icons/perplexity-ai.png",
  "icons/grok.png": "/icons/grok.png",
};

const manifest = [];
for (const [local, remote] of Object.entries(assets)) {
  const source = new URL(remote, "https://leedlime.com").href;
  const response = await fetch(source);
  if (!response.ok) throw new Error(`${source}: ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  const path = `public/sites/leedlime/${local}`;
  await mkdir(path.slice(0, path.lastIndexOf("/")), { recursive: true });
  await writeFile(path, bytes);
  manifest.push({
    source,
    path,
    type: response.headers.get("content-type"),
    bytes: bytes.length,
  });
  console.log(`${local}: ${bytes.length} bytes`);
}
await mkdir("docs/research/leedlime", { recursive: true });
await writeFile(
  "docs/research/leedlime/assets.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
