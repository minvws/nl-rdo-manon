<script context="module">
  export const breadcrumb = "Accordeon testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Accordeon testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Accordeon testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
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
            <button id="example-1-accordion-item-1">Voorbeeld-onderwerp 1</button>
            <div aria-labelledby="example-1-accordion-item-1">
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
            <button id="example-1-accordion-item-2">Voorbeeld-onderwerp 2</button>
            <div aria-labelledby="example-1-accordion-item-2">
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
    <button id="example-1-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-1-accordion-item-1">
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
    <button id="example-1-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-1-accordion-item-2">
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
`}
        />

        <h3><code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <section class="accordion">
          <div>
            <button id="example-2-accordion-item-1">Voorbeeld-onderwerp 1</button>
            <div aria-labelledby="example-2-accordion-item-1">
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
            <button id="example-2-accordion-item-2">Voorbeeld-onderwerp 2</button>
            <div aria-labelledby="example-2-accordion-item-2">
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
    <button id="example-2-accordion-item-1">Voorbeeld-onderwerp 1</button>
    <div aria-labelledby="example-2-accordion-item-1">
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
    <button id="example-2-accordion-item-2">Voorbeeld-onderwerp 2</button>
    <div aria-labelledby="example-2-accordion-item-2">
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
`}
        />
      </section>
    </div>
  </article>
</main>
