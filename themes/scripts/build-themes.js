/**
 * This script builds the themes for the Manon design system.
 *
 * It performs the following steps:
 *
 * 1. Finds all themes by looking for `_index.scss` files in the subdirectories
 *    of the `themes` folder.
 * 2. For each theme, it checks for variants (e.g., different use of components)
 *    in a `variants` subfolder. A variant is defined by the presence of a
 *    `<variant-name>.scss` file. When `default.scss` is found, it is treated
 *    as the default variant and does not get a special suffix in the output
 *    filename.
 * 3. If no variants are found, it creates a default version of the theme.
 * 4. It compiles each theme's SCSS into both regular and minified CSS using
 *    the `sass` library.
 * 5. It copies any font files associated with a theme to the `dist` folder.
 * 6. The final CSS and font files are placed in a `dist` folder, organized by
 *    theme.
 * 7. As a final step, it copies the `icore-open` theme's CSS files to the root
 *    of the `dist` folder as `manon.css` and `manon.min.css`, making it the
 *    default theme.
 */

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
    // If variants found, create an entry for each
    console.log(`   Found ${variantFiles.length} variant(s):`);
    variantFiles.forEach((f) => {
      const variantName = path.basename(f, ".scss");
      console.log(`     - ${variantName}`);
      variants.push({
        name: variantName,
        file: `./${theme}/variants/${variantName}.scss`,
        content: `@use "${theme}" with (
          $font-path: "./fonts",
          $icons-path: "./img/icons"
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
        $font-path: "./fonts",
        $icons-path: "./img/icons"
      );
      @use "@minvws/manon/components/bundles/all";`,
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

  // Move icons in theme folder to dist. Assume icons are in a "icons"
  // subfolder of the theme
  const iconsSrcFolder = path.join(themesFolder, theme, "icons");
  const iconsDestFolder = path.join(themeOutFolder, "img", "icons");

  if (fs.existsSync(iconsSrcFolder)) {
    fs.cpSync(iconsSrcFolder, iconsDestFolder, { recursive: true });
    const iconFiles = globSync("**/*.*", { cwd: iconsSrcFolder });
    console.log(`   Copied ${iconFiles.length} icon file(s) to icons folder.`);
  } else {
    console.log("   No icons folder found - skipping.");
  }

  // Clean up temporary file
  fs.rmSync(path.join(tempOutFolder, `_temp_${theme}.scss`));
}

// Copy the ./dist/icore-open/ files and rename them to dist/manon.css and
// dist/manon.min.css
fs.copyFileSync(
  path.resolve("./dist/icore-open/manon.icore-open.css"),
  path.join(outFolder, "manon.css")
);

fs.copyFileSync(
  path.resolve("./dist/icore-open/manon.icore-open.min.css"),
  path.join(outFolder, "manon.min.css")
);
