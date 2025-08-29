<script module>
  export const breadcrumb = "Tabelrij met checkbox";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";

  let lorem = $state(false);
  let ipsum = $state(false);
  let dolor = $state(false);
  let allSelected = $derived(lorem && ipsum && dolor);
  const toggleAll = () => {
    lorem = ipsum = dolor = !(lorem && ipsum && dolor);
  };
</script>

<svelte:head>
  <title>Tabelrij met checkbox</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#quick-start">Snelstart</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section>
        <h1 id="introduction">Tabelrij met checkbox</h1>
        <p>Voor het selecteren van rijen van een tabel.</p>

        <h2 id="quick-start">Snelstart:</h2>
        <p>SCSS importeren:</p>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
@use "@minvws/manon/table-checkbox;
`}
        />

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
      </section>

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
                    <input type="checkbox" checked={allSelected} onchange={toggleAll} />
                  </th>
                  <th scope="col">Naam</th>
                  <th scope="col">Actie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" id="lorem-input" bind:checked={lorem} /></td>
                  <td><label for="lorem-input">Lorem</label></td>
                  <td><button type="button">Actie uitvoeren</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="ipsum-input" bind:checked={ipsum} /></td>
                  <td><label for="ipsum-input">Ipsum</label></td>
                  <td><button type="button">Actie uitvoeren</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="dolor-input" bind:checked={dolor} /></td>
                  <td><label for="dolor-input">Dolor</label></td>
                  <td><button type="button">Actie uitvoeren</button></td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Actie uitvoeren op geselecteerde items</button>
          </form>
        </div>

        <Code
          language="html"
          code={`

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
            <input type="checkbox" onchange="toggleAll()" />
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

`}
        />

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
      </section>
    </div>
  </article>
</main>
