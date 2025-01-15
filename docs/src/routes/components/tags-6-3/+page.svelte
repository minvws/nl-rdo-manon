<script module>
  export const breadcrumb = "Tags kleurenset zes kleuren & drie tinten";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tags kleurenset zes kleuren & drie tinten</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Tags kleurenset zes kleuren &amp; drie tinten</h1>
        <p>Kleurensets voor tags.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie: <a
                  href="#requirements">Bijbehorende bestanden</a
                >.
              </li>
              <li>
                Voeg de benodigde class toe op de gewenste elementen. Voor meer informatie over het
                implementeren zie de <a href="#examples">voorbeelden</a>.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Kleuren met drie tinten</h3>
        <p>
          Voorbeeld waarbij gebruik wordt gemaakt van de volledige kleurenset met zes basiskleuren
          en drie tinten per kleur.
        </p>

        <h4>Visueel voorbeeld</h4>
        <div class="horizontal-scroll">
          <table class="tags">
            <caption>Kleuren-overzicht:</caption>
            <thead>
              <tr>
                <th scope="col">Licht</th>
                <th scope="col">Medium</th>
                <th scope="col">Donker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p class="tags-color-1-light">Label</p></td>
                <td><p class="tags-color-1-medium">Label</p></td>
                <td><p class="tags-color-1-dark">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-2-light">Label</p></td>
                <td><p class="tags-color-2-medium">Label</p></td>
                <td><p class="tags-color-2-dark">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-3-light">Label</p></td>
                <td><p class="tags-color-3-medium">Label</p></td>
                <td><p class="tags-color-3-dark">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-4-light">Label</p></td>
                <td><p class="tags-color-4-medium">Label</p></td>
                <td><p class="tags-color-4-dark">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-5-light">Label</p></td>
                <td><p class="tags-color-5-medium">Label</p></td>
                <td><p class="tags-color-5-dark">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-6-light">Label</p></td>
                <td><p class="tags-color-6-medium">Label</p></td>
                <td><p class="tags-color-6-dark">Label</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table class="tags">
    <caption>Kleuren en types-overzicht:</caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-2-light">Label</p></td>
        <td><p class="tags-color-2-medium">Label</p></td>
        <td><p class="tags-color-2-dark">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-3-light">Label</p></td>
        <td><p class="tags-color-3-medium">Label</p></td>
        <td><p class="tags-color-3-dark">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-4-light">Label</p></td>
        <td><p class="tags-color-4-medium">Label</p></td>
        <td><p class="tags-color-4-dark">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-5-light">Label</p></td>
        <td><p class="tags-color-5-medium">Label</p></td>
        <td><p class="tags-color-5-dark">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-6-light">Label</p></td>
        <td><p class="tags-color-6-medium">Label</p></td>
        <td><p class="tags-color-6-dark">Label</p></td>
      </tr>

    </tbody>
  </table>
