<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.href} class="visited" rel="external">Link</a>,
      <a href={current.href} class="visited focus" rel="external">Focus</a>,
      <a href={current.href} class="visited hover" rel="external">Hover</a>,
      <a href={current.href} class="visited active" rel="external">Active</a>,
      <a href={current.href} class="visited focus hover" rel="external">Focus Hover</a>
      of <a href={current.href} class="visited focus active" rel="external">Focus Active</a>.
    </p>
  </section>
</main>
