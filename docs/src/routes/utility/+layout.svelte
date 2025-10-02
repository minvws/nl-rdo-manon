<script lang="ts">
  import DefaultHeader from "$lib/DefaultHeader.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";
  import BreadcrumbNav from "$lib/BreadcrumbNav.svelte";

  let { children } = $props();
</script>

<DefaultHeader />

<BreadcrumbNav />

{@render children?.()}

<DefaultFooter />
