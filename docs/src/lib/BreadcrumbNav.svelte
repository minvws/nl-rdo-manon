<script>
  import { page } from "$app/stores";
  import { getBreadcrumbs } from "$lib/breadcrumbs.js";
  import NavLink from "./NavLink.svelte";

  /** @type {import('./types').BreadcrumbNames} */
  export let breadcrumbNames = {};

  $: breadcrumbs = getBreadcrumbs($page.route.id, breadcrumbNames);
</script>

{#if breadcrumbs.length > 1}
  <nav aria-label="Kruimelpad" class="breadcrumb-bar">
    <div>
      <ul>
        {#each breadcrumbs as crumb}
          <li><NavLink href={crumb.route}>{crumb.name}</NavLink></li>
        {/each}
      </ul>
    </div>
  </nav>
{/if}
