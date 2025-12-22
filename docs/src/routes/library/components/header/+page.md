---
title: Header
breadcrumb: Header
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

De header component biedt een flexibele en toegankelijke responsieve
navigatiebalk voor websites.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/header";
```

In de voorbeelden wordt ook gebruikt gemaakt van de skip to content knop. Voor meer informatie hierover zie <a href="skip-to-content">Skip to content</a>

```scss
@use "@minvws/manon/components/skip-to-content";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Alleen navigatie

<div class="resize">
  <iframe src="/snippets/header-navigation" title="Voorbeeld"></iframe>
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
        <li><a href="#">Voorbeeld-link 1</a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
      </ul>
    </div>
  </nav>
</header>

<main id="main-content"></main>
```

### Voorbeeld: Navigatie met content wrapper

<div class="resize">
  <iframe src="/snippets/header-navigation-with-content-wrapper" title="Voorbeeld"></iframe>
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
          <li><a href="#">Voorbeeld-link 1</a></li>
          <li><a href="#">Voorbeeld-link 2</a></li>
          <li><a href="#">Voorbeeld-link 3</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>
```

### Voorbeeld: Navigatie met zoekveld

<div class="resize">
  <iframe src="/snippets/header-navigation-with-search" title="Voorbeeld"></iframe>
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
        <li><a href="#">Voorbeeld-link 1</a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
      </ul>

      <form action="" class="inline">
        <div>
          <label for="voorbeeld-1-date-1-start" class="visually-hidden">Zoeken</label>
          <div class="combined-field">
            <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
            <button aria-label="zoeken"><span class="icon icon-search"></span></button>
          </div>
        </div>
      </form>
    </div>
  </nav>
</header>
```

### Voorbeeld: Navigatie en logo

<div class="resize icore-open">
  <iframe src="/snippets/header-navigation-with-logo/icore-open" title="Voorbeeld"></iframe>
</div>

<div class="resize rijkshuisstijl-2008">
  <iframe src="/snippets/header-navigation-with-logo/rijkshuisstijl-2008" title="Voorbeeld"></iframe>
</div>

<div class="resize kat">
  <iframe src="/snippets/header-navigation-with-logo/kat" title="Voorbeeld"></iframe>
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
      <a href="#" class="logo"> <img src="$img/logo.svg" alt="Placeholder logo" />Manon </a>

      <div class="collapsing-element">
        <ul>
          <li><a href="#">Voorbeeld-link 1</a></li>
          <li><a href="#">Voorbeeld-link 2</a></li>
          <li><a href="#">Voorbeeld-link 3</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>
```

### Voorbeeld: Navigatie met meerdere menu's

<div class="resize">
  <iframe src="/snippets/header-navigation-with-multiple-menus" title="Voorbeeld"></iframe>
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
          <li><a href="#">Voorbeeld-link 1</a></li>
          <li><a href="#">Voorbeeld-link 2</a></li>
          <li><a href="#">Voorbeeld-link 3</a></li>
        </ul>

        <ul>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>
```

### Voorbeeld: Navigatie met formulier-knop

<div class="resize">
  <iframe src="/snippets/header-navigation-with-form-button" title="Voorbeeld"></iframe>
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
          <li><a href="#">Voorbeeld-link 1</a></li>
          <li><a href="#">Voorbeeld-link 2</a></li>
          <li><a href="#">Voorbeeld-link 3</a></li>
        </ul>

        <ul class="actions">
          <li><a href="#" class="avatar">A</a></li>
          <li>
            <form action="#" method="POST" class="inline">
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
