<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<div class="collapsing-element">
  <SiteNavLinks />
</div>
