<script module>
  export const breadcrumb = "Knoppen (basisweergave)";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Knoppen (basisweergave)</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>

  <article id="examples" class="visually-grouped">
    <div>
      <h1>Knoppen (basisweergave)</h1>
      <section id="button-base-button">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <button>Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button>Lorem ipsum</button>
`}
        />
      </section>

      <section id="button-base-link-button">
        <h2>Link als button: <code>a</code></h2>
        <h3>Visuele weergave:</h3>

        <a href="button-base" class="button">Lorem ipsum</a>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<a href="#" class="button">Lorem ipsum</a>
  `}
        />
      </section>

      <section id="button-base-disabled">
        <h2><code>button</code> uitgeschakeld</h2>
        <h3>Visuele weergave:</h3>

        <button disabled>Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button disabled>button primary</button>
`}
        />
      </section>

      <section id="button-base-input">
        <h2><code>input type="button"</code></h2>
        <h3>Visuele weergave:</h3>

        <input type="button" value="Lorem ipsum" />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum">
`}
        />

        <h2><code>input type="button"</code> uitgeschakeld</h2>
        <h3>Visuele weergave:</h3>

        <input type="button" value="Lorem ipsum" disabled />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum" disabled>
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
        <h3>Import scss-file</h3>
        <Code
          language="html"
          code={`
@import button-base;
`}
        />

        <h3>Import via npm-package</h3>
        <Code
          language="html"
          code={`
@use "@minvws/manon/button-base";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/button-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
