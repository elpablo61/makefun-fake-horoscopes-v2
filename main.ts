import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${text.length}`);
}
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
console.log(text);
