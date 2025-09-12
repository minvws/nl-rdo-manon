<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <nav>
    <ul>
      <li><a href={current.hrefUnvisited}>Link</a></li>
      <li><a href={current.hrefUnvisited} class="focus">Focus</a></li>
      <li><a href={current.hrefUnvisited} class="hover">Hover</a></li>
      <li><a href={current.hrefUnvisited} class="active">Active</a></li>
      <li><a href={current.hrefUnvisited} class="focus hover">Focus Hover</a></li>
      <li><a href={current.hrefUnvisited} class="focus active">Focus Active</a></li>
    </ul>
  </nav>
</main>
