<script module>
  export const breadcrumb = "heading-base-set";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>heading-base-set</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>heading-base-set</h1>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
      </section>
    </div>
  </article>
</main>
