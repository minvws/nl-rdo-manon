<script module>
  export const breadcrumb = "Meldingen op tabel-elementen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Meldingen op tabel-elementen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Meldingen op tabel-elementen</h1>
        <p>
          Tabelelementen kunnen een meldig weergeven. Denk hierbij aan een foutmelding of een
          toelichting.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de <code>checkbox</code> toe aan de benodigde cellen. Voor het voorbeeld zie:
            <a href="#examples">Voorbeelden</a>
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Voeg een van de melding-classes toe aan een volledige tabelrij
            <code>tr</code> of aan een losse cel <code>th</code> / <code>td</code>. Beschikbare
            classes zijn:
            <ul>
              <li><code>error</code></li>
              <li><code>warning</code></li>
              <li><code>confirmation</code></li>
              <li><code>explanation</code></li>
              <li><code>primary</code></li>
            </ul>
            Zie
            <a href="{base}/components/notifications">Notifications</a> voor meer informatie.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld meldingen: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="error">Foutmelding op tabelrij</td>
                <td class="error">Foutmelding op tabelrij</td>
                <td class="error">Foutmelding op tabelrij</td>
              </tr>
              <tr>
                <td class="warning">Waarschuwing op tabelrij</td>
                <td class="warning">Waarschuwing op tabelrij</td>
                <td class="warning">Waarschuwing op tabelrij</td>
              </tr>
              <tr>
                <td class="confirmation">Bevestiging op tabelrij</td>
                <td class="confirmation">Bevestiging op tabelrij</td>
                <td class="confirmation">Bevestiging op tabelrij</td>
              </tr>
              <tr>
                <td class="explanation">Toelichting op tabelrij</td>
                <td class="explanation">Toelichting op tabelrij</td>
                <td class="explanation">Toelichting op tabelrij</td>
              </tr>
              <tr>
                <td class="primary">Primair op tabelrij</td>
                <td class="primary">Primair op tabelrij</td>
                <td class="primary">Primair op tabelrij</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld meldingen:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
      </tr>
      <tr>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
      </tr>
      <tr>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
      </tr>
      <tr>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
      </tr>
      <tr>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
      </tr>
    </tbody>
  </table>
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
@use "@minvws/manon/table";
@use "@minvws/manon/notification";
`}
        />

        <p>
          Bijbehorende melding-type-bestanden. Voor meer informatie en beschikbare types zie:
          <a href="{base}/components/notifications">Notificaties</a>
        </p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/table-notifications-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
