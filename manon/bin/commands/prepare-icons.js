import { Command } from "commander";
import { join, basename } from "node:path";
import { glob, readFile, writeFile } from "node:fs/promises";

export const prepareIcons = new Command("prepare-icons")
  .description("convert .svg files to SCSS data-URLs")
  .argument("<dir>", "path to the folder with .svg files")
  .argument(
    "[output]",
    "path to the output .scss file (default: <dir>/_index.scss)"
  )
  .action(async (dir, output) => {
    let scss = "";
    for await (const path of glob(join(dir, "*.svg"))) {
      const name = basename(path, ".svg");
      const contents = await readFile(path);
      const url = `data:image/svg+xml;base64,${btoa(contents)}`;
      scss += `$${name}: url("${url}");\n`;
    }
    await writeFile(join(dir, output ?? "_index.scss"), scss);
  });
