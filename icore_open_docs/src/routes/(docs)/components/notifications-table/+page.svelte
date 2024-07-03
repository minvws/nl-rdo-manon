<script context="module">
  export const breadcrumb = "Notifactie binnen tabellen";
</script>

<script>
  import { base } from "$app/paths";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Notifactie binnen tabellen</title>
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
        <h1>Notificatie binnen tabellen</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
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

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-2">
          <nav id="notification-table-types">
            <ul>
              <li>
                <a href="{base}/components/notification-confirmation">Tabelrij <code>tr</code></a>
              </li>
              <li>
                <a href="{base}/components/notification-warning">Tabelcel <code>td</code></a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section id="examples">
        <div class="horizontal-scroll">
          <table>
            <caption> Table with titlebar and title example: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr class="warning">
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td class="explanation">Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th class="notification">Table footer heading 1</th>
                <th>Table footer heading 2</th>
                <th>Table footer heading 3</th>
              </tr>
              <tr>
                <td>Table footer 1</td>
                <td>Table footer 2</td>
                <td>Table footer 3</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  </article>
</main>
