---
title: Sorteerbare tabel
breadcrumb: Sorteerbare tabel
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
---

<h1 id="introduction">Sorteerbare tabel</h1>

Om inzicht te krijgen in de data kan het behulpzaam zijn om de gebruiker de data
te laten sorteren.

## Benodigde stappen:

1.  Voeg een `button` toe binnen de `th` van elke sorteerbare kolom.
    - Voeg de `button` alleen toe aan sorteerbare kolommen. Niet elke kolom
      hoeft sorteerbaar te zijn.
    - Plaats de tekst van de kolomkop in de `button`, zodat de hele kolomkop
      klikbaar is.
2.  Voeg binnen de knop van elke sorteerbare kolom een icoon toe. Voor meer
    informatie zie: [Iconen](/icons).
    - Voeg `aria-hidden="true"` aan de `span` van het icoon, om te voorkomen dat
      het icoon in de toegankelijke naam van de knop opgenomen wordt.
    - Zorg dat de gebruikte Icoonset iconen heeft voor ongesoorteerde data,
      oplopend gesorteerde data en aflopend gesorteerde data.
    - Gebruik bij voorkeur iconen met ingevulde driehoeken, bijvoorbeeld <span
      class="icon icon-sortable">driehoeken omhoog en omlaag</span> voor
      ongesorteerd, <span class="icon icon-ascending">driehoek omhoog</span>
      voor oplopend gesorteerd en <span class="icon icon-descending">driehoek
      omlaag</span> voor aflopend gesorteerd.
3.  Voeg een toelichting over de sorteerknoppen toe aan de `caption`.
    Bijvoorbeeld: "kolomkoppen met knoppen zijn sorteerbaar".
    - Indien gewenst kan deze tekst visueel verborgen worden met de
      `visually-hidden` class.
    - Zorg ervoor dat er een punt of komma staat tussen de bestaande
      caption-tekst en deze hint-tekst. Bij gebruik van een `visually-hidden`
      `span` kan bijvoorbeeld een komma toegevoegd worden voorafgaand aan de
      hint-tekst.
4.  Voeg een `abbr=""` toe aan de `th` indien de tekst in de `th` erg lang is.
    - De kortere omschrijving in de `abbr=""` wordt gebruikt door screenreaders
      bij het voorlezen van een cel in de bijbehorende kolom.
5.  Voeg JavaScript toe voor het dynamische gedrag van het component. De exacte
    implementatie is afhankelijk van de context.
    - Sorteer de inhoud van de tabel wanneer de gebruiker op één van de knoppen
      in de kolomkoppen klikt.
    - Draai de sorteervolgorde om, wanneer de gebruiker op de knop klikt van de
      kolom waar op dit moment op gesorteerd wordt.
    - Zorg ervoor dat elke kolomkop het juiste icoon heeft, afhankelijk van de
      huidige sortering van de tabel.
    - Voeg `aria-sort="ascending"` / `aria-sort="descending"` toe aan de `th`
      van de kolom waarop gesorteerd wordt.

## Aandachtspunten

- **Het is voor dit component nodig om het dynamische gedrag zelf via JavaScript
  te implementeren.**
- De exacte implementatie in JavaScript is afhankelijk van de context.
- De manier waarop de data gesorteerd moet worden, kan afhankelijk zijn van het
  soort data (bijvoorbeeld tekstueel of numeriek). Dit kan per kolom
  verschillen.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

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

### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met sorteerbare data
      <span class="visually-hidden"
        >, kolomkoppen met knoppen zijn sorteerbaar</span
      >
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
```

<h2 id="requirements">Benodigdheden</h2>

<ul>
  <li>`table/table-base.scss`</li>
  <li>`table/table-base-variables.scss`</li>
  <li>`button/button-base.scss`</li>
  <li>`button/button-base-variables.scss`</li>
  <li>`icon/icon-base.scss`</li>
  <li>`icon/icon-base-variables.scss`</li>
</ul>
