<script lang="ts">
  import { page } from "$app/state";
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
        <li><a href={page.url.pathname}>Home</a></li>
      </ul>
    </div>
  </nav>
</header>

<main class="sidemenu" id="main-content">
  <nav aria-label="Zijbalknavigatie">
    <!-- The sticky container keeps the menu in view. When the menu is taller
      than the viewport, it scrolls inside the container. -->
    <div class="sticky-container">
      <ul>
        <li><a href={page.url.pathname}>Introductie</a></li>
        <li>
          <a href={page.url.pathname}>Installatie</a>
          <ul>
            <li><a href={page.url.pathname}>Vereisten</a></li>
            <li><a href={page.url.pathname}>Configuratie</a></li>
            <li><a href={page.url.pathname}>Thema kiezen</a></li>
          </ul>
        </li>
        <li>
          <a href={page.url.pathname}>Componenten</a>
          <ul>
            <li><a href={page.url.pathname}>Accordion</a></li>
            <li><a href={page.url.pathname}>Formulieren</a></li>
            <li><a href={page.url.pathname}>Navigatie</a></li>
            <li><a href={page.url.pathname}>Sidemenu</a></li>
            <li><a href={page.url.pathname}>Tabellen</a></li>
          </ul>
        </li>
        <li>
          <a href={page.url.pathname}>Release notes</a>
          <ul>
            <li><a href={page.url.pathname}>Versie 19.0.1</a></li>
            <li><a href={page.url.pathname}>Versie 19.0.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.6.2</a></li>
            <li><a href={page.url.pathname}>Versie 18.6.1</a></li>
            <li><a href={page.url.pathname}>Versie 18.6.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.5.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.4.1</a></li>
            <li><a href={page.url.pathname}>Versie 18.4.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.3.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.2.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.1.0</a></li>
            <li><a href={page.url.pathname}>Versie 18.0.0</a></li>
            <li><a href={page.url.pathname}>Versie 17.4.0</a></li>
            <li><a href={page.url.pathname}>Versie 17.3.0</a></li>
            <li><a href={page.url.pathname}>Versie 17.2.0</a></li>
            <li><a href={page.url.pathname}>Versie 17.1.0</a></li>
            <li><a href={page.url.pathname}>Versie 17.0.0</a></li>
          </ul>
        </li>
        <li><a href={page.url.pathname}>Bijdragen</a></li>
        <li><a href={page.url.pathname}>Changelog</a></li>
      </ul>
    </div>
  </nav>

  <div class="page-content">
    <section>
      <div class="content-wrapper">
        <h1>Lorem ipsum</h1>
        <p>Dolor sit amet conseqtetur adepicing elit</p>
        <h2>Lorem ipsum 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 4</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 5</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 6</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 7</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <h2>Lorem ipsum 8</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
      </div>
    </section>
  </div>
</main>
