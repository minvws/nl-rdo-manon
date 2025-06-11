<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <h1>
      <a href={current.href} class="visited">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Link
      </a>
    </h1>
    <h2>
      <a href={current.href} class="visited focus">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus
      </a>
    </h2>
    <h3>
      <a href={current.href} class="visited hover">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Hover
      </a>
    </h3>
    <h4>
      <a href={current.href} class="visited active">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Active
      </a>
    </h4>
    <h5>
      <a href={current.href} class="visited focus hover">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus Hover
      </a>
    </h5>
    <h6>
      <a href={current.href} class="visited focus active">
        <span class="icon icon-heart" aria-hidden="true"></span>
        Focus Active
      </a>
    </h6>
  </section>
</main>
