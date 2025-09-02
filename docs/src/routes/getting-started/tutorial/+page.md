---
title: Tutorial
breadcrumb: Tutorial
---

## Introduction

In this tutorial, we’ll use the Manon framework to build a basic web page. We’ll
cover the following topics:

- Setting up a Manon project
- Creating a basic page
- Creating a layout with header, main content, and footer
- Adding components to the page

We will do this by incrementally updating our project, following the likely
steps you would take when building a web page with Manon.

You can
[explore the final project and its source code on GitHub](https://github.com/minvws/nl-rdo-manon/tree/main/examples/tutorial).

## Installation

For this tutorial, we will be using `npm` to manage our dependencies. So, make
sure you have `npm` installed on your system. When you have this installed,
we're ready to start building our Manon project.

First, we need to create a new project directory and initialize it with npm.

```plaintext
# Create a new directory for the project
mkdir manon-tutorial
cd manon-tutorial

# Initialize the project with npm
npm init -y
```

The `npm init -y` command will create a `package.json` file with default values.
This file will be used to manage our project dependencies and scripts.

Let's update our `package.json` to include the necessary dependencies. For now
we'll just replace the contents of the `package.json` file with the following:

```plaintext
{
  "scripts": {
    "build": "sass --load-path=node_modules main.scss css/main.css"
  },
  "dependencies": {
    "@minvws/manon": "^17.0.0-rc.1",
    "@minvws/manon-themes": "^17.0.0-rc.1"
  },
  "devDependencies": {
    "sass": "^1.89.0"
  }
}
```

Let's break down what we've defined here:

- `@minvws/manon`: This is the core Manon framework that provides the basic
  styles and components.

- `@minvws/manon-themes`: This package contains the themes for Manon, allowing
  us to apply different styles to our components easily. We've provided a basic
  theme called `icore-open` that we will use in our project.

- `sass`: This will install the `sass` command line utility, which we will use
  to compile our sass files into CSS. This will be used to compile our
  `main.scss` file into a `css/main.css` file. And this will be called by the
  `build` script.

- `scripts.build`: This script calls the `sass` command line utility to compile
  our `main.scss` file into a `css/main.css` file, which we will use in our
  HTML.

Now, we can install the dependencies we defined by running:

```plaintext
npm install
```

This command will read the `package.json` file and install the necessary
dependencies into a `node_modules` directory in our project. It will also create
a `package-lock.json` file that locks the versions of the installed
dependencies, ensuring that the same versions are used when the project is
installed in the future.

The installation of the dependencies will be complete once the `npm install`
command is finished. Once the installation is complete, we can start building
our project.

## Create a basic page

In this section, we will create a basic page just to get started with, and make
sure everything is set up correctly. First create a `index.html` file in the
root of your project directory. This will be the main HTML file for our page.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <h1>Hello, Manon!</h1>
  </body>
</html>
```

Second, create a `main.scss` file in the root of your project directory. In this
file we're going to add the individual components that we're going to use in our
page, and the theme we want to apply. Throughout the tutorial, we'll be adding
more components to these files as we expand our page.

```scss
// Theme that we're going to use for our page
@use "@minvws/manon-themes/icore-open";
```

Whenever you want to use additional components, you can import them in this
`main.scss` file. See the available components that you can use in the
[Manon documentation](https://minvws.github.io/nl-rdo-manon/).

Now, we can build our styles by running the following command:

```plaintext
npm run build
```

This command will execute the `build` script defined in our `package.json`,
which will compile our `main.scss` file into a `css/main.css` file. This CSS
file will be linked in our `index.html` file, allowing us to apply the styles to
our page.

Open the `index.html` file in your browser to see the result. You should see a
header with the text "Hello, Manon!" styled with the Manon framework.

## Layout

We're going to create a basic layout for our page using the Manon framework.
We'll start with the header, main content, and footer sections.

### Header

First, we need to import the
[header navigation component](https://minvws.github.io/nl-rdo-manon/components/header-navigation)
in our `main.scss` file. So, add the following import to your `main.scss` file:

```scss
// Header navigation
@use "@minvws/manon/header-navigation";
@use "@minvws/manon/header-navigation-content-wrapper";
@use "@minvws/manon/header-navigation-link";
@use "@minvws/manon/header-navigation-link-visited";
@use "@minvws/manon/header-navigation-link-hover";
@use "@minvws/manon/header-navigation-link-active";
@use "@minvws/manon/header-navigation-link-focus";
@use "@minvws/manon/header-navigation-collapsible";
@use "@minvws/manon/header-navigation-collapsible-collapsing-element-button";
@use "@minvws/manon/header-navigation-collapsible-collapsing-element-button-states";

// Accessibility
@use "@minvws/manon/skip-to-content";
```

Our `main.scss` file should now look like this:

```scss
// Theme that we're going to use for our page
@use "@minvws/manon-themes/icore-open";

// Header navigation
@use "@minvws/manon/header-navigation";
@use "@minvws/manon/header-navigation-content-wrapper";
@use "@minvws/manon/header-navigation-link";
@use "@minvws/manon/header-navigation-link-visited";
@use "@minvws/manon/header-navigation-link-hover";
@use "@minvws/manon/header-navigation-link-active";
@use "@minvws/manon/header-navigation-link-focus";
@use "@minvws/manon/header-navigation-collapsible";
@use "@minvws/manon/header-navigation-collapsible-collapsing-element-button";
@use "@minvws/manon/header-navigation-collapsible-collapsing-element-button-states";

// Accessibility
@use "@minvws/manon/skip-to-content";
```

Second we're going to add the following HTML to our `index.html` file to create
a header with navigation links:

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Skip to content</a>
  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```

Now, our `index.html` file should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <header>
      <a href="#main-content" class="button focus-only skip-to-content">Skip to content</a>
      <nav
        data-open-label="Menu"
        data-close-label="Sluit menu"
        data-media="(min-width: 30rem)"
        aria-label="Hoofdnavigatie"
        class="collapsible"
      >
        <div class="collapsing-element">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <h1>Hello, Manon!</h1>
  </body>
</html>
```

### Main

For the main content, we will need to import the
[`main`](https://minvws.github.io/nl-rdo-manon/components/main),
[`section`](https://minvws.github.io/nl-rdo-manon/components/section) and
[layout-set](https://minvws.github.io/nl-rdo-manon/components/layout-set),
components into our `main.scss` file. This will allow us to create a structured
layout for our page.

Add the following imports to your `main.scss` file:

```scss
//Layout
@use "@minvws/manon/layout-set";
@use "@minvws/manon/main";
@use "@minvws/manon/section";
```

Now, our `main.scss` file should look like this:

```scss
// Theme that we're going to use for our page
@use "@minvws/manon-themes/icore-open";

// Header navigation
// ...

// Accessibility
// ...
@use "@minvws/manon/skip-to-content";

// Layout
@use "@minvws/manon/layout-set";
@use "@minvws/manon/main";
@use "@minvws/manon/section";
```

Next, we will update our `index.html` file to include the main content area. Add
the following HTML to your `index.html` file, just after the header section,
replacing the existing `<h1>` tag:

```html
<main>
  <section>
    <h1>Hello, Manon!</h1>
    <h2>Welcome to the Manon Tutorial</h2>
    <p>
      Welcome to the Manon tutorial. In this tutorial, we will learn how to use Manon to create a
      basic web page.
    </p>
    <p>We’ll cover the following topics:</p>
    <ol>
      <li>Setting up a Manon project</li>
      <li>Creating a basic page</li>
      <li>Creating a layout with header, main content, and footer</li>
      <li>Adding components to the page</li>
    </ol>
  </section>
</main>
```

Now, our `index.html` file should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <header>
      <!-- .... -->
    </header>
    <main>
      <section>
        <h1>Hello, Manon!</h1>
        <h2>Welcome to the Manon Tutorial</h2>
        <p>
          Welcome to the Manon tutorial. In this tutorial, we will learn how to use Manon to create
          a basic web page.
        </p>
        <p>We’ll cover the following topics:</p>
        <ol>
          <li>Setting up a Manon project</li>
          <li>Creating a basic page</li>
          <li>Creating a layout with header, main content, and footer</li>
          <li>Adding components to the page</li>
        </ol>
      </section>
    </main>
  </body>
</html>
```

Now, we have a basic layout with a header and main content area. The main
content area should contain a section that includes a heading and paragraph. You
can add more content to the section as needed.

### Footer

To add a footer to our page, we will import the
[footer component](https://minvws.github.io/nl-rdo-manon/components/footer) into
our `main.scss` file. This will allow us to create a footer section with
navigation links.

Add the following import to your `main.scss` file:

```scss
@use "@minvws/manon/footer";
```

Now, our `main.scss` file should look like this:

```scss
// Theme that we're going to use for our page
@use "@minvws/manon-themes/icore-open";

// Header navigation
// ...

// Accessibility
@use "@minvws/manon/skip-to-content";

// Layout
@use "@minvws/manon/layout-set";
@use "@minvws/manon/main";
@use "@minvws/manon/section";
@use "@minvws/manon/footer";
```

Next, we will update our `index.html` file to include the footer section. Add
the following HTML to your `index.html` file, just before the closing `</body>`
tag:

```html
<footer>
  <nav>
    <h1>Manon Tutorial</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</footer>
```

Now, our `index.html` file should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <header>
      <!-- .... -->
    </header>
    <main>
      <!-- .... -->
    </main>
    <footer>
      <nav>
        <h1>Manon Tutorial</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </footer>
  </body>
</html>
```

## Putting it all together

Now that we have our basic layout with a header, main content area, and footer,
we can start adding more components to our page. We can use the Manon framework
to add various components such as buttons, forms, and more. See the
[Manon documentation - Components](/components) for a list of available
components and how to use them.
