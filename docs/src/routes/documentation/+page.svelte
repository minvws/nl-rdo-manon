<script module>
  export const breadcrumb = "Documentatie";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Documentatie</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <div class="spacing-0">
      <h1>Documentatie</h1>
      <p>
        Manon is een modulair framework. Dat betekent dat je zelf kiest welke componenten je
        gebruikt en welk thema je toepast.
      </p>
    </div>
  </section>

  <section>
    <div>
      <h2>Snel aan de slag</h2>
      <p>
        Voor het installeren van Manon is <a
          href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
          hreflang="en"
          rel="external">npm</a
        > nodig.
      </p>
      <ol>
        <li>
          Installeer Manon:
          <Code language="plaintext" code="npm install @minvws/manon @minvws/manon-themes" />
        </li>
        <li>
          <p>Bereid je project voor om Sass-bestanden te ondersteunen, als het dat niet al doet.</p>
          <ul>
            <li>
              Installeer <a href="https://github.com/sass/dart-sass" hreflang="en" rel="external"
                >dart-sass</a
              >
              versie 1.23 of nieuwer:
              <Code language="plaintext" code="npm install sass" />
            </li>
            <li>
              Configureer de build tool van je project om Sass te ondersteunen. Raadpleeg hiervoor
              de documentatie van je build tool. Gebruikt het project (nog) geen build tool, kies er
              dan een of gebruik <a
                href="https://sass-lang.com/documentation/cli/dart-sass/"
                hreflang="en">de Sass <em lang="en">command-line interface</em></a
              >.
            </li>
            <li>Let op: Manon werkt niet met node-sass.</li>
          </ul>
        </li>
        <li>
          Importeer in de <code>.sass</code> of <code>.scss</code> van je project de gewenste
          componenten van Manon en een thema:
          <Code
            language="scss"
            code={`
@use "@minvws/manon/body-text-set";
@use "@minvws/manon/headings-base-set";
@use "@minvws/manon/base";
@use "@minvws/manon/p";
// et cetera...

@use "@minvws/manon-themes/basic-bold";
            `}
          />
        </li>
        <li>
          Afhankelijk van welke build tools je project gebruikt, kan het nodig zijn om het basepath
          van de <code>url()</code>s van de lettertypes aan te passen. Voor webpack 4 is het
          bijvoorbeeld nodig om de paden te prefixen met een
          <code>~</code>. Dit kan door de <code>$font-path</code> variabele mee te geven:
          <Code
            language="scss"
            code={`
@use "@minvws/manon-themes/basic-bold" with (
  $font-path: "~@minvws/manon-themes/basic-bold/fonts"
);
            `}
          />
        </li>
        <li>
          Voeg de HTML toe. Volg hiervoor de instructies in de <a href="{base}/components"
            >Componentenbibliotheek</a
          >.
        </li>
      </ol>
    </div>
  </section>

  <section>
    <div>
      <h2 id="instructions-heading">Meer instructies</h2>
      <nav aria-labelledby="instructions-heading">
        <ul>
          <li><a href="{base}/documentation/add-js">JavaScript toevoegen</a></li>
          <li><a href="{base}/documentation/variables">Variabelen</a></li>
          <li>
            <a href="{base}/documentation/import-styling"
              >Componenten gebruiken en styling toevoegen</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>

  <section>
    <div>
      <h2>Manon installeren voor development</h2>
      <p>
        Manon maakt gebruik van <a href="https://git-scm.com/" hreflang="en" rel="external">git</a>
        en de package manager <a href="https://pnpm.io" hreflang="en" rel="external">pnpm</a>.
      </p>
      <ol>
        <li>
          Download Manon:
          <Code
            language="plaintext"
            code={`
git clone https://github.com/minvws/nl-rdo-manon.git
cd nl-rdo-manon
`}
          />
        </li>
        <li>
          Installeer de dependencies:
          <Code language="plaintext" code="pnpm install" />
        </li>
        <li>
          Bouw en open de documentatie:
          <ul>
            <li>
              Wil je interactief aan Manon en/of de documentatie werken?
              <ul>
                <li>
                  Start een development-server:
                  <Code language="plaintext" code="pnpm run dev" />
                </li>
                <li>
                  Open de genoemde URL, meestal is dat <a
                    href="http://localhost:5173"
                    rel="external">http://localhost:5173</a
                  >
                </li>
              </ul>
            </li>
            <li>
              Wil je een productie-versie van de documentatie bouwen?
              <ul>
                <li>
                  Draai een build:
                  <Code
                    language="plaintext"
                    code={`
cd docs
pnpm run build
`}
                  />
                </li>
                <li>Het resultaat is te vinden in de folder <code>docs/build</code></li>
                <li>
                  Gebruik <code>pnpm preview</code> om de gebouwde documentatie lokaal in te zien
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</main>
