<script module>
  export const breadcrumb = "Sorteerbare tabel";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";

  type Column = "firstname" | "lastname" | "age";

  const demoTableRows = [
    { firstname: "Janine", lastname: "Hinde", age: 16 },
    { firstname: "Henk", lastname: "de Vries", age: 8 },
    { firstname: "Maria", lastname: "Lin", age: 32 },
    { firstname: "John", lastname: "Doe", age: 64 },
  ];

  let sortColumn: Column | undefined = $state(undefined);

  let sortDirection: "ascending" | "descending" = $state("ascending");

  let numeric = $derived(sortColumn === "age");

  let sortedDemoTableRows = $derived(
    demoTableRows
      .slice()
      .sort(
        sortDirection === "ascending"
          ? (a, b) =>
              sortColumn
                ? ("" + a[sortColumn]).localeCompare(String(b[sortColumn]), undefined, { numeric })
                : 0
          : (a, b) =>
              sortColumn
                ? ("" + b[sortColumn]).localeCompare(String(a[sortColumn]), undefined, { numeric })
                : 0,
      ),
  );

  const toggleSort: (column: Column) => void = (column): void => {
    if (column === sortColumn) {
      sortDirection = sortDirection === "ascending" ? "descending" : "ascending";
    } else {
      sortColumn = column;
      sortDirection = "ascending";
    }
  };
</script>

<svelte:head>
  <title>Sorteerbare tabel</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#quick-start">Snelstart</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>
  <article>
    <h1 class="page-title">Sorteerbare tabel</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>
          Om inzicht te krijgen in de data kan het behulpzaam zijn om de gebruiker de data te laten
          sorteren.
        </p>

        <h2 id="quick-start">Snelstart:</h2>
        <p>SCSS importeren:</p>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
@use "@minvws/manon/table-checkbox";
@use "@minvws/manon/table/table-base";
@use "@minvws/manon/table/table-base-variables";
@use "@minvws/manon/button/button-base";
@use "@minvws/manon/button/button-base-variables";
@use "@minvws/manon/icon/icon-base";
@use "@minvws/manon/icon/icon-base-variables";
`}
        />

        <p>JavaScript importeren:</p>
        <Code
          language="javascript"
          code={`
