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
      <li><a href="#quickstart">Snelstart</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
    </ul>
  </SideMenu>
  <section>
    <h1 id="introduction" class="page-title">Wachtwoord</h1>
    <div class="content-wrapper">
      <h2 id="quickstart">Snelstart</h2>
      <p>SCSS importeren:</p>
      <Code
        language="scss"
        code={`
  @use "@minvws/manon/form";
  @use "@minvws/manon/form-input";
  `}
      />

      <div class="explanation" role="group" aria-label="Toelichting">
        <span>Aandachtspunten</span>
        <ul>
          <li>
            Vertel de gebruiker welke eisen er gesteld zijn. Dit kan met een notificatie of met een
            openklapbare hulptekst. Voor meer informatie zie:
            <a href="{base}/components/components/notifications/notification-explanation"
              >toelichting - paragraaf</a
            >
            en <a href="{base}/components/components/forms/form-help">hulpteksten</a>.
          </li>
          <li>
            Om berichten visueel te koppelen aan een inputveld kunnen de
            <code>&lt;input&gt;</code> en het bericht gegroepeerd worden binnen een
            <code>&lt;div&gt;</code>.
          </li>
        </ul>
      </div>

      <h2 id="examples">Voorbeelden</h2>

      <form action="" method="post">
        <div>
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
        </div>
        <button type="submit">Verzend</button>
      </form>

      <Code
        language="html"
        code={`
  <form action="" method="post">
    <div>
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
    </div>
    <button type="submit">Verzend</button>
  </form>
  `}
      />
    </div>
  </section>
</main>
