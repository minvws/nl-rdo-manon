# Manon Docs

```
$ docker build -t manon-docs .
$ docker run -it --rm -p 1313:1313 -v $(pwd):/site manon-docs server --bind=0.0.0.0 --baseURL=localhost:1313
 ```
