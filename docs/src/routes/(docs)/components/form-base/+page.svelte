<script context="module">
  export const breadcrumb = "Basisformulier";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Basisformulier</title>
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
        <h1>Basisformulier</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de gewenste velden toe. Zie onderstaand voorbeeld voor meer informatie. Alle binnen
            html beschikbare formulierelementen kunnen gebruikt worden. Voor een overzicht van
            beschikbare voorbeelden binnen Manon zie
            <a href="forms#form-types">formulierelementen</a>.
          </li>
          <li>
            Groepeer de formulierelementen voor toegankelijkheid en gebruikersgemak. Zie
            <a href="{base}/components/form-fieldset">Invoervelden groeperen</a> voor meer informatie.
          </li>
          <li>
            Voeg indien nodig of ten behoeve van gebruikersgemak meldingen, toelichtingen en
            instructies toe aan het formulier.
          </li>
          <li>Voeg waar nodig validatie toe.</li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <p>Het basisvoorbeeld met een invoerveld en een verzendknop.</p>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="form-example-base">Voorbeeld text input</label>
          <input
            id="form-example-base"
            name="form-example-base"
            placeholder="voorbeeld text input"
            type="text"
          />

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="form-example-base">Voorbeeld text input</label>
  <input id="form-example-base" name="form-example-base" placeholder="voorbeeld text input" type="text">

  <button type="submit">Verzend</button>
</form>
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
          <li><code>form/form-base.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>form/form-base-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/variables#align-items">align-items</a></li>
          <li>
            <a href="{base}/variables#justify-content">justify-content</a>
          </li>
          <li><a href="{base}/variables#padding-top">padding-top</a></li>
          <li>
            <a href="{base}/variables#padding-right">padding-right</a>
          </li>
          <li>
            <a href="{base}/variables#padding-bottom">padding-bottom</a>
          </li>
          <li><a href="{base}/variables#padding-left">padding-left</a></li>
          <li>
            <a href="{base}/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/variables#text-color">text-color</a></li>
          <li><a href="{base}/variables#font-size">font-size</a></li>
          <li><a href="{base}/variables#line-height">line-height</a></li>
          <li><a href="{base}/variables#font-weight">font-weight</a></li>
          <li><a href="{base}/variables#gap">gap</a></li>
          <li><a href="{base}/variables#border-width">border-width</a></li>
          <li><a href="{base}/variables#border-style">border-style</a></li>
          <li><a href="{base}/variables#border-color">border-color</a></li>
          <li><a href="{base}/variables#breakpoint">breakpoint</a></li>
          <li><a href="{base}/variables#max-width">max-width</a></li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-base-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
