<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<nav>
  <a href="{base}/" class="logo">
    <img src="../img/logo.svg" alt="Placeholder logo" />Manon
  </a>
  <div
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 770px)"
    aria-label="Hoofdnavigatie"
    class="collapsible right"
  >
    <div class="collapsing-element">
      <SiteNavLinks />
    </div>
  </div>
</nav>
