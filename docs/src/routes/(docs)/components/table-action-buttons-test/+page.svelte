<script context="module">
  export const breadcrumb = "Tabel met actieknoppen testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabel met actieknoppen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabel met actieknoppen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Knop als actieknop</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met actieknoppen: </caption>
            <thead>
              <tr>
                <th scope="col">Gebruikersnaam</th>
                <th scope="col">Bekijk profiel</th>
                <th scope="col">Wijzig wachtwoord</th>
                <th scope="col">Deactiveer</th>
                <th scope="col">Verwijder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane doe</td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button">
                      Bekijk profiel
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button">
                      Wijzig wachtwoord
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button"> Deactiveer </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button">Verwijder</button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>class</code> op indivuele knoppen</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met actieknoppen:</caption>
    <thead>
      <tr>
        <th scope="col">Gebruikersnaam</th>
        <th scope="col">Bekijk profiel</th>
        <th scope="col">Wijzig wachtwoord</th>
        <th scope="col">Deactiveer</th>
        <th scope="col">Verwijder</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>Jane doe</td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat action-button">Bekijk profiel</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat action-button">Wijzig wachtwoord</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat action-button">Deactiveer</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat action-button">Verwijder</button>
              </form>
          </td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h3>Knop als actieknop</h3>
        <div class="horizontal-scroll">
          <table class="action-buttons">
            <caption> Tabelvoorbeeld met actieknoppen: </caption>
            <thead>
              <tr>
                <th scope="col">Gebruikersnaam</th>
                <th scope="col">Bekijk profiel</th>
                <th scope="col">Wijzig wachtwoord</th>
                <th scope="col">Deactiveer</th>
                <th scope="col">Verwijder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane doe</td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat">Bekijk profiel</button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat">Wijzig wachtwoord</button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat">Deactiveer</button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat">Verwijder</button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>class</code> op indivuele knoppen</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table class="action-buttons">
    <caption>Tabelvoorbeeld met actieknoppen:</caption>
    <thead>
      <tr>
        <th scope="col">Gebruikersnaam</th>
        <th scope="col">Bekijk profiel</th>
        <th scope="col">Wijzig wachtwoord</th>
        <th scope="col">Deactiveer</th>
        <th scope="col">Verwijder</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>Jane doe</td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat">Bekijk profiel</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat">Wijzig wachtwoord</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat">Deactiveer</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit" class="icon icon-cat">Verwijder</button>
              </form>
          </td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
