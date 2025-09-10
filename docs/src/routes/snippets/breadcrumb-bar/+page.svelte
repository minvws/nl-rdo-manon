<script lang="ts">
  import { page } from "$app/state";
  import { base } from "$app/paths";
</script>

<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li><a href={base}>Home</a></li>
      <li>
        <a href={page.url.pathname} aria-current="page">Huidige pagina</a>
      </li>
    </ul>
  </div>
</nav>
