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

  // Check which variants are available for this theme
  const variantFiles = globSync(`${theme}/variants/*.scss`, {
    cwd: themesFolder,
  });

  let variants = [];
  if (variantFiles.length > 0) {
    console.log(`   Found ${variantFiles.length} variant(s):`);
    variantFiles.forEach((f) => {
      const variantName = path.basename(f, ".scss");
      console.log(`     - ${variantName}`);
      variants.push({
        name: variantName,
        file: `./${theme}/variants/${variantName}.scss`,
        content: `@use "${theme}" with (
          $font-path: "./fonts"
        );
        @use "./${theme}/variants/${variantName}";`,
      });
    });
  } else {
    // If no variants, use a default placeholder
    variants.push({
      name: "default",
      file: null,
      content: `@use "${theme}" with (
        $font-path: "./fonts"
      );
      @use "./scripts/default";`,
    });
  }

  console.log(`   Compiling ${variants.length} variant(s)...`);
  variants.forEach((variant) => {
    // Create temporary SCSS file that imports the theme with custom settings
    const tempScss = variant.content;

    // Write to a temporary file
    const tempFile = path.join(tempOutFolder, `_temp_${theme}.scss`);
    fs.writeFileSync(tempFile, tempScss);

    const variantName = variant.name !== "default" ? `_${variant.name}` : "";

    try {
      // Compile the SCSS to CSS
      const result = sass.compile(tempFile, {
        loadPaths: [themesFolder, path.resolve("./node_modules")],
      });
      fs.writeFileSync(
        path.join(themeOutFolder, `manon.${theme}${variantName}.css`),
        result.css
      );
      console.log(`     - manon.${theme}${variantName}.css`);

      // And create a minified version
      const minifiedResult = sass.compile(tempFile, {
        loadPaths: [themesFolder, path.resolve("./node_modules")],
        style: "compressed",
      });
      fs.writeFileSync(
        path.join(themeOutFolder, `manon.${theme}${variantName}.min.css`),
        minifiedResult.css
      );
      console.log(`     - manon.${theme}${variantName}.min.css`);
    } catch (error) {
      console.error(`   Error compiling theme ${theme}:`, error);
    }
  });

  // Move fonts in theme folder to dist. Assume fonts are in a "fonts" subfolder
  // of the theme and that each folder in the fonts folder contains font files
  const fontsSrcFolder = path.join(themesFolder, theme, "fonts");
  const fontsDestFolder = path.join(themeOutFolder, "fonts");

  if (fs.existsSync(fontsSrcFolder)) {
    fs.cpSync(fontsSrcFolder, fontsDestFolder, { recursive: true });
    const fontFiles = globSync("**/*.*", { cwd: fontsSrcFolder });
    console.log(`   Copied ${fontFiles.length} font file(s) to fonts folder.`);
  } else {
    console.log("   No fonts folder found - skipping.");
  }

  // Clean up temporary file
  fs.rmSync(path.join(tempOutFolder, `_temp_${theme}.scss`));
}
