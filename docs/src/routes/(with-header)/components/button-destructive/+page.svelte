<script context="module">
  export const breadcrumb = "Destructieve knop";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Destructieve knop</title>
</svelte:head>

<main id="main-content" tabindex="-1">
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

        <button class="destructive" disabled={true}>Lorem ipsum</button>

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

        <input type="button" value="Lorem ipsum" class="destructive" disabled={true} />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum" class="destructive" disabled>
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
                <a href="../variables#background-color">background-color</a>
              </li>
              <li><a href="../variables#text-color">text-color</a></li>
              <li>
                <a href="../variables#border-width">border-width</a>
              </li>
              <li>
                <a href="../variables#border-style">border-style</a>
              </li>
              <li>
                <a href="../variables#border-color">border-color</a>
              </li>
              <li>
                <a href="../variables#border-radius">border-radius</a>
              </li>
              <li>
                <a href="../variables#outline-style">outline-style</a>
              </li>
              <li>
                <a href="../variables#outline-color">outline-color</a>
              </li>
              <li>
                <a href="../variables#outline-width">outline-width</a>
              </li>
              <li>
                <a href="../variables#outline-offset">outline-offset</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./button-destructive-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
