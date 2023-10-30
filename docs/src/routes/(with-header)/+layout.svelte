<script>
  import SiteNav from "$lib/SiteNav.svelte";
  import FooterNav from "$lib/FooterNav.svelte";
  import BreadcrumbNav from "$lib/BreadcrumbNav.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <SiteNav />
  </div>
  <BreadcrumbNav breadcrumbNames={data.breadcrumbNames} />
</header>

<slot />

<footer>
  <div class="two-thirds-one-third">
    <span class="slogan">Manon</span>
    <FooterNav />
  </div>
</footer>
