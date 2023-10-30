<script context="module">
  export const breadcrumb = "Header content wrapper visueel voorbeeld";
</script>

<script>
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Header content wrapper visueel voorbeeld</title>
</svelte:head>

<header>
  <div>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <div class="collapsing-element">
        <SiteNavLinks />
      </div>
    </nav>
  </div>
</header>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Header visueel voorbeeld</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h1>Voorbeelden:</h1>
        <p>Voor het visuele voorbeeld zie de header van deze pagina.</p>
        <h2>HTML-voorbeeld:</h2>
        <Code
          language="html"
          code={`
<header>
    <div>
        <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

        <nav
            data-open-label="Menu"
            data-close-label="Sluit menu"
            data-media="(min-width: 30rem)"
            aria-label="Hoofdnavigatie"
            class="collapsible">

            <div class="collapsing-element">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/components">Componenten</a></li>
                <li><a href="/documentation">Documentatie</a></li>
            </ul>
            </div>
        </nav>
    </div>
</header>
`}
        />

        <h2>CSS-voorbeeld:</h2>
        <p>Ingestelde variabelen voor deze weergave</p>
        <Code
          language="css"
          code={`
:root {
  --header-navigation-background-color: #fff;
  --header-navigation-text-color: var(--text-set-text-color);
  --header-navigation-padding-right: 2%;
  --header-navigation-padding-left: 2%;

  /* top border */
  --header-navigation-border-width: 3px 0 0 0;
  --header-navigation-border-color: var(--branding-color-1);

  /* Menu items links */
  --header-navigation-link-border-width: 4px 0 0 0;
  --header-navigation-link-border-color: transparent;
  --header-navigation-link-min-height: 3rem;
  --header-navigation-link-font-size: var(--body-text-medium-font-size);

  /* Link styling */
  --header-navigation-link-text-color: var(--application-base-text-color);
  --header-navigation-link-visited-text-color: var(--header-navigation-link-text-color);

  /* Hover */
  --header-navigation-link-hover-border-color: #ede1c7;
  --header-navigation-link-hover-text-color: var(--header-navigation-link-text-color);

  /* Active link */
  --header-navigation-link-active-border-color: var(--branding-color-1);
  --header-navigation-link-active-text-color: var(--header-navigation-link-hover-text-color);
  --header-navigation-link-visited-active-text-color: var(--header-navigation-link-hover-text-color);

  /* Collapsed icon */
  --navigation-collapsible-menu-icon-font-size: 2rem;
}
`}
        />
      </section>
    </div>
  </article>
</main>

<style>
  :root {
    /* Content wrapper */
    --header-content-wrapper-position: relative;

    /* Header navigation */
    --header-navigation-position: static;
  }
</style>
