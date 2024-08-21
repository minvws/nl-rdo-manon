<script context="module">
  export const breadcrumb = "Tabel basisweergave";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tabel basisweergave</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigde bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Tabel</h1>
        <p>Voor weergave van tabulaire data.</p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld</h4>
        <div class="horizontal-scroll">
          <table>
            <caption> Basisvoorbeeld tabel: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />

        <h2>Tabel met footer</h2>
        <p>
          Om de gebruiker te informeren over de inhoud van de tabel, is het aan te raden om een
          titel toe te voegen met daarin de omschrijving van de tabel. Voeg direct binnen de
          <code>table</code> een <code>caption</code> toe om de titel toe te voegen.
        </p>
        <p>Visueel voorbeeld:</p>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met footer: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor set</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="col">Table footer heading 1</th>
                <th scope="col">Table footer heading 2</th>
                <th scope="col">Table footer heading 3</th>
              </tr>
              <tr>
                <td>Table footer 1</td>
                <td>Table footer 2</td>
                <td>Table footer 3</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Table with titlebar and title example:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Table footer heading 1</th>
        <th>Table footer heading 2</th>
        <th>Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>
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

        <h3>Importeer component via NPM</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Beschikbare instelbare variabelen:</caption>
            <thead>
              <tr>
                <th scope="col">HTML-attribuut</th>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Manon ingestelde waarde</th>
                <th scope="col">Breekpunt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="10" scope="rowgroup">table</th>
                <td>--table-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--application-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--application-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--application-line-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-cell-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--application-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>var(--application-text-align)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="6" scope="rowgroup">thead</th>
                <td>--table-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--application-accent-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--application-base-accent-color-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>var(--table-text-align)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="6" scope="rowgroup">th</th>
                <td>--table-head-cell-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--table-cells-padding)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-head-cell-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>bolder</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-head-cell-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--table-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-head-cell-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-head-cell-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-head-cell-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">th within tbody</th>
                <td>--table-body-head-cell-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--table-cells-padding)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>bolder</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>var(--table-background-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--table-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--table-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-body-head-cell-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="4" scope="rowgroup">Table row - Zebra striping</th>
                <td>--table-row-background-color-striping</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>rgba(148, 148, 148, 0.1)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-row-border-width</td>
                <td><a href="{base}/documentation/variables#width">width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-row-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-row-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="6" scope="rowgroup">Table cell (td)</th>
                <td>--table-cell-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--table-cells-padding)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-cell-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-cell-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--table-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-cell-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>1px</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-cell-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-cell-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>#ccc</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="3" scope="rowgroup">Table cells within the first row</th>
                <td>--table-first-row-cell-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-cell-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-first-row-cell-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-cell-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-first-row-cell-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-cell-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="3" scope="rowgroup">Table cells within the last row</th>
                <td>--table-last-row-cell-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-cell-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-last-row-cell-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-cell-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-last-row-cell-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-cell-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">Table footer</th>
                <td>--table-foot-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>#ddd</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--table-cells-padding)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--table-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--table-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--table-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">Table footer head</th>
                <td>--table-foot-header-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--table-foot-padding)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--table-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--table-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--table-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-header-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">Table footer cell styling</th>
                <td>--table-foot-cell-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>#f0f0f0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>var(--table-foot-padding)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var(--table-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--table-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--table-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--table-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--table-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--table-foot-cell-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--table-border-color)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="html"
          code={`
:root {
  /* Table */
  --table-font-size: ;
  --table-font-weight: ;
  --table-line-height: ;
  --table-text-color: ;
  --table-background-color: ;
  --table-border-width: ;
  --table-border-style: ;
  --table-border-color: ;
  --table-text-align: ;
  --table-font-weight: ;
  --table-cells-padding: ;

  /* Table head */
  --table-head-background-color: ;
  --table-head-text-color: ;
  --table-head-border-width: ;
  --table-head-border-style: ;
  --table-head-border-color: ;
  --table-head-text-align: ;

  /* Table head cell (th) */
  --table-head-cell-padding: ;
  --table-head-cell-font-weight: ;
  --table-head-cell-font-size: ;
  --table-head-cell-border-width: ;
  --table-head-cell-border-style: ;
  --table-head-cell-border-color: ;

  /* Table head cell (th) binnen tbody */
  --table-body-head-cell-padding: ;
  --table-body-head-cell-font-weight: ;
  --table-body-head-cell-background-color: ;
  --table-body-head-cell-text-color: ;
  --table-body-head-cell-font-size: ;
  --table-body-head-cell-border-width: ;
  --table-body-head-cell-border-style: ;
  --table-body-head-cell-border-color: ;

  /* Table row */
  /* Zebra striping with opacity to keep background color. e.g for warnings or errors */
  --table-row-background-color-striping: ;
  --table-row-border-width: ;
  --table-row-border-style: ;
  --table-row-border-color: ;

  /* Table cell (td) */
  --table-cell-padding: ;
  --table-cell-background-color: ;
  --table-cell-text-color: ;
  --table-cell-border-width: ;
  --table-cell-border-style: ;
  --table-cell-border-color: ;

  /* Table cells within the first row */
  --table-first-row-cell-border-width: ;
  --table-first-row-cell-border-style: ;
  --table-first-row-cell-border-color: ;

  /* Table cells within the last row */
  --table-last-row-cell-border-width: ;
  --table-last-row-cell-border-style: ;
  --table-last-row-cell-border-color: ;

  /* Table footer */
  --table-foot-background-color: ;
  --table-foot-padding: ;
  --table-foot-text-color: ;
  --table-foot-font-weight: ;
  --table-foot-font-size: ;
  --table-foot-border-width: ;
  --table-foot-border-style: ;
  --table-foot-border-color: ;

  /* Table footer head */
  --table-foot-header-background-color: ;
  --table-foot-header-padding: ;
  --table-foot-header-text-color: ;
  --table-foot-header-font-weight: ;
  --table-foot-header-font-size: ;
  --table-foot-header-border-width: ;
  --table-foot-header-border-style: ;
  --table-foot-header-border-color: ;

  /* Table footer cell styling */
  --table-foot-cell-background-color: ;
  --table-foot-cell-padding: ;
  --table-foot-cell-text-color: ;
  --table-foot-cell-font-weight: ;
  --table-foot-cell-font-size: ;
  --table-foot-cell-border-width: ;
  --table-foot-cell-border-style: ;
  --table-foot-cell-border-color: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
