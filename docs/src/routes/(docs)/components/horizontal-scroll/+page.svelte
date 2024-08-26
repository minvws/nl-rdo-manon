<script context="module">
  export const breadcrumb = "Horizontale scroll";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Horizontale scroll</title>
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
        <h1>Horizontale scroll</h1>
        <p>
          Voor componenten die breder zijn dan het scherm maar wel horizontaal weergegeven dienen te
          worden.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>horizontal-scroll</code> toe om het element over de horizontale as te
            laten scrollen als de content niet meer binnen de breedte van het scherm past.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <p>
          <strong>Let op</strong>: het effect van de horizontale scroll is alleen zichtbaar als de
          content niet meer binnen de schermbreedte past.
        </p>
        <div class="horizontal-scroll">
          <table>
            <caption> Basisvoorbeeld tabel: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
                <th scope="col">Table header heading 4</th>
                <th scope="col">Table header heading 5</th>
                <th scope="col">Table header heading 6</th>
                <th scope="col">Table header heading 7</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <-- Content -->
</div>
`}
        />

        <h3>Tabeltitel op een regel</h3>
        <h4>Visueel voorbeeld:</h4>
        <p>
          Om te voorkomen dat de tabeltitels op meerdere regels getoond worden kan de class
          <code>nowrap</code> toegevoegd worden aan de <code>&lt;thead&gt;</code>.
        </p>
        <div class="horizontal-scroll">
          <table>
            <caption> Basisvoorbeeld tabel: </caption>
            <thead class="nowrap">
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
                <th scope="col">Table header heading 4</th>
                <th scope="col">Table header heading 5</th>
                <th scope="col">Table header heading 6</th>
                <th scope="col">Table header heading 7</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
    <thead class="nowrap">
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h3>Tabeltitel en content op een regel</h3>
        <h4>Visueel voorbeeld:</h4>
        <p>
          Om te voorkomen dat de tabeltitels en content op meerdere regels getoont worden kan de
          class <code>nowrap</code> toegevoegd worden aan de omliggende <code>&lt;div&gt;</code> of
          de <code>&lt;table&gt;</code>.
        </p>
        <div class="horizontal-scroll nowrap">
          <table>
            <caption> Basisvoorbeeld tabel: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
                <th scope="col">Table header heading 4</th>
                <th scope="col">Table header heading 5</th>
                <th scope="col">Table header heading 6</th>
                <th scope="col">Table header heading 7</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll nowrap">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll nowrap">
  <table>
    <-- Content -->
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
@use "@minvws/manon/horizontal-scroll";
      `}
        />

        <h5>Optioneel:</h5>
        <Code
          language="css"
          code={`
@use "@minvws/manon/nowrap";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/horizontal-scroll-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