</div>
`}
        />

        <h3>Kleuren en types</h3>
        <p>
          Voorbeeld waarbij gebruik wordt gemaakt van de volledige kleurenset en de beschikbare
          border-styles.
        </p>
        <h4>Visueel voorbeeld</h4>
        <div class="horizontal-scroll">
          <table class="tags">
            <caption>Kleuren en types-overzicht:</caption>
            <thead>
              <tr>
                <th scope="col">Licht</th>
                <th scope="col">Medium</th>
                <th scope="col">Donker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p class="tags-color-1-light plain">Label</p></td>
                <td><p class="tags-color-1-medium plain">Label</p></td>
                <td><p class="tags-color-1-dark plain">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-1-light solid">Label</p></td>
                <td><p class="tags-color-1-medium solid">Label</p></td>
                <td><p class="tags-color-1-dark solid">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-1-light dashed">Label</p></td>
                <td><p class="tags-color-1-medium dashed">Label</p></td>
                <td><p class="tags-color-1-dark dashed">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-1-light dotted">Label</p></td>
                <td><p class="tags-color-1-medium dotted">Label</p></td>
                <td><p class="tags-color-1-dark dotted">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-2-light plain">Label</p></td>
                <td><p class="tags-color-2-medium plain">Label</p></td>
                <td><p class="tags-color-2-dark plain">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-2-light solid">Label</p></td>
                <td><p class="tags-color-2-medium solid">Label</p></td>
                <td><p class="tags-color-2-dark solid">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-2-light dashed">Label</p></td>
                <td><p class="tags-color-2-medium dashed">Label</p></td>
                <td><p class="tags-color-2-dark dashed">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-2-light dotted">Label</p></td>
                <td><p class="tags-color-2-medium dotted">Label</p></td>
                <td><p class="tags-color-2-dark dotted">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-3-light plain">Label</p></td>
                <td><p class="tags-color-3-medium plain">Label</p></td>
                <td><p class="tags-color-3-dark plain">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-3-light solid">Label</p></td>
                <td><p class="tags-color-3-medium solid">Label</p></td>
                <td><p class="tags-color-3-dark solid">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-3-light dashed">Label</p></td>
                <td><p class="tags-color-3-medium dashed">Label</p></td>
                <td><p class="tags-color-3-dark dashed">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-3-light dotted">Label</p></td>
                <td><p class="tags-color-3-medium dotted">Label</p></td>
                <td><p class="tags-color-3-dark dotted">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-4-light plain">Label</p></td>
                <td><p class="tags-color-4-medium plain">Label</p></td>
                <td><p class="tags-color-4-dark plain">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-4-light solid">Label</p></td>
                <td><p class="tags-color-4-medium solid">Label</p></td>
                <td><p class="tags-color-4-dark solid">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-4-light dashed">Label</p></td>
                <td><p class="tags-color-4-medium dashed">Label</p></td>
                <td><p class="tags-color-4-dark dashed">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-4-light dotted">Label</p></td>
                <td><p class="tags-color-4-medium dotted">Label</p></td>
                <td><p class="tags-color-4-dark dotted">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-5-light plain">Label</p></td>
                <td><p class="tags-color-5-medium plain">Label</p></td>
                <td><p class="tags-color-5-dark plain">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-5-light solid">Label</p></td>
                <td><p class="tags-color-5-medium solid">Label</p></td>
                <td><p class="tags-color-5-dark solid">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-5-light dashed">Label</p></td>
                <td><p class="tags-color-5-medium dashed">Label</p></td>
                <td><p class="tags-color-5-dark dashed">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-5-light dotted">Label</p></td>
                <td><p class="tags-color-5-medium dotted">Label</p></td>
                <td><p class="tags-color-5-dark dotted">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-6-light plain">Label</p></td>
                <td><p class="tags-color-6-medium plain">Label</p></td>
                <td><p class="tags-color-6-dark plain">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-6-light solid">Label</p></td>
                <td><p class="tags-color-6-medium solid">Label</p></td>
                <td><p class="tags-color-6-dark solid">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-6-light dashed">Label</p></td>
                <td><p class="tags-color-6-medium dashed">Label</p></td>
                <td><p class="tags-color-6-dark dashed">Label</p></td>
              </tr>

              <tr>
                <td><p class="tags-color-6-light dotted">Label</p></td>
                <td><p class="tags-color-6-medium dotted">Label</p></td>
                <td><p class="tags-color-6-dark dotted">Label</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table class="tags">
    <caption>Kleuren en types-overzicht:</caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><p class="tags-color-1-light plain">Label</p></td>
        <td><p class="tags-color-1-medium plain">Label</p></td>
        <td><p class="tags-color-1-dark plain">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-1-light solid">Label</p></td>
        <td><p class="tags-color-1-medium solid">Label</p></td>
        <td><p class="tags-color-1-dark solid">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-1-light dashed">Label</p></td>
        <td><p class="tags-color-1-medium dashed">Label</p></td>
        <td><p class="tags-color-1-dark dashed">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-1-light dotted">Label</p></td>
        <td><p class="tags-color-1-medium dotted">Label</p></td>
        <td><p class="tags-color-1-dark dotted">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-2-light plain">Label</p></td>
        <td><p class="tags-color-2-medium plain">Label</p></td>
        <td><p class="tags-color-2-dark plain">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-2-light solid">Label</p></td>
        <td><p class="tags-color-2-medium solid">Label</p></td>
        <td><p class="tags-color-2-dark solid">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-2-light dashed">Label</p></td>
        <td><p class="tags-color-2-medium dashed">Label</p></td>
        <td><p class="tags-color-2-dark dashed">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-2-light dotted">Label</p></td>
        <td><p class="tags-color-2-medium dotted">Label</p></td>
        <td><p class="tags-color-2-dark dotted">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-3-light plain">Label</p></td>
        <td><p class="tags-color-3-medium plain">Label</p></td>
        <td><p class="tags-color-3-dark plain">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-3-light solid">Label</p></td>
        <td><p class="tags-color-3-medium solid">Label</p></td>
        <td><p class="tags-color-3-dark solid">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-3-light dashed">Label</p></td>
        <td><p class="tags-color-3-medium dashed">Label</p></td>
        <td><p class="tags-color-3-dark dashed">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-3-light dotted">Label</p></td>
        <td><p class="tags-color-3-medium dotted">Label</p></td>
        <td><p class="tags-color-3-dark dotted">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-4-light plain">Label</p></td>
        <td><p class="tags-color-4-medium plain">Label</p></td>
        <td><p class="tags-color-4-dark plain">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-4-light solid">Label</p></td>
        <td><p class="tags-color-4-medium solid">Label</p></td>
        <td><p class="tags-color-4-dark solid">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-4-light dashed">Label</p></td>
        <td><p class="tags-color-4-medium dashed">Label</p></td>
        <td><p class="tags-color-4-dark dashed">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-4-light dotted">Label</p></td>
        <td><p class="tags-color-4-medium dotted">Label</p></td>
        <td><p class="tags-color-4-dark dotted">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-5-light plain">Label</p></td>
        <td><p class="tags-color-5-medium plain">Label</p></td>
        <td><p class="tags-color-5-dark plain">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-5-light solid">Label</p></td>
        <td><p class="tags-color-5-medium solid">Label</p></td>
        <td><p class="tags-color-5-dark solid">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-5-light dashed">Label</p></td>
        <td><p class="tags-color-5-medium dashed">Label</p></td>
        <td><p class="tags-color-5-dark dashed">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-5-light dotted">Label</p></td>
        <td><p class="tags-color-5-medium dotted">Label</p></td>
        <td><p class="tags-color-5-dark dotted">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-6-light plain">Label</p></td>
        <td><p class="tags-color-6-medium plain">Label</p></td>
        <td><p class="tags-color-6-dark plain">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-6-light solid">Label</p></td>
        <td><p class="tags-color-6-medium solid">Label</p></td>
        <td><p class="tags-color-6-dark solid">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-6-light dashed">Label</p></td>
        <td><p class="tags-color-6-medium dashed">Label</p></td>
        <td><p class="tags-color-6-dark dashed">Label</p></td>
      </tr>

      <tr>
        <td><p class="tags-color-6-light dotted">Label</p></td>
        <td><p class="tags-color-6-medium dotted">Label</p></td>
        <td><p class="tags-color-6-dark dotted">Label</p></td>
      </tr>

    </tbody>
  </table>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <p>
          Het voorbeeld maakt gebruik van de kleurenset <code>tag-colors-soft</code>. Dit is
          optioneel. De variabelen binnen tags-6-3 kunnen naar keuze met kleuren (hex codes) of
          variabelen uit kleurensets gevuld worden.
        </p>
        <p>
          Bij het gebruik van variabelen uit kleurensets dient de kleurenset altijd eerst ingeladen
          te worden zodat de variabelen uit die set beschikbaar zijn voor het tags-6-3-bestand.Zie
          onderstaand voorbeeld voor meer informatie.
        </p>
        <Code
          language="css"
          code={`
