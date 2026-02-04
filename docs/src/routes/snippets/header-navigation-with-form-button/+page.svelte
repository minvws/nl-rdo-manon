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
      <div class="content-wrapper collapsing-element">
        <ul>
          <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
          <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
          <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
        </ul>

        <ul class="actions">
          <li><a href={page.url.pathname} class="avatar">A</a></li>
          <li>
            <form action={page.url.pathname} method="POST" class="inline">
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
