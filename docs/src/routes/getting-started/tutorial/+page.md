---
title: Tutorial
breadcrumb: Tutorial
---

## Introductie

In deze tutorial gebruiken we het Manon-framework om een basiswebpagina te
bouwen. We behandelen de volgende onderwerpen:

- Een Manon-project opzetten
- Een basispagina maken
- Een layout maken met `header`, `main` en `footer`
- Componenten aan de pagina toevoegen

We doen dit door ons project stapsgewijs bij te werken, volgens de stappen die
je waarschijnlijk zou nemen bij het bouwen van een webpagina met Manon.

Je kunt
[het eindproject en de broncode op GitHub bekijken](https://github.com/minvws/nl-rdo-manon/tree/main/examples/tutorial).

## Installatie

Voor deze tutorial gebruiken we `npm` om onze dependencies te beheren. Zorg er
dus voor dat `npm` op je systeem is geïnstalleerd. Zodra dit is geïnstalleerd,
kunnen we beginnen met het bouwen van ons Manon-project.

Eerst moeten we een nieuwe projectmap aanmaken en initialiseren met npm.

```plaintext
# Maak een nieuwe map voor het project
mkdir manon-tutorial
cd manon-tutorial

# Initialiseer het project met npm
npm init -y
```

Het commando `npm init -y` maakt een `package.json`-bestand aan met
standaardwaarden. Dit bestand wordt gebruikt om onze dependencies en scripts te
beheren.

Laten we ons `package.json` bijwerken om de benodigde afhankelijkheden op te
nemen. Voor nu vervangen we gewoon de inhoud van het `package.json`-bestand door
het volgende:

```plaintext
{
  "scripts": {
    "build": "sass --load-path=node_modules main.scss css/main.css"
  },
  "dependencies": {
    "@minvws/manon": "^18.0.0",
    "@minvws/manon-themes": "^18.0.0"
  },
  "devDependencies": {
    "sass": "^1.89.0"
  }
}
```

Laten we uitleggen wat we hier hebben gedefinieerd:

- `@minvws/manon`: Dit is het framework van Manon dat de basisstijlen en
  componenten levert.

- `@minvws/manon-themes`: Dit pakket bevat de thema's voor Manon, waardoor we
  eenvoudig verschillende stijlen op onze componenten kunnen toepassen. We
  hebben een basisthema genaamd `icore-open` dat we in ons project gaan
  gebruiken.

- `sass`: Dit installeert de `sass`-commandline-tool, die we gebruiken om onze
  sass-bestanden te compileren naar CSS. Hiermee wordt ons `main.scss`-bestand
  omgezet in een `css/main.css`-bestand. Dit wordt aangeroepen door het
  build-script.

- `scripts.build`: Dit script roept de `sass`-commandline-tool aan om ons
  `main.scss`-bestand te compileren naar css/main.css, dat we in onze HTML
  gebruiken.

Nu kunnen we de dependencies installeren door het volgende commando uit te
voeren:

```console
npm install
```

Dit commando leest het `package.json`-bestand en installeert de benodigde
dependencies in een `node_modules`-directory in ons project. Het maakt ook een
`package-lock.json`-bestand aan dat de versies van de geïnstalleerde
dependencies vastzet, zodat dezelfde versies in de toekomst worden gebruikt.

De installatie van de dependencies is voltooid zodra het commando `npm install`
klaar is. Daarna kunnen we beginnen met het bouwen van ons project.

## Een basispagina maken

In deze sectie maken we een basispagina om te beginnen en ervoor te zorgen dat
alles correct is ingesteld. Maak eerst een `index.html`-bestand in de root van
je projectdirectory. Dit wordt het hoofd-HTML-bestand voor onze pagina.

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
    <h1 class="page-title">Hallo, Manon!</h1>
  </body>
</html>
```

Maak vervolgens een `main.scss`-bestand in de root van je projectdirectory. In
dit bestand voegen we de afzonderlijke componenten toe die we op onze pagina
gaan gebruiken, evenals het thema dat we willen toepassen. Gedurende de tutorial
voegen we meer componenten toe aan deze bestanden naarmate we onze pagina
uitbreiden.

```scss
// main.scss

// Thema dat we gaan gebruiken voor onze pagina
@use "@minvws/manon-themes/icore-open";
```

Wanneer je extra componenten wilt gebruiken, kun je ze importeren in dit
`main.scss`-bestand. Zie de beschikbare componenten in de
[Manon documentatie](/library).

Nu kunnen we onze stijlen bouwen door het volgende commando uit te voeren:

```console
npm run build
```

Dit commando voert het build-script uit dat is gedefinieerd in ons
`package.json` en compileert ons `main.scss`-bestand naar `css/main.css`. Dit
CSS-bestand wordt gekoppeld in ons `index.html`-bestand, zodat de stijlen op
onze pagina worden toegepast.

Open het `index.html`-bestand in je browser om het resultaat te zien. Je zou een
koptekst moeten zien met de tekst "Hallo, Manon!" gestyled met het
Manon-framework.

## Layout

We gaan een basislayout maken voor onze pagina met het Manon-framework. We
beginnen met de header, hoofdinhoud en footer-secties.

### Header

Eerst moeten we de
[header navigation component](/library/components/header-navigation)
importeren in ons `main.scss`-bestand:

```scss
// main.scss

// Thema dat we gaan gebruiken voor onze pagina
@use "@minvws/manon-themes/icore-open";

// Importeer de header navigation component
@use "@minvws/manon/components/header";
```

Vervolgens voegen we de volgende HTML toe aan ons `index.html`-bestand om een
header met navigatielinks te maken:

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Sla inhoud over</a>
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
        <li><a href="#">Over</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```

Nu zou ons index.html-bestand er als volgt uit moeten zien:

```html
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manon Tutorial</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <header>
      <a href="#main-content" class="button focus-only skip-to-content">Sla inhoud over</a>
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
            <li><a href="#">Over</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <h1 class="page-title">Hallo, Manon!</h1>
  </body>
</html>
```

### Main

Voor de hoofdinhoud moeten we de [`main` component](/library/layout/main), en
het [`section` component](/library/layout/section) importeren in ons
`main.scss`-bestand. Hiermee kunnen we een gestructureerde layout voor onze
pagina maken.

Voeg de volgende imports toe aan je `main.scss`:

```scss
@use "@minvws/manon/main";
@use "@minvws/manon/section";
```

Ons `main.scss`-bestand zou er nu als volgt uit moeten zien:

```scss
// main.scss

// Theme that we're going to use for our page
@use "@minvws/manon-themes/icore-open";

// Layout
@use "@minvws/manon/main";
@use "@minvws/manon/section";
```

Vervolgens updaten we ons `index.html`-bestand om het hoofdinhoudgebied op te
nemen. Voeg de volgende HTML toe, direct na de headersectie, ter vervanging van
de bestaande `<h1>`-tag:

```html
<main>
  <section>
    <h1 class="page-title">Hallo, Manon!</h1>
    <h2>Welkom bij de Manon Tutorial</h2>
    <p>
      Welkom bij de Manon-tutorial. In deze tutorial leren we hoe we Manon kunnen gebruiken om een
      basiswebpagina te maken.
    </p>
    <p>We behandelen de volgende onderwerpen:</p>
    <ol>
      <li>Het opzetten van een Manon-project</li>
      <li>Het maken van een basispagina</li>
      <li>Het creëren van een layout met header, hoofdinhoud en footer</li>
      <li>Het toevoegen van componenten aan de pagina</li>
    </ol>
  </section>
</main>
```

### Footer

Om een footer toe te voegen aan onze pagina importeren we de
[`footer` component]({base}/library/layout/footer) in ons `main.scss`-bestand.
Hiermee kunnen we een `footer`-sectie aan onze pagina toevoegen.

Voeg de volgende import toe aan je `main.scss`:

```scss
@use "@minvws/manon/footer";
```

Ons `main.scss`-bestand zou er nu als volgt uit moeten zien:

```scss
// main.scss

// Theme that we're going to use for our page
@use "@minvws/manon-themes/icore-open";

// Layout
@use "@minvws/manon/main";
@use "@minvws/manon/section";
@use "@minvws/manon/footer";
```

Vervolgens updaten we ons `index.html`-bestand om de footer-sectie op te nemen.
Voeg de volgende HTML toe, net voor de sluitende `</body>`-tag:

```html
<footer>
  <nav>
    <h1>Manon Tutorial</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Over</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</footer>
```

## Alles samenvoegen

Nu we onze basislayout hebben met `header`, `main` en `footer`, kunnen we
beginnen met het toevoegen van meer componenten aan onze pagina. We kunnen het
Manon-framework gebruiken om verschillende componenten zoals knoppen,
formulieren en meer toe te voegen. Zie de
[Manon-documentatie - Componenten]({base}/library) voor een lijst van beschikbare
componenten en hoe je ze kunt gebruiken.
