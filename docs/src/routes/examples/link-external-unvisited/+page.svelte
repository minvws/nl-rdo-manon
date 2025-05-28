<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.hrefUnvisited} rel="external">Link</a>,
      <a href={current.hrefUnvisited} class="focus" rel="external">Focus</a>,
      <a href={current.hrefUnvisited} class="hover" rel="external">Hover</a>,
      <a href={current.hrefUnvisited} class="active" rel="external">Active</a>,
      <a href={current.hrefUnvisited} class="focus hover" rel="external">Focus Hover</a> of
      <a href={current.hrefUnvisited} class="focus active" rel="external">Focus Active</a>.
    </p>
  </section>
</main>
