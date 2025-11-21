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

<main class="sidemenu">
  <nav aria-label="Zijbalknavigatie">
    <ul>
      <li><a href={page.url.pathname}>Introductie</a></li>
      <li><a href={page.url.pathname}>Component</a></li>
      <li><a href={page.url.pathname}>Voorbeeld</a></li>
      <li><a href={page.url.pathname}>Gerelateerd</a></li>
    </ul>
  </nav>

  <div class="page-content">
    <section>
      <div class="content-wrapper">
        <h1>Lorem ipsum</h1>
        <p>Dolor sit amet conseqtetur adepicing elit</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
          <li>Aenean posuere enim a hendrerit viverra.</li>
          <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
        </ul>
      </div>
    </section>
  </div>
</main>
