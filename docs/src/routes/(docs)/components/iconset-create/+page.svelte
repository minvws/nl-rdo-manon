<script context="module">
  export const breadcrumb = "Iconenset toevoegen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Iconenset toevoegen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Icoonset aanmaken</h1>

        <ol>
          <li>
            Maak een icoonlettertype met behulp van software of online tools om lettertypes en svg
            fonts mee te maken.
          </li>
          <li>
            Voeg het icoonlettertype toe aan het project binnen:
            <code>fonts.scss</code>. Voor meer informatie zie:
            <a href="{base}/add-fonts">Lettertype toevoegen</a>.
          </li>
          <li>
            Maak een referentielijst voor het toevoegen van classes. Voor meer informatie zie:
            <a href="#icon-referencelist">Referentielijst opstellen</a>.
          </li>
          <li>
            Voeg de referentielijst toe aan het project via
            <code>manon.scss</code>. Voor meer informatie zie:
            <a href="{base}/import-styling">Styling importeren</a>.
          </li>
        </ol>
      </section>

      <section id="iconset-create">
        <h2>Iconset aanmaken</h2>
        <p>Gebruik een online tool of een font-software-pakket om een lettertype te maken.</p>
        <p>
          Een svg-font kan via een verscheidenheid aan online tools gemaakt worden. Iedere svg bevat
          een icoon en krijgt binnen het lettertype een eigen code toegewezen, een unicode. Vanuit
          CSS is het mogelijk om een referentie toe te voegen naar het lettertype en de unicode per
          icoon waarmee het juiste icoon getoond kan worden. Voeg de referenties toe in een
          referentielijst om op html-elementen gebruik te kunnen maken van de iconen via een class.
          Voor meer informatie zie:
          <a href="#icon-referencelist">Referentielijst aanmaken</a>
        </p>
      </section>

      <section id="icon-referencelist">
        <h2>Referentielijst aanmaken</h2>

        <ol>
          <li>
            Kopieer het voorbeeldbestand
            <code>manon/scss/icon/icon-set-example.scss</code> binnen het project en geef het nieuwe
            bestand een unieke naam.
          </li>
          <li>
            Laad het nieuwe referentiebestand in binnen het project via
            <code>manon.scss</code>. Voor meer informatie zie:
            <a href="{base}/import-styling">Styling importeren</a>.
          </li>
          <li>
            Maak binnen de <code>:root</code> de css-variabelen aan met de referenties naar de
            bijbehorende unicodes binnen het lettertype. Unicodes kunnen vaak opgevraagd worden
            binnen de tool waarmee het lettertype gemaakt wordt. Of door het lettertype in te laden
            binnen lettertypesoftware. <strong>Let op:</strong> de variabelen dienen de unicode
            inclusief dubbele aanhalingstekens te bevatten. Voorbeeld:
            <code>"\e900"</code>.
          </li>
          <li>
            Voeg de referentie toe binnen het pseudo-element. In het voorbeeld wordt er gebruik
            gemaakt van een <code>:before</code>. Een <code>:after</code> of beide is ook mogelijk.
            Voeg indien gewenst ook een <code>:after</code> toe. Voor meer informatie zie:
            <a href="#pseudo-elements">pseudo-elementen toevoegen</a>
          </li>
          <li>
            Voeg binnen het <code>content</code>-element de eerder aangemaakte variabele toe.
            Bijvoorbeeld: <code>var(--icon-cat)</code>.
          </li>
        </ol>

        <p>Ter info:</p>
        <ul>
          <li>
            <code>@include icon</code> voegt de styling toe zoals deze binnen
            <code>@minvws/manon/icon-base</code> gedefinieerd staat.
          </li>
          <li>
            Als de applicatie gebruik maakt van een enkel icoonlettertype kan deze binnen
            <code>icon-base</code> gedefinieerd worden. In dat geval is het niet nodig om de
            <code>font-family</code> per icoon te definiëren. Voor voorbeeld code zie:
            <a href="#global-icon-font">Icoonlettertype applicatie definiëren</a>.
          </li>
        </ul>

        <h3>Voorbeelden</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
:root {
  --icon-cat: "\e900";
}

.icon,
.icon-only {
  &:before {
    @include icon;
  }

  &.icon-cat:before {
    content: var(--icon-cat);
    font-family: "Manon icons";
  }
}
`}
        />
      </section>

      <section id="pseudo-elements">
        <h2>Pseudo-elementen toevoegen</h2>

        <h3>Voorbeelden</h3>

        <h4><code>:before</code></h4>
        <Code
          language="css"
          code={`
.icon,
.icon-only {
  &:before {
    @include icon;
  }

  &.icon-cat:before {
    content: var(--icon-cat);
    font-family: "Manon icons";
  }
}

`}
        />

        <h4><code>:after</code></h4>
        <Code
          language="css"
          code={`
.icon,
.icon-only {
  &:after {
    @include icon;
  }

  &.icon-cat:after {
    content: var(--icon-cat);
    font-family: "Manon icons";
  }
}
`}
        />

        <h4><code>:before</code> en <code>:after</code></h4>
        <p>
          Indien zowel een <code>:before</code> als <code>:after</code> beschikbaar dient te zijn voor
          verschillende situaties kunnen beide gedefineerd worden binnen het referentiebestand. Voeg
          in dat geval wel een specificatie toe aan de class. Anders worden beide altijd ingeladen en
          krijgt het element zowel een icoon ervoor als erna.
        </p>
        <Code
          language="css"
          code={`
.icon,
.icon-only {
  &:before,
  &:after {
    @include icon;
  }

  &.icon-cat-before:before,
  &.icon-cat-after:after {
    content: var(--icon-cat);
    font-family: "Manon icons";
  }
}
`}
        />
      </section>

      <section id="global-icon-font">
        <h2>Applicatie icoonlettertype definiëren</h2>
        <ol>
          <li>
            Voeg het icoonlettertype toe aan het project. Voor informatie over het toevoegen van een
            lettertype zie:
            <a href="{base}/add-fonts">Lettertype toevoegen</a>.
          </li>
          <li>
            Voeg de referentie naar het lettertype toe via het
            <code>fonts.scss</code>-bestand.
            <a href="{base}/import-styling">Styling importeren</a>.
          </li>
          <li>
            Defineer het lettertype binnen het bestand
            <code>manon/icon/icon-base-variables</code> via de variabele
            <code>font-family</code>. Bijvoorbeeld:
            <code>--icon-font-family: "Manon icons";</code>. Zie ook
            <a href="{base}/import-styling#styling-override-variables"
              >De styling van een component aanpassen</a
            >.
          </li>
        </ol>
      </section>
    </div>
  </article>
</main>
