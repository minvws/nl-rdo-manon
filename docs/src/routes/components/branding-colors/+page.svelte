<script module>
  export const breadcrumb = "Kleuren";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kleuren</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Kleurensets</h1>
      </section>
    </div>
  </article>
</main>
