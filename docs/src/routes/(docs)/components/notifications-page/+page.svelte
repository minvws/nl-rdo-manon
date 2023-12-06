<script context="module">
  export const breadcrumb = "Pagina-notificatie";
</script>

<script>
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Pagina-notificatie</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Pagina-notificatie</h1>
        <p>Voor het weergeven van notificaties.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>Voeg de notificatie toe direct binnen <code>main</code></li>
          <li>
            Voeg de gewenste notificatie-type-<code>class</code> toe. Voor meer informatie zie:
            <a href="notifications#notification-types">Beschikbare weergaven</a>.
          </li>
          <li>
            Voeg <code>role="group"</code> toe aan het notificatie-element om screenreader gebruikers
            erop te attenderen dat de content van de notificatie bij elkaar hoort.
          </li>
          <li>
            Voeg <code>aria-label=""</code> toe aan het notificatie-element om screenreader
            gebruikers inzicht te geven in het type bericht. Bijvoorbeeld:
            <code>aria-label="foutmelding"</code>. Let op dat de content van het label in de taal
            van het document staat.
          </li>
          <li>
            Voeg binnen het element een <code>span</code> toe zodat gebruikers (van screenreaders)
            weten wat de context van het bericht is. Bijvoorbeeld:
            <code>&lt;span&gt;Foutmelding:&lt;/span&gt;</code>. Het is aan te raden om dit bericht
            voor alle gebruikers zichtbaar te houden zodat het voor iedereen duidelijk is. Denk
            hierbij ook aan kleurenblinden als er in het ontwerp enkel gebruik wordt gemaakt van
            kleuren als visuele onderscheidende factor op notificaties of iconen waarbij het kan
            zijn dat niet alle gebruikers het icoon zullen herkennen.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
            gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
            gebruikers die gebruik maken van hulptechnologiën.
          </li>
          <li>
            Notificaties kunnen verborgen worden door de class
            <code>hidden</code> toe te voegen aan de notification
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <p>Beschikbare voorbeelden:</p>
        <ul>
          <li><a href="notifications-page-example-error">Foutmelding</a></li>
          <li><a href="notifications-page-example-warning">Waarschuwing</a></li>
          <li><a href="notifications-page-example-explanation">Toelichting</a></li>
          <li><a href="notifications-page-example-confirmation">Bevestiging</a></li>
          <li><a href="notifications-page-example-system">Systeembericht</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
