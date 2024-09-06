<script context="module">
  export const breadcrumb = "Manon";
</script>

<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Manon</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section class="warning">
    <div>
      <p>
        <span>Let op:</span> Aan deze handleiding wordt nog gewerkt.
      </p>
    </div>
  </section>

  <section id="introduction">
    <div>
      <h1>Welkom bij Manon</h1>
      <p>
        Manon is een variabel en instelbaar front-end framework. Het is Open Source en ontwikkeld
        door het Ministerie van Volksgezondheid, Welzijn en Sport.
      </p>
    </div>
  </section>

  <section>
    <div>
      <h2>Wat is Manon</h2>
      <p>
        Manon biedt een bibliotheek met componenten. Deze componenten bevatten voorbeeld-HTML en
        worden geleverd met hun eigen CSS en JavaScript. Bekijk alle componenten in <a
          href="{base}/components">de componentenbibliotheek</a
        >. Installeer Manon voor je eigen project met behulp van
        <a href="{base}/documentation">deze instructies.</a>
      </p>
    </div>
  </section>

  <section>
    <div>
      <h2>Gedachte achter Manon</h2>
      <p>
        Een belangrijk uitgangspunt bij het bouwen van een website is de scheiding tussen content,
        markup, beeld, CSS en eventueel JavaScript. Hoe strikter deze gescheiden zijn, hoe
        eenvoudiger het is om een toegankelijke en goed te beheren website te bouwen. Het is niet
        eenvoudig om een goed framework te vinden waarin dit consequent wordt toegepast. Hiervoor is
        'Manon' geschreven, dat een strikte scheiding hanteert tussen de content, markup en styles.
      </p>
    </div>
  </section>

  <section>
    <div>
      <h2>Manon gebruiken</h2>
      <div class="column-3">
        <div>
          <h3 class="heading-large">Snel met veel vrijheid stylen</h3>

          <p>
            Alle componenten zijn instelbaar. Elk component heeft bijbehorende variabelen die
            gebruikt kunnen worden om eigen stijlkeuzes in te stellen.
          </p>

          <p>
            Componenten staan zo ingesteld dat ze zoveel mogelijk overerven van hogergelegen
            elementen. Zo wordt het invoeren van een nieuwe huisstijl zo efficient mogelijk gemaakt
            en biedt het ruimte voor creatieve vrijheid en specifieke uitzonderingen.
          </p>
        </div>

        <div>
          <h3 class="heading-large">Gebruik alleen wat je nodig hebt</h3>
          <p>
            Benut enkel de CSS die nodig is binnen jouw project. Dit kan een enkel component zijn of
            een hele set. Laad de gewenste componenten in en gebruik de bijbehorende HTML en
            JavaScript voor het gewenste resultaat.
          </p>

          <p>
            In de <a href="{base}/components">componentenbibliotheek</a> vind je het volledige overzicht
            met beschikbare componenten.
          </p>
        </div>

        <div>
          <h3 class="heading-large">Handige helpers</h3>
          <p>
            Voor bekende uitzonderingen bevat Manon "helper-classes". Denk bijvoorbeeld aan die ene
            paragraaf die gecentreerd in het ontwerp staat. Terwijl de overige teksten links
            uitgelijnd staan. Deze classes kunnen gebruikt worden om een visuele uitzondering snel
            en efficient toe te passen binnen het project waar nodig.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
