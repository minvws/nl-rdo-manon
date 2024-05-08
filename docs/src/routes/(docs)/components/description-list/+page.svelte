<script context="module">
  export const breadcrumb = "Description list";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Description list</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <h1>Description list</h1>

      <section>
        <h2>Voorbeeld</h2>
        <h3>Visuele weergave:</h3>
        <dl>
          <div>
            <dt>Naam</dt>
            <dd>Jane Doe</dd>
          </div>

          <div>
            <dt>Woonplaats</dt>
            <dd>Amsterdam</dd>
          </div>

          <div>
            <dt>Aanmelddatum</dt>
            <dd>03-05-2021</dd>
          </div>
        </dl>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<dl>
  <div>
    <dt>Naam</dt>
    <dd>Jane Doe</dd>
  </div>

  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
  </div>

  <div>
    <dt>Aanmelddatum</dt>
    <dd>03-05-2021</dd>
  </div>
</dl>
`}
        />

        <h3>Visuele weergave binnen formulier:</h3>
        <form action="" method="post" class="horizontal-view">
          <div>
            <label for="voorbeeld-text-input-1">Lorem ipsum</label>
            <input
              id="voorbeeld-text-input-1"
              name="voorbeeld-text-input-1"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>

          <fieldset>
            <legend>Persoonsgegevens</legend>
            <dl>
              <div>
                <dt>Naam</dt>
                <dd>Jane Doe</dd>
              </div>
              <div>
                <dt>Geboortedatum</dt>
                <dd>01-01-1984</dd>
              </div>
              <div>
                <dt>Geslacht</dt>
                <dd>Vrouw</dd>
              </div>
              <div>
                <dt>Woonplaats</dt>
                <dd>Loremstad</dd>
              </div>
            </dl>
          </fieldset>
          <div>
            <label for="voorbeeld-text-input-2">Lorem ipsum</label>
            <input
              id="voorbeeld-text-input-2"
              name="voorbeeld-text-input-2"
              placeholder="voorbeeld text input"
              type="text"
            />
          </div>
          <button>Lorem ipsum</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <div>
      <label>Lorem ipsum</label>
      <input id="voorbeeld-text-input-1" name="voorbeeld-text-input-1" placeholder="voorbeeld text input" type="text">
  </div>

  <fieldset>
      <legend>Persoonsgegevens</legend>
      <dl>
          <div>
              <dt>Naam</dt>
              <dd>Jane Doe</dd>
          </div>
          <div>
              <dt>Geboortedatum</dt>
              <dd>01-01-1984</dd>
          </div>
          <div>
              <dt>Geslacht</dt>
              <dd>Vrouw</dd>
          </div>
          <div>
              <dt>Woonplaats</dt>
              <dd>Loremstad</dd>
          </div>
      </dl>
  </fieldset>
  <div>
      <label>Lorem ipsum</label>
      <input id="voorbeeld-text-input-2" name="voorbeeld-text-input-2" placeholder="voorbeeld text input" type="text">
  </div>
  <button>Lorem ipsum</button>
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

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/description-list";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
  /* Description-list */
  --description-list-width: ;
  --description-list-max-width: ;

  /* Description list item */
  --description-list-item-odd-background-color: ;
  --description-list-item-gap: ;
  --description-list-item-flex-direction: ;
  --description-list-item-white-space: ;
  --description-list-item-padding: ;
  --description-list-border-width: ;
  --description-list-border-style: ;
  --description-list-border-color: ;

  /* Description list item title (dt) */
  --description-list-item-title-font-weight: ;
  --description-list-item-title-background-color: ;
  --description-list-item-title-text-color: ;
  --description-list-item-title-padding: ;
  --description-list-item-title-width: ;

  /* Description list item title (dd) */
  --description-list-item-data-background-color: ;
  --description-list-item-data-text-color: ;
  --description-list-item-data-padding: ;
  --description-list-item-data-font-weight: ;
  --description-list-item-data-width: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
