FROM golang:1.19-alpine AS build

RUN go install github.com/gohugoio/hugo@v0.110.0

# ---

FROM alpine:3.16

COPY --from=build /go/bin/hugo /usr/bin/hugo

VOLUME /site
WORKDIR /site

EXPOSE 1313

ENTRYPOINT ["hugo"]
CMD []
