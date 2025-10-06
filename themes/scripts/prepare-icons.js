#!/usr/bin/env node

import { join, basename } from "node:path";
import { glob, readFile, writeFile } from "node:fs/promises";

const inputDir = process.argv[2];
const outputFilename = join(inputDir, "_index.scss");

let scss = "";
for await (const path of glob(join(inputDir, "*.svg"))) {
  console.log(`⭐ Preparing icon "${path}"`);
  const name = basename(path, ".svg");
  const contents = (await readFile(path)).toString();
  const url = `data:image/svg+xml;base64,${btoa(contents)}`;
  scss += `$${name}: url("${url}");\n`;
}

await writeFile(outputFilename, scss);
console.log(`📦 Data URI's written to "${outputFilename}"`);
