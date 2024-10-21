<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<nav
  data-open-label="Menu"
  data-close-label="Sluit menu"
  data-media="(min-width: 30rem)"
  aria-label="Hoofdnavigatie"
  class="collapsible"
>
  <a href="{base}/components/logo" class="logo">
    <img src="../img/cat-white.svg" alt="Placeholder logo" />Manon
  </a>
  <div class="collapsing-element">
    <SiteNavLinks />
  </div>
</nav>
