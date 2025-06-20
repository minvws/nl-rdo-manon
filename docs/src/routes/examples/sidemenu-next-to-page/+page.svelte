<script lang="ts">
  import { page } from "$app/state";
  import { sidemenuAction } from "$lib/sidemenuAction";
</script>

<svelte:body use:sidemenuAction />

<nav>
  <ul>
    <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
    <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
    <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
    <li><a href={page.url.pathname}>Voorbeeld-link 4</a></li>
  </ul>
</nav>
<div class="page-content">
  <header class="page-header">
    <div>
      <nav>
        <div class="collapsing-element">
          <ul>
            <li><a href={page.url.pathname}>Home</a></li>
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
