<script>
  import { base } from "$app/paths";
</script>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a href="{base}/" class="logo">
        <img src="$img/logo-white.svg" alt="Placeholder logo" />Manon
      </a>

      <div class="collapsing-element">
        <ul>
          <li><a href="{base}/">Home</a></li>
          <li><a href="{base}/components">Componenten</a></li>
          <li><a href="{base}/documentation">Documentatie</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main id="main-content"></main>
