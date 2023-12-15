<script context="module">
  export const breadcrumb = "Tabel met actieknoppen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabel met actieknoppen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#variables">Variabelen</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Tabel met actieknoppen</h1>
        <p>Herhalende content zoals actieknoppen kunnen visueel als iconen weergegeven worden.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Om gebruik te maken van de visuele actieknop weergave, voeg de class
            <code>action-button</code> toe aan de button.
          </li>
          <li>
            Als alle knoppen binnen een tabel weergegeven mogen worden als actieknop kan er ook
            gebruik gemaakt worden van de class
            <code>action-buttons</code> direct op de <code>&lt;table&gt;</code>.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Omdat niet alle gebruikers weten wat een icoon betekent is het verstandig om een
            omschrijvende tekst in de header te plaatsen.
          </li>
          <li>
            Voor toegankelijkheid is het belangrijk om de tekst ook toe te voegen aan de knop ook al
            wordt deze visueel niet getoont. Screenreaders maken hier bijvoorbeeld gebruik van.
          </li>
          <li>
            Voor tabellen met lange lijsten kan het de gebruiker helpen om gebruik te maken van de
            tabel met sticky header zodat de toelichting van de iconen altijd in beeld blijft. Voor
            meer informatie zie:
            <a href="{base}/components/table-sticky-header">tabel met sticky header</a>.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
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

        <h4><code>class</code> op <code>table</code></h4>
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
                  <button type="submit">Bekijk profiel</button>
              </form>
          </td>
          <td>
              <form>
                  <button type="submit">Wijzig wachtwoord</button>
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
`}
        />
      </section>

      <section id="requirements">
        <h2>Benodigdheden</h2>
        <ul>
          <li><code>table/table-base.scss</code></li>
          <li><code>table/table-base-variables.scss</code></li>
          <li><code>button/button-base.scss</code></li>
          <li><code>button/button-base-variables.scss</code></li>
          <li><code>icon/icon-base.scss</code></li>
          <li><code>icon/icon-base-variables.scss</code></li>
          <li><code>table/table-action-buttons.scss</code></li>
          <li><code>table/table-action-buttons-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Actieknop icoon
            <ul>
              <li>
                <a href="{base}/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/variables#text-color">text-color</a></li>
              <li><a href="{base}/variables#font-size">font-size</a></li>
              <li>
                <a href="{base}/variables#justify-content">justify-content</a>
              </li>
            </ul>
          </li>
          <li>
            Actieknop icoon hover
            <ul>
              <li>
                <a href="{base}/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/variables#text-color">text-color</a></li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/table-action-buttons-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
