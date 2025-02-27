<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <p>
      Bezoek <a href={current.href} class="visited icon icon-heart"> Link </a>,
      <a href={current.href} class="visited focus icon icon-heart"> Focus </a>,
      <a href={current.href} class="visited hover icon icon-heart"> Hover </a>,
      <a href={current.href} class="visited active icon icon-heart"> Active </a>,
      <a href={current.href} class="visited focus hover icon icon-heart"> Focus Hover </a>
      of
      <a href={current.href} class="visited focus active icon icon-heart"> Focus Active </a>.
    </p>
  </section>
</main>
