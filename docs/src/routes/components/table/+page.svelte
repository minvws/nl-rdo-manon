<script module>
  export const breadcrumb = "Tabel";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Tabel</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Tabel</h1>
      </section>

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-2">
          <nav aria-labelledby="types-heading">
            <h3 id="types-heading">Types</h3>
            <ul>
              <li><a href="{base}/components/table-base">Basisweergave</a></li>
              <li><a href="{base}/components/table-sortable">Sorteerbare tabel</a></li>
              <li>
                <a href="{base}/components/table-expando-row">Uitklapbare tabel</a>
              </li>
              <li>
                <a href="{base}/components/table-sticky-header">"sticky header"-tabel</a>
              </li>
              <li><a href="{base}/components/table-summary">Samenvattingstabel</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="elements-heading">
            <h3 id="elements-heading">Elementen</h3>
            <ul>
              <li>
                <a href="{base}/components/table-action-buttons">Actieknoppen</a>
              </li>
              <li><a href="{base}/components/table-checkbox">Checkboxes</a></li>
              <li>
                <a href="{base}/components/table-numerical-data">Numerieke data</a>
              </li>
              <li>
                <a href="{base}/components/table-caption">Tabel bijschrift <code>caption</code></a>
              </li>
            </ul>
            <h4>Andere elementen (niet ondersteund door iCore Open)</h4>
            <ul>
              <li><a href="{base}/components/table-notifications">Meldingen</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="styling-heading">
            <h3 id="styling-heading">Opmaak-opties</h3>
            <ul>
              <li>
                <a href="{base}/components/table-multiple-rows">Tabeldata over meerdere rijen</a>
              </li>
              <li>
                <a href="{base}/components/table-multiple-columns"
                  >Tabeldata over meerdere kolommen</a
                >
              </li>
            </ul>
            <h4>Andere opmaak-opties (niet ondersteund door iCore Open)</h4>
            <ul>
              <li><a href="{base}/components/table-scope">Tabelrichting</a></li>
              <li>
                <a href="{base}/components/table-condensed">Gecomprimeerde weergave</a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="helper-classes-heading">
            <h3 id="helper-classes-heading">Helper-classes</h3>
            <ul>
              <li>
                <a href="{base}/components/nowrap">nowrap</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
