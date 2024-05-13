<script context="module">
  export const breadcrumb = "Nota bene";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Nota bene</title>
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
        <h1>Nota bene</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Geef op de <code>&lt;input&gt;</code> aan dat het invoerveld verplicht is met het
            <code>required</code> attribuut.
          </li>
          <li>
            Voeg een <code>&lt;span&gt;</code> toe boven het inputveld. Het is belangrijk om het bericht
            boven het invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers die gebruik
            maken van hulpmiddelen zoals een screenreader.
          </li>
          <li>
            Groeppeer de <code>&lt;input&gt;</code> en de <code>&lt;span&gt;</code> samen in een
            <code>&lt;div&gt;</code> voor de correcte weergave.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Nota bene</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post">
          <div>
            <label for="nota-bene-input">Ipsum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="nota-bene-input"
                name="nota-bene-input"
                placeholder="lorem ipsum"
                type="text"
              />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="nota-bene-input">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
        <input id="nota-bene-input" name="nota-bene-input" placeholder="lorem ipsum" type="text">
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Benodigd</h3>
        <ul>
          <li><code>text/nota-bene.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>text/nota-bene-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#line-height">line-height</a></li>
          <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
          <li><a href="{base}/documentation/variables#font-weight">font-weight</a></li>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/nota-bene-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
