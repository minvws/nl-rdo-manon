<script context="module">
  export const breadcrumb = "Tags kleurenset zes kleuren";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tags kleurenset zes kleuren</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Tags kleurenset zes kleuren</h1>
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
        <h3>Visueel voorbeeld</h3>
        <ul class="tags horizontal-view">
          <li class="tags-color-1">Label</li>
          <li class="tags-color-2">Label</li>
          <li class="tags-color-3">Label</li>
          <li class="tags-color-4">Label</li>
          <li class="tags-color-5">Label</li>
          <li class="tags-color-6">Label</li>
        </ul>

        <h3>HTML-voorbeeld</h3>
        <Code
          language="html"
          code={`
<ul class="tags horizontal-view">
  <li class="tags-color-1">Label</p></li>
  <li class="tags-color-2">Label</p></li>
  <li class="tags-color-3">Label</p></li>
  <li class="tags-color-4">Label</p></li>
  <li class="tags-color-5">Label</p></li>
  <li class="tags-color-6">Label</p></li>
</ul>
`}
        />

        <h3>Visueel voorbeeld met types</h3>
        <p>
          Om de hoogte van alle tags gelijk te houden wordt de class <code>plain</code> toegevoegd. Visueel
          is er geen omlijning zichtbaar, maar deze wordt wel toegevoegd in de achtergrondkleur van de
          tag.
        </p>
        <ul class="tags horizontal-view">
          <li class="tags-color-1 plain">Label</li>
          <li class="tags-color-1 solid">Label</li>
          <li class="tags-color-1 dashed">Label</li>
          <li class="tags-color-1 dotted">Label</li>
          <li class="tags-color-2 plain">Label</li>
          <li class="tags-color-2 solid">Label</li>
          <li class="tags-color-2 dashed">Label</li>
          <li class="tags-color-2 dotted">Label</li>
          <li class="tags-color-3 plain">Label</li>
          <li class="tags-color-3 solid">Label</li>
          <li class="tags-color-3 dashed">Label</li>
          <li class="tags-color-3 dotted">Label</li>
          <li class="tags-color-4 plain">Label</li>
          <li class="tags-color-4 solid">Label</li>
          <li class="tags-color-4 dashed">Label</li>
          <li class="tags-color-4 dotted">Label</li>
          <li class="tags-color-5 plain">Label</li>
          <li class="tags-color-5 solid">Label</li>
          <li class="tags-color-5 dashed">Label</li>
          <li class="tags-color-5 dotted">Label</li>
          <li class="tags-color-6 plain">Label</li>
          <li class="tags-color-6 solid">Label</li>
          <li class="tags-color-6 dashed">Label</li>
          <li class="tags-color-6 dotted">Label</li>
        </ul>

        <h3>HTML-voorbeeld</h3>
        <Code
          language="html"
          code={`
<ul class="tags horizontal-view">
  <li class="tags-color-1 plain">Label</p></li>
  <li class="tags-color-1 solid">Label</p></li>
  <li class="tags-color-1 dashed">Label</p></li>
  <li class="tags-color-1 dotted">Label</p></li>
  <li class="tags-color-2 plain">Label</p></li>
  <li class="tags-color-2 solid">Label</p></li>
  <li class="tags-color-2 dashed">Label</p></li>
  <li class="tags-color-2 dotted">Label</p></li>
  <li class="tags-color-3 plain">Label</p></li>
  <li class="tags-color-3 solid">Label</p></li>
  <li class="tags-color-3 dashed">Label</p></li>
  <li class="tags-color-3 dotted">Label</p></li>
  <li class="tags-color-4 plain">Label</p></li>
  <li class="tags-color-4 solid">Label</p></li>
  <li class="tags-color-4 dashed">Label</p></li>
  <li class="tags-color-4 dotted">Label</p></li>
  <li class="tags-color-5 plain">Label</p></li>
  <li class="tags-color-5 solid">Label</p></li>
  <li class="tags-color-5 dashed">Label</p></li>
  <li class="tags-color-5 dotted">Label</p></li>
  <li class="tags-color-6 plain">Label</p></li>
  <li class="tags-color-6 solid">Label</p></li>
  <li class="tags-color-6 dashed">Label</p></li>
  <li class="tags-color-6 dotted">Label</p></li>
</ul>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <p>
          <strong>Let op:</strong> Deze kleurensets horen bij het tags. De tag en tags-bestanden dienen
          daarom ook ingeladen te zijn binnen het project.
        </p>
        <ul>
          <li><a href="tag">tag</a></li>
          <li>
            <a href="tags">tags (Optioneel voor het tonen van meerdere objecten als tags.)</a>
          </li>
        </ul>

        <h3>Importeer component via npm</h3>
        <p>
          Het voorbeeld maakt gebruik van de kleurenset <code>tag-colors-soft</code>. Dit is
          optioneel. De variabelen binnen tags-6 kunnen naar keuze met kleuren (hex codes) of
          variabelen uit kleurensets gevuld worden.
        </p>
        <p>
          Bij het gebruik van variabelen uit kleurensets dient de kleurenset altijd eerst ingeladen
          te worden zodat de variabelen uit die set beschikbaar zijn voor het tags-6-bestand. Zie
          onderstaand voorbeeld voor meer informatie.
        </p>

        <h4>CSS-voorbeeld:</h4>

        <Code
          language="css"
          code={`
/* Color sets */
@use "@minvws/manon/tag-colors-soft";

/* Tags */
@use "@minvws/manon/tag";
@use "@minvws/manon/tags";
@use "@minvws/manon/tags-6";
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
                <td>--tags-color-1-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--tags-soft-blue-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-blue-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-1-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-blue-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--tags-soft-green-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-green-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-2-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-green-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--tags-soft-yellow-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-yellow-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-3-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-yellow-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--tags-soft-orange-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-orange-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-4-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-orange-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--tags-soft-red-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-red-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-5-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-red-light-border-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--tags-soft-violet-light-background-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--tags-soft-violet-light-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tags-color-6-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--tags-soft-violet-light-border-color)</td>
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
