---
title: Testpagina icoonknoppen
breadcrumb: Testpagina
---

# Testpagina icoonknoppen

## Met tekst

### `button` met `span`-icoon

<button>
  <span aria-hidden="true" class="icon icon-search"></span>
  Zoeken
</button>

### `button` met `svg`-icoon

<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  Zoeken
</button>

### `a` met `span`-icoon

<a class="button">
  <span aria-hidden="true" class="icon icon-search"></span>
  Zoeken
</a>

### `a` met `svg`-icoon

<a class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  Zoeken
</a>

## Zonder tekst

### `button` met pseudo-content-icoon

<button class="icon icon-search">Zoeken</button>

### `button` met `span`-icoon

<button>
  <span aria-hidden="true" class="icon icon-search"></span>
  <span class="visually-hidden">Zoeken</span>
</button>

### `button` met `svg`-icoon

<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  <span class="visually-hidden">Zoeken</span>
</button>

### `a.button` met pseudo-content-icoon

<a class="button icon icon-search">Zoeken</a>

### `a.button` met `span`-icoon

<a class="button">
  <span aria-hidden="true" class="icon icon-search"></span>
  <span class="visually-hidden">Zoeken</span>
</a>

### `a.button` met `svg`-icoon

<a class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  <span class="visually-hidden">Zoeken</span>
</a>

## Zonder achtergrond (`icon-only`)

### `button.icon-only` met pseudo-content-icoon

<button class="icon-only icon icon-search">Zoeken</button>

### `button.icon-only` met `span`-icoon

<button class="icon-only">
  <span aria-hidden="true" class="icon icon-search"></span>
  <span class="visually-hidden">Zoeken</span>
</button>

### `button.icon-only` met `svg`-icoon

<button class="icon-only">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  <span class="visually-hidden">Zoeken</span>
</button>

### `a.button.icon-only` met pseudo-content-icoon

<a class="button icon-only icon icon-search">Zoeken</a>

### `a.button.icon-only` met `span`-icoon

<a class="button icon-only">
  <span aria-hidden="true" class="icon icon-search"></span>
  <span class="visually-hidden">Zoeken</span>
</a>

### `a.button.icon-only` met `svg`-icoon

<a class="button icon-only">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  <span class="visually-hidden">Zoeken</span>
</a>
