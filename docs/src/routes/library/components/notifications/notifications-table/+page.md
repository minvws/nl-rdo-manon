---
title: Notificatie binnen tabellen
breadcrumb: Notificatie binnen tabellen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van notificaties binnen tabellen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-table";
```

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table>
    <caption>Voorbeeldtabel met medische middelen: </caption>
    <thead>
      <tr>
        <th scope="col">Middel</th>
        <th scope="col">Voorraad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alcohol wipes</td>
        <td class="warning"> 
          <div>
            <span class="notification-type">
              <span class="icon icon-warning" aria-hidden="true"></span>
              Waarschuwing:
            </span>
            Onvoldoende op vooraad
          </div>
        </td>
      </tr>
      <tr>
        <td >Steriele gaasjes</td>
        <td class="error">
          <div>
            <span class="notification-type">
              <span class="icon icon-error" aria-hidden="true"></span>
              Foutmelding:
            </span>
            Momenteel niet beschikbaar
          </div>
        </td>
      </tr>
      <tr>
        <td>Chirurgisch mondmaskers</td>
        <td class="explanation">
          <div>
            <span class="notification-type">
              <span class="icon icon-informative" aria-hidden="true"></span>
              Toelichting:
            </span>
            Let op er zijn verschillende types op voorraad
          </div>
        </td>
      </tr>
      <tr>
        <td>Zoutoplossing (fysiologisch serum)</td>
        <td class="confirmation">
          <div>
            <span class="notification-type">
              <span class="icon icon-check" aria-hidden="true"></span>
              Bevestiging:
            </span>
            Voldoende op voorraad
          </div>
        </td>
      </tr>
       <tr>
        <td>Wegwerphandschoenen</td>
        <td class="system">
          <div>
            <span class="notification-type">
              <span class="icon icon-informative" aria-hidden="true"></span>
              Systeembericht:
            </span>
            Momenteel geen status beschikbaar
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>Voorbeeldtabel met medische middelen: </caption>
    <thead>
      <tr>
        <th scope="col">Middel</th>
        <th scope="col">Voorraad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alcohol wipes</td>
        <td class="warning"> 
          <div>
            <span class="notification-type">
              <span class="icon icon-warning" aria-hidden="true"></span>
              Waarschuwing:
            </span>
            Onvoldoende op vooraad
          </div>
        </td>
      </tr>
      <tr>
        <td >Steriele gaasjes</td>
        <td class="error">
          <div>
            <span class="notification-type">
              <span class="icon icon-error" aria-hidden="true"></span>
              Foutmelding:
            </span>
            Momenteel niet beschikbaar
          </div>
        </td>
      </tr>
      <tr>
        <td>Chirurgisch mondmaskers</td>
        <td class="explanation">
          <div>
            <span class="notification-type">
              <span class="icon icon-informative" aria-hidden="true"></span>
              Toelichting:
            </span>
            Let op er zijn verschillende types op voorraad
          </div>
        </td>
      </tr>
      <tr>
        <td>Zoutoplossing (fysiologisch serum)</td>
        <td class="confirmation">
          <div>
            <span class="notification-type">
              <span class="icon icon-check" aria-hidden="true"></span>
              Bevestiging:
            </span>
            Voldoende op voorraad
          </div>
        </td>
      </tr>
       <tr>
        <td>Wegwerphandschoenen</td>
        <td class="system">
          <div>
            <span class="notification-type">
              <span class="icon icon-informative" aria-hidden="true"></span>
              Systeembericht:
            </span>
            Momenteel geen status beschikbaar
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Aandachtspunten

De <code>div</code> binnen de tabelcellen maakt het uitlijnen van de tekst met het icoon mogelijk.
