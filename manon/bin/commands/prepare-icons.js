import { Command } from "commander";
import { join, basename } from "node:path";
import { glob, readFile, writeFile } from "node:fs/promises";

export const prepareIcons = new Command("prepare-icons")
  .description("encode .svg icons as data-URI SCSS variables")
  .argument("<dir>", "path to the folder with .svg icons")
  .argument(
    "[output]",
    "path to the output .scss file (default: <dir>/_index.scss)"
  )
  .action(async (dir, output) => {
    let scss = "";
    for await (const path of glob(join(dir, "*.svg"))) {
      console.log(`⭐ Preparing icon "${path}"`);
      const name = basename(path, ".svg");
      const contents = (await readFile(path)).toString();
      const url = `data:image/svg+xml;base64,${btoa(contents)}`;
      scss += `$${name}: url("${url}");\n`;
    }
    const filename = join(dir, output ?? "_index.scss");
    await writeFile(filename, scss);
    console.log(`📦 Data URI's written to "${filename}"`);
  });