TODO
`}
        />
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <div class="horizontal-scroll">
          <table id="sortable-table-example">
            <caption>
              Tabelvoorbeeld met sorteerbare data
              <span class="visually-hidden">, kolomkoppen met knoppen zijn sorteerbaar</span>
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-sort={sortColumn === "firstname" ? sortDirection : undefined}>
                  <button class="sort" onclick={() => toggleSort("firstname")}>
                    Voornaam
                    <span
                      aria-hidden="true"
                      class="icon"
                      class:icon-sortable={sortColumn !== "firstname"}
                      class:icon-ascending={sortColumn === "firstname" &&
                        sortDirection === "ascending"}
                      class:icon-descending={sortColumn === "firstname" &&
                        sortDirection === "descending"}
                    ></span>
                  </button>
                </th>
                <th
                  scope="col"
                  abbr="Achternaam"
                  aria-sort={sortColumn === "lastname" ? sortDirection : undefined}
                >
                  <button class="sort" onclick={() => toggleSort("lastname")}>
                    Achternaam (met tussenvoegsel)
                    <span
                      aria-hidden="true"
                      class="icon"
                      class:icon-sortable={sortColumn !== "lastname"}
                      class:icon-ascending={sortColumn === "lastname" &&
                        sortDirection === "ascending"}
                      class:icon-descending={sortColumn === "lastname" &&
                        sortDirection === "descending"}
                    ></span>
                  </button>
                </th>
                <th
                  scope="col"
                  class="number"
                  aria-sort={sortColumn === "age" ? sortDirection : undefined}
                >
                  <button class="sort" onclick={() => toggleSort("age")}>
                    Leeftijd
                    <span
                      aria-hidden="true"
                      class="icon"
                      class:icon-sortable={sortColumn !== "age"}
                      class:icon-ascending={sortColumn === "age" && sortDirection === "ascending"}
                      class:icon-descending={sortColumn === "age" && sortDirection === "descending"}
                    ></span>
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              {#each sortedDemoTableRows as row}
                <tr>
                  <td>{row.firstname}</td>
                  <td>{row.lastname}</td>
                  <td class="number">{row.age}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>

        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met sorteerbare data
      <span class="visually-hidden">, kolomkoppen met knoppen zijn sorteerbaar</span>
    </caption>
    <thead>
      <tr>
        <th scope="col">
          <button>
            Voornaam
            <span class="icon icon-sortable" aria-hidden="true"></span>
          </button>
        </th>
        <th scope="col" abbr="Achternaam">
          <button>
            Achternaam (met tussenvoegsel)
            <span class="icon icon-sortable" aria-hidden="true"></span>
          </button>
        </th>
        <th scope="col">
          <button>
            Leeftijd
            <span class="icon icon-sortable" aria-hidden="true"></span>
          </button>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Janine</td>
        <td>Hinde</td>
        <td class="number">16</td>
      </tr>
      <tr>
        <td>Henk</td>
        <td>de Vries</td>
        <td class="number">8</td>
      </tr>
      <tr>
        <td>Maria</td>
        <td>Lin</td>
        <td class="number">32</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td class="number">64</td>
      </tr>
    </tbody>
  </table>
</div>
        `}
        />

        <h3>Benodigde stappen:</h3>
        <ol>
          <li>
            Voeg een <code>&lt;button></code> toe binnen de <code>&lt;th></code> van elke
            sorteerbare kolom.
            <ul>
              <li>
                Voeg de <code>&lt;button></code> alleen toe aan sorteerbare kolommen. Niet elke kolom
                hoeft sorteerbaar te zijn.
              </li>
              <li>
                Plaats de tekst van de kolomkop in de <code>&lt;button></code>, zodat de hele
                kolomkop klikbaar is.
              </li>
            </ul>
          </li>
          <li>
            Voeg binnen de knop van elke sorteerbare kolom een icoon toe. Voor meer informatie zie:
            <a href="{base}/components/icons">Iconen</a>.
            <ul>
              <li>
                Voeg <code>aria-hidden="true"</code> aan de <code>&lt;span></code> van het icoon, om
                te voorkomen dat het icoon in de toegankelijke naam van de knop opgenomen wordt.
              </li>
              <li>
                Zorg dat de gebruikte Icoonset iconen heeft voor ongesoorteerde data, oplopend
                gesorteerde data en aflopend gesorteerde data.
              </li>
              <li>
                Gebruik bij voorkeur iconen met ingevulde driehoeken, bijvoorbeeld <span
                  class="icon icon-sortable">driehoeken omhoog en omlaag</span
                >
                voor ongesorteerd, <span class="icon icon-ascending">driehoek omhoog</span> voor
                oplopend gesorteerd en <span class="icon icon-descending">driehoek omlaag</span> voor
                aflopend gesorteerd.
              </li>
            </ul>
          </li>
          <li>
            Voeg een toelichting over de sorteerknoppen toe aan de <code>&lt;caption></code>.
            Bijvoorbeeld: "kolomkoppen met knoppen zijn sorteerbaar".
            <ul>
              <li>
                Indien gewenst kan deze tekst visueel verborgen worden met de <code
                  >visually-hidden</code
                > class.
              </li>
              <li>
                Zorg ervoor dat er een punt of komma staat tussen de bestaande caption-tekst en deze
                hint-tekst. Bij gebruik van een <code>visually-hidden</code> <code>&lt;>span></code>
                kan bijvoorbeeld een komma toegevoegd worden voorafgaand aan de hint-tekst.
              </li>
            </ul>
          </li>
          <li>
            Voeg een <code>abbr=""</code> toe aan de <code>&lt;th></code> indien de tekst in de
            <code>&lt;th></code>
            erg lang is.
            <ul>
              <li>
                De kortere omschrijving in de <code>abbr=""</code> wordt gebruikt door screenreaders
                bij het voorlezen van een cel in de bijbehorende kolom.
              </li>
            </ul>
          </li>
          <li>
            Voeg JavaScript toe voor het dynamische gedrag van het component. De exacte
            implementatie is afhankelijk van de context.
            <ul>
              <li>
                Sorteer de inhoud van de tabel wanneer de gebruiker op één van de knoppen in de
                kolomkoppen klikt.
              </li>
              <li>
                Draai de sorteervolgorde om, wanneer de gebruiker op de knop klikt van de kolom waar
                op dit moment op gesorteerd wordt.
              </li>
              <li>
                Zorg ervoor dat elke kolomkop het juiste icoon heeft, afhankelijk van de huidige
                sortering van de tabel.
              </li>
              <li>
                Voeg <code>aria-sort="ascending"</code> / <code>aria-sort="descending"</code> toe
                aan de <code>&lt;th></code> van de kolom waarop gesorteerd wordt.
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  </article>
</main>
