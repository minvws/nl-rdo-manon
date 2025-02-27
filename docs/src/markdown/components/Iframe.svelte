<script lang="ts">
  import { base } from "$app/paths";
  import type { HTMLIframeAttributes } from "svelte/elements";

  let { src, children, ...rest }: HTMLIframeAttributes = $props();
  let rebasedSrc = $derived(src && src.startsWith("/") ? `${base}${src}` : src);
</script>

<iframe src={rebasedSrc} {...rest}>
  {@render children?.()}
</iframe>
