<script lang="ts">
  import { base } from "$app/paths";
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
        <li><a href={base}>Home</a></li>
        <li><a href={base}>About</a></li>
        <li><a href={base}>Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<slot />

<footer>
  <nav>
    <h2>Manon Examples</h2>
    <ul>
      <li><a href={base}>Home</a></li>
      <li><a href={base}>About</a></li>
      <li><a href={base}>Contact</a></li>
    </ul>
  </nav>
</footer>