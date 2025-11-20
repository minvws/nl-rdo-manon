<script>
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<main>
  <section class="hero">
    <div class="image-background">
      <img src="$img/strand.jpg" alt="Foto van een strand" />
    </div>
    <div class="content-wrapper">
      <h1>Hero title</h1>
    </div>
  </section>
</main>
