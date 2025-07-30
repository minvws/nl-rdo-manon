<script>
  import { currentPage } from "$lib/currentPage.svelte";
  const current = currentPage();
</script>

<header>
  <nav>
    <ul>
      <li><a href={current.href} class="visited">Link</a></li>
      <li><a href={current.href} class="visited focus">Focus</a></li>
      <li><a href={current.href} class="visited hover">Hover</a></li>
      <li><a href={current.href} class="visited active">Active</a></li>
      <li><a href={current.href} class="visited focus hover">Focus Hover</a></li>
      <li><a href={current.href} class="visited focus active">Focus Active</a></li>
    </ul>
  </nav>
</header>
