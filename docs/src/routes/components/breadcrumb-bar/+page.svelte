<script module>
  export const breadcrumb = "Kruimelpad - breadcrumb-bar";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kruimelpad - breadcrumb-bar</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Kruimelpad - breadcrumb-bar</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het overzicht
            met <a href="#variables">instelbare variabelen</a>.
          </li>
          <li>
            Voeg de bijbehorende HTML toe. Voor meer informatie zie: <a
              href="breadcrumb-bar-example">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="resize">
          <iframe src="{base}/examples/breadcrumb-bar" title="Voorbeeld"></iframe>
        </div>

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
@use "@minvws/manon/breadcrumb-bar";
`}
        />
      </section>
    </div>
  </article>
</main>
