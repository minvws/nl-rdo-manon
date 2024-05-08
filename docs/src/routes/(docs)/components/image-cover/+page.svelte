<script context="module">
  export const breadcrumb = "Cover-afbeelding";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Cover-afbeelding</title>
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
        <h1>Cover-afbeelding</h1>
        <p>
          Afbeelding die de volledige breedte en hoogte van het uitgekozen object vult met de
          gekozen afbeelding.
        </p>

        <p>
          Voeg de class <code>image-cover</code> toe aan het omliggende element waar de
          <code>img</code> zich in bevind of direct op het <code>img</code>-element.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Op <code>div</code></h3>
        <div class="image-cover">
          <img src="$img/strand.jpg" alt="Foto van een strand" />
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="image-cover">
  <img src="/img/strand.jpg" alt="Foto van het strand in schoorl">
</div>
`}
        />

        <h3>Op <code>section</code></h3>
        <section class="image-cover">
          <img src="$img/strand.jpg" alt="Foto van een strand" />
        </section>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<section class="image-cover">
  <img src="/img/strand.jpg" alt="Foto van het strand in schoorl">
</section>
`}
        />

        <h3>Op een tegel</h3>
        <p>
          Dit voorbeeld maakt gebruik van
          <a href="{base}/components/tiles#single-tile">Tegelweergave</a>.
        </p>
        <div role="group" class="tile image-cover">
          <img src="$img/strand.jpg" alt="Foto van een strand" />
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
            amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
          </p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div role="group" class="tile image-cover">
  <img src="/img/strand.jpg" alt="Foto van een strand">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
</div>
`}
        />

        <h3>Op een groep met tegels</h3>
        <p>
          Dit voorbeeld maakt gebruik van
          <a href="{base}/components/tiles">Tegelweergave</a>.
        </p>
        <div class="tiles image-covers column-3">
          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="tiles image-covers column-3">
  <div role="group">
    <img src="/img/strand.jpg" alt="Foto van een strand">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <img src="/img/strand.jpg" alt="Foto van een strand">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <img src="/img/strand.jpg" alt="Foto van een strand">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
</div>
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
          <li><code>image/image-cover.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>image/image-cover-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <a href="{base}/documentation/variables#object-position">object-position</a>
          </li>
          <li><a href="{base}/documentation/variables#max-height">max-height</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/image-cover-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
