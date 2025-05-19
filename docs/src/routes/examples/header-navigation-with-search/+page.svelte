<script>
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width:42rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
      </ul>

      <div>
        <form class="inline">
          <input type="text" placeholder="Zoeken" />
          <button type="submit">
            <span class="icon icon-search" aria-hidden="true"></span>
            <span class="visually-hidden">Zoeken</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</header>

<main id="main-content"></main>
