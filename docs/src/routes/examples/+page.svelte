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
  <section>
    <h1>Voorbeelden</h1>

  <section id="example-pages">
    <h2>Voorbeeldpagina's</h2>
    <div class="content-wrapper">
      <p>
        De volgende pagina's bevatten voorbeelden van complete pagina's die gebruik maken van de
        componenten en elementen uit de documentatie.
      </p>
      <div class="column-2">
        <nav aria-labelledby="example-pages-title" id="example-pages">
          <h3 id="example-pages-title">Voorbeeldpagina's</h3>
          <ul>
            <li><a href="{base}/examples/pages/basic">Basic</a></li>
            <li><a href="{base}/examples/pages/landing/">Landing Page</a></li>
            <li><a href="{base}/examples/pages/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</main>
