<script context="module">
  export const breadcrumb = "Layouts";
</script>

<svelte:head>
  <title>Layouts</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <div>
      <h1>Layouts</h1>
      <p>Kies op basis van de gewenste layout de bijbehorende bestanden.</p>

      <h2>Benodigde stappen:</h2>
      <ul>
        <li>
          Kies de gewenste basisweergaven. Voor beschikbare weergaven zie:
          <a href="#layout-base">Basis-weergave</a>. Voor meer informatie over het kiezen van de
          juiste weergave en het instellen ervan zie:
          <a href="./layout-base-options">Basisweergave kiezen en instellen</a>.
        </li>
        <li>
          Kies de gewenste uitzonderingsweergaven. Voor beschikbare weergaven zie:
          <a href="#layout-types">Uitzonderingsweergaven</a>.
        </li>
      </ul>
    </div>
  </section>

  <section id="available-types">
    <div>
      <h2>Beschikbare weergaven</h2>

      <div class="column-2">
        <div>
          <h3 id="layout-base">Basis-weergave</h3>
          <ul>
            <li>
              Basis-weergave direct:
              <ul>
                <li><a href="./layout-header">Layout header</a></li>
                <li><a href="./layout-main">Layout main</a></li>
                <li><a href="./layout-footer">Layout footer</a></li>
              </ul>
            </li>
            <li>
              Basis-weergave op contentblokken:
              <ul>
                <li>
                  <a href="./layout-header-content-block">Layout header contentblok</a>
                </li>
                <li>
                  <a href="./layout-main-content-block">Layout main contentblok</a>
                </li>
                <li>
                  <a href="./layout-footer-content-block">Layout footer contentblok</a>
                </li>
              </ul>
            </li>
            <li>
              Op attributen:
              <ul>
                <li><a href="./section">Layout sectie</a></li>
                <li><a href="./article">Layout artikel</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 id="layout-types">Uitzonderingsweergaven</h3>
          <ul>
            <li>
              <a href="./layout-authentication">Authentication</a>
            </li>
            <li>
              <a href="./layout-one-third-two-thirds">Eenderde tweederde </a>
            </li>
            <li>
              <a href="./layout-two-thirds-one-third">Tweederde eenderde</a>
            </li>
            <li><a href="./layout-fifty-fifty">50/50</a></li>
            <li><a href="./layout-centered">Gecentreerd</a></li>
            <li>
              <a href="./layout-form">Formulieren</a>
            </li>
            <li><a href="./layout-column-2">Twee kolommen</a></li>
            <li><a href="./layout-column-3">Drie kolommen</a></li>
            <li><a href="./layout-column-4">Vier kolommen</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
