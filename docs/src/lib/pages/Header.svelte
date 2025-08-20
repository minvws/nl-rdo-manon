<script>
  export let url = "";
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
        <li><a href={url}>Home</a></li>
        <li><a href={url}>About</a></li>
        <li><a href={url}>Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
