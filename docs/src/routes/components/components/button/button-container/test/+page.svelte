<script module>
  export const breadcrumb = "Knoppen groeperen testpagina";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Knoppen groeperen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Subtielere weergave testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="button-container">
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="button-container">
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
</div>
`}
        />

        <h3>Veel knoppen</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="button-container">
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="button-container">
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
    <button>Lorem ipsum</button>
</div>
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/components/forms/form-input">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
