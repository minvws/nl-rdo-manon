---
title: Tabel met actieknoppen
breadcrumb: Tabel met actieknoppen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Tabel met actieknoppen</h1>

Herhalende content zoals actieknoppen kunnen visueel als iconen weergegeven
worden.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
@use "@minvws/manon/table-action-buttons";
```

### Benodigde stappen

1.  Om gebruik te maken van de visuele actieknop weergave, voeg de class
    `action-button` toe aan de button.
2.  Als alle knoppen binnen een tabel weergegeven mogen worden als actieknop kan
    er ook gebruik gemaakt worden van de class `action-buttons` direct op de
    `table`.

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Omdat niet alle gebruikers weten wat een icoon betekent is het verstandig om
      een omschrijvende tekst in de header te plaatsen.
    </li>
    <li>
      Voor toegankelijkheid is het belangrijk om de tekst ook toe te voegen aan de
      knop ook al wordt deze visueel niet getoont. Screenreaders maken hier
      bijvoorbeeld gebruik van.
    </li>
    <li>
      Voor tabellen met lange lijsten kan het de gebruiker helpen om gebruik te
      maken van de tabel met sticky header zodat de toelichting van de iconen altijd
      in beeld blijft. Voor meer informatie zie:
      [tabel met sticky header](/components/table-sticky-header).
    </li>
  </ul>
</div>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `class` op indivuele knoppen

<div class="horizontal-scroll">
  <table>
    <caption> Tabelvoorbeeld met actieknoppen: </caption>
    <thead>
      <tr>
        <th scope="col">Gebruikersnaam</th>
        <th scope="col">Bekijk profiel</th>
        <th scope="col">Goedkeuren</th>
        <th scope="col">Deactiveer</th>
        <th scope="col">Verwijder</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jane doe</td>
        <td>
          <form>
            <button type="submit" class="icon icon-user action-button">
              Bekijk profiel
            </button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-check action-button">Goedkeuren</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-close action-button">
              Deactiveer
            </button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-trash action-button">Verwijder</button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met actieknoppen:
    </caption>
    <thead>
      <tr>
        <th scope="col">Gebruikersnaam</th>
        <th scope="col">Bekijk profiel</th>
        <th scope="col">Goedkeuren</th>
        <th scope="col">Deactiveer</th>
        <th scope="col">Verwijder</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jane doe</td>
        <td>
          <form>
            <button type="submit" class="icon icon-user action-button">Bekijk profiel</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-check action-button">Goedkeuren</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-close action-button">Deactiveer</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-trash action-button">Verwijder</button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Voorbeeld: `class` op `table`

```html
<div class="horizontal-scroll">
  <table class="action-buttons">
    <caption>
      Tabelvoorbeeld met actieknoppen:
    </caption>
    <thead>
      <tr>
        <th scope="col">Gebruikersnaam</th>
        <th scope="col">Bekijk profiel</th>
        <th scope="col">Goedkeuren</th>
        <th scope="col">Deactiveer</th>
        <th scope="col">Verwijder</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jane doe</td>
        <td>
          <form>
            <button type="submit">Bekijk profiel</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit">Goedkeuren</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit">Deactiveer</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit">Verwijder</button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
