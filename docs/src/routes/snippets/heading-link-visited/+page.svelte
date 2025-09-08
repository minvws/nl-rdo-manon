<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<main>
  <section class="visually-grouped">
    <h1><a href={current.href} class="visited">Link</a></h1>
    <h2><a href={current.href} class="visited focus">Focus</a></h2>
    <h3><a href={current.href} class="visited hover">Hover</a></h3>
    <h4><a href={current.href} class="visited active">Active</a></h4>
    <h5><a href={current.href} class="visited focus hover">Focus Hover</a></h5>
    <h6><a href={current.href} class="visited focus active">Focus Active</a></h6>
  </section>
</main>
