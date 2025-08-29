<script module>
  export const breadcrumb = "Layout gecentreerd testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout gecentreerd testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Layout gecentreerd testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Losse content</h3>
        <p>
          Elementen centreren direct binnen een element met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="centered">
          <h1>Lorem ipsum</h1>
          <p>Dolor sit amet.</p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</div>
`}
        />

        <h3><code>section</code></h3>
        <p>
          Elementen centreren direct binnen een <code>section</code> met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <section class="centered">
          <h1>Lorem ipsum</h1>
          <p>Dolor sit amet.</p>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</section>
`}
        />

        <h3><code>section</code> met gegroepeerde content</h3>
        <p>
          <code>div</code> centreren binnen een <code>section</code> met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <section class="centered">
          <div>
            <h1>Lorem ipsum</h1>
            <p>Dolor sit amet.</p>
          </div>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="centered">
  <div>
    <h1>Lorem ipsum</h1>
    <p>Dolor sit amet.</p>
  </div>
</section>
`}
        />

        <h3><code>article</code></h3>
        <p>
          Elementen centreren direct binnen een <code>article</code> met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <article class="centered">
          <h1>Lorem ipsum</h1>
          <p>Dolor sit amet.</p>
        </article>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<article class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</article>
`}
        />

        <h3><code>article</code> met gegroepeerde content</h3>
        <p>
          <code>div</code> centreren binnen een <code>article</code> met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <article class="centered">
          <div>
            <h1>Lorem ipsum</h1>
            <p>Dolor sit amet.</p>
          </div>
        </article>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<article class="centered">
  <div>
    <h1>Lorem ipsum</h1>
    <p>Dolor sit amet.</p>
  </div>
</article>
`}
        />

        <h3><code>div</code></h3>
        <p>
          Elementen centreren direct binnen een <code>div</code> met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="centered">
          <h1>Lorem ipsum</h1>
          <p>Dolor sit amet.</p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</div>
`}
        />

        <h3><code>div</code> met gegroepeerde content</h3>
        <p>
          <code>div</code> centreren binnen een <code>div</code> met de class
          <code>centered</code>.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="centered">
          <div>
            <h1>Lorem ipsum</h1>
            <p>Dolor sit amet.</p>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="centered">
  <div>
    <h1>Lorem ipsum</h1>
    <p>Dolor sit amet.</p>
  </div>
</div>
`}
        />

        <h3>List-item - <code>li</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <ul class="tiles">
          <li class="centered">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>

          <li>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>

          <li>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="centered">
  <div>
    <h1>Lorem ipsum</h1>
    <p>Dolor sit amet.</p>
  </div>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
