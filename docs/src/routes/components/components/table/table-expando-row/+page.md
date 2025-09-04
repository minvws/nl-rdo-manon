---
title: Uitklapbare tabelrij
breadcrumb: Uitklapbare tabelrij
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Voor het tonen van complexe tabellen met bijbehorende details kan gekozen worden
voor een tabel met uitklapbare tabelrijen.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
@use "@minvws/manon/table-expando-rows";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/expando-rows.js";
```

<p class="warning">
  Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker in
  combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de gebruiker
  helpt om complexe data te begrijpen.
</p>

### Benodigde stappen

1.  Voeg een extra `tr` direct onder de bijbehorende zichtbare rij toe om een
    uitklapbare rij toe te voegen.
2.  Geef de uitklapbare rij de class `expando-row`.
3.  Voeg binnen de uitklapbare rij een tabelcel toe die de volledige breedte
    gebruikt. In dit voorbeeld `<td colspan="5"></td>`. Vul als waarde van de
    `colspan` de hoeveelheid kolommen van de tabel in.
4.  Voeg direct binnen de tabelcel binnen de uitklapbare rij een `span` toe met
    een omschrijvende tekst voor screenreader gebruikers. Bijvoorbeeld:
    `<span class="sr-only">Extra details over lorem ipsum</span>`. Voeg aan deze
    span de class `sr-only` toe om de span visueel te verbergen voor overige
    gebruikers.
5.  Vul de uitklapbare tabel met de gewenste data.
6.  Voeg aan de tabel een extra kolom toe met knoppen voor het bedienen van de
    uitklapbare rijen.
    - Gebruik als kolomtitel een korte omschrijvende tekst. Bijvoorbeeld met de
      tekst "details".
    - Voeg voor iedere uitklapbare rij een knop toe met de class
      `expando-button`.
    - Voeg een button-tekst toe die screenreader gebruikers toelicht dat de knop
      de rij zal openklappen, zoals bijvoorbeeld "Open details". Geef de
      `button` daarnaast een `data-close-label=""` met de bijbehorende tekst
      voor het dichtklappen van de rij. Bijvoorbeeld: "Sluit details".
    - **HTML-voorbeeld:**
      `  <button class="expando-button" data-close-label="Sluit details"   data-icon-open-class="icon icon-descending" data-icon-close-class="icon   icon-ascending" type="button"> Open details </button>`
7.  Open/sluit-icoon toevoegen:
    - Voeg de gewenste icoon-classes toe via het HTML-attribuut
      `data-icon-open-class=""` voor het open-icoon en
      `data-icon-close-class=""` voor het sluit-icoon. Vul tussen de "" de
      icoon-classes in van de door jouw gebruikte iconenset. Voor meer
      informatie over het toevoegen van iconensets, zie [Iconen](/components/components/icons). Voor
      een implementatievoorbeeld zie het [html-voorbeeld](#examples).

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker in combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de gebruiker helpt om complexe data te begrijpen.**
    </li>
    <li>
      Wanneer JavaScript niet beschikbaar is, worden alle uitklapbare tabelrijen uitgeklapt getoond en worden de expando-`button`s verborgen zodat alle data ook beschikbaar is voor gebruikers zonder JavaScript.
    </li>
    <li>
      Om een tabelrij standaard uitgeklapt te maken, voeg je `aria-expanded="true"` toe aan de `button`. Verander hierbij ook de button-tekst naar bijvoorbeeld "Sluit details", en vervang de `data-close-label` door een `data-open-label` met bijbehorende tekst zoals bijvoorbeeld "Open details.
    </li>
  </ul>
</div>

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

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
          <h2>Lorem ipsum details</h2>
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
          <h2>Lorem ipsum details</h2>
          <p>De extra content.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

```html
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
            type="button"
          >
            Open details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
          <span class="sr-only">Lorem ipsum dolor set</span>
          <h2>Lorem ipsum details</h2>
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
          <h2>Lorem ipsum details</h2>
          <p>De extra content.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
