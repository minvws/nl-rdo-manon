<script context="module">
  export const breadcrumb = "nowrap";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>nowrap</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>nowrap</h1>
        <p>
          Zorgt ervoor dat woorden en teksten niet afgebroken worden maar op dezelfde regel blijven
          doorlopen.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>nowrap</code> aan het gewenste element.
          </li>
        </ol>

        <p class="explanation">
          <span>Toelichting:</span> Door de class op een specifieker element te plaatsen,
          bijvoorbeeld een <code>td</code> zal het effect beperkt blijven tot het specifieke
          element. Door de class op een hoger gelegen element te plaatsen, bijvoorbeeld de
          <code>table</code>
          of de omliggende <code>div</code> zullen alle onderliggende tekst-elementen niet afbreken.
          Verschillende voorbeelden en opties zijn beschikbaar op de
          <a href="{base}/components/nowrap-test">Test- en voorbeelden-pagina</a>.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Basis</h3>
        <p class="explanation">
          <span>Toelichting:</span> In dit voorbeeld wordt er ook gebruik gemaakt van de
          <dfn>helper-class</dfn> <a href="{base}/components/horizontal-scroll">horizontal-scroll</a> om te
          voorkomen dat het voorbeeld-element de layout van de pagina breekt. Zonder deze toevoeging
          zou de tekst het scherm uitlopen. De class <code>horizontal-scroll</code> voegt op de maximale
          beschikbare breedte de scrollbalk toe.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <p class="nowrap horizontal-scroll">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<p class="nowrap horizontal-scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
`}
        />

        <h3>Tabel met <dfn>nowrap</dfn></h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Basisvoorbeeld tabel met "nowrap":</caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</td
                >
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
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table class="nowrap">
    <caption>Basisvoorbeeld tabel met "nowrap":</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
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
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Benodigd</h3>
        <ul>
          <li><code>nowrap.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/nowrap-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
