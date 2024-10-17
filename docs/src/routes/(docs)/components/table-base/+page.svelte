<script context="module">
  export const breadcrumb = "Tabel basisweergave";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabel basisweergave</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#example-base">Basis</a></li>
          <li><a href="#example-footer">Tabel met footer</a></li>
          <li><a href="#example-row-headers">Tabel met rij-headers</a></li>
        </ul>
      </li>
      <li><a href="#requirements">Benodigde bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Tabel</h1>
      </section>

      <section id="examples" class="visually-grouped">
        <h2>Aandachtspunten</h2>
        <p>
          Om tabellen correct weer te geven op smallere schermresoluties, denk hierbij aan mobiele
          apparaten, dient er een <code>&lt;div></code> om de <code>&lt;table></code> te staan met
          de class
          <code>horizontal-scroll</code>.
        </p>

        <h2>Voorbeelden</h2>

        <h3 id="example-base">Basis</h3>
        <h4>Visueel voorbeeld</h4>
        <div class="horizontal-scroll">
          <table>
            <caption>Basisvoorbeeld tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Kolom 1</th>
                <th scope="col">Kolom 2</th>
                <th scope="col">Kolom 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h3 id="example-footer">Tabel met footer</h3>
        <p>
          Om de gebruiker te informeren over de inhoud van de tabel, is het aan te raden om een
          titel toe te voegen met daarin de omschrijving van de tabel. Voeg direct binnen de
          <code>table</code> een <code>caption</code> toe om de titel toe te voegen.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table>
            <caption>Tabelvoorbeeld met footer:</caption>
            <thead>
              <tr>
                <th scope="col">Kolom 1</th>
                <th scope="col">Kolom 2</th>
                <th scope="col">Kolom 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="col">Table footer heading 1</th>
                <th scope="col">Table footer heading 2</th>
                <th scope="col">Table footer heading 3</th>
              </tr>
              <tr>
                <td>Table footer 1</td>
                <td>Table footer 2</td>
                <td>Table footer 3</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met footer:</caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Table footer heading 1</th>
        <th>Table footer heading 2</th>
        <th>Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>
`}
        />

        <h3 id="example-row-headers">Tabel met rij-headers</h3>
        <h4>Visueel voorbeeld</h4>
        <div class="horizontal-scroll">
          <table>
            <caption>Basisvoorbeeld tabel met rij-headers:</caption>
            <thead>
              <tr>
                <th scope="col">Kolom 1</th>
                <th scope="col">Kolom 2</th>
                <th scope="col">Kolom 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Rij 1</th>
                <td>Lorem ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <th scope="row">Rij 2</th>
                <td>Lorem ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <th scope="row">Rij 3</th>
                <td>Lorem ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
              <tr>
                <th scope="row">Rij 4</th>
                <td>Lorem ipsum</td>
                <td>Dolor sit amet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
      `}
        />
      </section>
    </div>
  </article>
</main>
