---
title: Getting Started with Manon
---

# Quickstart

## Prerequisites

Make sure that your project is setup to use Sass and that you have a Sass
compiler installed. If your build system does not support Sass, you can 
install [the Sass command line tool](https://sass-lang.com/documentation/cli/dart-sass/).

```console
npm install sass
```

## Install with npm

We need to install the Manon package and the themes package to use the
components and styles.

```console
npm install @minvws/manon
npm install @minvws/manon-themes
```

## Import

In your Sass file, you can import the Manon framework and a theme of your
choice.

```scss
// Import the Manon framework and its components
@use "@minvws/manon/application-base";

// You can also import specific components as needed here:

// Import the iCore Open theme 
@use "@minvws/manon-themes/icore-open";
```

## Usage

You're now ready to use the components in your HTML. Follow the instructions
in the [Component library](https://minvws.github.io/nl-rdo-manon/components),
on how to use the components in your HTML. Each component has its own
page with examples and code snippets.

You can also follow the [tutorial](https://github.com/minvws/nl-rdo-manon/tree/main/examples/tutorial)
to learn how to use the components in a more structured way.

Additionally we've provided [some example
implementations](https://github.com/minvws/nl-rdo-manon/tree/main/examples/) in
a few different framework.
