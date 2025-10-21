<script module>
  export const breadcrumb = "Navigatie";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Navigatie</title>
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
        <h1>Navigatie</h1>
        <h2>Benodigde stappen</h2>
        <h3>Importeer component via npm</h3>
        <Code
          language="css"
          code={`
@use "@minvws/manon/navigation";
`}
        />

        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>Vul de variabelen met de gewenste stijlkeuzes.</li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set, laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Visueel voorbeeld:</h3>

        <h4>Navigatie-component met een lijst met links</h4>
        <div class="resize">
          <iframe
            src="{base}/examples/navigation-with-list-of-links"
            title="Voorbeeld"
            height="240px"
          ></iframe>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <ul>
        <li><a href="#">Voorbeeld-link 1</a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
    </ul>
</nav>
`}
        />

        <h4>Navigatie-component met een horizontaal uitgelijnde lijst met links</h4>
        <div class="resize">
          <iframe
            src="{base}/examples/navigation-with-horizontal-view"
            title="Voorbeeld"
            height="240px"
          ></iframe>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<nav>
    <ul class="horizontal-view">
        <li><a href="#">Voorbeeld-link 1/a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
    </ul>
</nav>
`}
        />
      </section>
    </div>
  </article>
</main>
