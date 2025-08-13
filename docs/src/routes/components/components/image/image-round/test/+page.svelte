<script module>
  export const breadcrumb = "Ronde afbeelding testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Ronde afbeelding testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Ronde afbeelding testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Enkel element</h3>
        <div class="image-round">
          <div class="image-container">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="image-round">
  <div class="image-container">
    <img src="/img/strand.jpg" alt="Foto van een strand">
  </div>
</div>
`}
        />

        <h3>Op <code>div</code></h3>
        <div class="one-third-two-thirds">
          <div class="image-round">
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mattis lorem.
            Vivamus dapibus viverra quam, sit amet posuere ligula tristique eget. Pellentesque
            venenatis neque et placerat placerat. Proin nec porttitor nisl. Pellentesque vitae dui
            id lectus facilisis vehicula. Curabitur id sapien ultrices, consectetur ipsum in,
            tincidunt erat. Praesent a rutrum est, rutrum lacinia justo. Donec ut odio nec elit
            tincidunt maximus. Maecenas quis gravida metus.
          </p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="one-third-two-thirds">
  <div class="image-round">
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mattis lorem. Vivamus dapibus viverra quam, sit amet posuere ligula tristique eget. Pellentesque venenatis neque et placerat placerat. Proin nec porttitor nisl. Pellentesque vitae dui id lectus facilisis vehicula. Curabitur id sapien ultrices, consectetur ipsum in, tincidunt erat. Praesent a rutrum est, rutrum lacinia justo. Donec ut odio nec elit tincidunt maximus. Maecenas quis gravida metus.</p>
</div>
`}
        />

        <h3>Op elementen binnen <code>div</code></h3>
        <div class="column-3 images-round">
          <div>
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </div>

          <div>
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </div>

          <div>
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="one-third-two-thirds">
  <div class="image-round">
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mattis lorem. Vivamus dapibus viverra quam, sit amet posuere ligula tristique eget. Pellentesque venenatis neque et placerat placerat. Proin nec porttitor nisl. Pellentesque vitae dui id lectus facilisis vehicula. Curabitur id sapien ultrices, consectetur ipsum in, tincidunt erat. Praesent a rutrum est, rutrum lacinia justo. Donec ut odio nec elit tincidunt maximus. Maecenas quis gravida metus.</p>
</div>
`}
        />

        <h3>Op elementen binnen <code>ul</code></h3>
        <ul class="column-3 images-round">
          <li>
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </li>

          <li>
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </li>

          <li>
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </li>
        </ul>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<ul class="column-3 images-round">
  <li>
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </li>

   <li>
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </li>

   <li>
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </li>
</ul>
`}
        />
      </section>
    </div>
  </article>
</main>
