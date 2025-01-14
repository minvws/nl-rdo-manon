<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { sidemenuAction } from "$lib/sidemenuAction";
  import { initSidemenus } from "$lib/manon";
  onMount(initSidemenus);
</script>

<svelte:body use:sidemenuAction />

<nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie">
  <ul>
    <li><a href="{base}/">Voorbeeld link 1</a></li>
    <li><a href="{base}/">Voorbeeld link 2</a></li>
    <li><a href="{base}/">Voorbeeld link 3</a></li>
    <li><a href="{base}/">Voorbeeld link 4</a></li>
  </ul>
</nav>
<div class="page-content">
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
  <main>
    <article class="visually-grouped">
      <div><section>Main</section></div>
    </article>
  </main>
  <footer>Footer</footer>
</div>
