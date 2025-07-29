<script module>
  export const breadcrumb = "Visueel verbergen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Visueel verbergen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#variables">Instelbare variabelen</a></li>
    </ul>
  </SideMenu>

  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Visueel verbergen - <dfn>visually hidden</dfn></h1>
        <p>Verbergt objecten alleen visueel. Voor screenreaders blijven de objecten zichtbaar.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>visually-hidden</code> aan het gewenste element.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>
        <p>Onderstaand voorbeeld bevat twee paragrafen waarvan er een verborgen wordt.</p>

        <div>
          <p class="visually-hidden">Voorbeeld paragraaf 1.</p>
          <p>Voorbeeld paragraaf 2.</p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div>
  <p class="visually-hidden">Voorbeeld paragraaf 1.</p>
  <p>Voorbeeld paragraaf 2.</p>
</div>
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
@use "@minvws/manon/utility/visually-hidden";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>
    </div>
  </article>
</main>
