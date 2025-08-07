---
title: Header
breadcrumb: Header
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Alleen navigatie: "#example-only-navigation"
    - Navigatie met content wrapper: "#example-with-content-wrapper"
    - Navigatie met zoekveld: "#example-with-search"
    - Navigatie en logo: "#example-with-logo"
    - Navigatie met meerdere menu's: "#example-with-multiple-menus"
    - Navigatie met formulier-knop: "#example-with-form-button"
    - Navigatie met logo bovenaan: "#example-with-logo-above"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Header</h1>

De header-navigation wordt vaak gebruikt als extra navigatiepunt en om aan te
geven aan de gebruiker dat het einde van de pagina bereikt is.

## Benodigde stappen

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de benodigde HTML toe. Voor meer informatie zie:
    [voorbeelden](#examples).

<h2 id="examples">Voorbeelden</h2>

<h3 id="example-only-navigation">Alleen navigatie</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe src="/examples/header-navigation" title="Voorbeeld" height="240px"></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content"
    >Ga direct naar inhoud</a
  >

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
```

<h3 id="example-with-content-wrapper">Navigatie met content wrapper</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-content-wrapper"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content"
      >Ga direct naar inhoud</a
    >

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
```

<h3 id="example-with-search">Navigatie met zoekveld</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-search"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content"
    >Ga direct naar inhoud</a
  >

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width:42rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/components">Componenten</a></li>
        <li><a href="/documentation">Documentatie</a></li>
      </ul>

      <div>
        <form class="inline">
          <input type="text" placeholder="Zoeken" />
          <button type="submit">
            <span class="icon icon-search" aria-hidden="true"></span>
            <span class="visually-hidden">Zoeken</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</header>
```

<h3 id="example-with-logo">Navigatie en logo</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe src="/examples/header-navigation-with-logo" title="Voorbeeld" height="240px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content"
      >Ga direct naar inhoud</a
    >

    <nav
      data-open-label="Menu"
      data-close-label="Sluit menu"
      data-media="(min-width: 30rem)"
      aria-label="Hoofdnavigatie"
      class="collapsible"
    >
      <a href="/" class="logo">
        <img src="/img/logo-white.svg" alt="Placeholder logo" />Manon
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
```

<h3 id="example-with-multiple-menus">Navigatie met meerdere menu's</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-multiple-menus"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content"
      >Ga direct naar inhoud</a
    >

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
```

<h3 id="example-with-form-button">Navigatie met formulier-knop</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-form-button"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <div class="content-wrapper">
    <a href="#main-content" class="button focus-only skip-to-content"
      >Ga direct naar inhoud</a
    >

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
          <li>
            <a
              href="/examples/header-navigation-with-form-button"
              class="avatar"
              >A</a
            >
          </li>
          <li>
            <form action="/logout" method="POST" class="inline">
              <input type="hidden" name="_token" value="" />
              <button type="submit">Logout</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
```

<h3 id="example-with-logo-above">Navigatie met logo bovenaan</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-logo-above"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content"
    >Ga direct naar inhoud</a
  >

  <a href="/" class="logo">
    <img src="/img/logo.svg" alt="Placeholder logo" />Manon
  </a>

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
</header>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

<p>
  Voeg de (s)css-bestanden toe aan het project of importeer de bestanden. Hiervoor kunnen de
  bestanden gebruikt worden uit beschikbare Manon-thema's. Of uit zelf gemaakte thema's.
</p>
<p>
  Voor meer informatie over importeren en instellen van componenten. Zie:
  <a href="/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
</p>

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/header-navigation";
@use "@minvws/manon/header-navigation-content-wrapper";
@use "@minvws/manon/header-navigation-link";
@use "@minvws/manon/header-navigation-link-visited";
@use "@minvws/manon/header-navigation-link-hover";
@use "@minvws/manon/header-navigation-link-active";
@use "@minvws/manon/header-navigation-collapsible";
@use "@minvws/manon/header-navigation-collapsible-collapsing-element-button";
@use "@minvws/manon/header-navigation-collapsible-collapsing-element-button-states";

// Accessibility
@use "@minvws/manon/skip-to-content";
```
