<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { getBreadcrumbs } from "$lib/breadcrumbs";
  import NavLink from "./NavLink.svelte";
  let breadcrumbs = $derived(getBreadcrumbs($page.route.id, $page.data.breadcrumbNames));
</script>

{#if breadcrumbs.length > 1}
  <nav aria-label="Kruimelpad" class="breadcrumb-bar">
    <div>
      <ul>
        {#each breadcrumbs as crumb}
          <li><NavLink href="{base}{crumb.route}">{crumb.name}</NavLink></li>
        {/each}
      </ul>
    </div>
  </nav>
{/if}
