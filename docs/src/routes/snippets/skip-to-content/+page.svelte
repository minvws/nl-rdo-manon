<script>
  import { page } from "$app/state";
</script>

  <header>
    <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

    <nav aria-label="Navigatie voorbeeld header">
      <div>
        <ul>
          <li><a href={page.url.pathname}>Voorbeeld-link 1</a></li>
          <li><a href={page.url.pathname}>Voorbeeld-link 2</a></li>
          <li><a href={page.url.pathname}>Voorbeeld-link 3</a></li>
        </ul>
      </div>
    </nav>
  </header>

<main id="main-content" tabindex="-1">
  <!-- page content -->
</main>
