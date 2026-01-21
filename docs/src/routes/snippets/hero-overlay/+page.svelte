<script>
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<main>
  <section class="hero">
    <span class="overlay"></span>
    <div class="image-background">
      <img src="$img/strand.jpg" alt="Foto van een strand" />
    </div>
    <div class="content-wrapper">
      <h1 class="page-title heading-l">Lorem ipsum dolor sit</h1>
      <p>Consectetur adepicing elit</p>
      <button>Aan de slag</button>
    </div>
  </section>
</main>
