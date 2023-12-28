<script context="module">
  export const breadcrumb = "Tabelrij met checkbox";
</script>

<script>
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabelrij met checkbox</title>
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
        <h1>Tabelrij met checkbox</h1>
        <p>Voor het selecteren van rijen van een tabel.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de <code>checkbox</code> toe aan de benodigde cellen. Voor het voorbeeld zie:
            <a href="#examples">Voorbeelden</a>
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Een <code>checkbox</code> binnen een tabel header cell <code>th</code> wordt vaak gebruikt
            om alle checkboxes binnen de tabel aan/uit te zetten.
          </li>
          <li>Dit element bevat momenteel geen JavaScript of logica voorbeeld.</li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
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

        <h3>HTML-voorbeeld:</h3>
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
      </section>

      <section id="requirements">
        <h2>Benodigdheden</h2>
        <ul>
          <li><code>table/table-base.scss</code></li>
          <li><code>table/table-base-variables.scss</code></li>
          <li><code>form/form-checkbox.scss</code></li>
          <li><code>form/form-checkbox-variables.scss</code></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="table-checkbox-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
