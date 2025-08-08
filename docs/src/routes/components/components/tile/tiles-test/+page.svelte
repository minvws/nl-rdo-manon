<script module>
  export const breadcrumb = "Tegelweergave testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tegelweergave testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Tegelweergave testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Groep met tegels <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="tiles column-3">
          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="tiles column-3">
  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
</div>
`}
        />

        <h3>Lijst met tegels</h3>
        <h4>Visueel voorbeeld:</h4>
        <ul class="tiles column-3">
          <li role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </li>

          <li role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </li>

          <li role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </li>
        </ul>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<ul class="tiles column-3">
  <li role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </li>

  <li role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </li>

  <li role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </li>
</ul>
`}
        />

        <h3>50/50</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="tiles fifty-fifty">
          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="tiles fifty-fifty">
  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
</div>
`}
        />

        <h3>2/3e 1/3e</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="tiles two-thirds-one-third">
          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="tiles two-thirds-one-third">
  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
</div>
`}
        />

        <h3>1/3e 2/3e</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="tiles one-third-two-thirds">
          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="tiles two-thirds-one-third">
  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
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
