# Tutorial

## Introduction

In this tutorial, we’ll use the Manon framework to build a basic web page.
We’ll cover the following topics:

- Setting up a Manon project
- Creating a basic page
- Creating a layout with header, main content, and footer
- Adding components to the page

We will do this by incrementally updating our project, following the likely steps
you would take when building a web page with Manon.

You can explore the final project and its source code ...

## Installation

For this tutorial, we will be using `npm` to manage our dependencies. So, make
sure you have `npm` installed on your system. When you have this installed,
we're ready to start building our Manon project.

First, we need to create a new project directory and initialize it with npm.

```bash
mkdir manon-tutorial
cd manon-tutorial
npm init -y
```

Let's update our `package.json` to include the necessary dependencies.

```json
{
  "scripts": {
    "build": "sass --load-path=node_modules main.scss css/main.css"
  },
  "dependencies": {
    "@minvws/manon": "latest",
    "@minvws/manon-themes": "latest"
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
  us to apply different styles to our components easily. We've provided
  a basic theme called `basic-bold` that we will use in our project.

- `sass`: This will install the `sass` command line utility, which we will use to
  compile our sass files into CSS. This will be used to compile our `main.scss`
  file into a `css/main.css` file. And this will be called by the `build` script.

- `scripts.build`: This script calls the `sass` command line utility to compile
  our `main.scss` file into a `css/main.css` file, which we will use in our HTML.

Now, we can install the dependencies we defined by running:

```bash
npm install
```

Once the installation is complete, we can start building our project.

## Create a basic page

In this section, we will create a basic page just to get started with, and
make sure everything is set up correctly.

First create a `index.html` file in the root of your project directory. This
will be the main HTML file for our page.

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

Second, create a `main.scss` file in the root of your project directory. In
this file we're going to add the individual components that we're going to use
in our page, and the theme we want to apply. Throughout the tutorial, we'll be
adding more components to these files as we build out our page.

```scss
// Import the Manon framework and its components
@use "@minvws/manon/application-base";

// Theme that we're going to use for our page
@use "@minvws/manon-themes/basic-bold";
```

Whenever you want to use additional components, you can import them in this
`main.scss` file. See the available components that you can use in the
[Manon documentation](https://manon.minvws.nl/). (TODO: add link to)

Now, we can build our styles by running the following command:

```bash
npm run build
```

Open the `index.html` file in your browser to see the result. You should see a
header with the text "Hello, Manon!" styled with the Manon framework.

## Layout

We're going to create a basic layout for our page using the Manon framework.
We'll start with the header, main content, and footer sections.

### Header

First, we need to import the header navigation component in our `main.scss` file:

```scss
@use "@minvws/manon/application-base";

// Add the following:
@use "@minvws/manon/header-navigation";

@use "@minvws/manon-themes/basic-bold";
```

Second we need to add the necessary HTML elements to create a layout for our
page. Let's update our `index.html` file:

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
    <!-- Add the following: -->
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```

### Main

For the main content, we will need to import the `layout-set`, `main`, and
`section` components into our `main.scss` file. This will allow us to create a
structured layout for our page.

```scss
@use "@minvws/manon/application-base";
@use "@minvws/manon/navigation";
@use "@minvws/manon/header-navigation";

// Add the following:
@use "@minvws/manon/layout-set";
@use "@minvws/manon/main";
@use "@minvws/manon/section";

@use "@minvws/manon-themes/basic-bold";
```

Next, we will update our `index.html` file to include the main content area.

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

    <!-- Add the following: -->
    <main>
      <section>
        <h1>Hello, Manon!</h1>
        <p>
          Welcome to the Manon tutorial. In this tutorial, we will learn how to
          use Manon to create a basic web page.
        </p>
        <h2>Welcome to the Manon Tutorial</h2>
        <p>
          Welcome to the Manon tutorial. In this tutorial, we will learn how to
          use Manon to create a basic web page.
        </p>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </section>
    </main>
  </body>
</html>
```

Now, we have a basic layout with a header and main content area. The main
content area should contain a section that includes a heading and
paragraph. You can add more content to the section as needed.

TODO: Add link to relevant documentation for adding more content

### Footer

To add a footer to our page, we will import the footer component into our
`main.scss` file. This will allow us to create a footer section with
navigation links.

```scss
@use "@minvws/manon/application-base";
@use "@minvws/manon/header-navigation";
@use "@minvws/manon/layout-set";
@use "@minvws/manon/main";
@use "@minvws/manon/section";

// Add the following:
@use "@minvws/manon/footer";

@use "@minvws/manon-themes/basic-bold";
```

Next, we will update our `index.html` file to include the footer section.

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

    <!-- Add the following: -->
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

## Working with components

TODO: perhaps add an explanation on how to customize a component.

## Putting it all together

TODO: add a final section that shows the complete code of the `index.html` and  
`main.scss` files.

TODO: add final project structure, or show this in the beginning

TODO: prior we're missing some element attributes, or configuration that
are important for a11y, we should mention it.
