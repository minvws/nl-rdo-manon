<script context="module">
  export const breadcrumb = "Uitklapbare tabelrij";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Uitklapbare tabelrij</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#variables">Beschikbare variabelen</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <p class="warning">
        Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker in
        combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de gebruiker
        helpt om complexe data te begrijpen.
      </p>
      <section id="introduction">
        <h1>Uitklapbare tabel</h1>
        <p>
          Voor het tonen van complexe tabellen met bijbehorende details kan gekozen worden voor een
          tabel met uitklapbare tabelrijen.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg aan de tabel een extra kolom toe voor de knoppen voor het bedienen van de
            uitklapbare rijen.
            <ul>
              <li>
                Geef de <code>{`<th>`}</code> van deze kolom een <code>id</code>.
              </li>
              <li>
                Gebruik als kolomtitel een korte omschrijvende tekst. Bijvoorbeeld met de tekst
                "details".
              </li>
            </ul>
          </li>
          <li>
            Voeg een extra <code>{`<tr>`}</code> toe direct onder de bijbehorende zichtbare rij om een
            uitklapbare rij toe te voegen.
          </li>
          <li>Geef de uitklapbare rij de class <code>expando-row</code>.</li>
          <li>
            Zorg dat de zichtbare rij een <code>{`<th>`}</code> met <code>scope="row"</code>
            heeft, die de rij uniek identificeert. Gebruik hiervoor bijvoorbeeld een naam of
            <code>ID</code>. Geef deze <code>{`<th>`}</code> een <code>id</code>.
          </li>
          <li>
            Voeg binnen de uitklapbare rij een tabelcel toe.
            <ul>
              <li>
                Zorg er met <code>colspan</code> voor dat de cel de volledige breedte gebruikt. Vul
                als waarde de hoeveelheid kolommen van de tabel in, inclusief de "details"-kolom. In
                dit voorbeeld: <code>{`<td colspan="5"></td>`}</code>.
              </li>
              <li>
                Geef de tabelcel het <code>headers</code>-attribuut, en gebruik dat om te verwijzen
                naar de <code>id</code>'s van de <code>{`<th>`}</code>'s van de openklapbare rij en
                de "details"-kolom (in die volgorde). In dit voorbeeld:
                <code>headers="lorem-ipsum-header details-header"</code>
              </li>
            </ul>
          </li>
          <li>Vul de uitklapbare tabel met de gewenste data.</li>
          <li>
            Voeg voor iedere uitklapbare rij een knop toe aan de "details"-kolom met de class
            <code>expando-button</code>.
            <ul>
              <li>
                Voeg een button-tekst toe die screenreader gebruikers toelicht dat de knop de
                uitklapbare rij bedient. Verwijs daarin naar de inhoud (bijvoorbeeld "details") en
                het onderwerp (bijvoorbeeld de naam of ID van de rij).
              </li>
              <li>
                <strong>HTML-voorbeeld:</strong>
                <code
                  >{`<button class="expando-button" data-icon-open-class="icon icon-descending" data-icon-close-class="icon icon-ascending">Lorem ipsum details</button>`}
                </code>
              </li>
            </ul>
          </li>
          <li>
            Plaats
            <code>&lt;script defer src="pad/naar/expando-rows.min.js"&gt;&lt;/script&gt;</code>
            in de <code>{`<head>`}</code> van het document. Voor meer informatie zie:
            <a href="{base}/documentation/add-js">JavaScript toevoegen</a>
          </li>
          <li>
            Open/sluit-icoon toevoegen:
            <ul>
              <li>
                Voeg de gewenste icoon-classes toe via het HTML-attribuut <code
                  >data-icon-open-class=""</code
                >
                voor het open-icoon en <code>data-icon-close-class=""</code> voor het sluit-icoon.
                Vul tussen de "" de icoon-classes in van de door jouw gebruikte iconenset. Voor meer
                informatie over het toevoegen van iconensets, zie <a href="icons">Iconen</a>. Voor
                een implementatievoorbeeld zie het <a href="#examples">html-voorbeeld</a>.
              </li>
            </ul>
          </li>
        </ol>
        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            <strong
              >Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker in
              combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de
              gebruiker helpt om complexe data te begrijpen.</strong
            >
          </li>
          <li>
            Wanneer JavaScript niet beschikbaar is, worden alle uitklapbare tabelrijen uitgeklapt
            getoond en worden de expando-<code>{`<button>`}</code>s verborgen zodat alle data ook
            beschikbaar is voor gebruikers zonder JavaScript.
          </li>
          <li>
            Om een tabelrij standaard uitgeklapt te maken, voeg je
            <code>aria-expanded="true"</code> toe aan de <code>{`<button>`}</code>. Verander hierbij
            ook de button-tekst naar bijvoorbeeld "Sluit details", en vervang de
            <code>data-close-label</code> door een <code>data-open-label</code> met bijbehorende tekst
            zoals bijvoorbeeld "Open details.
          </li>
        </ul>

        <section id="examples">
          <h2>Voorbeelden</h2>
          <h3>Visueel voorbeeld:</h3>
          <div class="horizontal-scroll">
            <table>
              <caption>Voorbeeld uitklapbare tabelrijen:</caption>
              <thead>
                <tr>
                  <th scope="col">Bevindingstype</th>
                  <th scope="col">Risicolevel</th>
                  <th scope="col">Hoeveelheid</th>
                  <th scope="col">Status</th>
                  <th scope="col" id="details-header">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" id="lorem-ipsum-header">Lorem ipsum</th>
                  <td><span class="critical">Critical</span></td>
                  <td class="number">4</td>
                  <td>New</td>
                  <td>
                    <button
                      class="expando-button"
                      data-icon-open-class="icon icon-descending"
                      data-icon-close-class="icon icon-ascending"
                    >
                      Lopem ipsum details
                    </button>
                  </td>
                </tr>
                <tr class="expando-row">
                  <td colspan="5" headers="lorem-ipsum-header details-header">
                    <h4>Details</h4>
                    <p>Dit zijn de details over de bevinding "lorem ipsum"</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" id="dolor-sit-amet-header">Dolor sit amet</th>
                  <td><span class="high">High</span></td>
                  <td class="number">12</td>
                  <td>New</td>
                  <td>
                    <button
                      class="expando-button"
                      data-icon-open-class="icon icon-descending"
                      data-icon-close-class="icon icon-ascending"
                    >
                      Dolor sit amet details
                    </button>
                  </td>
                </tr>
                <tr class="expando-row">
                  <td colspan="5" headers="dolor-sit-amet-header details-header">
                    <h4>Details</h4>
                    <p>Dit zijn de details over de bevinding "dolor sit amet".</p>
                  </td>
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
    <caption>Voorbeeld uitklapbare tabelrijen:</caption>
    <thead>
      <tr>
        <th scope="col">Bevindingstype</th>
        <th scope="col">Risicolevel</th>
        <th scope="col">Hoeveelheid</th>
        <th scope="col">Status</th>
        <th scope="col" id="details-header">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" id="lorem-ipsum-header">Lorem ipsum</th>
        <td><span class="critical">Critical</span></td>
        <td class="number">4</td>
        <td>New</td>
        <td>
          <button
            class="expando-button"
            data-icon-open-class="icon icon-descending"
            data-icon-close-class="icon icon-ascending"
          >
            Lopem ipsum details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5" headers="lorem-ipsum-header details-header">
          <h4>Details</h4>
          <p>Dit zijn de details over de bevinding "lorem ipsum"</p>
        </td>
      </tr>
      <tr>
        <th scope="row" id="dolor-sit-amet-header">Dolor sit amet</th>
        <td><span class="high">High</span></td>
        <td class="number">12</td>
        <td>New</td>
        <td>
          <button
            class="expando-button"
            data-icon-open-class="icon icon-descending"
            data-icon-close-class="icon icon-ascending"
          >
            Dolor sit amet details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5" headers="dolor-sit-amet-header details-header">
          <h4>Details</h4>
          <p>Dit zijn de details over de bevinding "dolor sit amet".</p>
        </td>
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
            <li><code>table/table-expando-rows.scss</code></li>
            <li><code>table/table-expando-rows-variables.scss</code></li>
            <li><code>expando-rows.js</code></li>
          </ul>
        </section>

        <section id="variables">
          <h2>Instelbare variabelen</h2>

          <div class="horizontal-scroll nowrap">
            <table>
              <caption>Overzicht beschikbare variabelen:</caption>
              <thead>
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">CSS-attribuut</th>
                  <th scope="col">Standaard waarde</th>
                  <th scope="col">Scope</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>--expando-rows-table-cell-background-color</td>
                  <td
                    ><a href="{base}/documentation/variables#background-color">background-color</a
                    ></td
                  >
                  <td>#e5e5e5</td>
                  <td>Openklapbare cel - td</td>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>--expando-rows-table-cell-padding</td>
                  <td><a href="{base}/documentation/variables#padding">padding</a></td>
                  <td>2rem 1rem</td>
                  <td>Openklapbare cel - td</td>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>--expando-rows-table-cell-after-breakpoint-padding</td>
                  <td><a href="{base}/documentation/variables#padding">padding</a></td>
                  <td>2rem 3rem</td>
                  <td>Openklapbare cel - td</td>
                  <td>CSS</td>
                </tr>

                <tr>
                  <td>$breakpoint</td>
                  <td><a href="{base}/documentation/variables#breakpoints">Breekpunt</a></td>
                  <td>24rem !default</td>
                  <td>Subtitel binnen de openklapbare cel - h2</td>
                  <td>SASS</td>
                </tr>
                <tr>
                  <td>--expando-rows-row-background-color</td>
                  <td
                    ><a href="{base}/documentation/variables#background-color">background-color</a
                    ></td
                  >
                  <td>transparent</td>
                  <td>De openklapbare rij</td>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>--expando-rows-row-striping-background-color</td>
                  <td
                    ><a href="{base}/documentation/variables#background-color">background-color</a
                    ></td
                  >
                  <td>var(--table-row-background-color-striping, initial)</td>
                  <td>De openklapbare rij</td>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>--expando-rows-row-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>bold</td>
                  <td>De openklapbare rij</td>
                  <td>CSS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  </article>
</main>
