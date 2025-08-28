<script module>
  export const breadcrumb = "Tegelweergave met cover-afbeelding";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tegelweergave met cover-afbeelding</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Tegelweergave met cover-afbeelding</h1>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Voeg <code>class="tile"</code> toe voor de Tegelweergave met cover-afbeelding op een
            enkel element. Voor meer informatie zie:
            <a href="{base}/components/components/tile">tegelweergave</a>
          </li>
          <li>
            Voeg de class <code>image-cover</code> toe voor de correcte weergave. Voor meer
            informatie zie: <a href="#tile-image-cover">tegel met cover-afbeelding</a> of
            <a href="#tiles-image-cover">groep met tegels met cover-afbeelding</a>. Voor meer
            informatie over cover-afbeelding zie
            <a href="{base}/components/components/image/image-cover">cover-afbeelding</a>
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3 id="tile-image-cover">Tegel met cover-afbeelding op enkel element</h3>

        <ul>
          <li>Voeg de class <code>image-cover</code> toe.</li>
        </ul>

        <h4>Visueel voorbeeld:</h4>
        <div role="group" class="tile image-cover">
          <img src="$img/strand.jpg" alt="Foto van een strand" />
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
            amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
          </p>
        </div>

        <h4>HTML-voorbeeld:</h4>
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

        <h3 id="tiles-image-cover">Groep tegels met cover-afbeeldingen</h3>
        <ul>
          <li>
            Voeg de class <code>images-cover</code> toe aan het omliggende element. Geschikte
            onderliggende elementen zijn <code>div</code> en <code>li</code> binnen een
            <code>ul</code>.
          </li>
        </ul>
        <h4>Visueel voorbeeld:</h4>
        <div class="tiles images-cover column-4">
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

          <div role="group">
            <img src="$img/strand.jpg" alt="Foto van een strand" />
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
<div class="tiles images-cover column-4">
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

  <div role="group">
    <img src="/img/strand.jpg" alt="Foto van een strand">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
</div>
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <a href="{base}/getting-started/installation#object-position">object-position</a>
          </li>
        </ul>
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/getting-started/installation">
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>tile/tile.scss</code></li>
          <li><code>image/image-cover.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>tile/tile-variables.scss</code></li>
          <li><code>image/image-cover-variables.scss</code></li>
          <li>
            Voor specieke uitzonderingen voor coverafbeeldingen op tegels:
            <code>tile/tile-image-cover.scss</code>
          </li>
          <li><code>tile/tile-image-cover-variables.scss</code></li>
        </ul>
      </section>
    </div>
  </article>
</main>
