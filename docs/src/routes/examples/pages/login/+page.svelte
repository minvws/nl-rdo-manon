<script lang="ts">
  import { base } from "$app/paths";
  import { Header, Footer } from "$lib/pages";
  const BaseUrl = `${base}/examples/pages/basic`;
</script>

<Header url={BaseUrl} />

<main>
  <section class="auth">
    <div>
      <h1>Log in</h1>
      <form class="help">
        <fieldset>
          <legend>Login-gegevens:</legend>
          <label for="username">Gebruikersnaam</label>
          <div>
            <input id="username" name="username" placeholder="Gebruikersnaam" />
          </div>

          <label for="password">Wachtwoord</label>
          <div>
            <input
              id="password"
              name="password"
              placeholder="Wachtwoord"
              type="password"
              aria-describedby="password-message"
            />
            <p
              class="explanation"
              data-open-label="Toelichting bij het veld: Voorbeeld text input"
              data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
              id="password-message"
            >
              <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1
              hoofdletter, 1 kleineletter en 1 cijfer.
            </p>
          </div>
        </fieldset>
        <button type="submit">Inloggen</button>
      </form>
    </div>
  </section>
</main>

<Footer url={BaseUrl} />
