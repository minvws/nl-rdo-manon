<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<footer>
  <p>
    Bezoek <a href={current.hrefUnvisited}>Link</a>,
    <a href={current.hrefUnvisited} class="focus">Focus</a>,
    <a href={current.hrefUnvisited} class="hover">Hover</a>,
    <a href={current.hrefUnvisited} class="active">Active</a>,
    <a href={current.hrefUnvisited} class="focus hover">Focus Hover</a> of
    <a href={current.hrefUnvisited} class="focus active">Focus Active</a>.
  </p>
</footer>
