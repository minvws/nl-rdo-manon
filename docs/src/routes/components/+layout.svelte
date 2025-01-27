<script lang="ts">
  import DefaultHeader from "$lib/DefaultHeader.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";

  let { children } = $props();
</script>

<DefaultHeader />

{@render children?.()}

<DefaultFooter />
