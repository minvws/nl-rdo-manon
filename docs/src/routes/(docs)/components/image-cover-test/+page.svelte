<script context="module">
  export const breadcrumb = "Cover-afbeelding testpagina";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Cover-afbeelding testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Cover-afbeelding testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Op <code>div</code></h3>
        <div class="image-cover">
          <img src="$img/strand.jpg" alt="Foto van een strand" />
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="image-cover">
<img src="/img/strand.jpg" alt="Foto van een strand">
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
<img src="/img/strand.jpg" alt="Foto van een strand">
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
    </div>
  </article>
</main>
