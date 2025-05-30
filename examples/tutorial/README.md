# Tutorial

## Introduction

...

You can explore the source code of this tutorial on ...

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
    "build": "sass --load-path=node_modules main.scss dist/main.css"
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

- `sass`: This is a CSS preprocessor, itt compiles our `.scss` files into
  `.css` files.

- `scripts.build`: This script compiles our `main.scss` file into a
  `dist/main.css` file, which we will use in our HTML.

Now, we can install the dependencies by running:

```bash
npm install
```

Once the installation is complete, we can start building our project.

## Create a basic page

In this section, we will create a basic page ...

First create a `index.html` file in the root of your project directory. This
will be the main HTML file for our page.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="dist/main.css" />
  </head>
  <body>
    <h1>Hello, Manon!</h1>
  </body>
</html>
```

Second, create a `main.scss` file in the root of your project directory. In
this file we're going to add the individual components that we're going to
use in our page, and the theme we want to apply.

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
We'll start with the header, main content, and footer sections. The Manon framework provides

### Header

First, we need to import the header navigation component in our `main.scss` file:

```scss
@use "@minvws/manon/application-base";

// Add the following:
@use "@minvws/manon/navigation";
@use "@minvws/manon/header-navigation";

@use "@minvws/manon-themes/basic-bold";
```

We need to add the necessary HTML elements to create a layout for our page.
Let's update our `index.html` file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="dist/main.css" />
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

For the main content, we will need to import the `layout-set`, `main`, and `section`

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

### Footer
