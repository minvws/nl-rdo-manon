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
@use "@minvws/manon/components/table";
```

<section id="examples">
  <h2>Voorbeelden</h2>
  <div class="horizontal-scroll">
    <form class="inline">
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
              <div class="checkbox">
                <input type="checkbox" id="checkbox-example-head-1" name="standaard-checkbox" />
              </div>
            </th>
            <th scope="col">Naam</th>
            <th scope="col">Actie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="checkbox">
                <input type="checkbox" id="checkbox-example-base-1" name="standaard-checkbox" />
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td><button type="button">Actie uitvoeren</button></td>
          </tr>
          <tr>
            <td>
              <div class="checkbox">
                <input type="checkbox" id="checkbox-example-base-2" name="standaard-checkbox" />
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td><button type="button">Actie uitvoeren</button></td>
          </tr>
          <tr>
            <td>
              <div class="checkbox">
                <input type="checkbox" id="checkbox-example-base-3" name="standaard-checkbox" />
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td><button type="button">Actie uitvoeren</button></td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Actie uitvoeren op geselecteerde items</button>
    </form>
  </div>
</section>

Tabelcel met checkbox:

```html
<td>
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
  </div>
</td>
```

Complete voorbeeld tabel:

```html
<div class="horizontal-scroll">
  <form class="inline">
    <table>
      <caption>
        Tabelvoorbeeld met selectievak:
        <span class="visually-hidden"> Selectievak in kolom 1 rij 1 selecteert alle rijen. </span>
      </caption>
      <thead>
        <tr>
          <th scope="col">
            <span class="visually-hidden">Selectie</span>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-head-1" name="standaard-checkbox" />
            </div>
          </th>
          <th scope="col">Naam</th>
          <th scope="col">Actie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-base-1" name="standaard-checkbox" />
            </div>
          </td>
          <td>Lorem ipsum dolor sit amet</td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
        <tr>
          <td>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-base-2" name="standaard-checkbox" />
            </div>
          </td>
          <td>Lorem ipsum dolor sit amet</td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
        <tr>
          <td>
            <div class="checkbox">
              <input type="checkbox" id="checkbox-example-base-3" name="standaard-checkbox" />
            </div>
          </td>
          <td>Lorem ipsum dolor sit amet</td>
          <td><button type="button">Actie uitvoeren</button></td>
        </tr>
      </tbody>
    </table>
    <button type="submit">Actie uitvoeren op geselecteerde items</button>
  </form>
</div>
```

<h2>Toegankelijkheid</h2>

- Zorg dat de checkbox een toegankelijk label heeft dat de rij uniek identificeert.
- Staat de checkbox in een cel met tekst? Gebruik dan bij voorkeur die tekst als label.
- Identificeert de tekst de rij niet (voldoende)? Overweeg dan of de plaatsing van de checkbox wel duidelijk genoeg is.
- Gebruik als label bijvoorbeeld een naam, ID of andere unieke informatie uit de tabelrij. Zorg dat het label geen informatie bevat die niet ook visueel aanwezig is.
- Het toevoegen van een toegankelijk label kan bijvoorbeeld met `aria-label`, of door de tekst van een andere cel in een `<label>` te plaatsen. Geef in dat geval de checkbox een `id` en geef het label een `for` met het `id` van de checkbox.
- Staan de checkboxes in een eigen kolom zonder header-tekst? Voeg dan een visueel verborgen tekst toe aan de header. Bijvoorbeeld: `<th><span class="visually-hidden">Selectie</span></th>`
- Om verwarring te voorkomen, kan deze checkbox beter **geen** toegankelijk label krijgen, omdat deze anders door de meeste screenreaders voor elke rij voorgelezen zou worden.
- In plaats daarvan is het belangrijk om in de `<caption>` de functie van de checkbox in de header toe te lichten. Maak deze toelichting bij voorkeur zo kort en duidelijk mogelijk. Bijvoorbeeld: "selectievak in kolom 1 rij 1 selecteert alle rijen". Plaats de toelichting eventueel in een `<span class="visually-hidden">` als het wenselijk is om deze visueel te verbergen.
