<script context="module">
  export const breadcrumb = "Horizontale scroll testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Horizontale scroll testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Horizontale scroll testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
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

        <h3>nowrap op omliggende <code>div</code></h3>
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
      </section>
    </div>
  </article>
</main>
