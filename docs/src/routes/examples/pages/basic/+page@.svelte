<script lang="ts">
  import { base } from "$app/paths";
  const baseUrl = `${base}/examples/pages/basic`;
</script>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <nav>
    <div>
      <ul>
        <li><a href={baseUrl} aria-current="page">Home</a></li>
        <li><a href={baseUrl}>About</a></li>
        <li><a href={baseUrl}>Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<main id="main-content" tabindex="-1">
  <section>
    <h1>Paginatitel</h1>
    <div class="content-wrapper">
      <div>
        <h2>Onderwerp</h2>
        <p>Dit is een voorbeeld van nog een content-blok.</p>
      </div>
    </div>
  </section>
</main>

<footer>
  <nav>
    <ul>
      <li><a href={baseUrl}>Home</a></li>
      <li><a href={baseUrl}>About</a></li>
      <li><a href={baseUrl}>Contact</a></li>
    </ul>
  </nav>
</footer>
