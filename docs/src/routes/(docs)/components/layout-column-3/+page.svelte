<script context="module">
  export const breadcrumb = "Layout drie kolommen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout drie kolommen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Layout drie kolommen</h1>
        <p>Verdeling in drie gelijke kolommen vanaf de ingestelde breekpunten.</p>
      </section>

      <section id="requirements">
        <h2>Benodigde bestanden</h2>
        <p>
          Om gebruik te maken van de styling dienen de onderstaande bestanden ingeladen te zijn via
          het
          <code>manon.scss</code> bestand.
        </p>
        <ul>
          <li><code>layout/layout-base.scss</code></li>
          <li><code>layout/layout-base-variables.scss</code></li>
          <li><code>layout/layout-column-3.scss</code></li>
          <li><code>layout/layout-column-3-variables.scss</code></li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="column-3">
          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>

          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>

          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<div class="column-3">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</div>
`}
        />

        <h4><code>section</code>:</h4>
        <Code
          language="html"
          code={`
<section class="column-3">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</section>
`}
        />

        <h4><code>article</code>:</h4>
        <Code
          language="html"
          code={`
<article class="column-3">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/layout-column-3-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
