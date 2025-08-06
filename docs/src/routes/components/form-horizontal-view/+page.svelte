<script module>
  export const breadcrumb = "Horizontaal uitgelijnd";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Horizontaal uitgelijnd</title>
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
        <h1>Horizontaal uitgelijnd</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de gewenste velden toe. Zie onderstaand voorbeeld voor meer informatie. Alle binnen
            html beschikbare formulier-elementen kunnen gebruikt worden. Voor een overzicht van
            beschikbare voorbeelden binnen Manon zie
            <a href="forms#form-types">formulierelementen</a>.
          </li>
          <li>
            Groepeer bij elkaar horende elementen in een <code>div</code>. Bijvoorbeeld een
            <code>label</code>
            en een <code>input</code>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <p>Het basisvoorbeeld met een invoerveld en een verzendknop.</p>

        <h3>Basis</h3>
        <h4>Voorbeeld</h4>
        <p>Visueel voorbeeld:</p>
        <form action="" method="post" class="horizontal">
          <div>
            <label for="form-example-1">Voorbeeld text input</label>
            <input id="form-example-1" name="form-example-1" type="text" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
<div>
<label for="form-example-1">Voorbeeld text input</label>
<input id="form-example-1" name="form-example-1" type="text">
</div>
<button type="submit">Verzend</button>
</form>
`}
        />

        <h2><code>fieldset</code></h2>
        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            Een fieldset is een groep met bij elkaar horende formuliervragen. Groepeer deze vragen
            binnen een fieldset met in de <code>legend</code> een omschrijvende naam.
          </li>
          <li>
            Fieldsets kunnen geen gebruik maken van flex-box. Hierdoor hebben fieldset andere
            styling nodig dan de overige elementen. <strong
              >Voeg het .scss bestand: <code>form-horizontal-fieldset.scss</code> toe</strong
            > aan het project om gebruik te maken van fieldsets en een horizontaal weergegeven formulier.
          </li>

          <li>
            Voeg optioneel het bestand:<code>form-horizontal-fieldset-variables.scss</code> toe om de
            uitlijning van de labels ten opzichte van de velden aan te passen.
          </li>
        </ul>
        <h3>Visueel voorbeeld:</h3>

        <form action="" method="post" class="horizontal">
          <fieldset>
            <legend>Fieldset test</legend>
            <div>
              <label for="form-example-2">Voorbeeld text input</label>
              <input id="form-example-2" name="form-example-2" type="text" />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
<fieldset>
<legend>Fieldset test</legend>
<div>
  <label for="form-example-2">Voorbeeld text input</label>
  <input id="form-example-2" name="form-example-2" type="text">
</div>
</fieldset>
<button type="submit">Verzend</button>
</form>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/form";
@use "@minvws/manon/form-horizontal";

/* Optional */
@use "@minvws/manon/form-horizontal-fieldset";
      `}
        />

        <h5>Optioneel:</h5>
        <Code
          language="css"
          code={`
@use "@minvws/manon/form-horizontal-fieldset";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <a href="{base}/documentation/variables#justify-content">justify-content</a>
          </li>
          <li><a href="{base}/documentation/variables#gap">gap</a></li>
          <li>
            Label
            <ul>
              <li><a href="{base}/documentation/variables#max-width">max-width</a></li>
            </ul>
          </li>
          <li>
            Invoervelden
            <ul>
              <li><a href="{base}/documentation/variables#max-width">max-width</a></li>
            </ul>
          </li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form">form</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-horizontal-view-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
