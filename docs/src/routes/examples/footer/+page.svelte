<script>
  import { base } from "$app/paths";
  const baseUrl = `${base}/examples/footer`;
</script>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
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
        <p>Dit is een voorbeeld van een footer</p>
      </div>
    </div>
  </section>
</main>

<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h3 id="footer-nav-1-heading">Lorem ipsum</h3>
    <ul>
      <li><a href="#0" aria-current="page">Dolor</a></li>
      <li><a href="#0">Sit</a></li>
      <li><a href="#0">Amet</a></li>
    </ul>
  </nav>
</footer>
