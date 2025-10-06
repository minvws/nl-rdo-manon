<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <h1><a href={current.hrefUnvisited}>Link</a></h1>
    <h2><a href={current.hrefUnvisited} class="focus">Focus</a></h2>
    <h3><a href={current.hrefUnvisited} class="hover">Hover</a></h3>
    <h4><a href={current.hrefUnvisited} class="active">Active</a></h4>
    <h5><a href={current.hrefUnvisited} class="focus hover">Focus Hover</a></h5>
    <h6><a href={current.hrefUnvisited} class="focus active">Focus Active</a></h6>
  </section>
</main>
