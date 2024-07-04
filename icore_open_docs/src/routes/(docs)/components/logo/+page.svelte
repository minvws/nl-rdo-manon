<script context="module">
  export const breadcrumb = "Logo";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Logo</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Logo</h1>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visuele voorbeeld:</h3>

        <a
          href="{base}/components/logo"
          class="logo"
          aria-label="Logo bedrijfs- of product-naam, ga naar de homepage van bedrijfs- of product-naam"
        >
          <img src="$img/logo.svg" alt="Logo bedrijfs- of product-naam" />
          Bedrijfs- of product-naam
        </a>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<a href="{base}/components/logo" class="logo" aria-label="Logo bedrijfs- of product-naam, ga naar de homepage van bedrijfs- of product-naam">
  <img src="/logo.svg" alt="Logo bedrijfs- of product-naam" />
  Bedrijfs- of product-naam
</a>
`}
        />
      </section>

      <section id="requirements">
        <h2>Benodigde bestanden</h2>
        <ul>
          <li><code>logo/logo-base.scss</code></li>
          <li><code>logo/logo-base-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#width">width</a></li>
          <li><a href="{base}/documentation/variables#min-width">min-width</a></li>
          <li><a href="{base}/documentation/variables#max-width">max-width</a></li>
          <li><a href="{base}/documentation/variables#height">height</a></li>
          <li><a href="{base}/documentation/variables#min-height">min-height</a></li>
          <li><a href="{base}/documentation/variables#max-height">max-height</a></li>
          <li>
            <a href="{base}/documentation/variables#object-position">object-position</a>
          </li>
          <li><a href="{base}/documentation/variables#object-fit">object-fit</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
