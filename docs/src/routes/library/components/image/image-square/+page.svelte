<script module>
  export const breadcrumb = "Vierkante afbeelding";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Vierkante afbeelding</title>
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
    <h1 class="page-title">Vierkante afbeelding</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <h2 id="introduction">Introductie</h2>
        <p>
          De afbeelding vult tot de maximale beschikbare breedte en schaalt de hoogte in dezelfde
          ratio. Dit betekent dat de afbeelding altijd vierkant blijft.
        </p>

        <h2 id="quickstart">Snelstart</h2>

        <Code
          language="scss"
          code={`
@use "@minvws/manon/components/image-square";
          `}
        />
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Enkel element</h3>
        <div class="column-4">
          <div class="image-square">
            <div class="image-container">
              <img src="$img/strand.jpg" alt="Foto van een strand" />
            </div>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="column-4">
  <div class="image-square">
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </div>
</div>
`}
        />

        <h3>Op <code>div</code></h3>
        <div class="one-third-two-thirds">
          <div class="image-square">
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
  <div class="image-square">
    <div class="image-container">
      <img src="/img/strand.jpg" alt="Foto van een strand">
    </div>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mattis lorem. Vivamus dapibus viverra quam, sit amet posuere ligula tristique eget. Pellentesque venenatis neque et placerat placerat. Proin nec porttitor nisl. Pellentesque vitae dui id lectus facilisis vehicula. Curabitur id sapien ultrices, consectetur ipsum in, tincidunt erat. Praesent a rutrum est, rutrum lacinia justo. Donec ut odio nec elit tincidunt maximus. Maecenas quis gravida metus.</p>
</div>
`}
        />

        <h3>Op elementen binnen <code>div</code></h3>
        <div class="column-3 images-square">
          <div class="image-container">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
          </div>

          <div class="image-container">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
          </div>

          <div class="image-container">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="column-3 images-square">
  <div class="image-container">
    <img src="/img/strand.jpg" alt="Foto van een strand" />
  </div>

  <div class="image-container">
    <img src="/img/strand.jpg" alt="Foto van een strand" />
  </div>

  <div class="image-container">
    <img src="/img/strand.jpg" alt="Foto van een strand" />
  </div>
</div>
`}
        />

        <h3>Op elementen binnen <code>ul</code></h3>
        <ul class="column-3 images-square">
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
<ul class="column-3 images-square">
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
