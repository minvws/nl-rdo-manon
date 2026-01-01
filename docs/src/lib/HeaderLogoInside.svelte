<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import SiteNav from "$lib/SiteNav.svelte";
  let props: HTMLAttributes<HTMLElement> = $props();
</script>

<header {...props}>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
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
