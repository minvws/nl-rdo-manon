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
      <div class="collapsing-element">
        <ul>
          <li><a href="{base}/">Home</a></li>
          <li><a href="{base}/components">Componenten</a></li>
          <li><a href="{base}/documentation">Documentatie</a></li>
        </ul>

        <ul class="actions">
          <li><a href="{base}/examples/header-navigation-with-form-button" class="avatar">A</a></li>
          <li>
            <form action="{base}/" method="POST" class="inline">
              <input type="hidden" name="_token" value="" />
              <button type="submit">Logout</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main id="main-content"></main>