/* Color sets */
@use "@minvws/manon/tag-colors-soft";

/* Tags */
@use "@minvws/manon/tag";
@use "@minvws/manon/tags";
@use "@minvws/manon/tags-6-3";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Beschikbare instelbare variabelen:</caption>
            <thead>
              <tr>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Manon ingestelde waarde</th>
                <th scope="col">Breekpunt</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--tags-color-1-light-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-blue-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-light-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-blue-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-light-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-blue-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-medium-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-blue-medium-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-medium-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-blue-medium-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-medium-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-blue-medium-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-dark-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-blue-dark-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-dark-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-blue-dark-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-dark-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-blue-dark-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-light-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-green-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-light-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-green-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-light-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-green-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-medium-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-green-medium-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-medium-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-green-medium-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-medium-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-green-medium-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-dark-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-green-dark-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-dark-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-green-dark-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-dark-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-green-dark-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-light-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-yellow-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-light-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-yellow-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-light-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-yellow-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-medium-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-yellow-medium-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-medium-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-yellow-medium-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-medium-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-yellow-medium-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-dark-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-yellow-dark-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-dark-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-yellow-dark-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-dark-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-yellow-dark-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-light-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-orange-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-light-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-orange-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-light-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-orange-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-medium-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-orange-medium-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-medium-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-orange-medium-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-medium-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-orange-medium-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-dark-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-orange-dark-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-dark-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-orange-dark-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-dark-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-orange-dark-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-light-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-red-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-light-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-red-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-light-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-red-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-medium-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-red-medium-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-medium-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-red-medium-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-medium-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-red-medium-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-dark-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-red-dark-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-dark-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-red-dark-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-dark-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-red-dark-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-light-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-violet-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-light-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-violet-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-light-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-violet-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-medium-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-violet-medium-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-medium-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-violet-medium-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-medium-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-violet-medium-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-dark-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--tags-soft-violet-dark-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-dark-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-violet-dark-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-dark-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-violet-dark-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</main>
