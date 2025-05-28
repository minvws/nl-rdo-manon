<script>
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <a href={page.url.pathname} class="logo">
    <img src="$img/logo.svg" alt="Placeholder logo" />Manon
  </a>

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
      </ul>

      <ul>
        <li><a href={page.url.pathname}>Logout</a></li>
      </ul>
    </div>
  </nav>
</header>

<main id="main-content"></main>
