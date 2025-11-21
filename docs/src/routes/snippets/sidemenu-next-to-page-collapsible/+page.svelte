<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import { sidemenuAction } from "$lib/sidemenuAction";
  import { initSidemenus } from "$lib/manon";
  onMount(initSidemenus);
</script>

<svelte:body use:sidemenuAction />

<nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie">
  <ul>
    <li><a href={page.url.pathname}>Home</a></li>
    <li><a href={page.url.pathname}>Oorsprong</a></li>
    <li><a href={page.url.pathname}>Projecten</a></li>
    <li><a href={page.url.pathname}>Documentatie</a></li>
  </ul>
</nav>
<main class="page-content">
  <section>
    <div class="content-wrapper">
      <h2>Introductie</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed condimentum ligula.
        Vestibulum at eleifend nisl. Donec in nisl non sem cursus faucibus vel non est. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt risus metus, non volutpat
        arcu lacinia eget. Morbi condimentum lectus ut lorem cursus, vel cursus dolor dictum.
        Phasellus vel justo non magna ornare dapibus quis in arcu.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed condimentum ligula.</p>
    </div>
  </section>
</main>
