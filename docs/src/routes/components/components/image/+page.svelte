<script module>
  export const breadcrumb = "Image";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Image</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <article>
    <h1 class="page-title">Image</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>
          De <code>image</code> component wordt gebruikt om afbeeldingen weer te geven. Het is een eenvoudige
          manier om afbeeldingen toe te voegen aan je webpagina's.
        </p>
      </section>

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-3">
          <nav aria-labelledby="image-types-title" id="image-types">
            <h3 id="image-types-title">Afbeeldingstypen</h3>
            <ul>
              <li><a href="{base}/components/components/image/image-cover">Cover</a></li>
              <li><a href="{base}/components/components/image/image-icon">Icoon</a></li>
              <li><a href="{base}/components/components/image/image-round">Rond</a></li>
              <li><a href="{base}/components/components/image/image-square">Vierkant</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
