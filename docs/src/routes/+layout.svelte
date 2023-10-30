<script>
  import "$scss/main.scss";
  import { onMount } from "svelte";
  onMount(() => import("$lib/manon.js"));
</script>

<svelte:head>
  <link href="$img/favicon.ico" rel="shortcut icon" />
</svelte:head>

<slot />
