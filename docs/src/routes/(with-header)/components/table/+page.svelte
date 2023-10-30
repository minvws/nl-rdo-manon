<script context="module">
  export const breadcrumb = "Tabel";
</script>

<svelte:head>
  <title>Tabel</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Tabel</h1>
        <p>
          Om data efficient en gebruiksvriendelijk weer te geven kan gebruik gemaakt worden van
          tabellen.
        </p>
      </section>

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-2">
          <nav aria-labelledby="types-heading">
            <h3 id="types-heading">Types</h3>
            <ul>
              <li><a href="./table-base">Basisweergave</a></li>
              <li><a href="./table-sortable">Sorteerbare tabel</a></li>
              <li>
                <a href="./table-expando-row">Uitklapbare tabel</a>
              </li>
              <li>
                <a href="./table-sticky-header">"sticky header"-tabel</a>
              </li>
              <li><a href="./table-summary">Samenvattingstabel</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="elements-heading">
            <h3 id="elements-heading">Elementen</h3>
            <ul>
              <li>
                <a href="./table-action-buttons">Actieknoppen</a>
              </li>
              <li><a href="./table-checkbox">Checkboxes</a></li>
              <li><a href="./table-notifications">Meldingen</a></li>
              <li>
                <a href="./table-numerical-data">Numerieke data</a>
              </li>
              <li>
                <a href="./table-caption">Tabel bijschrift <code>caption</code></a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="styling-heading">
            <h3 id="styling-heading">Opmaak-opties</h3>
            <ul>
              <li>
                <a href="./table-multiple-rows">Tabeldata over meerdere rijen</a>
              </li>
              <li>
                <a href="./table-multiple-columns">Tabeldata over meerdere kolommen</a>
              </li>
              <li><a href="./table-scope">Tabelrichting</a></li>
              <li>
                <a href="./table-condensed">Gecomprimeerde weergave</a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="helper-classes-heading">
            <h3 id="helper-classes-heading">Helper-classes</h3>
            <ul>
              <li>
                <a href="../components/nowrap">nowrap</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
