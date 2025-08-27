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
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Vierkante afbeelding</h1>

        <h2>Benodigde stappen</h2>
        <ol>
          <li>
            Voeg de class <code>image-square</code> toe aan het omliggende element waar de
            <code>img</code> zich in bevindt of direct op het <code>img</code>-element.
          </li>
          <li>
            Voeg de container voor de afbeelding toe. Voorbeeld:
            <code>&lt;div class="image-container"&gt;</code>. Het toevoegen van de class-naam is in
            dit geval optioneel en toegevoegd voor leesbaarheid van de html. Een omliggende
            <code>div</code> is ook voldoende. De container is nodig om de afbeelding variabel naar ratio
            te kunnen schalen.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Enkel element</h3>
        <p>
          De afbeelding vult tot de maximale beschikbare breedte en schaalt de hoogte in dezelfde
          ratio. Dit betekent dat de afbeelding altijd rond blijft.
        </p>
        <div class="image-square">
          <div class="image-container">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="image-square">
  <div class="image-container">
    <img src="/img/strand.jpg" alt="Foto van een strand">
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

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/getting-started/installation">
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/image-square";
`}
        />
      </section>
    </div>
  </article>
</main>
