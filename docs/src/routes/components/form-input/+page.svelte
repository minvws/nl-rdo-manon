<script module>
  export const breadcrumb = "Invoerveld";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Invoerveld</title>
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
    <section id="introduction">
      <h1>Invoerveld</h1>
      <p>Invoervelden worden gebruikt voor het vragen van korte informatie.</p>

      <h2>Benodigde stappen:</h2>
      <ol>
        <li>
          Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
          optionele bestanden zie:
          <a href="#requirements">Bijbehorende bestanden</a>.
        </li>
      </ol>

      <h2>Aandachtspunten</h2>
      <ul>
        <li>
          Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
          gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
          gebruikers die gebruik maken van hulptechnologiën.
        </li>
      </ul>
    </section>

    <section id="examples">
      <h2>Voorbeelden</h2>

      <h2>Basis</h2>
      <h4>Visueel voorbeeld:</h4>
      <form action="" method="post">
        <label for="example-input-base">Voorbeeld invoerveld</label>
        <input id="example-input-base" name="example-input-base" type="text" />
        <button type="submit">Verzend</button>
      </form>

      <h4>HTML-voorbeeld:</h4>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>
  <input
    id="example-input-base"
    name="example-input-base"
    type="text"
  />
  <button type="submit">Verzend</button>
</form>
`}
      />

      <h2>Verplicht invoerveld</h2>
      <p>Aandachtspunten:</p>
      <ul>
        <li>
          Geef op de <code>&lt;input&gt;</code> aan dat het invoerveld verplicht is met het
          <code>required</code> attribuut.
        </li>
        <li>
          Voeg een span toe boven het invoerveld. Het is belangrijk om het bericht boven het
          invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers die gebruik maken van
          hulpmiddelen zoals een screenreader.
        </li>
        <li>
          Groeppeer de <code>&lt;input&gt;</code> en de <code>&lt;span&gt;</code> samen in een
          <code>&lt;div&gt;</code> binnen horizontaal uitgelijnde formulieren.
        </li>
      </ul>
      <h4>Visueel voorbeeld:</h4>
      <form action="" method="post">
        <label for="example-input-required">Gebruikersnaam</label>
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="example-input-required" name="example-input-required" type="text" required />
        <button type="submit">Verzend</button>
      </form>

      <h4>HTML-voorbeeld:</h4>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <label for="example-input-required">Gebruikersnaam</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <input
    id="example-input-required"
    name="example-input-required"
    type="text"
    required
  />
  <button type="submit">Verzend</button>
</form>
`}
      />

      <h2>Invoerveld uitgeschakeld</h2>
      <p>Aandachtspunten:</p>
      <ul>
        <li>
          Geef op de <code>&lt;input&gt;</code> aan dat het invoerveld uitgeschakeld is met het
          <code>disabled</code> attribuut.
        </li>
      </ul>
      <h4>Visueel voorbeeld:</h4>
      <form action="" method="post">
        <label for="example-input-disabled">Gebruikersnaam</label>
        <input id="example-input-disabled" name="example-input-disabled" type="text" disabled />
        <button type="submit">Verzend</button>
      </form>

      <h4>HTML-voorbeeld:</h4>
      <Code
        language="html"
        code={`
<form action="" method="post">
  <label for="example-input-disabled">Gebruikersnaam</label>
  <input
    id="example-input-disabled"
    name="example-input-disabled"
    type="text"
    disabled
  />
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
      <h3>Importeer component via npm</h3>
      <h4>CSS-voorbeeld:</h4>
      <Code
        language="css"
        code={`
@use "@minvws/manon/form";
@use "@minvws/manon/form-input";
`}
      />
    </section>

    <section id="related">
      <h2>Gerelateerde pagina's</h2>
      <a href="{base}/components/form-input-test">Test- en voorbeelden-pagina</a>
    </section>
  </article>
</main>
