<script context="module">
  export const breadcrumb = "Basisweergave kiezen en instellen";
</script>

<script>
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Basisweergave kiezen en instellen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#layout-base-options">Weergave kiezen</a></li>
      <li><a href="#layout-setup">Weergave gebruiken</a></li>
    </ul>
  </SideMenu>

  <article>
    <div>
      <section id="introduction">
        <h1>Basisweergave kiezen en instellen</h1>
        <p>Kies op basis van de gewenste layout de bijbehorende bestanden.</p>
      </section>
      <section id="layout-base-options" class="layout-options">
        <h2>Weergave kiezen</h2>
        <h3>Layout direct</h3>
        <div class="two-thirds-one-third">
          <div>
            <p>
              Om alle content van de website dezelfde breedte te geven en uit te lijnen kies voor de
              basisbestanden met optioneel bijbehorende variabelenbestanden:
            </p>
            <ul>
              <li><code>layout-header.scss</code></li>
              <li><code>layout-main.scss</code></li>
              <li><code>layout-footer.scss</code></li>
            </ul>
          </div>

          <img
            src="$img/layout-direct.svg"
            alt="Voorbeeld van een pagina opmaak waarbij alle content een maximale breedte heeft."
          />
        </div>

        <h3>Layout op contentblokken</h3>
        <div class="two-thirds-one-third">
          <div>
            <p>
              Om alle content van de website dezelfde breedte te geven en uit te lijnen kies voor de
              basisbestanden met optioneel bijbehorende variabelenbestanden:
            </p>
            <ul>
              <li><code>layout-header-content-block.scss</code></li>
              <li><code>layout-main-content-block.scss</code></li>
              <li><code>layout-footer-content-block.scss</code></li>
            </ul>
          </div>

          <img
            src="$img/layout-content-block.svg"
            alt="Voorbeeld van een pagina opmaak waarbij alle content een maximale breedte heeft."
          />
        </div>
      </section>

      <section id="layout-setup">
        <h2>Weergave gebruiken</h2>

        <h3>Benodigde stappen:</h3>
        <ol>
          <li>
            Kies de gewenste basis-layout op basis van het ontwerp van de site. Voor meer informatie
            zie:
            <a href="#layout-base-options">Layout basisopties</a>. Kies per project of in ieder
            geval per pagina maximaal een basisweergave om tegenstrijdige stijlkeuzes te voorkomen.
          </li>
          <li>
            Voeg de benodigde bestanden toe. Zie de documentatie van de gekozen basisoptie voor meer
            informatie.
          </li>
          <li>
            Kies de gewenste uitzonderingsweergaven voor het project. Dit zijn weergaven die op
            elementen geplaatst kunnen worden om het blok een andere weergave te geven. Denk
            bijvoorbeeld aan kolommen, een 50/50 verdeling of een alternatieve weergave voor
            authenticatieblokken. Voor de beschikbare opties zie:
            <a href="#layout-types">Weergave opties</a>.
          </li>
        </ol>

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            Het gebruiken van een basis-layout is optioneel. Uitzonderingsweergaven werken ook
            zonder een basis-layout.
          </li>
        </ul>

        <h3>Stijl centraal instellen</h3>
        <p>
          Binnen het bestand <code>layout-base-variables.scss</code> kunnen de gewenste opmaakkeuzes
          ingesteld worden. De onderliggende bestanden, layout-header, main en footer, zullen de
          instellingen volgen. Specifeke instellingen die binnen een van de onderliggende bestanden
          worden opgegeven overschrijven de centrale keuzes. Voor meer informatie zie:
          <a href="./layout-base">Basisweergave instellen</a>.
        </p>

        <h4>Voorbeeld</h4>
        <p>
          In het algemene bestand
          <code>layout-base-variables.scss</code> wordt een maximale breedte van 80rem opgegeven en
          in het bestand <code>layout-header-variables.scss</code> wordt een maximale breedte van
          100% opgegeven. Zal de header de volledige breedte van de pagina benutten terwijl de
          paginacontet (<code>main</code>) en de footer een maximale breedte van 80rem aan zullen
          houden.
        </p>

        <h3>Uitzonderingsweergaven op blokken</h3>
        <p>
          Uitzonderingen bovenop de standaard ingestelde layout kunnen worden toegevoegd door middel
          van classes. Voor een overzicht van de beschikbare layout-opties zie het onderstaande
          overzicht met beschikbare layout-types.
        </p>
      </section>
    </div>
  </article>
</main>
