<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { initSidemenus } from "$lib/manon";
  onMount(initSidemenus);
</script>

<header class="page-header">
  <div>
    <nav>
      <div class="collapsing-element">
        <ul>
          <li><a href="{base}/">Home</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main class="sidemenu sidemenu-closed">
  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie">
    <ul>
      <li><a href="{base}/">Voorbeeld link 1</a></li>
      <li><a href="{base}/">Voorbeeld link 2</a></li>
      <li><a href="{base}/">Voorbeeld link 3</a></li>
      <li><a href="{base}/">Voorbeeld link 4</a></li>
    </ul>
  </nav>
  <article class="visually-grouped">
    <div>
      <h1>Lorem ipsum</h1>
      <p>Dolor sit amet conseqtetur adepicing elit</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis
        vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis,
        lacinia dapibus risus auctor.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
        <li>Aenean posuere enim a hendrerit viverra.</li>
        <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
      </ul>
    </div>
  </article>
</main>
