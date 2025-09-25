import { globSync } from "glob";
import path from "path";
import fs from "fs";
import * as sass from "sass";

const themesFolder = path.resolve("../themes");
const themeFiles = globSync("./*/_index.scss", { cwd: themesFolder });
const outFolder = path.resolve("./dist");
const tempOutFolder = path.resolve("./.manon");

// Ensure output folders exist
[outFolder, tempOutFolder].forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

if (themeFiles.length === 0) {
  console.log("No themes found in the themes folder!");
} else {
  console.log(`🔎 Found ${themeFiles.length} theme(s):`);
  themeFiles.forEach((f) => console.log(`   - ${path.dirname(f)}`));
}

for (const file of themeFiles) {
  const theme = path.basename(path.dirname(file));
  const themeOutFolder = path.join(outFolder, theme);

  if (!fs.existsSync(themeOutFolder)) {
    fs.mkdirSync(themeOutFolder, { recursive: true });
  }

  console.log(`\n🎨 Building theme: ${theme}`);

  // Create temporary SCSS file that imports the theme with custom settings
  const tempScss = `@use "${theme}" with (
    $font-path: "/fonts"
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
    if (!fs.existsSync(fontsDestFolder)) {
      fs.mkdirSync(fontsDestFolder, { recursive: true });
    }

    // Get all subfolders in the fonts source folder
    const fontSubfolders = fs
      .readdirSync(fontsSrcFolder, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    // Copy each subfolder and its contents
    for (const subfolder of fontSubfolders) {
      const srcSubfolder = path.join(fontsSrcFolder, subfolder);
      const destSubfolder = path.join(fontsDestFolder, subfolder);
      if (!fs.existsSync(destSubfolder)) {
        fs.mkdirSync(destSubfolder, { recursive: true });
      }
      const fontFiles = fs.readdirSync(srcSubfolder);
      for (const fontFile of fontFiles) {
        fs.copyFileSync(
          path.join(srcSubfolder, fontFile),
          path.join(destSubfolder, fontFile)
        );
        console.log(`   Copied font: ${path.join(subfolder, fontFile)}`);
      }
    }
  }
}
