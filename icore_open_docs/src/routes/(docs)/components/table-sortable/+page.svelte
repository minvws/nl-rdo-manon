<script context="module">
  export const breadcrumb = "Sorteerbare tabel";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Sorteerbare tabel</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Sorteerbare tabel</h1>
        <p>
          Om inzicht te krijgen in de data kan het behulpzaam zijn om de gebruiker de data te laten
          sorteren. Bijvoorbeeld op basis van op of aflopende data.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg een <code>button</code> toe binnen de <code>th</code> om sorteerelemeent klikbaar te
            maken.
          </li>
          <li>
            Voeg binnen de knop een icoon toe indien gewenst. Voor meer informatie zie:
            <a href="{base}/components/button-icon">Icoonknoppen</a>
          </li>
          <li>
            Voeg <code>abbr=""</code> toe aan de <code>&lt;th&gt;</code> met een korte duidelijke omschrijving
            om de gebruikerservaring te verbeteren voor gebruikers die gebruik maken van een screenreader.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>Dit element bevat momenteel geen JavaScript of logica voorbeeld.</li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met sorteerbare data: </caption>
            <thead>
              <tr>
                <th scope="col" abbr="Ascending data">
                  <button title="Sort descending">
                    Descending <span class="icon icon-ascending"></span>
                  </button>
                </th>
                <th scope="col" abbr="Descending data">
                  <button title="Sort ascending">
                    Ascending <span class="icon icon-descending"></span>
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
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
    <caption>Tabelvoorbeeld met sorteerbare data:</caption>
    <thead>
      <tr>
        <th scope="col" abbr="Ascending data">
          <button title="Sort descending">Descending <span class="icon icon-ascending"></button>
        </th>
        <th scope="col" abbr="Descending data">
          <button title="Sort ascending">Ascending <span class="icon icon-descending"></span></button>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
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
          <li><code>button/button-base.scss</code></li>
          <li><code>button/button-base-variables.scss</code></li>
          <li><code>icon/icon-base.scss</code></li>
          <li><code>icon/icon-base-variables.scss</code></li>
        </ul>
      </section>
    </div>
  </article>
</main>
