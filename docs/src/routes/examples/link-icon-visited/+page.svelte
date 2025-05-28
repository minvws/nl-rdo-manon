<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.href} class="visited">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Link
      </a>,
      <a href={current.href} class="visited focus">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus
      </a>,
      <a href={current.href} class="visited hover">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Hover
      </a>,
      <a href={current.href} class="visited active">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Active
      </a>,
      <a href={current.href} class="visited focus hover">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus Hover
      </a>
      of
      <a href={current.href} class="visited focus active">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus Active
      </a>.
    </p>
  </section>
</main>
