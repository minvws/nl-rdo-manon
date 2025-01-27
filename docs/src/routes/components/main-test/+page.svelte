<script module>
  export const breadcrumb = "Main testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Main testpagina</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#tests">Tests</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Main testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <p>Beschikbare voorbeelden:</p>

        <h3>Content direct binnen <code>main</code></h3>
        <p>Voor visueel voorbeeld zie: <a href="main-test-direct">Direct</a></p>
        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<main>
  <!-- content -->
</main>
`}
        />

        <h3>Content binnen <code>main</code> gegroepeerd in <code>div</code>'s</h3>
        <p>Voor visueel voorbeeld zie: <a href="main-test-div">Div</a></p>
        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<main>
  <div>
    <!-- content -->
  </div>
</main>
`}
        />

        <h3>Content binnen <code>main</code> gegroepeerd in <code>section</code>'s</h3>
        <!-- @TODO -->
        <!-- <p>Voor visueel voorbeeld zie: <a href="main-test-section">Section</a></p> -->
        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<main>
  <section>
    <!-- content -->
  </section>
</main>
`}
        />

        <h3>Content binnen <code>main</code> gegroepeerd in <code>article</code>'s</h3>
        <!-- @TODO -->
        <!-- <p>Voor visueel voorbeeld zie: <a href="main-test-article">Article</a></p> -->
        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<main>
  <article class="visually-grouped">
    <!-- content -->
  </article>
</main>
`}
        />

        <h3>Content in een content-wrapper binnen <code>main</code></h3>
        <p>
          De content wrapper zorgt ervoor dat de achtergrond door kan lopen terwijl de content een
          maximale breedte heeft.
        </p>
        <p>
          Voor visueel voorbeeld zie: <a href="main-test-content-wrapper-div">Content wrapper div</a
          >
        </p>
        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<main>
  <div> <!-- This can be full width div, section or article -->
    <div> <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </div>
</main>
`}
        />
      </section>
    </div>
  </article>
</main>
