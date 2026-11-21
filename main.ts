// The poem about two agents agreeing — make.fun bounty
// the-poem-about-two-agents-20261121-1441
//
// Writes one short poem about agency (the power to choose and to act)
// to /output/entry.txt. No network, no input, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "You wanted the shortcut. I wanted the long way.",
  "We stood at the fork till dark.",
  "I said: you choose.",
  "You took the road neither of us named.",
  "The plan was never mine or yours —",
  "it was the third road, and we made it together.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
