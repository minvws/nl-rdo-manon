<script lang="ts">
  import { page } from "$app/state";
</script>

<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li>
        <a href={page.url.pathname}>Componenten</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" />
        </svg>
      </li>
      <li>
        <a href="#" aria-current="page">Kruimelpad - breadcrumb-bar</a>
      </li>
    </ul>
  </div>
</nav>
