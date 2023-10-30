<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  onMount(async () => {
    const { initSidemenus } = await import("@minvws/manon/sidemenu.js");
    initSidemenus();
  });
</script>

<nav
  data-open-label="Zijbalknavigatie"
  data-close-label="Sluit zijbalknavigatie"
  aria-label="Document-navigatie"
  {...$$props}
>
  <slot />
</nav>
