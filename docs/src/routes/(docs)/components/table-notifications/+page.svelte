<script context="module">
  export const breadcrumb = "Meldingen op tabel-elementen";
</script>

<script>
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
  <article>
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
            <a href="./notifications">Notifications</a> voor meer informatie.
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
        <h2>Benodigdheden</h2>
        <ul>
          <li><code>table/table-base.scss</code></li>
          <li><code>table/table-base-variables.scss</code></li>
          <li><code>notification/notification.scss</code></li>
          <li>
            <code>notification/notification-variables.scss</code>
          </li>
          <li>
            Bijbehorende melding-type-bestanden. Voor meer informatie en beschikbare types zie:
            <a href="./notifications">Meldingen</a>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./table-notifications-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
