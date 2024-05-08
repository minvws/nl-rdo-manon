<script context="module">
  export const breadcrumb = "Tag";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tag</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Tag</h1>
        <p>
          Visuele labels om bijvoorbeeld groeperingen aan te brengen binnen content en data-sets.
        </p>

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

        <h3><code>p</code> als tag</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="tag tags-color-1">Lorem ipsum</p>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="tag tags-color-1">Lorem ipsum</p>
`}
        />

        <h3><code>span</code> als tag</h3>
        <h4>Visueel voorbeeld:</h4>
        <span class="tag tags-color-1">Lorem ipsum</span>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<span class="tag tags-color-1">Lorem ipsum</span>
`}
        />

        <h3><code>li</code> als tag</h3>
        <p>
          Lijst-element visueel weergegeven als tag. Voor het direct aanspreken van alle
          lijstelementen zie: <a href="tags">tags</a>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li class="tag tags-color-1">Lorem ipsum</li>
        </ul>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<ul>
<li class="tag tags-color-1">Lorem ipsum</li>
</ul>
`}
        />

        <h3>Tags binnen een tabel</h3>
        <p>
          Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van alle
          tabelelementen zie: <a href="tags">tags</a>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table>
            <caption>Voorbeeld tag binnen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Licht</th>
                <th scope="col">Medium</th>
                <th scope="col">Donker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p class="tag tags-color-1-light">Label</p></td>
                <td><p class="tag tags-color-1-medium">Label</p></td>
                <td><p class="tag tags-color-1-dark">Label</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
<table>
<caption>Voorbeeld tag binnen tabel:</caption>
<thead>
  <tr>
    <th scope="col">Licht</th>
    <th scope="col">Medium</th>
    <th scope="col">Donker</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><p class="tag tags-color-1-light">Label</p></td>
    <td><p class="tag tags-color-1-medium">Label</p></td>
    <td><p class="tag tags-color-1-dark">Label</p></td>
  </tr>
</tbody>
</table>
</div>
`}
        />

        <h3>Tag styles</h3>

        <p>Gebruik van verschillende <code>border-styles</code>.</p>

        <p>
          Om de hoogte van alle tags gelijk te houden wordt de class <code>plain</code> toegevoegd. Visueel
          is er geen omlijning zichtbaar, maar deze wordt wel toegevoegd in de achtergrondkleur van de
          tag.
        </p>

        <h4>Visueel voorbeeld:</h4>
        <p class="tag tags-color-1 plain">Lorem ipsum</p>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="tag tags-color-1 plain">Lorem ipsum</p>
`}
        />

        <h4>Visueel voorbeeld:</h4>
        <p class="tag tags-color-1 solid">Lorem ipsum</p>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="tag tags-color-1 solid">Lorem ipsum</p>
`}
        />

        <h4>Visueel voorbeeld:</h4>
        <p class="tag tags-color-1 dotted">Lorem ipsum</p>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="tag tags-color-1 dotted">Lorem ipsum</p>
`}
        />

        <h4>Visueel voorbeeld:</h4>
        <p class="tag tags-color-1 dashed">Lorem ipsum</p>

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="tag tags-color-1 dashed">Lorem ipsum</p>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/tag";
`}
        />

        <h3>Kleurensets</h3>
        <p>
          De bruikbare kleuren voor de tags worden toegevoegd via kleurensets. Beschikbare sets
          zijn:
        </p>
        <ul>
          <li><a href="tags-6">Tags kleurenset zes kleuren</a></li>
          <li><a href="tags-6-3">Tags kleurenset zes kleuren & drie tinten</a></li>
        </ul>
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
                <td>--tag-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--application-base-font-size)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tag-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>bold</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tag-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--application-base-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tag-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>0.25rem 0.5rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tag-border-radius</td>
                <td><a href="{base}/documentation/variables#border-radius">border-radius</a></td>
                <td>0.25rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--tag-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>1px</td>
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
