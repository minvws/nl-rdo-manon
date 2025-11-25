<p align="center">
  <a href="https://minvws.github.io/nl-rdo-manon" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/minvws/nl-rdo-manon/main/docs/src/img/logo.svg" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/minvws/nl-rdo-manon/main/docs/src/img/logo-dark.svg" />
      <img alt="Manon logo" src="https://raw.githubusercontent.com/minvws/nl-rdo-manon/main/docs/src/img/logo-dark.svg" width="200" />
    </picture>
  </a>
</p>

<h1 align="center">Manon</h1>

<p align="center">
    A flexible and accessible design framework for semantic HTML.
</p>

<p align="center">
  <a href="https://github.com/minvws/nl-rdo-manon/releases/latest"><img alt="github release" src="https://img.shields.io/github/v/release/minvws/nl-rdo-manon?style=for-the-badge&color=fa32c8&logo=github"></a>
  <a href="https://www.npmjs.com/package/@minvws/manon" ><img alt="npm package" src="https://img.shields.io/npm/v/@minvws/manon?style=for-the-badge&color=fa32c8&logo=npm"></a>
  <a href="https://github.com/minvws/nl-rdo-manon/actions/workflows/ci.yml?query=branch%3Amain" ><img alt="build status" src="https://img.shields.io/github/actions/workflow/status/minvws/nl-rdo-manon/ci.yml?branch=main&style=for-the-badge&logo=github"></a>
  <a href="https://github.com/minvws/rdo-icore-coordination/" ><img alt="part of icore" src="https://img.shields.io/badge/Part_of-iCore-ed7b3e?style=for-the-badge"></a>
</p>

---

## 📚 Documentation

The documentation is available at https://minvws.github.io/nl-rdo-manon. It is
generated from the [docs](./docs) directory on this repo.

> For Dutch, see [Dutch](README.md).

## 🙋 What is Manon?

Manon is a design framework based on the following principles:

### ✨ "Classless" when possible.

Manon prioritizes styling based on HTML structure, leading to clean and
maintainable code. This allows for efficient visual adjustments with minimal
HTML changes.

### 🫶 Accessibility

Manon strives to improve the accessibility of web applications by providing
accessible components that comply with the WCAG guidelines.

### 📦 As small as possible

Use only what you need. Manon consists of individual components that can be
imported separately, so you don't have to use the entire set.

### 🎨 Themes

In addition to offering a number of themes, Manon also allows you to create your
own. Each theme can override the components’ variables to achieve the desired
style.

## 🚀 Getting Started

### Manual installation

[Download Manon](https://github.com/minvws/nl-rdo-manon/archive/refs/heads/main.zip)
and link `manon-themes/dist/manon.min.css` in the `<head>` of your HTML file:

```html
<link rel="stylesheet" href="path/to/manon.min.css" />
```

### Installation via CDN

You can also use a Manon theme via the
[jsDelivr CDN](https://cdn.jsdelivr.net/npm/@minvws/manon-themes/). Add the
following line to the `<head>` of your HTML file:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@minvws/manon-themes/dist/manon.min.css"
/>
```

### Installation via npm

```console
npm install @minvws/manon @minvws/manon-themes
```

You can then import a theme from Manon and the complete component library into
your Sass file:

```scss
@use "@minvws/manon-themes/icore-open";
@use "@minvws/manon/components/bundles/all";
```

If you don’t want to use the full set, you have the option to import specific
components instead:

```scss
@use "@minvws/manon/components/breadcrumb-bar";
@use "@minvws/manon/components/checkbox";
```

Read more in the
[installation documentation](https://minvws.github.io/nl-rdo-manon/getting-started/customization)
about using Manon with Sass in your project for more customization options.

### Ready to use

You're now ready to use the components in your HTML. Follow the instructions in
the [Component library](https://minvws.github.io/nl-rdo-manon/components) on how
to use the components in your HTML. Each component has its own page with
examples and code snippets.

You can also follow the
[tutorial](https://minvws.github.io/nl-rdo-manon/getting-started/tutorial) to
learn how to use the components in a more structured way.

Additionally, we've provided
[some example implementations](https://github.com/minvws/nl-rdo-manon/tree/main/examples/)
in a few different frameworks.

## 🌱 Origin

Manon emerged from the need for a flexible design framework during the
vaccination campaign, where many websites had to be launched quickly under
strict branding and accessibility requirements from the Dutch government. The
Ministry of VWS developed this framework to simplify the building and management
of government-style compliant websites. This version has been adapted for
broader use.

## 📄 License

This repository follows the
[REUSE Specification v3.2](https://reuse.software/spec/). Please see
[REUSE.toml](./REUSE.toml), [LICENSES/](./LICENSES/) and the individual
`*.license` files for copyright and license information.
