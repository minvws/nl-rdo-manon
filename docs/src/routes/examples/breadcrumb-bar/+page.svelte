<script lang="ts">
  import { page } from "$app/state";
</script>

<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li><a href={page.url.pathname}>Componenten</a></li>
      <li>
        <span aria-current="page">Kruimelpad - breadcrumb-bar</span>
      </li>
    </ul>
  </div>
</nav>
