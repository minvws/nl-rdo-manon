<script context="module">
  export const breadcrumb = "Manon";
</script>

<svelte:head>
  <title>Manon</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section class="warning" role="group" aria-label="let op">
    <div>
      <p>
        <span>Let op:</span> Aan deze handleiding wordt nog gewerkt.
      </p>
    </div>
  </section>

  <section class="branding-color-accent-5" id="introduction">
    <div>
      <h1>Welkom bij Manon</h1>
      <p>
        Manon is een variabel en instelbaar front-end framework. Een Open Source-project ontwikkeld
        door het Ministerie van Volksgezondheid, Welzijn en Sport.
      </p>
    </div>
  </section>

  <section>
    <div>
      <h2>Ontstaan van Manon</h2>
      <p>
        Tijdens de vaccinatiecampagne werden er in korte tijd veel websites gelanceerd en in beheer
        genomen. Om onnodige herhalingen te voorkomen en om snel volgens de rijkshuisstijl te kunnen
        bouwen is door het Ministerie van VWS in korte tijd een framework gebouwd.
      </p>
      <p>
        Door vanuit een centraal punt te werken konden problemen direct voor alle websites
        tegelijkertijd opgelost worden.
      </p>
      <p>
        Om dit pakket aan te kunnen bieden aan een breder publiek is Manon herschreven. Hierbij is
        Manon instelbaar geworden zodat het werkt met een huisstijl naar keuze. Daarnaast is Manon
        nu zo geschreven dat alleen benodigde code ingeladen kan worden. Deze handleiding helpt je
        met het gebruik ervan.
      </p>
    </div>
  </section>

  <section class="background-color-offset">
    <div>
      <h2>Wat is Manon</h2>
      <p>
        Manon biedt een bibliotheek met componenten. Deze componenten bevatten voorbeeld-HTML en
        worden geleverd met hun eigen CSS en JavaScript. Bekijk alle componenten in <a
          href="/components">de componentenbibliotheek</a
        >. Installeer Manon voor je eigen project met behulp van
        <a href="/documentation">deze instructies.</a>
      </p>
    </div>
  </section>

  <section>
    <div>
      <h2>Gedachte achter Manon</h2>
      <p>
        Uitgangspunt bij het bouwen van een website is de scheiding tussen content, markup, beeld,
        CSS en eventueel javascript. Hoe strikter deze gescheiden zijn, des te eenvoudiger is het om
        een toegankelijke en goed te beheren website te bouwen. Het is niet eenvoudig om een goed
        framework te vinden waarin dit consequent wordt toegepast. Hiervoor is 'Manon' geschreven,
        dat een strikte scheiding hanteert tussen de content, markup en styles.
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
            In de <a href="/components">componentenbibliotheek</a> vind je het volledige overzicht met
            beschikbare componenten.
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
