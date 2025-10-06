import { globSync } from "glob";
import path from "path";
import fs from "fs";
import * as sass from "sass";

const themesFolder = path.resolve("../themes");
const themeDirs = globSync("./*/_index.scss", { cwd: themesFolder });
const outFolder = path.resolve("./dist");
const tempOutFolder = path.resolve("./.manon");

// Ensure output folders exist
[outFolder, tempOutFolder].forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

if (themeDirs.length === 0) {
  console.log("No themes found in the themes folder!");
} else {
  console.log(`🔎 Found ${themeDirs.length} theme(s):`);
  themeDirs.forEach((f) => console.log(`   - ${path.dirname(f)}`));
}

for (const themeDir of themeDirs) {
  const theme = path.basename(path.dirname(themeDir));
  const themeOutFolder = path.join(outFolder, theme);

  if (!fs.existsSync(themeOutFolder)) {
    fs.mkdirSync(themeOutFolder, { recursive: true });
  }

  console.log(`\n🎨 Building theme: ${theme}`);

  // Create temporary SCSS file that imports the theme with custom settings
  const tempScss = `@use "${theme}" with (
    $font-path: "./fonts"
  );`;

  // Write to a temporary file
  const tempFile = path.join(tempOutFolder, `_temp_${theme}.scss`);
  fs.writeFileSync(tempFile, tempScss);

  // Compile
  try {
    const result = sass.compile(tempFile, {
      style: "compressed",
      loadPaths: [
        themesFolder,
        path.resolve("../manon/scss"),
        path.resolve("../node_modules"),
        path.resolve("./node_modules"),
      ],
    });
    fs.writeFileSync(
      path.join(themeOutFolder, `manon.${theme}.css`),
      result.css
    );
    console.log(`   Compiled CSS: manon.${theme}.css`);
  } catch (error) {
    console.error(`   Error compiling theme ${theme}:`, error);
    continue;
  }

  // Move fonts in theme folder to dist. Assume fonts are in a "fonts" subfolder
  // of the theme and that each folder in the fonts folder contains font files
  const fontsSrcFolder = path.join(themesFolder, theme, "fonts");
  const fontsDestFolder = path.join(themeOutFolder, "fonts");

  if (fs.existsSync(fontsSrcFolder)) {
    fs.cpSync(fontsSrcFolder, fontsDestFolder, { recursive: true });
    console.log("   Copied fonts");
  } else {
    console.log("   No fonts folder found - skipping.");
  }
}
