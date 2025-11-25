---
title: Uitklapbare tabelrij
breadcrumb: Uitklapbare tabelrij
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het tonen van complexe tabellen met bijbehorende details kan gekozen worden
voor een tabel met uitklapbare tabelrijen.

Let op, deze tabelstructuur kan als complex ervaren worden door gebruikers. Zeker in
combinatie met hulptechnologieën. Maak enkel gebruik van deze opzet als het de gebruiker
helpt om complexe data te begrijpen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/table";
@use "@minvws/manon/components/table-expando-rows";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/expando-rows.js";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<div class="horizontal-scroll">
  <table>
    <caption>Rapportage-overzicht: </caption>
    <thead>
      <tr>
        <th scope="col">Naam</th>
        <th scope="col">Type</th>
        <th scope="col">Project</th>
        <th scope="col">Datum</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Security overzicht Maart</td>
        <td>Audit</td>
        <td>Project A</td>
        <td>03-04-2025</td>
        <td>
          <button
            class="expando-button"
            data-close-label="Sluit details"
            data-icon-open-class="icon icon-chevron-down"
            data-icon-close-class="icon icon-chevron-up"
            type="button"
          >
            Open details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
          <div class="expando-row-content">
            <div>
              <h2 class="heading-xs">Onderzoeksdetails</h2>
              <dl>
                <div>
                  <dt>Uitgevoerende partij</dt>
                  <dd>Partij A</dd>
                </div>
                <div>
                  <dt>Datum</dt>
                  <dd>31-3-2025</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Afgerond</dd>
                </div>
              </dl>
              </div>
              <p class="nota-bene">Dit onderzoek is uitvoerd in opdracht door het ministerie van volksgezondheid welzijn en sport</p>
          </div>
        </td>
      </tr>
      <tr>
        <td>Toegankelijkheidsrapport</td>
        <td>Audit</td>
        <td>Project B</td>
        <td>12-02-2025</td>
        <td>
          <button
            class="expando-button"
            data-close-label="Sluit details"
            data-icon-open-class="icon icon-chevron-down"
            data-icon-close-class="icon icon-chevron-up"
            type="button"
          >
            Open details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
                    <div class="expando-row-content">
            <div>
              <h2 class="heading-xs">Onderzoeksdetails</h2>
              <dl>
                <div>
                  <dt>Uitgevoerende partij</dt>
                  <dd>Partij A</dd>
                </div>
                <div>
                  <dt>Datum</dt>
                  <dd>31-3-2025</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Afgerond</dd>
                </div>
              </dl>
              </div>
              <p class="nota-bene">Dit onderzoek is uitvoerd in opdracht door het ministerie van volksgezondheid welzijn en sport</p>
          </div>
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
        <td>Lorem ipsum dolor sit</td>
        <td class="number">4</td>
        <td>New</td>
        <td>
          <button
            class="expando-button"
            data-close-label="Sluit details"
            data-icon-open-class="icon icon-chevron-down"
            data-icon-close-class="icon icon-chevron-up"
            type="button"
          >
            Open details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
          <h2>Extra informatie</h2>
          <p>
            Hier vindt u aanvullende informatie die betrekking heeft op deze rij. U kunt hier
            context, toelichtingen of andere relevante details opnemen.
          </p>
        </td>
      </tr>
      <tr>
        <td><span class="high">High</span></td>
        <td>Lorem ipsum dolor sit</td>
        <td class="number">12</td>
        <td>New</td>
        <td>
          <button
            class="expando-button"
            data-close-label="Sluit details"
            data-icon-open-class="icon icon-chevron-down"
            data-icon-close-class="icon icon-chevron-up"
            type="button"
          >
            Open details
          </button>
        </td>
      </tr>
      <tr class="expando-row">
        <td colspan="5">
          <h2>Extra informatie</h2>
          <p>
            Hier vindt u aanvullende informatie die betrekking heeft op deze rij. U kunt hier
            context, toelichtingen of andere relevante details opnemen.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

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
      `  <button class="expando-button" data-close-label="Sluit details"   data-icon-open-class="icon icon-chevron-down" data-icon-close-class="icon   icon-chevron-up" type="button"> Open details </button>`
7.  Open/sluit-icoon toevoegen:
    - Voeg de gewenste icoon-classes toe via het HTML-attribuut
      `data-icon-open-class=""` voor het open-icoon en
      `data-icon-close-class=""` voor het sluit-icoon. Vul tussen de "" de
      icoon-classes in van de door jouw gebruikte iconenset. Voor meer
      informatie over het toevoegen van iconensets, zie [Iconen](/library/components/icons). Voor
      een implementatievoorbeeld zie het [html-voorbeeld](#examples).

#### Aandachtspunten

Wanneer JavaScript niet beschikbaar is, worden alle uitklapbare tabelrijen uitgeklapt getoond en worden de expando-`button`s verborgen zodat alle data ook beschikbaar is voor gebruikers zonder JavaScript.

Om een tabelrij standaard uitgeklapt te maken, voeg je `aria-expanded="true"` toe aan de `button`. Verander hierbij ook de button-tekst naar bijvoorbeeld "Sluit details", en vervang de `data-close-label` door een `data-open-label` met bijbehorende tekst zoals bijvoorbeeld "Open details.
