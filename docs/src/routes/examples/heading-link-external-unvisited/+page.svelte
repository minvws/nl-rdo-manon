<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <h1><a href={current.hrefUnvisited} rel="external">Link</a></h1>
    <h2><a href={current.hrefUnvisited} class="focus" rel="external">Focus</a></h2>
    <h3><a href={current.hrefUnvisited} class="hover" rel="external">Hover</a></h3>
    <h4><a href={current.hrefUnvisited} class="active" rel="external">Active</a></h4>
    <h5><a href={current.hrefUnvisited} class="focus hover" rel="external">Focus Hover</a></h5>
    <h6><a href={current.hrefUnvisited} class="focus active" rel="external">Focus Active</a></h6>
  </section>
</main>
