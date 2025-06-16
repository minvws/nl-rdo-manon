<script lang="ts">
  import { page } from "$app/state";
</script>

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
  <nav>
      <a href={page.url.pathname}>Voorbeeld-link 1</a>
      <a href={page.url.pathname}>Voorbeeld-link 2</a>
      <a href={page.url.pathname}>Voorbeeld-link 3</a>
  </nav>
</main>
