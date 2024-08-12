<script context="module">
  export const breadcrumb = "Destructieve knop";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Destructieve knop</title>
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

  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Destructieve knop</h1>
        <p>Opvallende weergave voor knoppen die een destructieve actie initiëren.</p>

        <ol>
          <li>
            Voeg de class <code>destructive</code> toe om gebruik te maken van de visuele weergave van
            een destructieve knop.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <button class="destructive">Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button class="destructive">Lorem ipsum</button>
`}
        />

        <h2><code>button</code> uitgeschakeld</h2>
        <h3>Visuele weergave:</h3>

        <button class="destructive" disabled>Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button class="destructive" disabled>button primary</button>
`}
        />
      </section>

      <section id="button-base-input">
        <h2><code>input type="button"</code></h2>
        <h3>Visuele weergave:</h3>

        <input type="button" value="Lorem ipsum" class="destructive" />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum" class="destructive">
`}
        />

        <h2><code>input type="button"</code> uitgeschakeld</h2>
        <h3>Visuele weergave:</h3>

        <input type="button" value="Lorem ipsum" class="destructive" disabled />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum" class="destructive" disabled>
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
      @use "@minvws/manon/button-destructive";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Knop, hover, active, focus.
            <ul>
              <li>
                <a href="{base}/documentation/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
              <li>
                <a href="{base}/documentation/variables#border-width">border-width</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-style">border-style</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-color">border-color</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-radius">border-radius</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-style">outline-style</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-color">outline-color</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-width">outline-width</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-offset">outline-offset</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/button-destructive-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
