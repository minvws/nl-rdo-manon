<script lang="ts">
  import Snippet from "$lib/Snippet.svelte";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  $: path = $page.params.path as string | undefined;
</script>

{#if path}
  <Snippet path={`${path}`} as="raw" />
{/if}
