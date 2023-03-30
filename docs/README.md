# Manon Docs

## Introduction

Uses [Hugo](https://gohugo.io/) to generate a static documentation site for
manon.


## Developing

```
$ docker build -t manon-docs .
$ docker run -it --rm -p 1313:1313 -v $(pwd):/site manon-docs server --bind=0.0.0.0 --baseURL=localhost:1313
```

### Updating the theme

The theme is located in [themes/manon](themes/manon).
