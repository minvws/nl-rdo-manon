<script>
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<section class="hero">
  <div class="image-background">
    <img src="$img/strand.jpg" alt="Foto van een strand" />
  </div>
  <div class="content-wrapper">
    <h1>Welkom op het homepage-voorbeeld</h1>
    <p>Een voorbeeld van een landingspagina.</p>
  </div>
</section>
