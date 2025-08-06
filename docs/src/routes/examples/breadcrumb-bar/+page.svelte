<script lang="ts">
  import { page } from "$app/state";
</script>

<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li><a href={page.url.pathname}>Componenten</a></li>
      <li>
        <a href="#" aria-current="page">Kruimelpad - breadcrumb-bar</a>
      </li>
    </ul>
  </div>
</nav>
