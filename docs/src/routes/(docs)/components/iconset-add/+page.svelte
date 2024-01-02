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
        <h1>Icoonset toevoegen</h1>

        <ol>
          <li>
            Maak een icoonlettertype of importeer een icoonlettertype. Voor meer informatie zie:
            <a href="{base}/components/iconset-create">Iconenset aanmaken</a>
          </li>
          <li>
            Bij een eigen icoonlettertype of bij het importeren van een iconenset zonder
            gedefinieerde classes voeg een referentielijst toe. Voor meer informatie zie:
            <a href="#icon-referencelist">referentielijst opstellen</a>.
          </li>
          <li>
            Voeg bij een eigen opgestelde referentielijst het bestand toe aan het project via
            <code>manon.scss</code>. Voor meer informatie zie:
            <a href="{base}/import-styling">Styling importeren</a>.
          </li>
          <li>
            Voeg het icoonlettertype toe aan het project binnen:
            <code>fonts.scss</code>. Kopieer het voorbeeldbestand
            <code>manon/scss/fonts</code> als het project nog geen
            <code>fonts.scss</code>-bestand heeft.
          </li>
          <li>
            Gebruik de iconen uit de set. Voor meer informatie zie:
            <a href="icons#usage">Iconen gebruiken</a>
          </li>
        </ol>
      </section>

      <section id="icon-referencelist">
        <h2>Referentielijst aanmaken</h2>
        <p>
          Gebruik het voorbeelddocument:
          <code>manon/scss/icon/icon-set-example.scss</code>.
        </p>

        <ol>
          <li>Kopieer het voorbeeldbestand en geef het nieuwe bestand een unieke bestandsnaam.</li>
          <li>
            Laad het nieuwe referentiebestand in binnen het project via
            <code>manon.scss</code>
          </li>
          <li>
            Maak binnen de <code>:root</code> de css-variable aan met de referentie naar het
            bijbehorende unicode binnen het lettertype. Unicodes kunnen vaak opgevraagd worden
            binnen de tool waarmee het lettertype gemaakt wordt. Of door het lettertype in te laden
            binnen lettertype-bewerktsoftware. <strong>Let op:</strong> de variable dient de unicode
            inclusief dubbele aanhalingstekens te bevatten. Voorbeeld:
            <code>"\e900"</code>.
          </li>
          <li>
            Voeg de referentie toe binnen het pseudo-element. In het voorbeeld wordt er gebruik
            gemaakt van een
            <code>:before</code> een <code>:after</code> of beide is ook mogelijk. Voeg indien
            gewenst ook een <code>:after</code> toe. Voor meer informatie zie:
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
        </ul>

        <h3>Voorbeelden:</h3>
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
    </div>
  </article>
</main>
