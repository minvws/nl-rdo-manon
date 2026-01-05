<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import SiteNav from "$lib/SiteNav.svelte";
  let props: HTMLAttributes<HTMLElement> = $props();
</script>

<header {...props} class="icore-open">
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 50rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a href="#" class="logo" aria-label="Manon met iCore Open thema">
        <img src="../img/logo.svg" alt="Manon met iCore Open thema" />
        Manon - iCore Open
      </a>

      <SiteNav />
    </nav>
  </div>
</header>

<header {...props} class="rijkshuisstijl-2008">
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <a href="#" class="logo" aria-label="Manon met Rijksoverheid 2008 thema">
    <img src="../img/ro-logo.svg" alt="Logo Rijksoverheid" />
    Rijksoverheid
  </a>

  <div class="content-wrapper">
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 50rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <SiteNav />
    </nav>
  </div>
</header>

<header {...props} class="kat">
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 65rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a href="#" class="logo" aria-label="Manon met Kat thema">
        <img src="../img/kat-logo.svg" alt="Logo Kat" />
        Kat
      </a>

      <SiteNav />
    </nav>
  </div>
</header>
