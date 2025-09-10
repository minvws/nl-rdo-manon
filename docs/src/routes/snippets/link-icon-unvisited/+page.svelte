<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.hrefUnvisited}>
        <span class="icon icon-heart" aria-hidden="true"></span>
        Link
      </a>,
      <a href={current.hrefUnvisited} class="focus">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus
      </a>,
      <a href={current.hrefUnvisited} class="hover">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Hover
      </a>,
      <a href={current.hrefUnvisited} class="active">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Active
      </a>,
      <a href={current.hrefUnvisited} class="focus hover">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus Hover
      </a>
      of
      <a href={current.hrefUnvisited} class="focus active">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus Active
      </a>.
    </p>
  </section>
</main>
