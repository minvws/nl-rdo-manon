<script module>
  export const breadcrumb = "Wachtwoord";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Wachtwoord</title>
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
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Wachtwoord</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Vertel de gebruiker welke eisen er gesteld zijn. Dit kan met een notificatie of met een
            openklapbare hulptekst. Voor meer informatie zie:
            <a href="{base}/components/notification-explanation#explanation-paragraph"
              >toelichting - paragraaf</a
            >
            en <a href="{base}/components/form-help">hulpteksten</a>.
          </li>
          <li>
            Om berichten visueel te koppelen aan een inputveld kunnen de
            <code>&lt;input&gt;</code> en het bericht gegroepeerd worden binnen een
            <code>&lt;div&gt;</code>.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <h4>Basis</h4>
        <form action="" method="post">
          <label for="input-password-1">Wachtwoord</label>
          <p class="explanation" id="input-password-1-message">
            <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
            1 kleine letter en 1 cijfer.
          </p>
          <input
            id="input-password-1"
            name="input-password-1"
            pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
            type="password"
            aria-describedby="input-password-1-message"
          />
          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-password-1">Wachtwoord</label>
  <p class="explanation" id="input-password-1-message">
    <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
    1 kleine letter en 1 cijfer.
  </p>
  <input
    id="input-password-1"
    name="input-password-1"
    pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
    type="password"
    aria-describedby="input-password-1-message"
  />
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Toelichting gegroepeerd met het invoerveld</h4>
        <form action="" method="post">
          <div>
            <label for="input-password-2">Wachtwoord</label>
            <p class="explanation" id="input-password-2-message">
              <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
              hoofdletter, 1 kleine letter en 1 cijfer.
            </p>
            <input
              id="input-password-2"
              name="input-password-2"
              pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
              type="password"
              aria-describedby="input-password-2-message"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="input-password-2">Wachtwoord</label>
    <p class="explanation" id="input-password-2-message">
      <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
      hoofdletter, 1 kleine letter en 1 cijfer.
    </p>
    <input
      id="input-password-2"
      name="input-password-2"
      pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
      type="password"
      aria-describedby="input-password-2-message"
    />
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
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/form-base";
@use "@minvws/manon/form-input";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
          <li><a href="{base}/components/form-input">form-input</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-input-password-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
