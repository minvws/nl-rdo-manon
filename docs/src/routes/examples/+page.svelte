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
  <article id="example-pages">
    <h1 class="page-title">Voorbeelden</h1>

    <div class="content-wrapper">
      <div>
        <p>
          De volgende pagina's bevatten voorbeelden van complete pagina's die gebruik maken van de
          componenten en elementen uit de documentatie.
        </p>
      </div>

      <div class="column-2">
        <nav aria-labelledby="example-pages-title" id="example-pages">
          <h2 id="example-pages-title">Voorbeeldpagina's</h2>
          <p class="de-emphasized" aria-hidden="true">Voorbeelden openen een nieuw venster.</p>
          <ul>
            <li><a href="{base}/examples/pages/basic" target=”_blank”>Basic <span class="visually-hidden">Opent in een nieuw venster</span></a></li>
            <li><a href="{base}/examples/pages/landing/" target=”_blank”>Landing Page <span class="visually-hidden">Opent in een nieuw venster</span></a></li>
            <li><a href="{base}/examples/pages/login" target=”_blank”>Login <span class="visually-hidden">Opent in een nieuw venster</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </article>
</main>
