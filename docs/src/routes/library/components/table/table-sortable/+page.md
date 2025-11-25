---
title: Sorteerbare tabel
breadcrumb: Sorteerbare tabel
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Om inzicht te krijgen in de data kan het behulpzaam zijn om de gebruiker de data te laten sorteren. Dit component biedt hiervoor de visuele weergave.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/table";
@use "@minvws/manon/components/button";
@use "@minvws/manon/components/icon";
```

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met sorteerbare data
      <span class="visually-hidden">, kolomkoppen met knoppen zijn sorteerbaar</span>
    </caption>
    <thead>
      <tr>
        <th scope="col">
          <button class="sortable">
            Voornaam
            <span class="icon icon-sort" aria-hidden="true"></span>
          </button>
        </th>
        <th scope="col" abbr="Achternaam">
          <button class="sortable">
            Achternaam (met tussenvoegsel)
            <span class="icon icon-sort" aria-hidden="true"></span>
          </button>
        </th>
        <th scope="col">
          <button class="sortable">
            Leeftijd
            <span class="icon icon-sort" aria-hidden="true"></span>
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

```html
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
```
