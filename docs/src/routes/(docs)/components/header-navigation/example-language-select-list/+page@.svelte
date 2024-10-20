<!--
NB: the @ in this file's filename, +page@.svelte, is there to break out of the
layout at (docs)/+layout.svelte.
See: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-breaking-out-of-layouts
-->

<script module>
  export const breadcrumb = "Header met language selector list";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
</script>

<svelte:head>
  <title>Header met language selector list</title>
</svelte:head>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <div>
    <a href="{base}/" class="logo">
      <img src="$img/logo-white.svg" alt="Placeholder logo" />Manon
    </a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 42rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <div class="collapsing-element">
        <SiteNavLinks />
      </div>
    </nav>
    <div class="language-selector">
      <p>Kies een taal:</p>
      <p class="visually-hidden" id="language-selector-description">Select your language</p>
      <div
        class="language-selector-options"
        aria-describedby="language-selector-description"
        aria-expanded="false"
      >
        <button aria-haspopup="listbox" lang="pap-CW">Papiamentu</button>
        <ul role="listbox">
          <li role="option" aria-selected="false">
            <a hreflang="nl" href="example-language-select-list" data-value="Nederlands" lang="nl"
              >Nederlands</a
            >
          </li>
          <li role="option" aria-selected="false">
            <a hreflang="en" href="example-language-select-list" data-value="English" lang="en"
              >English</a
            >
          </li>
          <li role="option" aria-selected="false">
            <a hreflang="fy" href="example-language-select-list" data-value="Frysk" lang="fy"
              >Frysk</a
            >
          </li>
          <li role="option" aria-selected="true" aria-current="true">
            <a
              hreflang="pap-CW"
              href="example-language-select-list"
              data-value="Papiamentu"
              lang="pap-CW">Papiamentu</a
            >
          </li>
          <li role="option" aria-selected="false">
            <a
              hreflang="pap-AW"
              href="example-language-select-list"
              data-value="Papiamento"
              lang="pap-AW">Papiamento</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Header met language selector list visueel voorbeeld</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
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
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <div>
    <a href="{base}/" class="logo">
      <img src="$img/logo-white.svg" alt="Placeholder logo" />Manon
    </a>
    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 42rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <div class="collapsing-element">
        <ul>
          <li><a href="/">Home</a>
          <li><a href="/components">Componenten</a></li>
          <li><a href="/documentation">Documentatie</a></li>
        </ul>
      </div>
    </nav>
    <div class="language-selector">
      <p>Kies een taal:</p>
      <p class="visually-hidden" id="language-selector-description">Select your language</p>
      <div
        class="language-selector-options"
        aria-describedby="language-selector-description"
        aria-expanded="false"
      >
        <button aria-haspopup="listbox" lang="pap-CW">Papiamentu</button>
        <ul role="listbox">
          <li role="option" aria-selected="false">
            <a hreflang="nl" href="example-language-select-list" data-value="Nederlands" lang="nl"
              >Nederlands</a
            >
          </li>
          <li role="option" aria-selected="false">
            <a hreflang="en" href="example-language-select-list" data-value="English" lang="en"
              >English</a
            >
          </li>
          <li role="option" aria-selected="false">
            <a hreflang="fy" href="example-language-select-list" data-value="Frysk" lang="fy"
              >Frysk</a
            >
          </li>
          <li role="option" aria-selected="true" aria-current="true">
            <a
              hreflang="pap-CW"
              href="example-language-select-list"
              data-value="Papiamentu"
              lang="pap-CW">Papiamentu</a
            >
          </li>
          <li role="option" aria-selected="false">
            <a
              hreflang="pap-AW"
              href="example-language-select-list"
              data-value="Papiamento"
              lang="pap-AW">Papiamento</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
`}
        />
      </section>
    </div>
  </article>
</main>

<DefaultFooter />

<style>
  :root {
    /* Header */
    --header-border-width: 0 0 1px 0;
    --header-border-color: #ccc;
    --header-padding-right: var(--page-whitespace-right);
    --header-padding-left: var(--page-whitespace-left);

    /* Content wrapper */
    --header-content-wrapper-position: relative;
    --header-content-wrapper-gap: 1rem;
    --header-content-wrapper-padding-top: 0.5rem;
    --header-content-wrapper-padding-bottom: 0.5rem;

    /* Header navigation */
    --header-navigation-position: static;
    --header-navigation-border-width: 0;
    --header-navigation-padding-right: 0;
    --header-navigation-padding-left: 0;

    /* Collapsible menu */
    --header-navigation-collapsible-menu-top: 4rem;
  }
</style>
