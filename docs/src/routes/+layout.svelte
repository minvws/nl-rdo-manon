<script lang="ts">
  import "$scss/main.scss";
  import { onMount } from "svelte";
  import { initManon } from "$lib/manon";

  let { children } = $props();
  onMount(initManon);
</script>

<svelte:head>
  <link href="$img/favicon.svg" rel="icon" type="image/svg+xml" />
  <link href="$img/favicon.ico" rel="shortcut icon" />
</svelte:head>

{@render children?.()}
