<script module>
  export const breadcrumb = "Notificaties";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Notificaties</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Notificaties</h1>
        <p>Waarschuwingen, extra informatie en foutmeldingen.</p>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Het is verstandig om verschillende notificatie-types visueel onderscheidend weer te
            geven zodat ze in een oogopslag herkenbaar zijn.
          </li>
          <li>
            Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
            gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
            gebruikers die gebruik maken van hulptechnologieën.
          </li>
          <li>
            Notificaties kunnen verborgen worden door de class
            <code>hidden</code> toe te voegen aan de notification.
          </li>
        </ul>
      </section>

      <section id="available-types">
        <h2>Beschikbare weergaven</h2>
        <div class="column-2">
          <nav id="notification-types">
            <h3>Notificatie-types</h3>
            <ul>
              <li><a href="{base}/components/notification-error">Foutmelding</a></li>
              <li>
                <a href="{base}/components/notification-warning">Waarschuwing</a>
              </li>
              <li>
                <a href="{base}/components/notification-confirmation">Bevestiging</a>
              </li>
              <li>
                <a href="{base}/components/notification-explanation">Toelichting</a>
              </li>
            </ul>
            <h4>Andere notificatie-types (niet ondersteund door iCore Open)</h4>
            <ul>
              <li>
                <a href="{base}/components/notification-system-message">Systeemberichten</a>
              </li>
            </ul>
          </nav>

          <nav id="notification-layouts">
            <h3>Weergaven</h3>
            <ul>
              <li>
                <a href="{base}/components/notifications-block-element">Blokelement</a>
              </li>
              <li>
                <a href="{base}/components/notifications-paragraph">Paragraaf</a>
              </li>
              <li><a href="{base}/components/notifications-page">Pagina-notificatie</a></li>
            </ul>
            <h4>Andere weergaven (niet ondersteund door iCore Open)</h4>
            <ul>
              <li><a href="{base}/components/notifications-table">Tabel</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
