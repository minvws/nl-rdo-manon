<script module>
  export const breadcrumb = "Tabel";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Tabel</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <article>
    <h1 class="page-title">Tabel</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>
          In HTML gebruik je een tabelstructuur om gegevens in rijen en kolommen overzichtelijk weer
          te geven, waarbij speciale elementen de koppen en de inhoud van de tabel definiëren.
        </p>
      </section>

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-2">
          <nav aria-labelledby="types-heading">
            <h3 id="types-heading">Types</h3>
            <ul>
              <li><a href="table/table-base">Basisweergave</a></li>
              <li><a href="table/table-sortable">Sorteerbare tabel</a></li>
              <li>
                <a href="table/table-expando-row">Uitklapbare tabel</a>
              </li>
              <li>
                <a href="table/table-sticky-header">"sticky header"-tabel</a>
              </li>
              <li><a href="table/table-summary">Samenvattingstabel</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="elements-heading">
            <h3 id="elements-heading">Elementen</h3>
            <ul>
              <li>
                <a href="table/table-action-buttons">Actieknoppen</a>
              </li>
              <li><a href="table/table-checkbox">Checkboxes</a></li>
              <li>
                <a href="table/table-numerical-data">Numerieke data</a>
              </li>
              <li>
                <a href="table/table-caption">Tabel bijschrift <code>caption</code></a>
              </li>
              <li><a href="table/table-notifications">Meldingen</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="styling-heading">
            <h3 id="styling-heading">Opmaak-opties</h3>
            <ul>
              <li>
                <a href="table/table-multiple-rows">Tabeldata over meerdere rijen</a>
              </li>
              <li>
                <a href="table/table-multiple-columns">Tabeldata over meerdere kolommen</a>
              </li>
              <li><a href="table/table-scope">Tabelrichting</a></li>
              <li>
                <a href="table/table-condensed">Gecomprimeerde weergave</a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="helper-classes-heading">
            <h3 id="helper-classes-heading">Helper-classes</h3>
            <ul>
              <li>
                <a href="{base}/utility/nowrap">nowrap</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
