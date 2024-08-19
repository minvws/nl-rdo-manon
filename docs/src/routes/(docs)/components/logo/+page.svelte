<script context="module">
  export const breadcrumb = "Logo";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Logo</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>

  <article>
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
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via NPM</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/logo";
      `}
        />
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
