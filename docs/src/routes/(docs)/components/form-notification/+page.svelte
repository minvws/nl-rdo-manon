<script module>
  export const breadcrumb = "Notificatie binnen formulier";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Notificatie binnen formulier</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Notificatie binnen formulier</h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie <a href="#examples">Voorbeelden</a>
          </li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Let op: visuele feedback op het invoerveld is op zichzelf onvoldoende om
            toegankelijkheid en een goede gebruikerservaring te waarborgen.
          </li>
          <li>
            Vertel de gebruiker altijd wat de vervolgstappen zijn die zij kunnen nemen om het
            probleem op te lossen of om zelf verder te kunnen.
          </li>
          <li>
            Voeg de class toe met het type melding op het invoerveld om gebruik te maken van visuele
            feedback direct op het invoerveld. Voorbeeld: <code>class="error"</code>.
          </li>
          <li>
            Voeg voor screenreader gebruikers <code>aria-invalid="true"</code> toe aan invoervelden met
            een error. In de HTML-voorbeelden is dit meegenomen.
          </li>
          <li>
            Plaats toelichting met betrekking tot het invullen van velden boven het invoerveld,
            zodat de gebruiker eerst de toelichtig leest en daarna het bijbehorende invoerveld
            tegenkomt. Hierdoor weet de gebruiker hoe het invoerveld ingevuld dient te worden
            voordat deze gepresenteerd wordt. Uitzondering hierop zijn toelichtingsteksten die de
            gerbruiker zelf activeert door middel van de hulpknop. Die teksten worden onder het
            gekozen invoerveld geplaatst zodat de structuur van het formulier en het element waar de
            gebruiker interactie mee heeft zo min mogelijk verspringt.
          </li>
          <li>
            Plaats foutmeldingen altijd onder het invoerveld. Dit zorgt ervoor dat de gebruiker
            eerst te zien krijgt wat de context van de foutmelding is wat het begrijpen van de
            foutmelding toegankelijker maakt.
          </li>
          <li>
            Voor meer informatie over beschikbare notificatie-types en het gebruik zie: <a
              href="notifications">Notificaties</a
            >.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <p>Het basisvoorbeeld met een invoerveld en een verzendknop.</p>

        <h3>Notificatie op invoerveld</h3>
        <h4>Visueel voorbeeld foutmelding:</h4>
        <form action="" method="post">
          <label for="input-error">Input</label>
          <div>
            <input
              id="input-error"
              class="error"
              value="Lorem ipsum"
              aria-describedby="input-error-message"
              aria-invalid="true"
            />
            <p class="error" id="input-error-message">
              <span>Foutmelding:</span> Lorem ipsum dolor sit amet
            </p>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-error">Input</label>
  <div>
    <input id="input-error" class="error" value="Lorem ipsum" aria-describedby="input-error-message" aria-invalid="true">
    <p class="error" id="input-error-message">
        <span>Foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld toelichting:</h4>
        <form action="" method="post">
          <label for="input-explanation">Input</label>
          <div>
            <p class="explanation" id="input-explanation-message">
              <span>Toelichting:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-explanation"
              class="explanation"
              value="Lorem ipsum"
              aria-describedby="input-explanation-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <p class="explanation" id="input-explanation-message">
      <span>Toelichting:</span> Lorem ipsum dolor sit amet
    </p>
    <input id="input-explanation" class="explanation" value="Lorem ipsum" aria-describedby="input-explanation-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld waarschuwing:</h4>
        <form action="" method="post">
          <label for="input-warning">Input</label>
          <div>
            <p class="warning" id="input-warning-message">
              <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-warning"
              class="warning"
              value="Lorem ipsum"
              aria-describedby="input-warning-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <p class="warning" id="input-warning-message">
      <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
    <input id="input-warning" class="warning" value="Lorem ipsum" aria-describedby="input-warning-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld bevestiging:</h4>
        <form action="" method="post">
          <label for="input-confirmation">Input</label>
          <div>
            <p class="confirmation" id="input-confirmation-message">
              <span>Bevestiging:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-confirmation"
              class="confirmation"
              value="Lorem ipsum"
              aria-describedby="input-confirmation-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <p class="confirmation" id="input-confirmation-message">
        <span>Bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
      <input id="input-confirmation" class="confirmation" value="Lorem ipsum" aria-describedby="input-confirmation-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h4>Visueel voorbeeld systeembericht</h4>
        <form action="" method="post">
          <label for="input-system">Input</label>
          <div>
            <p class="system" id="input-system-message">
              <span>Systeembericht:</span> Lorem ipsum dolor sit amet
            </p>
            <input
              id="input-system"
              class="system"
              value="Lorem ipsum"
              aria-describedby="input-system-message"
              aria-invalid="true"
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <p class="system" id="input-system-message">
        <span>Systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
    <input id="input-system" class="system" value="Lorem ipsum" aria-describedby="input-system-message" aria-invalid="true">
  </div>
  <button type="submit">Verzend</button>
</form>

`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Gerelateerd:</h3>
        <ul>
          <li>
            Voor meer informatie over beschikbare notificatie-types en het gebruik zie: <a
              href="notifications">Notificaties</a
            >.
          </li>
        </ul>

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
/* Notification base component */
@use "@minvws/manon/notification";

/* Notification types, import what is needed */
@use "@minvws/manon/notification-block-element";
@use "@minvws/manon/notification-paragraph";
@use "@minvws/manon/notification-table";
@use "@minvws/manon/notification-error";
@use "@minvws/manon/notification-warning";
@use "@minvws/manon/notification-explanation";
@use "@minvws/manon/notification-confirmation";
@use "@minvws/manon/notification-system-message";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-notification-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
