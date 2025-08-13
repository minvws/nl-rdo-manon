---
title: Tabel met actieknoppen
breadcrumb: Tabel met actieknoppen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Variabelen: "#variables"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tabel met actieknoppen</h1>

Herhalende content zoals actieknoppen kunnen visueel als iconen weergegeven
worden.

## Benodigde stappen:

1.  Om gebruik te maken van de visuele actieknop weergave, voeg de class
    `action-button` toe aan de button.
2.  Als alle knoppen binnen een tabel weergegeven mogen worden als actieknop kan
    er ook gebruik gemaakt worden van de class `action-buttons` direct op de
    `table`.

## Aandachtspunten

- Omdat niet alle gebruikers weten wat een icoon betekent is het verstandig om
  een omschrijvende tekst in de header te plaatsen.
- Voor toegankelijkheid is het belangrijk om de tekst ook toe te voegen aan de
  knop ook al wordt deze visueel niet getoont. Screenreaders maken hier
  bijvoorbeeld gebruik van.
- Voor tabellen met lange lijsten kan het de gebruiker helpen om gebruik te
  maken van de tabel met sticky header zodat de toelichting van de iconen altijd
  in beeld blijft. Voor meer informatie zie:
  [tabel met sticky header](/components/table-sticky-header).

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

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

### HTML-voorbeeld:

#### `class` op indivuele knoppen

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
            <button type="submit" class="icon icon-user action-button">
              Bekijk profiel
            </button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-check action-button">
              Goedkeuren
            </button>
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
            <button type="submit" class="icon icon-trash action-button">
              Verwijder
            </button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

#### `class` op `table`

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

<h2 id="requirements">Benodigdheden</h2>

<ul>
  <li>`table/table-base.scss`</li>
  <li>`table/table-base-variables.scss`</li>
  <li>`button/button-base.scss`</li>
  <li>`button/button-base-variables.scss`</li>
  <li>`icon/icon-base.scss`</li>
  <li>`icon/icon-base-variables.scss`</li>
  <li>`table/table-action-buttons.scss`</li>
  <li>`table/table-action-buttons-variables.scss`</li>
</ul>

<h2 id="variables">Instelbare variabelen</h2>

<ul>
  <li>
    Actieknop icoon
    <ul>
      <li>
        <a href="/documentation/variables#background-color">background-color</a>
      </li>
      <li><a href="/documentation/variables#text-color">text-color</a></li>
      <li><a href="/documentation/variables#font-size">font-size</a></li>
      <li>
        <a href="/documentation/variables#justify-content">justify-content</a>
      </li>
    </ul>
  </li>
  <li>
    Actieknop icoon hover
    <ul>
      <li>
        <a href="/documentation/variables#background-color">background-color</a>
      </li>
      <li><a href="/documentation/variables#text-color">text-color</a></li>
    </ul>
  </li>
</ul>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/table-action-buttons-test">Test- en voorbeelden-pagina</a>
