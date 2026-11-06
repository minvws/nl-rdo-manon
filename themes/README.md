# @minvws/manon-themes

This package provides a collection of themes for the
[`@minvws/manon`](https://github.com/minvws/nl-rdo-manon) design system. It is
intended to be used alongside the core `@minvws/manon` package. Please refer to
the [main project](https://github.com/minvws/nl-rdo-manon) for documentation on
how to use the design system and its components.

## Installation

To install this package, run the following command:

```console
npm install @minvws/manon-themes
```

You must also have the dependency, `@minvws/manon`, installed:

```console
npm install @minvws/manon
```

## Usage

There are two ways to use a theme:

- **Prebuilt CSS**: the files in `dist/` (also available from the
  [jsDelivr CDN](https://cdn.jsdelivr.net/npm/@minvws/manon-themes/)) contain a
  theme **and all components**. Link one of them in your HTML and you are done.
- **Sass**: importing a theme with `@use` only configures Manon: it sets the
  Sass variables, loads the fonts and generates the icon classes. It does **not**
  include any components, so import those after the theme, either all at once
  or only the ones you need:

  ```scss
  @use "@minvws/manon-themes/icore-open";

  // All components and utility classes
  @use "@minvws/manon/components/bundles/all";

  // Or only the components you need
  // @use "@minvws/manon/components/base";
  // @use "@minvws/manon/components/button";
  ```

  Always import the theme first: it configures `@minvws/manon/variables`,
  which is no longer possible once a component has loaded them.

### Available Themes

#### iCore Open

The standard theme for iCore Open applications.

```scss
@use "@minvws/manon-themes/icore-open";
```
