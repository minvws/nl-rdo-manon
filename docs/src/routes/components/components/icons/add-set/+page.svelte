<script module>
  export const breadcrumb = "Icoon-set toevoegen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Icoon-set toevoegen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <h1>Icoon-set toevoegen</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>Er zijn twee situaties waarin het nodig kan zijn om een icoon-set toe te voegen:</p>
        <ul>
          <li>
            <p>
              Je werkt aan een applicatie, die iconen nodig heeft die niet beschikbaar zijn in de <a
                href="{base}/components/components/icons#default-iconset">standaard icoon-sets</a
              >
              van het thema. Volg dan deze instructies:
              <a href="#application-icon-set">Een applicatie-specifieke icoon-set toevoegen</a>
            </p>
          </li>
          <li>
            Je werkt aan een nieuw Manon-thema, dat eigen standaard icoon-sets nodig heeft. Volg dan
            deze instructies: <a href="#theme-icon-sets">Icoon-sets maken voor een thema</a>
          </li>
        </ul>
      </section>
      <section>
        <h2 id="application-icon-set">Een applicatie-specifieke icoon-set toevoegen</h2>
        <p>
          Een applicatie-specifieke icoon-set bestaat uit een extra icoon-lettertype en een extra
          set <code>icon-{"{naam}"}</code> classes, die samen aan een specifieke applicatie toegevoegd
          worden. Deze extra icoon-set kan nieuwe iconen toevoegen, die niet in het thema beschikbaar
          zijn, of juist bestaande iconen overschrijven.
        </p>
        <p>Volg de volgende stappen:</p>
        <ol>
          <li>
            Maak een icoon-lettertype met behulp van software of online tools om lettertypes en svg
            fonts mee te maken. Maak notitie van de UTF-8 codes van de verschillende iconen.
          </li>
          <li>
            Gebruik <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
              rel="external"><code>@font-face</code></a
            >
            om het lettertype toe te voegen binnen het project:
            <Code
              language="scss"
              code={`
@font-face {
  font-family: "naam-van-het-icon-font";
  font-weight: normal;
  font-style: normal;
  font-display: block;
  src: url("./pad/naar/fontnaam.woff2") format("woff2"),
    url("./pad/naar/fontnaam.woff") format("woff");
}`}
            />
          </li>
          <li>
            <p>
              Voeg de <code>icon-{"{naam}"}</code> classes voor de iconen toe aan het project. Geef
              elk van de classes een <code>content</code> met de UTF-8 code van het icoon en een
              <code>font-family</code>
              met de naam van het lettertype.
            </p>
            <p>Kies één van deze twee manieren om de classes toe te voegen:</p>
            <ul>
              <li>
                Handmatig:
                <Code
                  language="scss"
                  code={`
.icon,
.icon-only {
  &.icon-extra-icoon-1::before {
    content: "\\E900";
    font-family: "naam-van-het-icon-font";
  }
  &.icon-extra-icoon-2::before {
    content: "\\E901";
    font-family: "naam-van-het-icon-font";
  }
}`}
                />
              </li>
              <li>
                ...of met de <code>define-icons</code> mixin van Manon:
                <Code
                  language="scss"
                  code={`
@use "@minvws/manon/mixins/icon";

$glyphs: (
  "extra-icoon-1": "\\E900",
  "extra-icoon-2": "\\E901"
);

@include icon.define-icons($glyphs, "before", "naam-van-het-icon-font");`}
                />
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <h2 id="theme-icon-sets">Icoon-sets maken voor een thema</h2>
        <ol>
          <li>
            <p>
              Maak een icoon-lettertype met behulp van software of online tools om lettertypes en
              svg fonts mee te maken. Maak notitie van de UTF-8 codes van de verschillende iconen.
              Zorg er bij voorkeur voor dat het icoon-lettertype alle iconen uit <a
                href="{base}/components/components/icons#default-iconset">de standaard-sets</a
              > bevat.
            </p>
          </li>
          <li>
            Gebruik <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
              rel="external"><code>@font-face</code></a
            >
            om het lettertype toe te voegen aan het thema. Maak hierbij bij voorkeur gebruik van een
            Sass-variabele voor het basis-pad naar het lettertype:
            <Code
              language="scss"
              code={`
@use "variables";

@font-face {
  font-family: "naam-van-het-icon-font";
  font-weight: normal;
  font-style: normal;
  font-display: block;
  src: url("#{variables.$font-path}/fontnaam.woff2") format("woff2"),
    url("#{variables.$font-path}/fontnaam.woff") format("woff");
}`}
            />
            Zie eventueel één van de standaard Manon-thema's voor een voorbeeld van hoe een
            <code>variables</code>-module gebruikt kan worden.
          </li>
          <li>
            Stel de thema-variabele <code>--icon-font-family</code> in met de naam van het
            icoon-lettertype:

            <Code
              language="scss"
              code={`
:root {
  --icon-font-family: "naam-van-het-icon-font";
}`}
            />
          </li>
          <li>
            <p>
              Voeg de <code>icon-{"{naam}"}</code> classes voor de iconen toe aan het project. Geef
              elk van de classes een <code>content</code> met de UTF-8 code van het icoon. In
              tegenstelling tot bij een applicatie-specifieke icoon-set is het toevoegen van een
              <code>font-family</code> <strong>niet</strong> nodig.
            </p>
            <p>
              <strong>Let op:</strong> voeg classes toe voor alle iconen uit de standaard
              icoon-sets, ook als het icoon-lettertype niet alle iconen bevat. Gebruik voor
              ontbrekende iconen het UTF-8-karakter <code>"\25A1"</code> (<span lang="en"
                >"missing glyph"</span
              >).
            </p>
            <p>Gebruik bij voorkeur de <code>define-icons</code> mixin van Manon:</p>
            <Code
              language="scss"
              code={`
@use "@minvws/manon/mixins/icon";

$missing-glyph: "\\25A1";

$glyphs: (
  "descending": "\\E900",
  "ascending": "\\E901",
  "sort": "\\E902",
  "check": "\\E903",
  /*
        ...
  */
  "drie-personen-in-huis": $missing-glyph,
  "gebouw-met-busje": $missing-glyph,
  "gemeentehuissvg": $missing-glyph
);

@include icon.define-icons($glyphs);`}
            />
            <p>Neem de volledige lijst eventueel over uit één van de standaard Manon-thema's.</p>
            <p>
              <strong>Let op:</strong> geef bij het aanroepen van de <code>define-icons</code> mixin
              in dit geval géén lettertype mee. De iconen gebruiken standaard het lettertype dat via
              de <code>--icon-font-family</code> property ingesteld is.
            </p>
          </li>
          <li>
            Stel de juiste UTF-8-karakters in voor componenten die een pseudo-element gebruiken voor
            een icoon. Als je de <code>define-icons</code> mixin gebruikt heb en dus een Sass map
            voor de icoon-glyphs, dan kan je deze uitlezen met de <code>map.get</code>-functie uit
            <code>sass:map</code>:
            <Code
              language="scss"
              code={`
@use "sass:map";
@use "icon";

:root {
  /* Accordion */
  --accordion-button-icon-after-open-content: #{map.get(icon.$glyphs, descending)};
  --accordion-button-icon-after-close-content: #{map.get(icon.$glyphs, ascending)};
  /* Filter */
  --filter-button-icon-before-open-content: #{map.get(icon.$glyphs, descending)};
  --filter-button-icon-before-close-content: #{map.get(icon.$glyphs, ascending)};
  /* Sidemenu */
  --sidemenu-collapsed-button-icon: #{map.get(icon.$glyphs, descending)};
  --sidemenu-expanded-button-icon: #{map.get(icon.$glyphs, ascending)};
}`}
            />
          </li>
        </ol>
      </section>
    </div>
  </article>
</main>
