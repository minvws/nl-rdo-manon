<script context="module">
  export const breadcrumb = "Benadrukte weergave testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Benadrukte weergave testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Benadrukte weergave testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`}
        />

        <h4>Visueel voorbeeld:</h4>
        <p class="emphasized">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at
          tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis blandit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at
          tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis blandit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis blandit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis blandit.</p>
`}
        />
      </section>
    </div>
  </article>
</main>
