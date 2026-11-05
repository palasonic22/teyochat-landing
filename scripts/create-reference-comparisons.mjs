import sharp from "sharp";

const directory = "docs/design-references/leedlime";
for (const [viewport, width, height] of [
  ["desktop", 800, 556],
  ["mobile", 390, 844],
]) {
  const images = await Promise.all(
    ["source", "local"].map(async (side) => ({
      input: await sharp(`${directory}/${side}-${viewport}-hero.png`)
        .resize(width, height, { fit: "fill" })
        .png()
        .toBuffer(),
      left: side === "source" ? 0 : width + 16,
      top: 38,
    })),
  );
  const label = Buffer.from(
    `<svg width="${width * 2 + 16}" height="38"><rect width="100%" height="100%" fill="#f0efed"/><g font-family="sans-serif" font-size="14" fill="#161412"><text x="16" y="24">Leedlime reference</text><text x="${width + 32}" y="24">Local prototype · placeholder copy</text></g></svg>`,
  );
  await sharp({
    create: {
      width: width * 2 + 16,
      height: height + 38,
      channels: 4,
      background: "#f0efed",
    },
  })
    .composite([{ input: label, left: 0, top: 0 }, ...images])
    .png()
    .toFile(`${directory}/comparison-${viewport}.png`);
}
