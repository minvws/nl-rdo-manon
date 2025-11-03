<script lang="ts">
  import { base } from "$app/paths";
  const baseUrl = `${base}/examples/pages/login`;
</script>

<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>
  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href={baseUrl}>Home</a></li>
        <li><a href={baseUrl}>About</a></li>
        <li><a href={baseUrl}>Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<main id="main-content" tabindex="-1">
  <section class="container-s">
    <h1>Inloggen</h1>
    <div class="content-wrapper">
      <form class="help">
        <div class="help-container">
          <label for="username">Gebruikersnaam</label>
          <input id="username" name="username" placeholder="Gebruikersnaam" />
        </div>

        <div>
          <label for="password">Wachtwoord</label>
          <div class="help-container">
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
              <span>Toelichting:</span> Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
              1 kleineletter en 1 cijfer.
            </p>
          </div>
        </div>
        <button type="submit">Inloggen</button>
      </form>
    </div>
  </section>
</main>

<footer>
  <nav>
    <ul>
      <li><a href={baseUrl}>Home</a></li>
      <li><a href={baseUrl}>About</a></li>
      <li><a href={baseUrl}>Contact</a></li>
    </ul>
  </nav>
</footer>
