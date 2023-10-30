<script context="module">
  export const breadcrumb = '"sticky header"';
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>"sticky header"</title>
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
        <h1>"sticky header"</h1>
        <p>
          Voor lange tabellen kan het gewenst zijn om de tabel-header in het zicht te houden zodat
          de gebruiker de titels kan zien.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de class <code>sticky-header</code> toe aan een <code>&lt;div&gt;</code> om de
            <code>&lt;table&gt;</code> heen. Deze is <code>&lt;div&gt;</code> is nodig om de
            <code>&lt;table&gt;</code> scrollbaar te maken.
          </li>
          <li>
            Een <code>sticky-header</code>-tabel heeft een maximale hoogte van de schermhoogte.
            Mocht er een andere maximale hoogte gewenst zijn zodat de tabel bijvooreeld minder hoog
            blijft kan deze via het variabelenbestand overschreven worden.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Voeg een van de melding-classes toe aan een volledige tabelrij
            <code>tr</code> of aan een losse cel <code>th</code> / <code>td</code>. Beschikbare
            classes zijn:
            <ul>
              <li><code>error</code></li>
              <li><code>warning</code></li>
              <li><code>confirmation</code></li>
              <li><code>explanation</code></li>
              <li><code>primary</code></li>
            </ul>
            Zie <a href="./notifications">Notifications</a> voor meer informatie.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll sticky-header">
          <table>
            <caption> Tabelvoorbeeld met een sticky header. </caption>
            <thead>
              <tr>
                <th scope="col">Heading 1</th>
                <th scope="col">Heading 2</th>
                <th scope="col">Heading 3</th>
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
<div class="horizontal-scroll sticky-header">
  <table>
    <caption>Tabelvoorbeeld met een sticky header.</caption>
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
          <li><code>table/table-sticky-header.scss</code></li>
          <li><code>table/table-sticky-header-variables.scss</code></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./table-sticky-header-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
