<script context="module">
  export const breadcrumb = "Ingelogd als";
</script>

<script>
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

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <a href="{base}/documentation/variables#flex-direction">flex-direction</a>
          </li>
          <li>
            <a href="{base}/documentation/variables#justify-content">justify-content</a>
          </li>
          <li><a href="{base}/documentation/variables#align-items">align-items</a></li>
          <li><a href="{base}/documentation/variables#padding-top">padding-top</a></li>
          <li>
            <a href="{base}/documentation/variables#padding-right">padding-right</a>
          </li>
          <li>
            <a href="{base}/documentation/variables#padding-bottom">padding-bottom</a>
          </li>
          <li><a href="{base}/documentation/variables#padding-left">padding-left</a></li>
          <li><a href="{base}/documentation/variables#gap">gap</a></li>
          <li>
            <a href="{base}/documentation/variables#background-color">background-color</a>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/login-meta-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
