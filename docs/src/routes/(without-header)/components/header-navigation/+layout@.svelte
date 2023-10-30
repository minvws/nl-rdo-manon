<script>
  import "$scss/main.scss";

  import { onMount } from "svelte";
  import FooterNav from "$lib/FooterNav.svelte";

  onMount(() => import("$lib/manon.js"));
</script>

<svelte:head>
  <link href="$img/favicon.ico" rel="shortcut icon" />
</svelte:head>

<slot />

<footer>
  <div class="two-thirds-one-third">
    <span class="slogan">Manon</span>
    <FooterNav />
  </div>
</footer>
