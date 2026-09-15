<script module>
  export const breadcrumb = "Component status";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Component status</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <h1 class="page-title">Component status</h1>
    <div class="content-wrapper">
      <p>
        Het streven is dat alle Manon componenten voldoen aan de kwaliteitsstandaarden van
        gebruikerservaring (UX), toegankelijkheid, privacy by design en security by design. Om het
        niveau te garanderen worden de componenten op deze punten getoetst door experts op deze
        gebieden.
      </p>

      <p>
        In het overzicht vind je de huidige status van ieder component. Als een component nog niet
        als goedgekeurd is gemarkeerd, is het component nog niet beoordeeld door een expert. Als het
        component wel beoordeeld is en er zijn problemen gevonden. Staan de problemen bij het
        component genoteerd.
      </p>

      <section id="status">
        <h2>Component Status</h2>
        <div class="horizontal-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Status</th>
                <th scope="col">UX</th>
                <th scope="col">Privacy</th>
                <th scope="col">Accessibility</th>
                <th scope="col">Known issues</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Accordion</th>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Voltooid
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td>Geen</td>
              </tr>
              <tr>
                <th scope="row">Avatar</th>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Voltooid
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td>Geen</td>
              </tr>
              <tr>
                <th scope="row">Breadcrumb</th>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Voltooid
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td class="confirmation">
                  <div>
                    <span class="icon icon-check" aria-hidden="true"></span>
                    Goedgekeurd
                  </div>
                </td>
                <td>Geen</td>
              </tr>
              <!-- Add more component status rows as needed -->
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </section>
</main>
