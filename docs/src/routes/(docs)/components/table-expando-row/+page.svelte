<script context="module">
  export const breadcrumb = "Uitklapbare tabelrij";
</script>

<script>
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
            Voeg een extra <code>&lt;tr&gt;</code> direct onder de bijbehorende zichtbare rij toe om
            een uitklapbare rij toe te voegen.
          </li>
          <li>Geef de uitklapbare rij de class <code>expando-row</code>.</li>
          <li>
            Voeg binnen de uitklapbare rij een tabelcel toe die de volledige breedte gebruikt. In
            dit voorbeeld
            <code>&lt;td colspan="5"&gt;&lt;/td&gt;</code>. Vul als waarde van de
            <code>colspan</code> de hoeveelheid kolommen van de tabel in.
          </li>
          <li>
            Voeg direct binnen de tabelcel binnen de uitklapbare rij een
            <code>&lt;span&gt;</code> toe met een omschrijvende tekst voor screenreader gebruikers.
            Bijvoorbeeld:
            <code>&lt;span class="sr-only"&gt;Extra details over lorem ipsum&lt;/span&gt;.</code>
            Voeg aan deze span de class <code>sr-only</code> toe om de span visueel te verbergen voor
            overige gebruikers.
          </li>
          <li>Vul de uitklapbare tabel met de gewenste data.</li>
          <li>
            Voeg aan de tabel een extra kolom toe met knoppen voor het bedienen van de uitklapbare
            rijen.
            <ul>
              <li>
                Gebruik als kolomtitel een korte omschrijvende tekst. Bijvoorbeeld met de tekst
                "details".
              </li>
              <li>
                Voeg voor iedere uitklapbare rij een knop toe met de class
                <code>expando-button</code>.
              </li>
              <li>
                Voeg een button-tekst toe die screenreader gebruikers toelicht dat de knop de rij
                zal openklappen, zoals bijvoorbeeld "Open details". Geef de
                <code>&lt;button&gt;</code> daarnaast een <code>data-close-label=""</code> met de bijbehorende
                tekst voor het dichtklappen van de rij. Bijvoorbeeld: "Sluit details".
              </li>
              <li>
                <strong>HTML-voorbeeld:</strong>
                <code>
                  &lt;button class="expando-button" data-close-label="Sluit details"
                  data-icon-open-class="icon icon-descending" data-icon-close-class="icon
                  icon-ascending" type="button"&gt; Open details &lt;/button&gt;
                </code>
              </li>
            </ul>
          </li>
          <li>
            Plaats
            <code>&lt;script defer src="pad/naar/expando-rows.min.js"&gt;&lt;/script&gt;</code>
            in de <code>&lt;head&gt;</code> van het document. Voor meer informatie zie:
            <a href="../add-js">JavaScript toevoegen</a>
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

            <h2>Aandachtspunten</h2>
            <ul>
              <li>
                <strong
                  >Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker
                  in combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de
                  gebruiker helpt om complexe data te begrijpen.</strong
                >
              </li>
              <li>
                Wanneer JavaScript niet beschikbaar is, worden alle uitklapbare tabelrijen
                uitgeklapt getoond en worden de expando-<code>&lt;button&gt;</code>s verborgen zodat
                alle data ook beschikbaar is voor gebruikers zonder JavaScript.
              </li>
              <li>
                Om een tabelrij standaard uitgeklapt te maken, voeg je
                <code>aria-expanded="true"</code> toe aan de <code>&lt;button&gt;</code>. Verander
                hierbij ook de button-tekst naar bijvoorbeeld "Sluit details", en vervang de
                <code>data-close-label</code> door een <code>data-open-label</code> met bijbehorende
                tekst zoals bijvoorbeeld "Open details.
              </li>
            </ul>

            <section id="examples">
              <h2>Voorbeelden</h2>
              <h3>Visueel voorbeeld:</h3>
              <div class="horizontal-scroll">
                <table>
                  <caption> Voorbeeld uitklapbare tabelrijen: </caption>
                  <thead>
                    <tr>
                      <th scope="col">Risicolevel</th>
                      <th scope="col">Bevindingstype</th>
                      <th scope="col">Hoeveelheid</th>
                      <th scope="col">Status</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="critical">Critical</span></td>
                      <td>Lorem ipsum dolor set</td>
                      <td class="number">4</td>
                      <td>New</td>
                      <td>
                        <button
                          class="expando-button"
                          data-close-label="Sluit details"
                          data-icon-open-class="icon icon-descending"
                          data-icon-close-class="icon icon-ascending"
                          type="button"
                        >
                          Open details
                        </button>
                      </td>
                    </tr>
                    <tr class="expando-row">
                      <td colspan="5">
                        <span class="sr-only">Lorem ipsum dolor set</span>
                        <h1>Lorem ipsum details</h1>
                        <p>De extra content.</p>
                      </td>
                    </tr>
                    <tr>
                      <td><span class="high">High</span></td>
                      <td>Lorem ipsum dolor set</td>
                      <td class="number">12</td>
                      <td>New</td>
                      <td>
                        <button
                          class="expando-button"
                          data-close-label="Sluit details"
                          data-icon-open-class="icon icon-descending"
                          data-icon-close-class="icon icon-ascending"
                          type="button"
                        >
                          Open details
                        </button>
                      </td>
                    </tr>
                    <tr class="expando-row">
                      <td colspan="5">
                        <span class="sr-only">Lorem ipsum dolor set</span>
                        <h1>Lorem ipsum details</h1>
                        <p>De extra content.</p>
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
    <caption>
      Voorbeeld uitklapbare tabelrijen:
    </caption>
    <thead>
      <tr>
        <th scope="col">Risicolevel</th>
        <th scope="col">Bevindingstype</th>
        <th scope="col">Hoeveelheid</th>
        <th scope="col">Status</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="critical">Critical</span></td>
        <td>Lorem ipsum dolor set</td>
        <td class="number">4</td>
        <td>New</td>
        <td>
          <button
            class="expando-button"
            data-close-label="Sluit details"
            data-icon-open-class="icon icon-descending"
            data-icon-close-class="icon icon-ascending"
            type="button">
              Open details
            </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
          <span class="sr-only">Lorem ipsum dolor set</span>
          <h1>Lorem ipsum details</h1>
          <p>De extra content.</p>
        </td>
      </tr>
      <tr>
        <td><span class="high">High</span></td>
        <td>Lorem ipsum dolor set</td>
        <td class="number">12</td>
        <td>New</td>
        <td>
          <button
          class="expando-button"
          data-close-label="Sluit details"
          data-icon-open-class="icon icon-descending"
          data-icon-close-class="icon icon-ascending"
          type="button">
            Open details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
          <span class="sr-only">Lorem ipsum dolor set</span>
          <h1>Lorem ipsum details</h1>
          <p>De extra content.</p>
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
                      <td><a href="../variables#background-color">background-color</a></td>
                      <td>#e5e5e5</td>
                      <td>Openklapbare cel - td</td>
                      <td>CSS</td>
                    </tr>
                    <tr>
                      <td>--expando-rows-table-cell-padding</td>
                      <td><a href="../variables#padding">padding</a></td>
                      <td>2rem 1rem</td>
                      <td>Openklapbare cel - td</td>
                      <td>CSS</td>
                    </tr>
                    <tr>
                      <td>--expando-rows-table-cell-after-breakpoint-padding</td>
                      <td><a href="../variables#padding">padding</a></td>
                      <td>2rem 3rem</td>
                      <td>Openklapbare cel - td</td>
                      <td>CSS</td>
                    </tr>

                    <tr>
                      <td>$breakpoint</td>
                      <td><a href="../variables#breakpoints">Breekpunt</a></td>
                      <td>24rem !default</td>
                      <td>Subtitel binnen de openklapbare cel - h2</td>
                      <td>SASS</td>
                    </tr>
                    <tr>
                      <td>--expando-rows-row-background-color</td>
                      <td><a href="../variables#background-color">background-color</a></td>
                      <td>transparent</td>
                      <td>De openklapbare rij</td>
                      <td>CSS</td>
                    </tr>
                    <tr>
                      <td>--expando-rows-row-striping-background-color</td>
                      <td><a href="../variables#background-color">background-color</a></td>
                      <td>var(--table-row-background-color-striping, initial)</td>
                      <td>De openklapbare rij</td>
                      <td>CSS</td>
                    </tr>
                    <tr>
                      <td>--expando-rows-row-font-weight</td>
                      <td><a href="../variables#font-weight">font-weight</a></td>
                      <td>bold</td>
                      <td>De openklapbare rij</td>
                      <td>CSS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </li>
        </ol>
      </section>
    </div>
  </article>
</main>
