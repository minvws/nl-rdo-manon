<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import SiteNav from "$lib/SiteNav.svelte";
  import BreadcrumbNav from "$lib/BreadcrumbNav.svelte";

  let props: HTMLAttributes<HTMLElement> = $props();
</script>

<header {...props}>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <SiteNav />
  </div>
  <BreadcrumbNav />
</header>
