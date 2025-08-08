<script module>
  export const breadcrumb = "Components";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Examples</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <h1>Voorbeelden</h1>
    <p>
      Deze pagina bevat voorbeelden van verschillende componenten en elementen die beschikbaar zijn
      in de documentatie.
    </p>
  </section>

  <section id="example-pages">
    <h2>Voorbeeldpagina's</h2>
    <p>
      De volgende pagina's bevatten voorbeelden van complete pagina's die gebruik maken van de
      componenten en elementen uit de documentatie.
    </p>
    <div class="column-2">
      <nav aria-labelledby="example-pages-title" id="example-pages">
        <h3 id="example-pages-title">Voorbeeldpagina's</h3>
        <ul>
          <li><a href="{base}/examples/pages/login">Login</a></li>
          <li><a href="{base}/examples/pages/landing-page/">Landing Page</a></li>
        </ul>
      </nav>
    </div>
  </section>

  <section id="available-examples">
    <h2>Beschikbare voorbeelden</h2>
    <div class="column-3">
      <nav aria-labelledby="example-types-title" id="example-types">
        <h3 id="example-types-title">Voorbeeldtypen</h3>
        <ul>
          <li><a href="{base}/examples/breadcrumb-bar">Breadcrumb Bar</a></li>
          <li><a href="{base}/examples/footer-link-unvisited">Footer Link Unvisited</a></li>
          <li><a href="{base}/examples/footer-link-visited">Footer Link Visited</a></li>
          <li>
            <a href="{base}/examples/footer-navigation-link-unvisited"
              >Footer Navigation Link Unvisited</a
            >
          </li>
          <li>
            <a href="{base}/examples/footer-navigation-link-visited"
              >Footer Navigation Link Visited</a
            >
          </li>
          <li>
            <a href="{base}/examples/header-navigation-link-unvisited"
              >Header Navigation Link Unvisited</a
            >
          </li>
          <li>
            <a href="{base}/examples/header-navigation-link-visited"
              >Header Navigation Link Visited</a
            >
          </li>
          <li>
            <a href="{base}/examples/header-navigation-with-content-wrapper"
              >Header Navigation with Content Wrapper</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
</main>
