<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import type { HTMLIframeAttributes } from "svelte/elements";

  let { src, children, ...rest }: HTMLIframeAttributes = $props();
  let rebasedSrc = $derived(src && src.startsWith("/") ? `${base}${src}` : src);

  let iframeElement: HTMLIFrameElement;

  function resizeIframe() {
    if (iframeElement && iframeElement.contentWindow) {
      iframeElement.style.height = `${iframeElement.contentWindow.document.body.scrollHeight}px`;
    }
  }

  onMount(() => {
    if (iframeElement) {
      iframeElement.addEventListener("load", resizeIframe);
      if (iframeElement.contentWindow) {
        const resizeObserver = new ResizeObserver(resizeIframe);
        resizeObserver.observe(iframeElement.contentWindow.document.body);
      }
    }
  });
</script>

<iframe src={rebasedSrc} {...rest} bind:this={iframeElement}>
  {@render children?.()}
</iframe>
