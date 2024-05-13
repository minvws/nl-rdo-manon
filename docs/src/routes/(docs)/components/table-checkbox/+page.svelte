<script context="module">
  export const breadcrumb = "Tabelrij met checkbox";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
  let lorem = false;
  let ipsum = false;
  let dolor = false;
  $: allSelected = lorem && ipsum && dolor;
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
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Tabelrij met checkbox</h1>
        <p>Voor het selecteren van rijen van een tabel.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de <code>checkbox</code> toe aan de benodigde cellen. Voor het voorbeeld zie:
            <a href="#examples">Voorbeelden</a>.
          </li>
          <li>
            Zorg dat de checkbox een toegankelijk label heeft dat de rij uniek identificeert.
            <ul>
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
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Zorg ervoor dat het duidelijk is wat er gebeurt als een checkbox geselecteerd wordt.
          </li>
          <li>
            Het is mogelijk een <code>checkbox</code> toe te voegen binnen de <code>{`<th>`}</code>
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
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
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
                    <input type="checkbox" bind:checked={allSelected} on:change={toggleAll} />
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

        <h3>HTML-voorbeeld:</h3>
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
      </section>

      <section id="requirements">
        <h2>Benodigdheden</h2>
        <ul>
          <li><code>table/table-base.scss</code></li>
          <li><code>table/table-base-variables.scss</code></li>
          <li><code>form/form-checkbox.scss</code></li>
          <li><code>form/form-checkbox-variables.scss</code></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="table-checkbox-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
