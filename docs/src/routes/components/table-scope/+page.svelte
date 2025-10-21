<script module>
  export const breadcrumb = "Tabelrichting";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabelrichting</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#variables">Variabelen</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Tabelrichting</h1>
        <p>Data in tabellen kan als rij of als kolom weergegeven worden.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg <code>scope="col"</code> of <code>scope="row"</code> toe aan de tabelcellen
            <code>th</code> of <code>td</code>. Afhankelijk van de richting. Voor meer informatie
            zie: <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Het is hierbij belangrijk om rekening te houden met gebruikers die gebruik maken van
            hulptechnologieën zoals screenreaders. Om ook voor hen inzichtelijk te houden bij welke
            data de titel hoort is het van belang dit aan te geven. Dit kan gedaan worden door aan
            de <code>&lt;th&gt;</code> de tag <code>scope="col"</code> bij kolommen of
            <code>scope="row"</code> bij rijen toe te voegen.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <p>
          In dit voorbeeld staat dat de <code>&lt;th&gt;</code> binnen de
          <code>&lt;thead&gt;</code> over de data in de kolommen gaan. En de
          <code>&lt;th&gt;</code> binnen de <code>&lt;tbody&gt;</code> over de data per rij gaan.
        </p>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met aangegeven scope: </caption>
            <thead>
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">Diersoort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Manon</th>
                <td>Kat</td>
              </tr>
              <tr>
                <th scope="row">Max</th>
                <td>Hond</td>
              </tr>
              <tr>
                <th scope="row">Keiko</th>
                <td>Kat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met aangegeven scope:</caption>
    <thead>
      <tr>
        <th scope="col">Naam</th>
        <th scope="col">Diersoort</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Manon</th>
        <td>Kat</td>
      </tr>
      <tr>
        <th scope="row">Max</th>
        <td>Hond</td>
      </tr>
      <tr>
        <th scope="row">Keiko</th>
        <td>Kat</td>
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
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p class="system-notification" role="group" aria-label="systeembericht">
          Dit component heeft momenteel geen instelbare variabelen
        </p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/table-scope-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
