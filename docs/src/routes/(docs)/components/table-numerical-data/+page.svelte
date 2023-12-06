<script context="module">
  export const breadcrumb = "Tabel met numerieke data";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabel met numerieke data</title>
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
        <h1>Tabel met numerieke data</h1>
        <p>
          Getallen worden visueel onderscheidend weergegeven van overige celdata om de
          gebruiksvriendelijkheid te vergroten.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="../import-styling">Componenten gebruiken en styling toevoegen</a>
          </li>
          <li>
            Om gebruik te maken van de weergave voor numerieke data, voeg de class
            <code>number</code> toe aan de cellen die numerieke data bevatten en de bijbehorende titelblokken
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>Getallen worden vaak rechts uitgelijnd voor leesbaarheid.</li>
          <li>
            Voor consistentie wordt de titel van kolommen met numerieke data vaak op dezelfde manier
            uitgelijnd.
          </li>
          <li>
            Getallen worden <dfn>mono-spaced</dfn> weergegeven, wat inhoud dat ieder getal dezelfde breedte
            heeft waardoor getallen onderling goed te vergelijken zijn.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met numerieke data: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading</th>
                <th scope="col" class="number">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum</td>
                <td class="number">52,12</td>
              </tr>
              <tr>
                <td>Lorem ipsum</td>
                <td class="number">110,00</td>
              </tr>
              <tr>
                <td>Lorem ipsum</td>
                <td class="number">2,00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totaal</td>
                <td class="number">164,12</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met selectievak:</caption>
    <thead>
      <tr>
        <th scope="col"><input type="checkbox"></th>
        <th scope="col">Table header heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox"></td>
        <td>Ipsum</td>
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
          <li><code>form/form-checkbox.scss</code></li>
          <li><code>form/form-checkbox-variables.scss</code></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./table-numerical-data-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
