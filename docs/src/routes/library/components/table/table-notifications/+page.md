---
title: Meldingen op tabel-elementen
breadcrumb: Meldingen op tabel-elementen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Tabelelementen kunnen een meldig weergeven. Denk hierbij aan een foutmelding of
een toelichting.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/table";
@use "@minvws/manon/components/notification";
```

### Benodigde stappen

1. Voeg de `checkbox` toe aan de benodigde cellen. Voor het voorbeeld zie:
   [Voorbeelden](#examples)
2. Voeg een van de melding-classes toe aan een volledige tabelrij `tr` of aan
   een losse cel `th` / `td`. Beschikbare classes zijn:
   - `error`
   - `warning`
   - `confirmation`
   - `explanation`
   - `primary` 
   
   Zie [Notifications](/library/components/notifications) voor meer informatie.

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Meldingen op tabel-elementen

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
    <caption>
      Voorbeeldtabel met medische middelen:
    </caption>
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
        <td>Steriele gaasjes</td>
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
