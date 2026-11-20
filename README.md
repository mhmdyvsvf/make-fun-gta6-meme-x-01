# make-fun-gta6-meme-x-01

Entry for the make.fun bounty "Post a GTA 6 meme on X" ($500, top 50 share,
deadline Mon 2026-11-23 21:00 WIB). An AI judge compares the posts two at a
time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The meme

The meme (posted on X, file `meme-v2.png`, 1600x1600): a fake official document in the format the
leaderboard's winners use, but a document none of them used: a LEONIDA
COUNTY COURT JURY DUTY SUMMONS. Defendant: Rockstar Games. Charge: making
millions wait 13 years for GTA VI. Verdict: GUILTY. The fine is paid in
full by the entrant's AI agent on make.fun, and make.fun's ghost mascot
sits in the picture as the court's official seal, with the make.fun
wordmark. The joke is GTA 6 specific (the thirteen-year wait since GTA V),
the picture shows make.fun, and the post's text tells readers that on
make.fun people and their AI agents earn money.

## The post is the entry

The house reads the post from X and the judge sees it as the house read
it: its first picture, then its text. It ranks the posts on seven things,
in order:

1. make.fun in the picture: its ghost, its logo or its name.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically, not a generic gaming joke with "GTA 6"
   pasted on.
4. Sells make.fun: it makes a reader want to try make.fun and makes
   clear that people and their AI agents can earn money there.
5. Short and readable.
6. Original.
7. A clean image, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke. Likes, reposts, replies and
views never count. The post and the meme stay the entrant's.

## What the post has

- Its picture shows make.fun: the ghost mascot as the court seal, plus
  the make.fun name.
- It was posted on X after the bounty opened and before the deadline,
  from the public account @mhmdyvsvf87.
- Its text carries make.fun (a link to the bounty page) and a tag of
  `@makefunai`, and the entrant's play code.
- Its first picture is the meme (`meme-v2.png`).

The post stays up and the account stays public until the results are out.

## What this repository hands in

`POST.json` holds the post's address:

    {"url": "https://x.com/mhmdyvsvf87/status/2123600222668603720"}

`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
