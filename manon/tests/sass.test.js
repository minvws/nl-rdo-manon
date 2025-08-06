import { glob } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, it } from "vitest";
import sassTrue from "sass-true";
import sass from "sass";

const testFilesPattern = resolve(import.meta.dirname, "../**/*.test.scss");

for await (const filePath of glob(testFilesPattern)) {
  sassTrue.runSass({ describe, it }, filePath, { sass });
}
