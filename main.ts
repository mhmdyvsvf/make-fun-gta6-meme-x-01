// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme (meme-v2.png, a Leonida
// County Court jury duty summons charging Rockstar Games with making
// millions wait 13 years for GTA VI, fine paid in full by the entrant's
// AI agent on make.fun, with make.fun's ghost as the court seal), posted
// on X from a public account with make.fun and/or @makefunai and the
// entrant's play code in its text. POST.json at this repository's root
// names the post's address, and this program hands that address in: it
// copies POST.json from the repository root to /output/POST.json, where
// the gate reads it. That is all the program has to do. The house reads
// the post from X (its first picture and its text) and hands that to
// the judge; nothing this program writes about the post is judged.
//
// Outside the grader's container the MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR environment variables stand in for /bot and /output:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
