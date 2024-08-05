<script>
  import SiteNav from "$lib/SiteNav.svelte";
  import BreadcrumbNav from "$lib/BreadcrumbNav.svelte";
</script>

<header {...$$props}>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <SiteNav />
  </div>
  <BreadcrumbNav />
</header>
