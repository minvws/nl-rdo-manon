<script context="module">
  export const breadcrumb = "Horizontaal uitgelijnd";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Horizontaal uitgelijnd</title>
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
        <h1>Horizontaal uitgelijnd</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>horizontal-view</code> toe op het horizontaal uit te lijnen element.
          </li>
        </ol>

        <h2>Suggesties:</h2>
        <ol>
          <li>
            Voor het horizontaal uitlijnen van meerdere objecten binnen een element voeg de class <code
              >horizontal-view-group</code
            >. Voor meer informatie zie:
            <a href="#horizontal-view-group">Object met horizontaal uitgelijnde componenten</a>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="horizontal-view">
          <button class="ghost">Terug</button>
          <button>Verder</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view">
  <button class="ghost">Terug</button>
  <button>Verder</button>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view">
  <!-- horizontaal uit te lijnen content -->
</div>
`}
        />

        <h3>Object met horizontaal uitgelijnde elementen</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="horizontal-view-group" id="horizontal-view-group">
          <div>
            <button class="ghost">Terug</button>
            <button>Verder</button>
          </div>

          <div>
            <button class="ghost">Terug</button>
            <button>Verder</button>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view-group">
  <div>
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>

  <div>
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view-group">
  <div>
      <!-- horizontaal uit te lijnen content -->
  </div>

  <div>
     <!-- horizontaal uit te lijnen content -->
  </div>
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

        <h3>Importeer component via NPM</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/horizontal-view";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#gap">gap</a></li>
          <li>
            <a href="{base}/documentation/variables#justify-content">justify-content</a>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/horizontal-view-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
