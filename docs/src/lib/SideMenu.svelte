<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { initSidemenus } from "$lib/manon.js";
  onMount(initSidemenus);
</script>

<nav
  data-open-label="Zijbalknavigatie"
  data-close-label="Sluit zijbalknavigatie"
  aria-label="Document-navigatie"
  {...$$props}
>
  <slot />
</nav>
