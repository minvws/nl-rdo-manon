<script>
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a
        href={page.url.pathname}
        class="logo"
        aria-label="Logo bedrijfs- of product-naam, ga naar de homepage van bedrijfs- of product-naam"
      >
        <img src="$img/logo.svg" alt="Logo Manon" />
        Manon
      </a>

      <div class="collapsing-element">
        <ul>
          <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
          <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
          <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main id="main-content"></main>
