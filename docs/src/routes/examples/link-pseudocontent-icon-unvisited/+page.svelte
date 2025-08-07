<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.hrefUnvisited} class="icon icon-heart">Link</a>,
      <a href={current.hrefUnvisited} class="focus icon icon-heart">Focus</a>,
      <a href={current.hrefUnvisited} class="hover icon icon-heart">Hover</a>,
      <a href={current.hrefUnvisited} class="active icon icon-heart">Active</a>,
      <a href={current.hrefUnvisited} class="focus hover icon icon-heart">Focus Hover</a>
      of
      <a href={current.hrefUnvisited} class="focus active icon icon-heart">Focus Active</a>.
    </p>
  </section>
</main>

<style>
  main {
    text-decoration: line-through;
  }
</style>
