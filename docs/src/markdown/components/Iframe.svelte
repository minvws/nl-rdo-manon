<!--
  @component
  A responsive iframe component that automatically adjusts its height to fit its
  content.

  This component wraps the standard HTML `<iframe>` element to provide two key
  enhancements:

  1. **Dynamic Height Adjustment**: It automatically resizes its height to match
     the content within the iframe, both on initial load and when the content's
     size changes dynamically. This is achieved using a `ResizeObserver`.
  2. **URL Rebasing**: It correctly handles root-relative URLs (e.g., `/my-page`)
     within a SvelteKit project by prepending the base path.

  @props {string} src - The URL of the page to embed.
  @props {...any} ...rest - Any other standard HTMLIframeAttributes
    (e.g., `title`, `allow`, `width`) will be passed directly to the `<iframe>`
    element.

  @example
  <Iframe src="/path/to/local/page.html" title="An embedded page" />
-->
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
