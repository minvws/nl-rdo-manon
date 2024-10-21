<script module>
  export const breadcrumb = "Tabeldata over meerdere rijen testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabeldata over meerdere rijen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabeldata over meerdere rijen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met data over meerdere rijen: </caption>
            <thead>
              <tr>
                <th scope="col">Lorem ipsum</th>
                <th scope="col">Dolor set</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>10</td>
                <td rowspan="3">150</td>
              </tr>
              <tr>
                <td>Ipsum</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>40</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met data over meerdere rijen:</caption>
    <thead>
      <tr>
        <th scope="col">Lorem ipsum</th>
        <th scope="col">Dolor set</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>10</td>
        <td rowspan="3">150</td>
      </tr>
      <tr>
        <td>Ipsum</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>40</td>
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
