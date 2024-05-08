<script context="module">
  export const breadcrumb = "Layout footer contentblok";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Layout footer contentblok</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>

  <article>
    <div>
      <section id="introduction">
        <h1>Layout footer contentblok</h1>
        <p>
          Basisweergave-component. Layoutkeuzes die toepassing hebben op het
          <code>footer</code>-element.
        </p>
        <p class="explanation">
          <span>Tip:</span> Dit element erft stijlkeuzes van het algemene layout-bestand
          <code>layout-base-variables.scss</code> indien dit aanwezig is. Als de header, main en
          footer stijlkeuzes delen is het efficient om de keuzes in te stellen in dat bestand om
          herhaling en inconsitentie te voorkomen. Voor meer informatie zie:
          <a href="{base}/components/layout-base">Basisweergave instellen</a>.
        </p>

        <h2>Benodigde stappen:</h2>
        <ul>
          <li>
            Kies de gewenste basisweergaven. Voor beschikbare weergaven zie:
            <a href="#layout-base">Basis-weergave</a>. Voor meer informatie over het kiezen van de
            juiste weergave en het instellen ervan zie:
            <a href="{base}/components/layout-base-options">Basisweergave kiezen en instellen</a>.
          </li>
        </ul>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Kies per project of in ieder geval per pagina maximaal een basisweergave om
            tegenstrijdige stijlkeuzes te voorkomen.
          </li>
        </ul>
      </section>

      <section id="requirement">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Benodigd</h3>

        <ul>
          <li><code>layout-footer-content-block.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>layout-footer-content-block-variables.scss</code></li>
          <li><code>layout-base-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#min-height">min-height</a></li>
          <li><a href="{base}/documentation/variables#padding-top">padding-top</a></li>
          <li>
            <a href="{base}/documentation/variables#padding-right">padding-right</a>
          </li>
          <li>
            <a href="{base}/documentation/variables#padding-bottom">padding-bottom</a>
          </li>
          <li><a href="{base}/documentation/variables#padding-left">padding-left</a></li>
          <li><a href="{base}/documentation/variables#max-width">max-width</a></li>
          <li>
            Top level blokken en onderliggende blokken:
            <ul>
              <li><a href="{base}/documentation/variables#gap">gap</a></li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="examples">
        <h3>HTML-voorbeeld:</h3>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<footer>
  <div>
    <!-- Content -->
  </div>
</footer>
`}
        />

        <h4><code>section</code>:</h4>
        <Code
          language="html"
          code={`
<footer>
  <section>
    <!-- Content -->
  </section>
</footer>
`}
        />

        <h4><code>article</code>:</h4>
        <Code
          language="html"
          code={`
<footer>
  <article>
    <!-- Content -->
  </article>
</footer>
`}
        />
      </section>
    </div>
  </article>
</main>
