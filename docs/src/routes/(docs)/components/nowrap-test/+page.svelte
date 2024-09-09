<script context="module">
  export const breadcrumb = "nowrap testpagina";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>nowrap testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Horizontale scroll testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests en voorbeelden</h2>
        <h3><dfn>nowrap</dfn> op een <code>p</code></h3>
        <p class="explanation">
          <span>Toelichting:</span> In dit voorbeeld wordt er ook gebruik gemaakt van de
          <dfn>helper-class</dfn>
          <a href="{base}/components/horizontal-scroll">horizontal-scroll</a>
          om te voorkomen dat het voorbeeld-element de layout van de pagina breekt. Zonder deze toevoeging
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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="nowrap horizontal-scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
`}
        />

        <h3>nowrap op omliggende <code>div</code> van een <code>table</code></h3>
        <h4>Visueel voorbeeld:</h4>
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
                <th scope="col">Table header heading 8</th>
                <th scope="col">Table header heading 9</th>
                <th scope="col">Table header heading 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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

        <h3>nowrap op <code>table</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table class="nowrap">
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
                <th scope="col">Table header heading 8</th>
                <th scope="col">Table header heading 9</th>
                <th scope="col">Table header heading 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
  <table class="nowrap">
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

        <h3>nowrap op <code>thead</code></h3>
        <h4>Visueel voorbeeld:</h4>
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
                <th scope="col">Table header heading 8</th>
                <th scope="col">Table header heading 9</th>
                <th scope="col">Table header heading 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis nunc.
                  Sed metus massa, tristique quis purus et, pulvinar ornare est. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
  <table class="nowrap">
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
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis nunc. Sed metus massa, tristique quis purus et, pulvinar ornare est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
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

        <h3>nowrap op <code>tbody</code></h3>
        <h4>Visueel voorbeeld:</h4>
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
                <th scope="col">Table header heading 8</th>
                <th scope="col">Table header heading 9</th>
                <th scope="col">Table header heading 10</th>
              </tr>
            </thead>
            <tbody class="nowrap">
              <tr>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis nunc.
                  Sed metus massa, tristique quis purus et, pulvinar ornare est. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
  <table class="nowrap">
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
    <tbody class="nowrap">
      <tr>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis nunc. Sed metus massa, tristique quis purus et, pulvinar ornare est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
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

        <h3>nowrap op een <code>tr</code></h3>
        <h4>Visueel voorbeeld:</h4>
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
                <th scope="col">Table header heading 8</th>
                <th scope="col">Table header heading 9</th>
                <th scope="col">Table header heading 10</th>
              </tr>
            </thead>
            <tbody>
              <tr class="nowrap">
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis nunc.
                  Sed metus massa, tristique quis purus et, pulvinar ornare est. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
  <table class="nowrap">
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
      <tr  class="nowrap">
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis nunc. Sed metus massa, tristique quis purus et, pulvinar ornare est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
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

        <h3>nowrap op een <code>td</code></h3>
        <h4>Visueel voorbeeld:</h4>
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
                <th scope="col">Table header heading 8</th>
                <th scope="col">Table header heading 9</th>
                <th scope="col">Table header heading 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="nowrap">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis.
                </td>
                <td class="nowrap"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis</td
                >
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
                <td>Dolor set</td>
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
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
        <th scope="col">Table header heading 8</th>
        <th scope="col">Table header heading 9</th>
        <th scope="col">Table header heading 10</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis.
        </td>
        <td class="nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mattis</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
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
      </section>
    </div>
  </article>
</main>
