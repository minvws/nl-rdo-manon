# Manon Django Example Implementation

## Introduction

This is an example project that demonstrates how to integrate Manon into a
Django project.

> [!CAUTION] This project is only an example and is not intended to be used in
> production.

The following versions are used in this example project:

| Stack        | Version |
| ------------ | ------- |
| python       | 3.12    |
| django       | 5.0     |
| node         | 22      |
| manon        | 18.0.0  |
| manon-themes | 18.0.0  |

## Project structure

The project is structured as follows:

```
.
├── django-project
│   ├── app
│   │   ├── app
│   │   ├── polls
│   │   ├── static
│   │   ├── templates
│   │   ├── db.sqlite3
│   │   └── manage.py
│   ├── assets
│   │   ├── img
│   │   └── scss
│   │       ├── main.scss
│   │       └── manon-components.scss
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── requirements.txt
│   └── run.sh
├── docker-compose.yml
└── README.md
```

First to note is the location of the `assets` and `static` folders this is
arbitrarily chosen and you're free to place and structure them however you want.
The destinction made here is that `assets` is used for source files (e.g. scss,
js, images) and `static` is used for the compiled files (e.g. css, js, images).
Be sure to check the
[How to manage static files (e.g. images, JavaScript, CSS)](https://docs.djangoproject.com/en/5.0/howto/static-files/)
and the
[How to deploy static files](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/)
of the official Django documentation for more information.

In this example we've created a `main.scss` file in the `assets/scss` folder
which imports the `manon-components.scss` file. Additionally, we import the
`@minvws/manon-themes/icore-open` theme. These dependencies are managed by npm
and the `package.json` file.

> [!NOTE] This example doesn't use `pnpm`, meaning local changes done to `manon`
> or `manon-themes` will not be reflected in the example project.

## Running the example

A docker-compose file is provided to run the example project. To run the example
project, execute the following command:

```bash
docker-compose up
```

This will build the Django project and start the server. You can access the
Django project by navigating to `http://localhost:8000` in your browser. A basic
poll app is provided as an example. And you'll be able to create a poll from the
admin interface by navigating to `http://localhost:8000/admin`.
