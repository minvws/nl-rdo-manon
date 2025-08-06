<script module>
  export const breadcrumb = "Description list";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Description list</title>
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
        <form action="" method="post" class="horizontal">
          <fieldset>
            <legend>Persoonsgegevens</legend>

            <div>
              <label for="username">Gebruikersnaam</label>
              <div>
                <span class="nota-bene" id="username-explanation">Bijvoorbeeld Jane Doe </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  aria-describedby="username-explanation"
                />
              </div>
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
          </fieldset>
          <button>Lorem ipsum</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Persoonsgegevens</legend>

    <div>
      <label>Gebruikersnaam</label>
      <div>
        <span class="nota-bene" id="voorbeeld-text-input-1-explanation"
          >Bijvoorbeeld Jane Doe
        </span>
        <input
          id="voorbeeld-text-input-1"
          name="voorbeeld-text-input-1"
          type="text"
          aria-describedby="voorbeeld-text-input-1-explanation"
        />
      </div>
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
  </fieldset>
  <button>Lorem ipsum</button>
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
@use "@minvws/manon/description-list";
`}
        />
      </section>
    </div>
  </article>
</main>
