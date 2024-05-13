<script context="module">
  export const breadcrumb = "Tabeldata over meerdere rijen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabeldata over meerdere rijen</title>
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
        <h1>Tabeldata over meerdere rijen</h1>
        <p>Data weergeven over meer dan een rij kan gebruikt worden binnen tabellen.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
          </li>
          <li>
            Om een datacel over meerdere rijen te plaatsen gebruik een
            <code>rowspan="[number]"</code>. Voorbeeld: <code>rowspan="2"</code> op de
            <code>td</code>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
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

      <section id="requirements">
        <h2>Benodigdheden</h2>
        <ul>
          <li><code>table/table-base.scss</code></li>
          <li><code>table/table-base-variables.scss</code></li>
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
        <a href="{base}/components/table-multiple-rows-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
