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

To use Manon in your project:

1.  Make sure your project is set up to use Sass, and that you have a Sass
    compiler installed. If your build system does not support Sass, you can
    install
    [the Sass command line tool](https://sass-lang.com/documentation/cli/dart-sass/).

2.  Install Manon and Manon Themes via npm:

    ```bash
    npm install @minvws/manon
    npm install @minvws/manon-themes
    ```

3.  In your project import the Manon framework, with a theme of your choice.

    ```scss
    // Import the iCore Open theme
    @use "@minvws/manon-themes/icore-open";

    // You can also import specific components as needed here:
    // @use "@minvws/manon/p"
    ```

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
