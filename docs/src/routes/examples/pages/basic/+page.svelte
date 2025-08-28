<script lang="ts">
  import { base } from "$app/paths";
  const BaseUrl = `${base}/examples/pages/basic`;
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
        <li><a href={BaseUrl}>Home</a></li>
        <li><a href={BaseUrl}>About</a></li>
        <li><a href={BaseUrl}>Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<main id="main-content">
  <section>
    <div></div>
  </section>
</main>

<footer>
  <nav>
    <ul>
      <li><a href={BaseUrl}>Home</a></li>
      <li><a href={BaseUrl}>About</a></li>
      <li><a href={BaseUrl}>Contact</a></li>
    </ul>
  </nav>
</footer>
