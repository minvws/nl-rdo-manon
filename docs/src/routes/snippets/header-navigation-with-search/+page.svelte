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
    <div class="content-wrapper collapsing-element">
      <ul>
        <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
      </ul>

      <form action="" class="inline">
        <div>
          <label for="voorbeeld-1-date-1-start" class="visually-hidden">Zoeken</label>
          <div class="combined-field">
            <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
            <button aria-label="zoeken"><span class="icon icon-search"></span></button>
          </div>
        </div>
      </form>
    </div>
  </nav>
</header>

<main id="main-content"></main>
