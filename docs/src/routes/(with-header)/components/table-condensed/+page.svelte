<script context="module">
  export const breadcrumb = "Gecomprimeerde weergave";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Gecomprimeerde weergave</title>
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
        <h1>Gecomprimeerde weergave</h1>
        <p>
          Voor het tonen van grote datasets kan het voor de gebruiksvriendelijkheid fijner zijn om
          de data gecomprimeerd weer te geven zodat het makkelijker is voor de gebruiker om
          overzicht te houden.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="../import-styling">Componenten gebruiken en styling toevoegen</a>
          </li>
          <li>Voeg de class <code>condensed</code> toe op de <code>table</code>.</li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <p>
          In dit voorbeeld staat dat de <code>&lt;th&gt;</code> binnen de
          <code>&lt;thead&gt;</code> over de data in de kolommen gaan. En de
          <code>&lt;th&gt;</code> binnen de <code>&lt;tbody&gt;</code> over de data per rij gaan.
        </p>
        <div class="horizontal-scroll">
          <table class="condensed">
            <caption> Tabelvoorbeeld met gecomprimeerde weergave. </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table class="condensed">
    <caption>Simple table example:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
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
          <li><code>table/table-condensed.scss</code></li>
          <li><code>table/table-condensed-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p class="system-notification" role="group" aria-label="systeembericht">
          Dit component heeft momenteel geen instelbare variabelen
        </p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./table-condensed-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
