<script module>
  export const breadcrumb = "Cover-afbeelding";
</script>

<script lang="ts">
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
      <li><a href="#quickstart">Snelstart</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>
  <article>
    <h1 class="page-title">Cover-afbeelding</h1>
    <div class="content-wrapper">
      <section>
        <h2 id="introduction">Introductie</h2>
        <p>
          Afbeelding die de volledige breedte en hoogte van het uitgekozen object vult met de
          gekozen afbeelding.
        </p>

        <p>
          Voeg de class <code>image-cover</code> toe aan het omliggende element waar de
          <code>img</code> zich in bevind of direct op het <code>img</code>-element.
        </p>

        <h2 id="quickstart">Snelstart</h2>

        <Code
          language="scss"
          code={`
@use "@minvws/manon/components/image-cover";
          `}
        />
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
          <a href="{base}/library/components/tile">Tegelweergave</a>.
        </p>
        <div role="group" class="tile image-cover">
          <img src="$img/strand.jpg" alt="Foto van een strand" />
          <h2>Lorem ipsum</h2>
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
  <h2>Lorem ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
</div>
`}
        />

        <h3>Op een groep met tegels</h3>
        <p>
          Dit voorbeeld maakt gebruik van
          <a href="{base}/library/components/tile">Tegelweergave</a>.
        </p>
        <div class="tiles image-covers column-3">
          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h2>Lorem ipsum</h2>
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
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <img src="/img/strand.jpg" alt="Foto van een strand">
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <img src="/img/strand.jpg" alt="Foto van een strand">
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
