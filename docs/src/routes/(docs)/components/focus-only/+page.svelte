<script context="module">
  export const breadcrumb = '"Focus only"';
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>"Focus only"</title>
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
        <h1>"Focus only"</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <p>Voor het tonen van componenten als ze in focus zijn.</p>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <p>
          <strong>Let op</strong>: Alleen zichtbaar als het element "in focus" is. Navigeer naar het
          voorbeeld-element met <i>tab</i>.
        </p>
        <button class="focus-only">Gefocussed element</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="focus-only">Gefocussed element</button>
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
@use "@minvws/manon/focus-only";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/focus-only-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
