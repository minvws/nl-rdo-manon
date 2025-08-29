---
title: Header Navigation
breadcrumb: Header Navigation
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Header Navigation</h1>

De header-navigation component biedt een flexibele en toegankelijke
navigatiebalk voor websites. Het ondersteunt verschillende configuraties, zoals
een logo, zoekveld, en meerdere menu's. Deze component is ontworpen om te
voldoen aan de toegankelijkheidsrichtlijnen en biedt een responsieve ervaring.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
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

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Alleen navigatie

<div class="resize">
  <iframe src="/examples/header-navigation" title="Voorbeeld" height="240px"></iframe>
</div>

```html
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
```

### Voorbeeld: Navigatie met content wrapper

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-content-wrapper"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

```html
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
```

### Voorbeeld: Navigatie met zoekveld

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-search"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

```html
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

### Voorbeeld: Navigatie en logo

<div class="resize">
  <iframe src="/examples/header-navigation-with-logo" title="Voorbeeld" height="240px"
  ></iframe>
</div>

```html
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
      <a href="/" class="logo"> <img src="/img/logo.svg" alt="Placeholder logo" />Manon </a>

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

### Voorbeeld: Navigatie met meerdere menu's

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-multiple-menus"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

```html
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
```

### Voorbeeld: Navigatie met formulier-knop

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-form-button"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

```html
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
          <li>
            <a href="/examples/header-navigation-with-form-button" class="avatar">A</a>
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

### Voorbeeld: Navigatie met logo bovenaan

<div class="resize">
  <iframe
    src="/examples/header-navigation-with-logo-above"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <a href="/" class="logo"> <img src="/img/logo.svg" alt="Placeholder logo" />Manon </a>

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
