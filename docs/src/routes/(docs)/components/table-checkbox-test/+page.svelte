<script context="module">
  export const breadcrumb = "Tabel met checkbox testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabel met checkbox testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabel met checkbox testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Formulier om de tabel</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <form>
            <table>
              <caption> Tabelvoorbeeld met selectievak: </caption>
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">Table header heading</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>Ipsum</td>
                  <td>
                    <form><input type="submit" value="Lorem" /></form>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <form>
    <table>
      <caption>Tabelvoorbeeld met selectievak:</caption>
      <thead>
        <tr>
          <th scope="col"><input type="checkbox"></th>
          <th scope="col">Table header heading</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>Ipsum</td>
          <td><form><input type="submit" value="Lorem"></form></td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
`}
        />

        <h3>Formulier binnen de tabelcel</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met selectievak: </caption>
            <thead>
              <tr>
                <th scope="col">
                  <form><input type="checkbox" /></form>
                </th>
                <th scope="col">Table header heading</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <form><input type="checkbox" /></form>
                </td>
                <td>Ipsum</td>
                <td>
                  <form><input type="submit" value="Lorem" /></form>
                </td>
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
    <caption>Tabelvoorbeeld met selectievak:</caption>
    <thead>
      <tr>
        <th scope="col"><form><input type="checkbox"></form></th>
        <th scope="col">Table header heading</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><form><input type="checkbox"></form></td>
        <td>Ipsum</td>
        <td><form><input type="submit" value="Lorem"></form></td>
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
