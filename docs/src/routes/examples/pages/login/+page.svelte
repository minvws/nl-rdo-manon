<header>
  <a href="#main-content" class="button focus-only skip-to-content">Skip to content</a>
  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
<main>
  <section class="auth">
    <div>
      <h1>Log in</h1>
      <form class="help">
        <fieldset>
          <legend>Login-gegevens:</legend>
          <label for="username">Gebruikersnaam</label>
          <div>
            <input id="username" name="username" placeholder="Gebruikersnaam" type="text" />
          </div>

          <label for="password">Wachtwoord</label>
          <div>
            <input
              id="password"
              name="achtwoord"
              placeholder="wachtwoord"
              type="text"
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
<footer>
  <nav>
    <h1>Manon Examples</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</footer>
