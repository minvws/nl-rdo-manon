<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.href} class="visited">Link</a>,
      <a href={current.href} class="visited focus">Focus</a>,
      <a href={current.href} class="visited hover">Hover</a>,
      <a href={current.href} class="visited active">Active</a>,
      <a href={current.href} class="visited focus hover">Focus Hover</a>
      of <a href={current.href} class="visited focus active">Focus Active</a>.
    </p>
  </section>
</main>
