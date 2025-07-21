<script module>
  export const breadcrumb = "Kruimelpad voorbeeld";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kruimelpad voorbeeld</title>
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
        <h1>Header visueel voorbeeld</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h1>Voorbeelden:</h1>
        <p>Voor het visuele voorbeeld zie de header van deze pagina.</p>
        <h2>HTML-voorbeeld:</h2>
        <Code
          language="html"
          code={`
<nav class="breadcrumb-bar">
    <div>
        <ul>
            <li><a href="{base}/components">Componenten</a></li>
            <li>
                <a href="{base}/components/breadcrumb-bar" aria-current="page">Kruimelpad - breadcrumb-bar</a>
            </li>
        </ul>
    </div>
</nav>
`}
        />

        <h2>Locatie</h2>
        <p>
          Plaats de breadcrumb bar buiten de main. Dat zorgt ervoor dat gebruikes via de <code>
            skip to content</code
          >-link direct naar de content kunnen springen. Bijvoorbeeld tussen de <code>header</code>
          en <code>main</code> in.
        </p>
        <Code
          language="html"
          code={`
<header>
  <!-- header content -->
</header>

<nav class="breadcrumb-bar">
    <div>
        <ul>
            <li><a href="{base}/components">Componenten</a></li>
            <li>
                <a href="{base}/components/breadcrumb-bar" aria-current="page">Kruimelpad - breadcrumb-bar</a>
            </li>
        </ul>
    </div>
</nav>

<main>
  <!-- main content -->
</main>
`}
        />
      </section>
    </div>
  </article>
</main>
