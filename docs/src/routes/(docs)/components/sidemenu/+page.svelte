<script module>
  export const breadcrumb = "Zijmenu";
</script>

<script lang="ts">
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Zijmenu</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>

  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Zijmenu</h1>
        <p>
          Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het navigeren voor de
          gebruiker toegankelijk en overzichtelijk te houden.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <ul>
          <li><a href="sidemenu/in-page">Zijmenu binnen de pagina</a></li>
          <li>
            <a href="sidemenu/in-page-collapsible">In- uit-klapbaar zijmenu binnen de pagina</a>
          </li>
          <li><a href="sidemenu/next-to-page">Zijmenu naast de pagina</a></li>
          <li>
            <a href="sidemenu/next-to-page-collapsible">In- uit-klapbaar zijmenu naast de pagina</a>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
