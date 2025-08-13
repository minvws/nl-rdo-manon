<script module>
  export const breadcrumb = "Layout tweederde eenderde testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout tweederde eenderde testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Layout tweederde eenderde testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3><code>div</code></h3>
        <p>Gegroepeerde content binnen een <code>div</code> met <code>div</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
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
<div class="two-thirds-one-third">
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

  <div>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </div>
</div>
`}
        />

        <h3><code>div</code></h3>
        <p>Gegroepeerde content binnen een <code>div</code> met <code>section</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
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
<div class="two-thirds-one-third">
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

        <h3><code>span</code></h3>
        <p><code>span</code> en <code>p</code> binnen tweederde eenderde uitlijning.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
          <span>Lorem ipsum dolor set</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
            luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed,
            tempus in massa.
          </p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="two-thirds-one-third">
  <span>Lorem ipsum dolor set</span>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
    luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
    sed, tempus in massa.
  </p>
</div>
`}
        />

        <h3><code>p</code></h3>
        <p>Paragrafen binnen tweederde eenderde uitlijning.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
          <p>Lorem ipsum dolor set</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
            luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed,
            tempus in massa.
          </p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="two-thirds-one-third">
  <p>Lorem ipsum dolor set</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
    luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
    sed, tempus in massa.
  </p>
</div>
`}
        />

        <h3><code>ul</code></h3>
        <p>Lijst binnen tweederde eenderde uitlijning.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
            luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed,
            tempus in massa.
          </p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="two-thirds-one-third">
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
  </ul>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
    luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
    sed, tempus in massa.
  </p>
</div>
`}
        />

        <h3><code>p</code> en <code>ul</code></h3>
        <p>Lijst binnen tweederde eenderde uitlijning.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
            luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed,
            tempus in massa.
          </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="two-thirds-one-third">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
    luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
    sed, tempus in massa.
  </p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
  </ul>
</div>
`}
        />

        <h3><code>div</code> met afbeelding</h3>
        <p>Gegroepeerde content binnen een <code>div</code> met <code>section</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
          <img src="$img/strand.jpg" alt="Foto van een strand" />

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
<div class="two-thirds-one-third">
  <img src="/img/strand.jpg" alt="Foto van een strand">

  <section>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </section>
</div>
`}
        />

        <h3><code>div</code></h3>
        <p>Gegroepeerde content binnen een <code>div</code> met <code>article</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <div class="two-thirds-one-third">
          <article>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article>
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
<div class="two-thirds-one-third">
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

        <h3><code>section</code></h3>
        <p>Elementen uitlijnen binnen een <code>section</code> met <code>div</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <section class="two-thirds-one-third">
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
<section class="two-thirds-one-third">
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
        <p>Elementen uitlijnen binnen een <code>section</code> met <code>section</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <section class="two-thirds-one-third">
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
<section class="two-thirds-one-third">
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
        <p>Elementen uitlijnen binnen een <code>section</code> met <code>article</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <section class="two-thirds-one-third">
          <article>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article>
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
<section class="two-thirds-one-third">
  <article>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>
</section>
`}
        />

        <h3><code>article</code></h3>
        <p>Elementen uitlijnen binnen een <code>article</code> met <code>div</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <article class="two-thirds-one-third">
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
<article class="two-thirds-one-third">
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
        <p>Elementen uitlijnen binnen een <code>article</code> met <code>section</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <article class="two-thirds-one-third">
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
<article class="two-thirds-one-third">
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
        <p>Elementen uitlijnen binnen een <code>article</code> met <code>article</code>'s.</p>
        <h4>Visueel voorbeeld:</h4>
        <article class="two-thirds-one-third">
          <article>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </article>

          <article>
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
<article class="two-thirds-one-third">
  <article>
    <h2>Lorem ipsum dolor set</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie sed, tempus in massa.</p>
  </article>

  <article>
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
