<script module>
  export const breadcrumb = "Formulieren";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Formulieren</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Formulieren</h1>
        <p>
          Formulieren worden gebruikt om informatie op te vragen en te ontvangen van gebruikers.
        </p>
      </section>

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-3">
          <nav aria-labelledby="form-types-title" id="form-types">
            <h3 id="form-types-title">Formulierelementen</h3>
            <ul>
              <li>
                <a href="{base}/components/components/forms/form-input-range"
                  >Bereik - <code>range</code></a
                >
              </li>
              <li>
                <a href="{base}/components/components/forms/form-input-file"
                  >Bestand - <code>file</code></a
                >
              </li>
              <li><a href="{base}/components/components/forms/form-input-date">Datum</a></li>
              <li><a href="{base}/components/components/forms/form-input-email">Email</a></li>
              <li>
                <a href="{base}/components/components/forms/form-input"
                  >Invoerveld - <code>input</code></a
                >
              </li>
              <li>
                Kleurselector
                <ul>
                  <li>
                    <a href="{base}/components/components/forms/form-input-color">Kleurselector</a>
                  </li>
                  <li>
                    <a href="{base}/components/components/forms/form-input-color-filled"
                      >Kleurselector volledig gevuld</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="{base}/components/components/forms/form-notification">Notificatie</a>
              </li>
              <li>
                <a href="{base}/components/components/forms/form-input-radio"
                  >Radio-selecteerknop - <code>radio</code></a
                >
              </li>
              <li>
                <a href="{base}/components/components/forms/form-input-password">Wachtwoord</a>
              </li>
              <li>
                <a href="{base}/components/components/forms/checkbox"
                  >Selectievak - <code>checkbox</code></a
                >
              </li>
              <li>
                <a href="{base}/components/components/forms/form-input-textarea"
                  >Tekstveld - <code>textarea</code></a
                >
              </li>
              <li>
                <a href="{base}/components/components/forms/form-select"
                  >Selectielijst - <code>select</code></a
                >
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="form-fieldset-components-title" id="form-fieldset-components">
            <h3 id="form-fieldset-components-title">Fieldset</h3>

            <ul>
              <li><a href="{base}/components/components/forms/form-fieldset">Fieldset</a></li>
              <li>
                <a href="{base}/components/components/forms/form-fieldset-invisible"
                  >Onzichtbare fieldset</a
                >
              </li>
              <li>
                <a href="{base}/components/components/forms/fieldset-radio"
                  >Fieldset radio-selecteerknop - <code>radio</code></a
                >
              </li>
              <li>
                <a href="{base}/components/components/forms/fieldset-checkbox"
                  >Fieldset selectievak - <code>checkbox</code></a
                >
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="form-layouts-title" id="form-layouts">
            <h3 id="form-layouts-title">Weergaven</h3>
            <ul>
              <li><a href="{base}/components/components/form">Basisweergave</a></li>
              <li>
                <a href="{base}/components/components/form-accent-color"
                  >Accentkleur op formulierelementen</a
                >
              </li>
              <li>
                <a href="{base}/components/components/form-combined-fields"
                  >Gecombineerde formuliervelden</a
                >
              </li>
              <li>
                <a href="{base}/components/components/form-columns">Weergave in kolommen</a>
              </li>
              <li>
                <a href="{base}/components/components/form-horizontal"
                  >Horizontaal uitgelijnd formulier</a
                >
              </li>
              <li><a href="{base}/components/components/form-inline">"inline"-formulier</a></li>
            </ul>
          </nav>

          <nav id="form-communication">
            <h3>Berichten en meldingen</h3>
            <ul>
              <li><a href="{base}/components/components/form-required">Verplichte velden</a></li>
              <li><a href="{base}/components/components/form-help">Hulpteksten</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
