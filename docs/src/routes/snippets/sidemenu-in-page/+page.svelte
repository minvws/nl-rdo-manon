<script lang="ts">
  import { page } from "$app/state";
</script>

<header class="page-header">
  <div>
    <nav>
      <div class="collapsing-element">
        <ul>
          <li><a href={page.url.pathname}>Home</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main class="sidemenu">
  <nav aria-label="Zijbalknavigatie">
    <ul>
      <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
      <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
      <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
      <li><a href={page.url.pathname}>Voorbeeld-link 4</a></li>
    </ul>
  </nav>
  <article>
    <div>
      <h1>Lorem ipsum</h1>
      <p>Dolor sit amet conseqtetur adepicing elit</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis
        vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis,
        lacinia dapibus risus auctor.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
        <li>Aenean posuere enim a hendrerit viverra.</li>
        <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
      </ul>
    </div>
  </article>
</main>
