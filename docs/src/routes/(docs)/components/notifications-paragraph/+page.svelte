<script context="module">
  export const breadcrumb = "Notifactie op een paragraaf";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Notifactie op een paragraaf</title>
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
        <h1>Notifactie op een paragraaf</h1>
        <p>Voor het weergeven van notificaties.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>Voeg de notificatie toe op basis van een van de onderstaande voorbeelden.</li>
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

        <h3>Visueel voorbeeld:</h3>
        <p class="error" role="group" aria-label="foutmelding">
          <span>Foutmelding:</span> Lorem <a href="notifications-paragraph">ipsum</a> dolor sit.
        </p>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<p class="error" role="group" aria-label="foutmelding"><span>Foutmelding:</span> Lorem ipsum dolor sit.</p>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>notification/notification.scss</code></li>
          <li><code>notification/notification-paragraph.scss</code></li>
          <li>
            Bestanden behorend bij de gewenste notificatie type(s). Voor de beschikbare types zie:
            <a href="notifications#notification-types">Beschikbare weergaven</a>
          </li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li>
            <code>notification/notification-variables.scss</code>
          </li>
          <li>
            <code>notification/notification-paragraph-variables.scss</code>
          </li>
          <li><code>text/link-base.scss</code></li>
          <li><code>text/link-base-variables.scss</code></li>
          <li><code>icon/icon-base.scss</code></li>
          <li><code>icon/icon-base-variables.scss</code></li>
          <li>
            Variabelenbestanden behorend bij de gewenste notificatie type(s). Voor de beschikbare
            types zie:
            <a href="notifications#notification-types">Beschikbare weergaven</a>
          </li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Paragraaf variabelen
            <ul>
              <li>
                <a href="{base}/variables#padding-top">padding-top</a>
              </li>
              <li>
                <a href="{base}/variables#padding-right">padding-right</a>
              </li>
              <li>
                <a href="{base}/variables#padding-bottom">padding-bottom</a>
              </li>
              <li>
                <a href="{base}/variables#padding-left">padding-left</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/notifications-paragraph-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
