<script context="module">
  export const breadcrumb = "Tabel met checkbox testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabel met checkbox testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabel met checkbox testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Formulier om de tabel</h3>
        <h4>Visueel voorbeeld:</h4>
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
                  <td><input type="checkbox" id="lorem-input-1" /></td>
                  <td><label for="lorem-input-1">Lorem</label></td>
                  <td><button type="button">Actie uitvoeren</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="ipsum-input-1" /></td>
                  <td><label for="ipsum-input-1">Ipsum</label></td>
                  <td><button type="button">Actie uitvoeren</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" id="dolor-input-1" /></td>
                  <td><label for="dolor-input-1">Dolor</label></td>
                  <td><button type="button">Actie uitvoeren</button></td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Actie uitvoeren op geselecteerde items</button>
          </form>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <form>
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
            <td><input type="checkbox" id="lorem-input-1"/></td>
            <td><label for="lorem-input-1">Lorem</label></td>
            <td><button type="button">Actie uitvoeren</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" id="ipsum-input-1"/></td>
            <td><label for="ipsum-input-1">Ipsum</label></td>
            <td><button type="button">Actie uitvoeren</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" id="dolor-input-1"/></td>
            <td><label for="dolor-input-1">Dolor</label></td>
            <td><button type="button">Actie uitvoeren</button></td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Actie uitvoeren op geselecteerde items</button>
    </form>
  </form>
</div>
`}
        />

        <h3>Formulier binnen de tabelcel</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
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
                  <form><input type="checkbox" /></form>
                </th>
                <th scope="col">Naam</th>
                <th scope="col">Actie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><form><input type="checkbox" id="lorem-input-2" /></form></td>
                <td><label for="lorem-input-2">Lorem</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
              </tr>
              <tr>
                <td><form><input type="checkbox" id="ipsum-input-2" /></form></td>
                <td><label for="ipsum-input-2">Ipsum</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
              </tr>
              <tr>
                <td><form><input type="checkbox" id="dolor-input-2" /></form></td>
                <td><label for="dolor-input-2">Dolor</label></td>
                <td><button type="button">Actie uitvoeren</button></td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Actie uitvoeren op geselecteerde items</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
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
          <form><input type="checkbox" /></form>
        </th>
        <th scope="col">Naam</th>
        <th scope="col">Actie</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><form><input type="checkbox" id="lorem-input-2" /></form></td>
        <td><label for="lorem-input-2">Lorem</label></td>
        <td><button type="button">Actie uitvoeren</button></td>
      </tr>
      <tr>
        <td><form><input type="checkbox" id="ipsum-input-2" /></form></td>
        <td><label for="ipsum-input-2">Ipsum</label></td>
        <td><button type="button">Actie uitvoeren</button></td>
      </tr>
      <tr>
        <td><form><input type="checkbox" id="dolor-input-2" /></form></td>
        <td><label for="dolor-input-2">Dolor</label></td>
        <td><button type="button">Actie uitvoeren</button></td>
      </tr>
    </tbody>
  </table>
  <button type="submit">Actie uitvoeren op geselecteerde items</button>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
