<script module>
  export const breadcrumb = "Ingelogd als";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Ingelogd als</title>
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
        <h1>Ingelogd als</h1>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Ingelogd als informatie</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="login-meta">Ingelogd als: <a href="login-meta">Jane Doe</a></p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="login-meta">Ingelogd als: <a href="">Jane Doe</a></p>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/login-meta";
`}
        />
      </section>
    </div>
  </article>
</main>
