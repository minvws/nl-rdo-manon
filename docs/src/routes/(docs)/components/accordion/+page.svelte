<script context="module">
  export const breadcrumb = "Accordeon";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Accordeon</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Accordeon</h1>
        <p>
          Een accordeon biedt een verticale keuzelijst die je per onderdeel kunt openklappen om meer
          informatie te tonen.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie:
                <a href="#requirements">Bijbehorende bestanden</a>.
              </li>
              <li>
                Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer informatie
                zie:
                <a href="{base}/add-js">JavaScript toevoegen</a>.
              </li>
            </ul>
          </li>
          <li>
            Plaats een korte zichtbare tekst binnen een
            <code>&lt;button&gt;</code>. Bijvoorbeeld een omschrijvende titel of een vraag. Deze
            tekst is zichtbaar als de accordeon gesloten is. Zorg ervoor dat de gebruiker op basis
            van deze tekst kan bepalen of de onderliggende informatie waardevol is.
          </li>
          <li>
            Geef de <code>&lt;button&gt;</code> een unieke <code>id</code> en verwijs vanaf de
            <code>&lt;div&gt;</code> via een <code>aria-labelledby</code> naar de<code>id</code>
            van de <code>&lt;button&gt;</code> ten behoeve van toegankelijkheid.
          </li>
          <li>Groepeer de verborgen content binnen een <code>&lt;div&gt;</code>.</li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Standaard is het eerste onderdeel opengeklapt. Dit kan aangepast worden middels het
            <code>aria-expanded</code>-attribuut van de <code>&lt;button&gt;</code>. Zie
            onderstaande voorbeelden voor
            <a href="#accordion-default-closed">Standaard dichtgeklapt</a>
            en <a href="#accordion-default-open">Standaard opengeklapt</a>.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3><code>ul</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <ul class="accordion">
          <li>
            <button id="example-accordion-ul-item-1">Voorbeeld-onderwerp 1</button>
            <div aria-labelledby="example-accordion-ul-item-1">
              <h1>Titel van de content binnen het accordeon-element</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
                leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
                ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
                volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
                Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
                quis libero gravida, fringilla odio venenatis, condimentum lorem.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adepiscing elit.</li>
              </ul>
            </div>
          </li>
          <li>
            <button id="example-accordion-ul-item-2">Voorbeeld-onderwerp 2</button>
            <div aria-labelledby="example-accordion-ul-item-2">
              <h1>Titel van de content binnen het accordeon-element</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
                leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
                ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
                volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
                Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
                quis libero gravida, fringilla odio venenatis, condimentum lorem.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adepiscing elit.</li>
              </ul>
            </div>
          </li>
        </ul>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<ul class="accordion">
  <li>
    <button id="example-accordion-ul-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-accordion-ul-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
  <li>
    <button id="example-accordion-ul-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-accordion-ul-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </li>
</ul>
`}
        />

        <h3><code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="accordion">
          <div>
            <button id="example-accordion-div-item-1">Voorbeeld-onderwerp 1</button>
            <div aria-labelledby="example-accordion-div-item-1">
              <h1>Titel van de content binnen het accordeon-element</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
                leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
                ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
                volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
                Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
                quis libero gravida, fringilla odio venenatis, condimentum lorem.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adepiscing elit.</li>
              </ul>
            </div>
          </div>
          <div>
            <button id="example-accordion-div-item-2">Voorbeeld-onderwerp 2</button>
            <div aria-labelledby="example-accordion-div-item-2">
              <h1>Titel van de content binnen het accordeon-element</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
                leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
                ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
                volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
                Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
                quis libero gravida, fringilla odio venenatis, condimentum lorem.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adepiscing elit.</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="accordion">
  <div>
    <button id="example-accordion-div-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-accordion-div-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
  <div>
    <button id="example-accordion-div-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-accordion-div-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
</div>
`}
        />

        <h3><code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <section class="accordion">
          <div>
            <button id="example-accordion-div-item-1">Voorbeeld-onderwerp 1</button>
            <div aria-labelledby="example-accordion-div-item-1">
              <h1>Titel van de content binnen het accordeon-element</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
                leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
                ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
                volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
                Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
                quis libero gravida, fringilla odio venenatis, condimentum lorem.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adepiscing elit.</li>
              </ul>
            </div>
          </div>
          <div>
            <button id="example-accordion-div-item-2">Voorbeeld-onderwerp 2</button>
            <div aria-labelledby="example-accordion-div-item-2">
              <h1>Titel van de content binnen het accordeon-element</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas
                leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam
                ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat
                volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu.
                Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean
                quis libero gravida, fringilla odio venenatis, condimentum lorem.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adepiscing elit.</li>
              </ul>
            </div>
          </div>
        </section>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<section class="accordion">
  <div>
    <button id="example-accordion-div-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-accordion-div-item-1">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
  <div>
    <button id="example-accordion-div-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-accordion-div-item-2">
      <h1>Titel van de content binnen het accordeon-element</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit egestas leo, eu semper erat congue at. Nulla pellentesque nunc nisl, at elementum ex aliquam ac. Fusce sed justo ullamcorper, eleifend nibh a, fringilla lorem. Aliquam erat volutpat. Aenean risus sem, tempor at rhoncus in, suscipit hendrerit arcu. Suspendisse ultricies semper sapien eget lobortis. Phasellus ut sodales sem. Aenean quis libero gravida, fringilla odio venenatis, condimentum lorem.</p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Dolor sit amet</li>
        <li>Consectetur adepiscing elit.</li>
      </ul>
    </div>
  </div>
</section>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>accordion.scss</code></li>
          <li><code>accordion.js</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>accordion-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Accordeon list
            <ul>
              <li><a href="{base}/variables#gap">gap</a></li>
            </ul>
          </li>
          <li>
            <code>button</code>
            <ul>
              <li><a href="{base}/variables#padding">padding</a></li>
              <li>
                <a href="{base}/variables#justify-content">justify-content</a>
              </li>
              <li><a href="{base}/variables#font-size">font-size</a></li>
              <li>
                <a href="{base}/variables#font-weight">font-weight</a>
              </li>
              <li>
                <a href="{base}/variables#line-height">line-height</a>
              </li>
              <li>
                <a href="{base}/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/variables#text-color">text-color</a></li>
            </ul>
          </li>
          <li>
            Open en sluit icoon. Keuze uit <code>:before</code> of
            <code>:after</code>
            <ul>
              <li>
                <code>:before</code>
                <ul>
                  <li><a href="{base}/variables#icon">icon</a></li>
                </ul>
              </li>
              <li>
                <code>:after</code>
                <ul>
                  <li><a href="{base}/variables#icon">icon</a></li>
                  <li>
                    <a href="{base}/variables#margin-left">margin-left</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Content
            <ul>
              <li><a href="{base}/variables#padding">padding</a></li>
              <li><a href="{base}/variables#gap">gap</a></li>
              <li><a href="{base}/variables#font-size">font-size</a></li>
              <li>
                <a href="{base}/variables#font-weight">font-weight</a>
              </li>
              <li>
                <a href="{base}/variables#line-height">line-height</a>
              </li>
              <li>
                <a href="{base}/variables#border-width">border-width</a>
              </li>
              <li>
                <a href="{base}/variables#border-style">border-style</a>
              </li>
              <li>
                <a href="{base}/variables#border-color">border-color</a>
              </li>
              <li>
                <a href="{base}/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/variables#text-color">text-color</a></li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/accordion-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
