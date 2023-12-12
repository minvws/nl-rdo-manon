<script context="module">
  export const breadcrumb = "Componenten";
</script>

<script>
  import NavLink from "$lib/NavLink.svelte";
</script>

<svelte:head>
  <title>Componenten</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction" class="branding-color-accent-5">
    <div>
      <h1>Componenten</h1>
      <p>
        Gebruik de gewenste componenten. Voeg de bijbehorende CSS bestanden en html toe aan het
        project. Veel componenten zijn instelbaar qua vormgeving zodat ze aan kunnen sluiten bij de
        huisstijl.
      </p>
    </div>
  </section>

  <section id="base-styling">
    <div>
      <h2>Basisopmaak</h2>
      <div class="column-2">
        <nav aria-labelledby="layout-text-heading">
          <h3 id="layout-text-heading">Tekst</h3>
          <ul>
            <li><a href="./components/font">Lettertype toevoegen</a></li>
            <li>
              <strong>Titels</strong>
              <ul>
                <li><a href="./components/headings">Titels</a></li>
                <li><a href="./components/heading-base-set">Titel basisset</a></li>
              </ul>
            </li>
            <li>
              <strong>Tekstweergaven</strong>
              <ul>
                <li><a href="./components/body-text-set">Body text set</a></li>
                <li><a href="./components/paragraph">Paragraaf</a></li>
                <li><a href="./components/emphasized">Benadrukte weergave</a></li>
                <li><a href="./components/de-emphasized">Subtielere weergave</a></li>
                <li><a href="./components/nota-bene">Nota bene</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="colors-heading">
          <h3 id="colors-heading">Kleuren</h3>
          <ul>
            <li>
              <a href="./components/branding-colors">Kleurensets</a>
              <ul>
                <li>
                  <strong>Finn</strong> Set met 2,3 of 5 kleuren.
                  <ul>
                    <li><a href="./components/finn-small">Klein (twee kleuren)</a></li>
                    <li><a href="./components/finn-medium">Middel (drie kleuren)</a></li>
                    <li><a href="./components/finn-large">Groot (vijf kleuren)</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Spot</strong> Set met hoofdkleuren en accentkleuren.
                  <ul>
                    <li>
                      <a href="./components/spot-mini"
                        >Spot mini (twee hoofdkleuren en een accentkleur)</a
                      >
                    </li>
                    <li>
                      <a href="./components/spot-small"
                        >Spot klein (twee hoofdkleuren en twee accentkleuren)</a
                      >
                    </li>
                    <li>
                      <a href="./components/spot-medium"
                        >Spot middel (twee hoofdkleuren en drie accentkleuren)</a
                      >
                    </li>
                    <li>
                      <a href="./components/spot-large"
                        >Spot groot (twee hoofdkleuren en vijf accentkleuren)</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <section id="layout">
    <div>
      <h2>Layout</h2>
      <div class="column-2">
        <nav aria-labelledby="layout-base">
          <h3 id="layout-base">Basis-elementen</h3>
          <ul>
            <li><a href="./components/main"><code>main</code></a></li>
            <li><a href="./components/section">Sectie - <code>section</code></a></li>
            <li><a href="./components/article">Artikel - <code>article</code></a></li>
            <li><a href="./components/div"><code>div</code></a></li>
            <li><a href="./components/footer"><code>footer</code></a></li>
          </ul>
        </nav>

        <nav aria-labelledby="layout-exceptions">
          <h3 id="layout-exceptions">Uitzonderingsweergaven</h3>
          <ul>
            <li><a href="./components/layout-authentication">Authentication</a></li>
            <li><a href="./components/layout-one-third-two-thirds">Eenderde tweederde</a></li>
            <li><a href="./components/layout-two-thirds-one-third">Tweederde eenderde</a></li>
            <li><a href="./components/layout-fifty-fifty">50/50</a></li>
            <li><a href="./components/layout-centered">Gecentreerd</a></li>
            <li><a href="./components/layout-form">layout-form</a></li>
            <li><a href="./components/layout-column-2">Twee kolommen</a></li>
            <li><a href="./components/layout-column-3">Drie kolommen</a></li>
            <li><a href="./components/layout-column-4">Vier kolommen</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <section id="components">
    <div>
      <h2>Componenten</h2>

      <div class="column-2">
        <div>
          <nav aria-labelledby="base-heading">
            <h3 id="base-heading">Basis-componenten</h3>
            <p>Componenten die direct aan html-elementen gerelateerd zijn.</p>

            <ul>
              <li><a href="./components/button">Knoppen - <code>button</code></a></li>
              <li><a href="./components/forms">Formulieren - <code>form</code></a></li>
              <li><a href="./components/link">Link <code>a</code></a></li>
              <li><a href="./components/table">Tabellen - <code>table</code></a></li>
              <li>
                <a href="./components/description-list">Description list - <code>dl</code></a>
              </li>
              <li>
                Afbeeldingen - <code>img</code>
                <ul>
                  <li><a href="./components/logo">Logo</a></li>
                  <li><a href="./components/icons">Iconen</a></li>
                  <li><a href="./components/image-cover">Cover-afbeelding</a></li>
                  <li><a href="./components/image-round">Ronde afbeelding</a></li>
                  <li><a href="./components/image-square">Vierkante afbeelding</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav aria-labelledby="other-components-heading" id="other-components">
            <h3 id="other-components-heading">Overige componenten</h3>
            <ul>
              <li><a href="./components/accordion">Accordeon</a></li>
              <li><a href="./components/filter">Filter</a></li>
              <li><a href="./components/header-navigation">Header</a></li>
              <li><a href="./components/login-meta">Ingelogd als</a></li>
              <li><a href="./components/collapsible">Inklapbaar component</a></li>
              <li><a href="./components/card">Kaart</a></li>
              <li><a href="./components/breadcrumb-bar">Kruimelpad - breadcrumb-bar</a></li>
              <li><a href="./components/pagination">Paginering</a></li>
              <li><a href="./components/tag">Tag</a></li>
              <li><a href="./components/tabs">Tabbladen</a></li>
              <li><a href="./components/tiles">Tegelweergave</a></li>
              <li><a href="./components/sidemenu">Zijmenu</a></li>
              <li><a href="./components/language-selector">Taalselectie</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="notifications-heading">
            <h4 id="notifications-heading">Notificaties</h4>
            <ul>
              <li>
                <a href="./components/message-counter">Notificatie-teller</a>
              </li>
              <li>
                <a href="./components/notifications">Notificaties</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <section id="accessibility">
    <div>
      <nav aria-labelledby="accessibility-heading">
        <h3 id="accessibility-heading">Toegankelijkheid</h3>
        <ul>
          <li>
            <a href="./components/max-line-length">Maximale regellengte</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>

  <section id="helpers">
    <div>
      <nav aria-labelledby="helper-classes-heading">
        <h3 id="helper-classes-heading">Helper-classes</h3>
        <ul>
          <li>
            <a href="./components/horizontal-view">Horizontaal uitgelijnd</a>
          </li>
          <li>
            <a href="./components/layout-centered">Gecentreerd</a>
          </li>
          <li>
            <a href="./components/horizontal-center">Horizontaal gecentreerd</a>
          </li>
          <li>
            <a href="./components/focus-only">Alleen zichtbaar "on focus"</a>
          </li>
          <li>
            <a href="./components/horizontal-scroll">Horizontale scroll</a>
          </li>
          <li>
            <a href="./components/nowrap">nowrap</a>
          </li>
          <li>
            <a href="./components/hidden">Verbergen - <dfn>hidden</dfn></a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</main>
