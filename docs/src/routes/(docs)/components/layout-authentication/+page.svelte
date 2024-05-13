<script context="module">
  export const breadcrumb = "Layout authentication";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout authentication</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Layout authenticatie</h1>
        <p>
          Weergave voor authenticatie-elementen. Login formulieren hebben vaak belang bij een
          smallere weergave dan overige formulieren.
        </p>
      </section>

      <section id="requirements">
        <h2>Benodigde bestanden</h2>
        <p>
          Om gebruik te maken van de styling dienen de onderstaande bestanden ingeladen te zijn via
          het
          <code>manon.scss</code> bestand.
        </p>
        <ul>
          <li><code>layout/layout-base/layout-base.scss</code></li>
          <li><code>layout/layout-base-variables.scss</code></li>
          <li>
            <code>layout/layout-authentication/layout-authentication.scss</code>
          </li>
          <li><code>layout/layout-authentication-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h3>Instelbare variabelen</h3>
        <ul>
          <li><a href="{base}/documentation/variables#max-width">max-width</a></li>
          <li><a href="{base}/documentation/variables#padding">padding</a></li>
          <li>
            <a href="{base}/documentation/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
          <li><a href="{base}/documentation/variables#breakpoints">Breekpunten</a></li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="layout-authentication">
          <form class="background-color-offset">
            <div>
              <label for="example-1-name-1">User name</label>
              <input type="text" id="example-1-name-1" />
            </div>
            <div>
              <label for="example-1-password-1">Password</label>
              <input type="password" id="example-1-password-1" />
            </div>
            <button type="submit">Lorem ipsum</button>
          </form>
        </div>

        <h3>HTML-voorbeeld:</h3>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<div class="layout-authentication">
  <!-- Content -->
</div>
`}
        />

        <h4><code>section</code>:</h4>
        <Code
          language="html"
          code={`
<section class="layout-authentication">
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
<article class="layout-authentication">
  <div>
    <!-- Content -->
  </div>
</article>
`}
        />

        <h4><code>form</code>:</h4>
        <Code
          language="html"
          code={`
<form class="layout-authentication">
  <!-- Content -->
</form>
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/layout-authentication-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
