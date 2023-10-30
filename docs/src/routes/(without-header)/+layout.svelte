<script>
  import FooterNav from "$lib/FooterNav.svelte";
  import BreadcrumbNav from "$lib/BreadcrumbNav.svelte";
</script>

<slot />

<footer>
  <div class="two-thirds-one-third">
    <span class="slogan">Manon</span>
    <FooterNav />
  </div>
</footer>
