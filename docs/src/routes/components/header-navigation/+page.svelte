<script module>
  export const breadcrumb = "Header";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Header</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li>
        <a href="#examples">Voorbeelden</a>
        <ul>
          <li><a href="#example-only-navigation">Alleen navigatie</a></li>
          <li><a href="#example-with-content-wrapper">Navigatie met content wrapper</a></li>
          <li><a href="#example-with-search">Navigatie met zoekveld</a></li>
          <li><a href="#example-with-logo">Navigatie en logo</a></li>
          <li><a href="#example-with-multiple-menus">Navigatie met meerdere menu's</a></li>
          <li><a href="#example-with-form-button">Navigatie met formulier-knop</a></li>
        </ul>
      </li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <section id="introduction">
      <h1>Header</h1>
      <p>
        De header-navigation wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de
        gebruiker dat het einde van de pagina bereikt is.
      </p>

      <h2>Benodigde stappen</h2>
      <ol>
        <li>
          Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
          optionele bestanden zie:
          <a href="#requirements">Bijbehorende bestanden</a>.
        </li>
        <li>
          Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">voorbeelden</a>.
        </li>
      </ol>
    </section>

    <section id="examples">
      <h2>Voorbeelden</h2>
      <h3 id="example-only-navigation">Alleen navigatie</h3>
      <h4>Visueel voorbeeld</h4>
      <div class="resize">
        <iframe src="{base}/examples/header-navigation" title="Voorbeeld" height="240px"></iframe>
      </div>
      <h4>HTML-voorbeeld</h4>
      <Code
        language="html"
        code={`
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/components">Componenten</a></li>
        <li><a href="/documentation">Documentatie</a></li>
      </ul>
    </div>
  </nav>
</header>
`}
      />

      <h3 id="example-with-content-wrapper">Navigatie met content wrapper</h3>
      <h4>Visueel voorbeeld</h4>
      <div class="resize">
        <iframe
          src="{base}/examples/header-navigation-with-content-wrapper"
          title="Voorbeeld"
          height="240px"
        ></iframe>
      </div>
      <h4>HTML-voorbeeld</h4>
      <Code
        language="html"
        code={`
<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
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

      <h3 id="example-with-search">Navigatie met zoekveld</h3>
      <h4>Visueel voorbeeld</h4>
      <div class="resize">
        <iframe src="{base}/examples/header-navigation-with-search" title="Voorbeeld" height="240px"
        ></iframe>
      </div>
      <h4>HTML-voorbeeld</h4>
      <Code
        language="html"
        code={`
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width:42rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
        <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
      </ul>

      <div>
        <form action="" method="post">
          <div>
            <label for="voorbeeld-1-date-1-start">Ipsum</label>
            <div class="combined-field">
              <input type="text" placeholder="Zoeken" />
              <button type="submit">
                <span class="icon icon-search" aria-hidden="true"></span>
                <span class="visually-hidden">Zoeken</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
</header>
`}
      />

      <h3 id="example-with-logo">Navigatie en logo</h3>
      <h4>Visueel voorbeeld</h4>
      <div class="resize">
        <iframe src="{base}/examples/header-navigation-with-logo" title="Voorbeeld" height="240px"
        ></iframe>
      </div>
      <h4>HTML-voorbeeld</h4>
      <Code
        language="html"
        code={`
<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a href="/" class="logo">
        <img src="/img/logo-white.svg" alt="Placeholder logo">Manon
      </a>

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

      <h3 id="example-with-multiple-menus">Navigatie met meerdere menu's</h3>
      <h4>Visueel voorbeeld</h4>
      <div class="resize">
        <iframe
          src="{base}/examples/header-navigation-with-multiple-menus"
          title="Voorbeeld"
          height="240px"
        ></iframe>
      </div>
      <h4>HTML-voorbeeld</h4>
      <Code
        language="html"
        code={`
<header>
  <div class="content-wrapper">
      <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

      <nav
        data-open-label="Menu"
        data-close-label="Sluit menu"
        data-media="(min-width: 30rem)"
        aria-label="Hoofdnavigatie"
        class="collapsible"
      >
        <div class="collapsing-element">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/components">Componenten</a></li>
            <li><a href="/documentation">Documentatie</a></li>
          </ul>

          <ul>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      </nav>
  </div>
</header>
`}
      />

      <h3 id="example-with-form-button">Navigatie met formulier-knop</h3>
      <h4>Visueel voorbeeld</h4>
      <div class="resize">
        <iframe
          src="{base}/examples/header-navigation-with-form-button"
          title="Voorbeeld"
          height="240px"
        ></iframe>
      </div>
      <h4>HTML-voorbeeld</h4>
      <Code
        language="html"
        code={`
<header>
  <div class="content-wrapper">
      <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

      <nav
        data-open-label="Menu"
        data-close-label="Sluit menu"
        data-media="(min-width: 30rem)"
        aria-label="Hoofdnavigatie"
        class="collapsible"
      >
        <div class="collapsing-element">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/components">Componenten</a></li>
            <li><a href="/documentation">Documentatie</a></li>
          </ul>

          <ul class="actions">
            <li><a href="/examples/header-navigation-with-form-button" class="avatar">A</a></li>
            <li>
              <form action="/logout" method="POST" class="inline">
                <input type="hidden" name="_token" value="">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</header>
`}
      />
    </section>

    <section id="requirements">
      <h2>Bijbehorende bestanden</h2>
      <p>
        Voeg de (s)css-bestanden toe aan het project of importeer de bestanden. Hiervoor kunnen de
        bestanden gebruikt worden uit beschikbare Manon-thema's. Of uit zelf gemaakte thema's.
      </p>
      <p>
        Voor meer informatie over importeren en instellen van componenten. Zie:
        <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
      </p>
      <h3>Importeer component via npm</h3>
      <h4>CSS-voorbeeld</h4>
      <Code
        language="css"
        code={`
@use "@minvws/manon/header";
@use "@minvws/manon/collapsible";

// Accessibility
@use "@minvws/manon/skip-to-content";
`}
      />
    </section>
  </article>
</main>
