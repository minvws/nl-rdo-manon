<script lang="ts">
  import { base } from "$app/paths";
  const baseUrl = `${base}/examples/pages/landing`;
</script>



<main id="main-content" tabindex="-1">
  <section class="hero">
    <img src="$img/strand.jpg" alt="Foto van een strand" />
    <div class="content-wrapper">
        <h1>Welkom op het homepage-voorbeeld</h1>
        <p>Een voorbeeld van een landingspagina.</p>
    </div>
  </section>

  <section>
    <div class="content-wrapper">
      <p class="emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque in tortor vel arcu scelerisque aliquet vel id tellus.
         Sed aliquet mi sit amet suscipit sagittis. Integer facilisis tellus orci, 
         eget pulvinar erat eleifend in. </p>

         <p>Donec at vestibulum urna, id dapibus nibh. Nam tincidunt velit eu tincidunt cursus. 
          Donec efficitur rutrum metus, a interdum dui lobortis at. 
          Nam laoreet mauris vel ligula egestas porta.</p>
    </div>
  </section>

    <section>
      <div class="content-wrapper">
        <h2>Onze projecten</h2>

        <div class="column-3">
          <div>
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h3>Projectnaam</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque in tortor vel arcu scelerisque aliquet vel id tellus.</p>
          </div>

          <div>
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h3>Projectnaam</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque in tortor vel arcu scelerisque aliquet vel id tellus.</p>
          </div>

          <div>
            <img src="$img/strand.jpg" alt="Foto van een strand" />
            <h3>Projectnaam</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque in tortor vel arcu scelerisque aliquet vel id tellus.</p>
          </div>

        </div> <!-- Column 3-->
        <a href="{baseUrl}">Meer projecten</a>
      </div> <!-- Content wrapper -->
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
