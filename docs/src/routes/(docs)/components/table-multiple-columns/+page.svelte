<script context="module">
  export const breadcrumb = "Tabeldata over meerdere kolommen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabeldata over meerdere kolommen</title>
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
        <h1>Tabeldata over meerdere kolommen</h1>
        <p>Data weergeven over meer dan een rij kan gebruikt worden binnen tabellen.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="{base}/documentation/import-styling"
              >Componenten gebruiken en styling toevoegen</a
            >
          </li>
          <li>
            Om een datacel over meerdere kolommen te plaatsen gebruik een
            <code>colspan="[number]"</code>. Voorbeeld: <code>colspan="3"</code> op de
            <code>td</code>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met data over meerdere kolommen: </caption>
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
                <td>150</td>
              </tr>
              <tr>
                <td colspan="3">Ipsum</td>
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
    <caption>Tabelvoorbeeld met data over meerdere kolommen:</caption>
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
        <td>150</td>
      </tr>
      <tr>
        <td colspan="3">Ipsum</td>
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
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p class="system-notification" role="group" aria-label="systeembericht">
          Dit component heeft momenteel geen instelbare variabelen
        </p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/table-multiple-columns-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
