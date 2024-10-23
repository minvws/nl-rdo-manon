<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { onMount } from "svelte";
  import { initSidemenus } from "$lib/manon";

  let props: HTMLAttributes<HTMLElement> = $props();
  onMount(initSidemenus);
</script>

<nav
  data-open-label="Zijbalknavigatie"
  data-close-label="Sluit zijbalknavigatie"
  aria-label="Document-navigatie"
  {...props}
>
  {@render props.children?.()}
</nav>
