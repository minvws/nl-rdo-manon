<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { onMount } from "svelte";
  import { initSidemenus } from "$lib/manon";

  let props: HTMLAttributes<HTMLElement> = $props();
  onMount(initSidemenus);
</script>

<nav
  data-open-label="Sluiten"
  data-close-label="Navigatie"
  aria-label="Document-navigatie"
  {...props}
>
  <div class="sticky-container">
    {@render props.children?.()}
  </div>
</nav>
