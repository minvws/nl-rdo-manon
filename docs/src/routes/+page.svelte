<script module>
  export const breadcrumb = "Manon";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import DefaultHeader from "$lib/DefaultHeader.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";
</script>

<svelte:head>
  <title>Manon</title>
</svelte:head>

<DefaultHeader />

<main id="main-content" tabindex="-1">
  <section id="introduction" class="hero">
    <div class="content-wrapper">
      <h1 class="heading-xxl page-title">Welkom bij Manon</h1>
      <p>
        Manon is een flexibel en toegankelijk design framework voor semantische HTML. Het is Open
        Source en ontwikkeld door het Ministerie van Volksgezondheid, Welzijn en Sport.
      </p>
    </div>
  </section>

  <section>
    <div class="content-wrapper">
      <div>
        <h2>🙋 Wat is Manon</h2>
        <p>Manon is een design framework dat de volgende principes hanteert:</p>

        <div class="column-4">
          <div>
            <h3>✨ Classless</h3>

            <p>
              Manon geeft de voorkeur aan styling op basis van de HTML-structuur. Omdat dit zorgt
              voor overzichtelijke en goed onderhoudbare code. Dit maakt efficiënte visuele
              aanpassingen mogelijk met minimale HTML-wijzigingen.
            </p>
          </div>

          <div>
            <h3>🫶 Toegankelijkheid</h3>
            <p>
              Manon streeft ernaar om de toegankelijkheid van webapplicaties te verbeteren door het
              bieden van toegankelijke componenten die voldoen aan de WCAG-richtlijnen.
            </p>
          </div>

          <div>
            <h3>📦 Zo klein mogelijk</h3>
            <p>
              Gebruik alleen wat je nodig hebt. Manon bestaat uit losse componenten die afzonderlijk
              geïmporteerd kunnen worden, zodat je niet de hele set hoeft te gebruiken.
            </p>
          </div>

          <div>
            <h3>🎨 Thema's</h3>
            <p>
              Naast dat Manon een aantal thema's aanbiedt, kun je ook je eigen thema samenstellen.
              Elk thema kan de variabelen van de componenten overschrijven om de gewenste stijl te
              bereiken.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="content-wrapper">
      <h2>👷 Manon gebruiken</h2>
      <p>
        In deze documentatie vind je alle informatie die je nodig hebt om Manon te gebruiken in jouw
        project. Hieronder een kort overzicht van de belangrijkste onderdelen.
      </p>
      <div class="column-3">
        <div>
          <h3>Gebruik alleen wat je nodig hebt</h3>
          <p>
            Benut enkel de CSS die nodig is binnen jouw project. Dit kan een enkel component zijn of
            een hele set. In de <a href="{base}/library">componentenbibliotheek</a> vind je het volledige
            overzicht.
          </p>
        </div>

        <div>
          <h3>Handige helpers</h3>
          <p>
            Voor bekende uitzonderingen bevat Manon <a href="{base}/utility">"utility-classes"</a>.
            Deze classes kunnen gebruikt worden om een visuele uitzondering snel en efficient toe te
            passen binnen het project waar nodig.
          </p>
        </div>

        <div>
          <h3>Voorbeelden</h3>
          <p>
            Bekijk <a href="{base}/examples">de voorbeeldpagina's</a> om te zien hoe je Manon kunt toepassen
            in een volledige pagina.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="content-wrapper">
      <h2>🚀 Aan de slag</h2>
      <p>
        In deze documentatie vind je alle informatie die je nodig hebt om Manon te gebruiken in jouw
        project. Hieronder een kort overzicht van de belangrijkste onderdelen.
      </p>
      <div class="column-3">
        <div>
          <h3>Snelstart</h3>
          <p>
            Bekijk de <a href="/getting-started/quickstart">snelle start</a> voor een overzicht van de
            belangrijkste stappen om Manon te integreren in je project.
          </p>

          <p>
            Deze gids biedt een beknopte handleiding om snel aan de slag te gaan met de
            basisfunctionaliteiten van Manon.
          </p>
        </div>

        <div>
          <h3>Tutorial</h3>
          <p>
            Voor een stapsgewijze handleiding over het gebruik van Manon, bekijk de
            <a href="/getting-started/tutorial">tutorial</a>. Deze tutorial behandelt de
            basisprincipes en biedt voorbeelden van hoe je Manon kunt integreren in je project.
          </p>
        </div>

        <div>
          <h3>Installatie</h3>
          <p>
            Bekijk de <a href="/getting-started/installation">installatiehandleiding</a>
            voor een gedetailleerde uitleg over de installatie, configuratie en integratie van Manon
            in je project. Deze gids behandelt alle benodigde stappen om Manon correct te installeren
            en te configureren. Dit omvat eveneens informatie over het integreren van eventuele JavaScript-bestanden
            die nodig zijn voor bepaalde functionaliteiten.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="content-wrapper">
      <div>
        <h2>📚 Versies</h2>
        <p>
          De huidige versie van Manon is versie <code>v18.0.0</code>. Eerdere versies van de
          documentatie zijn nog beschikbaar:
        </p>
        <ul>
          <li>
            <a href="https://minvws.github.io/nl-rdo-manon/v17.0.0" target="_blank">v17.0.0</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>

<DefaultFooter />
