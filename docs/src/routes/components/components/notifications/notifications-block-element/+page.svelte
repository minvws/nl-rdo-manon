<script module>
  export const breadcrumb = "Blok-element";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Blok-element</title>
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
  <article>
    <div>
      <section id="introduction">
        <h1>Blok-element</h1>
        <p>Voor het weergeven van grotere notificaties.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>Voeg de notificatie toe op basis van een van de onderstaande voorbeelden.</li>
          <li>
            Voeg de gewenste notificatie-type-<code>class</code> toe. Voor meer informatie zie:
            <a href="notifications#notification-types">Beschikbare weergaven</a>.
          </li>
          <li>
            Voeg <code>role="group"</code> toe aan het notificatie-element om screenreader gebruikers
            erop te attenderen dat de content van de notificatie bij elkaar hoort.
          </li>
          <li>
            Voeg <code>aria-label=""</code> toe aan het notificatie-element om screenreader
            gebruikers inzicht te geven in het type bericht. Bijvoorbeeld:
            <code>aria-label="foutmelding"</code>. Let op dat de content van het label in de taal
            van het document staat.
          </li>
          <li>
            Voeg binnen het element een <code>span</code> toe zodat gebruikers (van screenreaders)
            weten wat de context van het bericht is. Bijvoorbeeld:
            <code>&lt;span&gt;Foutmelding:&lt;/span&gt;</code>. Het is aan te raden om dit bericht
            voor alle gebruikers zichtbaar te houden zodat het voor iedereen duidelijk is. Denk
            hierbij ook aan kleurenblinden als er in het ontwerp enkel gebruik wordt gemaakt van
            kleuren als visuele onderscheidende factor op notificaties of iconen waarbij het kan
            zijn dat niet alle gebruikers het icoon zullen herkennen.
          </li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
            gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
            gebruikers die gebruik maken van hulptechnologieën.
          </li>
          <li>
            Notificaties kunnen verborgen worden door de class
            <code>hidden</code> toe te voegen aan de notification
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="error" role="group" aria-label="foutmelding">
          <span>Foutmelding:</span>
          <h1>Lorem ipsum dolor set</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
            facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
            Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
            efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
            bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
            Mauris euismod a augue sit amet condimentum.
          </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
              consequat facilisis ac eu velit.
              <a href="notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
            </li>
          </ul>
          <button type="button">Lorem</button>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>div</code></h4>
        <Code
          language="html"
          code={`
<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</div>
`}
        />

        <h4>HTML-structuur voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="error" role="group" aria-label="foutmelding">
  <!-- Content -->
</div>
`}
        />

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<section class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</section>
`}
        />

        <h4>HTML-structuur voorbeeld:</h4>
        <Code
          language="html"
          code={`
<section class="error" role="group" aria-label="foutmelding">
  <!-- Content -->
</section>
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

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-block-element";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/notifications-block-element-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
