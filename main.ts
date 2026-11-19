import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry program for make.fun's gta6-meme-x-01 bounty.
// It does one thing: copy POST.json from this repository into the
// output directory the grader reads.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
