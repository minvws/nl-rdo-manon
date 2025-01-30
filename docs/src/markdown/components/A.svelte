<script lang="ts">
  import { base } from "$app/paths";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  let { href, children, ...rest }: HTMLAnchorAttributes = $props();
  let rebasedHref = $derived(href && href.startsWith("/") ? `${base}${href}` : href);
</script>

<a href={rebasedHref} {...rest}>
  {@render children?.()}
</a>
