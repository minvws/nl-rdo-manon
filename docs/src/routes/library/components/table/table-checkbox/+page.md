---
title: "Tabelrij met checkbox"
breadcrumb: "Tabelrij met checkbox"
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het selecteren van rijen van een tabel.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
@use "@minvws/manon/table-checkbox";
```

JavaScript importeren:

```javascript
TODO

```

<h3>Benodigde stappen:</h3>
<ol>
  <li>
    Voeg de <code>checkbox</code> toe aan de benodigde cellen. Voor het voorbeeld zie:
    <a href="#examples">Voorbeelden</a>.
  </li>
  <li>
    Zorg dat de checkbox een toegankelijk label heeft dat de rij uniek identificeert.
    <ul>
      <li>
        Staat de checkbox in een cel met tekst? Gebruik dan bij voorkeur die tekst als
        label. Identificeert de tekst de rij niet (voldoende)? Overweeg dan of de plaatsing
        van de checkbox wel duidelijk genoeg is.
      </li>
      <li>
        Gebruik als label bijvoorbeeld een naam, ID of andere unieke informatie uit de
        tabelrij. Zorg dat het label geen informatie bevat die niet ook visueel aanwezig is.
      </li>
      <li>
        Het toevoegen van een toegankelijk label kan bijvoorbeeld met <code>aria-label</code
        >, of door de tekst van een andere cel in een <code>{`<label>`}</code> te plaatsen.
        Geef in dat geval de checkbox een <code>id</code> en geef het label een
        <code>for</code>
        met het <code>id</code> van de checkbox.
      </li>
    </ul>
  </li>
  <li>
    Staan de checkboxes in een eigen kolom zonder header-tekst? Voeg dan een visueel
    verborgen tekst toe aan de header. Bijvoorbeeld: <code
      >{`<th><span class="visually-hidden">Selectie</span></th>`}</code
    >.
  </li>
</ol>

<section id="examples">
    <h2>Voorbeelden</h2>
    <div class="horizontal-scroll">
        <form>
        <table>
            <caption>
            Tabelvoorbeeld met selectievak:
            <span class="visually-hidden">
                Selectievak in kolom 1 rij 1 selecteert alle rijen.
            </span>
            </caption>
            <thead>
            <tr>
                <th scope="col">
                <span class="visually-hidden">Selectie</span>
                <input type="checkbox" />
                </th>
                <th scope="col">Naam</th>
                <th scope="col">Actie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type="checkbox" id="lorem-input" /></td>
                <td><label for="lorem-input">Lorem</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" id="ipsum-input" /></td>
                <td><label for="ipsum-input">Ipsum</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" id="dolor-input" /></td>
                <td><label for="dolor-input">Dolor</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
            </tr>
            </tbody>
        </table>
        <button type="submit">Actie uitvoeren op geselecteerde items</button>
        </form>
    </div>
</section>

```html
<div class="horizontal-scroll">
  <form>
    <table>
      <caption>
        Tabelvoorbeeld met selectievak:
        <span class="visually-hidden">
          Selectievak in kolom 1 rij 1 selecteert alle rijen.
        </span>
      </caption>
      <thead>
        <tr>
          <th scope="col">
            <span class="visually-hidden">Selectie</span>
            <input type="checkbox" />
          </th>
          <th scope="col">Naam</th>
          <th scope="col">Actie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" id="lorem-input" /></td>
          <td><label for="lorem-input">Lorem</label></td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
        <tr>
          <td><input type="checkbox" id="ipsum-input" /></td>
          <td><label for="ipsum-input">Ipsum</label></td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
        <tr>
          <td><input type="checkbox" id="dolor-input" /></td>
          <td><label for="dolor-input">Dolor</label></td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
      </tbody>
    </table>
    <button type="submit">Actie uitvoeren op geselecteerde items</button>
  </form>
</div>
```

<div class="explanation" role="group" aria-label="Toelichting">
    <span>Aandachtspunten</span>
    <ul>
    <li>
        Zorg ervoor dat het duidelijk is wat er gebeurt als een checkbox geselecteerd wordt.
    </li>
    <li>
        Het is mogelijk een <code>checkbox</code> toe te voegen binnen de
        <code>{`<th>`}</code>
        waarmee alle checkboxes tegelijkertijd kunnen worden aan- of uit-geschakelt.
        <ul>
        <li>
            Om verwarring te voorkomen, kan deze checkbox beter <strong>geen</strong> toegankelijk
            label krijgen, omdat deze anders door de meeste screenreaders voor elke rij voorgelezen
            zou worden.
        </li>
        <li>
            In plaats daarvan is het belangrijk om in de <code>{`<caption>`}</code> de functie
            van de checkbox in de header toe te lichten. Maak deze toelichting bij voorkeur zo
            kort en duidelijk mogelijk. Bijvoorbeeld: "selectievak in kolom 1 rij 1 selecteert
            alle rijen". Plaats de toelichting eventueel in een
            <code>{`<span class="visually-hidden">`}</code> als het wenselijk is om deze visueel
            te verbergen.
        </li>
        </ul>
    </li>
    <li>
        <strong
        >Het is voor dit component nodig om het dynamische gedrag zelf via JavaScript te
        implementeren.</strong
        > De exacte implementatie in JavaScript is afhankelijk van de context.
    </li>
    </ul>
</div>