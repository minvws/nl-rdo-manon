<script module>
  export const breadcrumb = "Terug naar hoofdmenu knop";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Terug naar hoofdmenu knop</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Terug naar hoofdmenu knop</h1>

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
          <li>Voeg de knop aan het einde van de <code>&lt;main&gt;</code> toe.</li>
          <li>
            Voeg de link naar de hoofdnavigatie toe.
            <ul>
              <li>Voeg aan de hoofdnavigatie een id toe. Bijvoorbeeld: "main-content".</li>
              <li>
                Voeg binnen de link de corresponderende verwijzing toe. Zie het HTML-voorbeeld voor
                meer informatie.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Visueel voorbeeld:</h3>
        <p>Zie de knop rechtsonder in beeld voor het visuele voorbeeld.</p>

        <h3>HTML-voorbeeld:</h3>
        <h4>To-top link</h4>
        <Code
          language="html"
          code={`
<a href="#main-content" class="button to-top icon icon-ascending" title="Terug naar het hoofdmenu">Terug naar het hoofdmenu</a>
`}
        />

        <h4>Structuur</h4>
        <Code
          language="html"
          code={`
<main id="main-content">
  <!-- content within the main component -->
  <a href="#main-content" class="button to-top icon icon-ascending" title="Terug naar het hoofdmenu">Terug naar het hoofdmenu</a>
</main>
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
@use "@minvws/manon/button-to-top";
`}
        />
      </section>
    </div>
  </article>
  <a href="#main-content" class="button to-top icon icon-ascending" title="Terug naar het hoofdmenu"
    >Terug naar het hoofdmenu</a
  >
</main>
