<script context="module">
  export const breadcrumb = "Ingelogd als testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Ingelogd als testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Ingelogd als testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3><code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="login-meta">
          <p>Ingelogd als: <a href="login-meta-test">Jane Doe</a></p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="login-meta">
<p>Ingelogd als: <a href="">Jane Doe</a></p>
</div>
`}
        />

        <h3>Section</h3>
        <h4>Visueel voorbeeld:</h4>
        <section class="login-meta">
          <p>Ingelogd als: <a href="login-meta-test">Jane Doe</a></p>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="login-meta">
<p>Ingelogd als: <a href="">Jane Doe</a></p>
</section>
`}
        />

        <h3><code>span</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <span class="login-meta">Ingelogd als: <a href="login-meta-test">Jane Doe</a></span>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<span class="login-meta">Ingelogd als: <a href="">Jane Doe</a></span>
`}
        />

        <h3><code>p</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="login-meta">Ingelogd als: <a href="login-meta-test">Jane Doe</a></p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="login-meta">Ingelogd als: <a href="">Jane Doe</a></p>
`}
        />
      </section>
    </div>
  </article>
</main>
