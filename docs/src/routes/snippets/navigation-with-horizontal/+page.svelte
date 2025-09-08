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
    <ul class="horizontal">
      <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
      <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
      <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
    </ul>
  </nav>
</main>
