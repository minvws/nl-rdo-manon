---
title: Uitklapbare tabelrij
breadcrumb: Uitklapbare tabelrij
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Beschikbare variabelen: "#variables"
---

<p class="warning">
  Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker in
  combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de gebruiker
  helpt om complexe data te begrijpen.
</p>
<h1 id="introduction">Uitklapbare tabel</h1>

Voor het tonen van complexe tabellen met bijbehorende details kan gekozen worden
voor een tabel met uitklapbare tabelrijen.

## Benodigde stappen:

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
7.  Plaats `script defer src="pad/naar/expando-rows.min.js"></script>` in de
    `head` van het document. Voor meer informatie zie:
    [JavaScript toevoegen](/documentation/add-js)
8.  Open/sluit-icoon toevoegen:
    - Voeg de gewenste icoon-classes toe via het HTML-attribuut
      `data-icon-open-class=""` voor het open-icoon en
      `data-icon-close-class=""` voor het sluit-icoon. Vul tussen de "" de
      icoon-classes in van de door jouw gebruikte iconenset. Voor meer
      informatie over het toevoegen van iconensets, zie [Iconen](/icons). Voor
      een implementatievoorbeeld zie het [html-voorbeeld](#examples).

## Aandachtspunten

- **Let op: Deze tabelstructuur kan als complex ervaren worden door gebruikers.
  Zeker in combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet
  als het de gebruiker helpt om complexe data te begrijpen.**
- Wanneer JavaScript niet beschikbaar is, worden alle uitklapbare tabelrijen
  uitgeklapt getoond en worden de expando-`button`s verborgen zodat alle data
  ook beschikbaar is voor gebruikers zonder JavaScript.
- Om een tabelrij standaard uitgeklapt te maken, voeg je `aria-expanded="true"`
  toe aan de `button`. Verander hierbij ook de button-tekst naar bijvoorbeeld
  "Sluit details", en vervang de `data-close-label` door een `data-open-label`
  met bijbehorende tekst zoals bijvoorbeeld "Open details.

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

### HTML-voorbeeld:

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
```

<h2 id="requirements">Benodigdheden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/table";
@use "@minvws/manon/table-expando-rows";
```

<h2 id="variables">Instelbare variabelen</h2>

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
        <td><a href="/documentation/variables#background-color">background-color</a></td>
        <td>#e5e5e5</td>
        <td>Openklapbare cel - td</td>
        <td>CSS</td>
      </tr>
      <tr>
        <td>--expando-rows-table-cell-padding</td>
        <td><a href="/documentation/variables#padding">padding</a></td>
        <td>2rem 1rem</td>
        <td>Openklapbare cel - td</td>
        <td>CSS</td>
      </tr>
      <tr>
        <td>--expando-rows-table-cell-after-breakpoint-padding</td>
        <td><a href="/documentation/variables#padding">padding</a></td>
        <td>2rem 3rem</td>
        <td>Openklapbare cel - td</td>
        <td>CSS</td>
      </tr>

      <tr>
        <td>$breakpoint</td>
        <td><a href="/documentation/variables#breakpoints">Breekpunt</a></td>
        <td>24rem !default</td>
        <td>Subtitel binnen de openklapbare cel - h2</td>
        <td>SASS</td>
      </tr>
      <tr>
        <td>--expando-rows-row-background-color</td>
        <td><a href="/documentation/variables#background-color">background-color</a></td>
        <td>transparent</td>
        <td>De openklapbare rij</td>
        <td>CSS</td>
      </tr>
      <tr>
        <td>--expando-rows-row-striping-background-color</td>
        <td><a href="/documentation/variables#background-color">background-color</a></td>
        <td>var(--table-row-background-color-striping, initial)</td>
        <td>De openklapbare rij</td>
        <td>CSS</td>
      </tr>
      <tr>
        <td>--expando-rows-row-font-weight</td>
        <td><a href="/documentation/variables#font-weight">font-weight</a></td>
        <td>bold</td>
        <td>De openklapbare rij</td>
        <td>CSS</td>
      </tr>
    </tbody>

  </table>
</div>
