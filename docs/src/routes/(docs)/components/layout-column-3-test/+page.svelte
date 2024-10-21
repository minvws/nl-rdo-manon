<script module>
  export const breadcrumb = "Layout drie kolommen testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout drie kolommen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Layout drie kolommen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3><code>div</code></h3>
        <p><code>div</code> met daarbinnen gegroepeerde content binnen <code>div</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="column-3">
  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>
</div>
`}
        />

        <h3><code>div</code></h3>
        <p>
          <code>div</code> met daarbinnen gegroepeerde content binnen <code>section</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="column-3">
          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>

          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>

          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="column-3">
  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>
</div>
`}
        />

        <h3><code>div</code></h3>
        <p>
          <code>div</code> met daarbinnen gegroepeerde content binnen <code>article</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="column-3">
          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="column-3">
  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>
</div>
`}
        />

        <h3><code>section</code></h3>
        <p>
          <code>section</code> met daarbinnen gegroepeerde content binnen <code>div</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <section class="column-3">
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
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="column-3">
  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>
</section>
`}
        />

        <h3><code>section</code></h3>
        <p>
          <code>section</code> met daarbinnen gegroepeerde content binnen
          <code>section</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <section class="column-3">
          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>

          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>

          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="column-3">
  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>
</section>
`}
        />

        <h3><code>section</code></h3>
        <p>
          <code>section</code> met daarbinnen gegroepeerde content binnen
          <code>article</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <section class="column-3">
          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>
        </section>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="column-3">
  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>
</section>
`}
        />

        <h3><code>article</code></h3>
        <p>
          <code>article</code> met daarbinnen gegroepeerde content binnen <code>div</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <article class="column-3">
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
        </article>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<article class="column-3">
  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>
</article>
`}
        />

        <h3><code>article</code></h3>
        <p>
          <code>article</code> met daarbinnen gegroepeerde content binnen
          <code>section</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <article class="column-3">
          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>

          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>

          <section>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </section>
        </article>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<article class="column-3">
  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>
</article>
`}
        />

        <h3><code>article</code></h3>
        <p>
          <code>article</code> met daarbinnen gegroepeerde content binnen
          <code>article</code>'s.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <article class="column-3">
          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article class="visually-grouped">
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>
        </article>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<article class="column-3">
  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article class="visually-grouped">
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>
</article>
`}
        />
      </section>
    </div>
  </article>
</main>
