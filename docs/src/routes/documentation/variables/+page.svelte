<script module>
  export const breadcrumb = "Variabelen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Variabelen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section>
    <div>
      <h1>Variabelen</h1>
      <p>
        Manon maakt gebruik van CSS-variabelen voor het instellen van stijlkeuzes en Sass variabelen
        voor het instellen van breekpunten.
      </p>
      <dl>
        <div>
          <dt>Voorbeeld CSS-variabele</dt>
          <dd><code>--application-base-accent-color: hotpink;</code></dd>
        </div>
        <div>
          <dt>Voorbeeld sass-variabele</dt>
          <dd><code>$application-base-breakpoint-1: 24rem;</code></dd>
        </div>
      </dl>

      <h2>Opbouw variabelennamen</h2>
      <p>Variabelennamen zijn opgebouwd uit de onderstaande onderdelen</p>
      <p>
        Voorbeeld
        <code>--navigation-base-list-item-hover-background-color</code>.
      </p>
      <ol>
        <li>
          Componentnaam. In dit geval: <code>--navigation-base</code>. Dit is het basiscomponent
          voor navigatie.
        </li>
        <li>Object binnen het component. In dit geval <code>-list</code>.</li>
        <li>
          Subobject(en) binnen het component. In dit geval
          <code>-item</code>.
        </li>
        <li>State. In dit geval <code>-hover</code>.</li>
        <li>
          Attribuut, verwijzing naar het CSS-attribuut. In dit geval
          <code>-background-color</code>.
        </li>
      </ol>

      <h2>Variabelen instellen</h2>
      <p>
        Alle instelbare componenten verwijzen naar een variabelen-bestand. Binnen dit bestand staan
        alle variabelen die beschikbaar zijn voor het component.
      </p>

      <h3>Waarde aanpassen of invullen</h3>
      <p class="warning" role="group" aria-label="let op">
        <span>Let op:</span> Aan deze instructies wordt nog gewerkt.
      </p>

      <h3 id="breakpoints">Breekpunten instellen</h3>
      <p class="warning" role="group" aria-label="let op">
        <span>Let op:</span> Aan deze instructies wordt nog gewerkt.
      </p>

      <h2>Overzicht</h2>

      <div class="horizontal-scroll" id="variable-overview">
        <table>
          <caption> Overzicht van types variabelen: </caption>

          <thead>
            <tr>
              <th scope="col">Naam</th>
              <th scope="col">CSS-attribuut</th>
              <th scope="col">Omschrijving</th>
              <th scope="col">Opties</th>
            </tr>
          </thead>

          <tbody>
            <tr id="padding">
              <td>*-padding</td>
              <td>padding</td>
              <td>Geeft padding aan de binnenkant van het element.</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het padding-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>
                    De waarde geldt voor
                    <code>padding-top</code>,
                    <code id="padding-right">padding-right</code>,
                    <code>padding-bottom</code>,
                    <code id="padding-left">padding-left</code> in deze volgorde.
                  </li>
                  <li>
                    Enkele waarde: Bijvoorbeeld <code>1rem</code>.
                    <ul>
                      <li>
                        Dit vertaald zich in:
                        <ul>
                          <li><code>padding-top: 1rem;</code></li>
                          <li><code>padding-right: 1rem;</code></li>
                          <li><code>padding-bottom: 1rem;</code></li>
                          <li><code>padding-left: 1rem;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Twee waardes bijvoorbeeld: <code>0.5rem 1rem</code>
                    <ul>
                      <li>
                        Dit vertaald zich in:
                        <ul>
                          <li><code>padding-top: 0.5rem;</code></li>
                          <li><code>padding-right: 1rem;</code></li>
                          <li><code>padding-bottom: 0.5rem;</code></li>
                          <li><code>padding-left: 1rem;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vier waardes bijvoorbeeld: <code>0 0 1rem 0</code>
                    <ul>
                      <li>
                        Dit vertaald zich in:
                        <ul>
                          <li><code>padding-top: 0;</code></li>
                          <li><code>padding-right: 0;</code></li>
                          <li><code>padding-bottom: 1rem;</code></li>
                          <li><code>padding-left: 0;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>

            <tr id="padding-top">
              <td>*-padding-top</td>
              <td>padding-top</td>
              <td>Geeft padding aan de bovenkant binnen het element.</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het padding-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>5px</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="width">
              <td>*-width</td>
              <td>width</td>
              <td>Breedte van het element</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het width-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>100%</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="max-width">
              <td>*-max-width</td>
              <td>max-width</td>
              <td>Maximale breedte van het element</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het max-width-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>100%</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="min-width">
              <td>*-min-width</td>
              <td>min-width</td>
              <td>Minimale breedte van het element</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het min-width-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>100%</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="height">
              <td>*-height</td>
              <td>height</td>
              <td>Hoogte van het element</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het height-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>100%</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="min-height">
              <td>*-min-height</td>
              <td>min-height</td>
              <td>Minimale hoogte van het element</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het min-height-element binnen CSS gebruikt kunnen
                    worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>100%</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="max-height">
              <td>*-max-height</td>
              <td>max-height</td>
              <td>Maximale hoogte van het element</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het max-height-element binnen CSS gebruikt kunnen
                    worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>100%</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="margin">
              <td>*-margin</td>
              <td>margin</td>
              <td>Witruimte rondom het object.</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het margin-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>
                    De waarde geldt voor
                    <code id="margin-top">margin-top</code>,
                    <code id="margin-right">margin-right</code>,
                    <code id="margin-bottom">margin-bottom</code>,
                    <code id="margin-left">padding-left</code> in deze volgorde.
                  </li>
                  <li>
                    Enkele waarde: Bijvoorbeeld <code>1rem</code>.
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>margin-top: 1rem;</code></li>
                          <li><code>margin-right: 1rem;</code></li>
                          <li><code>margin-bottom: 1rem;</code></li>
                          <li><code>margin-left: 1rem;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Twee waardes bijvoorbeeld: <code>0.5rem 1rem</code>
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>margin-top: 0.5rem;</code></li>
                          <li><code>margin-right: 1rem;</code></li>
                          <li><code>margin-bottom: 0.5rem;</code></li>
                          <li><code>margin-left: 1rem;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vier waardes bijvoorbeeld: <code>0 0 1rem 0</code>
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>margin-top: 0;</code></li>
                          <li><code>margin-right: 0;</code></li>
                          <li><code>margin-bottom: 1rem;</code></li>
                          <li><code>margin-left: 0;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>

            <tr id="object-fit">
              <td>*-object-fit</td>
              <td>object-fit</td>
              <td>Manier waarop de afbeelding of video binnen de container geplaatst wordt.</td>
              <td>
                <ul>
                  <li>
                    Alle waardes die binnen het object-fit-element binnen CSS gebruikt kunnen
                    worden.
                  </li>
                  <li>Bijvoorbeeld <code>contain</code> of <code>cover</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="border-radius">
              <td>*-border-radius</td>
              <td>border-radius</td>
              <td>De radius van de hoeken van het element</td>
              <td>
                <ul>
                  <li>
                    Numerieke waarde
                    <ul>
                      <li>
                        Alle waardes die binnen het border-radius-element binnen CSS gebruikt kunnen
                        worden.
                      </li>
                      <li>Bijvoorbeeld <code>0.25rem 0 0 0</code> of <code>50%</code>.</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>

            <tr id="object-position">
              <td>*-object-position</td>
              <td>object-position</td>
              <td> Manier waarop de afbeelding of video binnen de container uitgelijnd wordt. </td>
              <td>
                <ul>
                  <li>
                    Alle waardes die binnen het object-position-element binnen CSS gebruikt kunnen
                    worden.
                  </li>
                  <li>
                    Bijvoorbeeld <code>center</code>, <code>top left</code> of
                    <code>50% 0</code>.
                  </li>
                </ul>
              </td>
            </tr>

            <tr id="padding-bottom">
              <td>*-padding-bottom</td>
              <td>padding-bottom</td>
              <td>Geeft padding aan de onderkant binnen het element.</td>
              <td>
                Numerieke waarde.
                <ul>
                  <li>
                    Alle waardes die binnen het padding-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>Bijvoorbeeld <code>1rem</code> of <code>5px</code>.</li>
                </ul>
              </td>
            </tr>

            <tr id="text-color">
              <td>*-text-color</td>
              <td>color</td>
              <td>Tekstkleur</td>
              <td>Kleurwaarde. Bijvoorbeeld hex, CSS kleurcode, rgb, rgba.</td>
            </tr>

            <tr id="background-color">
              <td>*-background-color</td>
              <td>background-color</td>
              <td>Achtergrondkleur</td>
              <td>Kleurwaarde. Bijvoorbeeld hex, CSS kleurcode, rgb, rgba.</td>
            </tr>

            <tr id="color-code">
              <td>variabele naam</td>
              <td>css-variabele</td>
              <td>Variabele die een kleurwaarde verwacht.</td>
              <td>Kleurwaarde. Bijvoorbeeld hex, CSS kleurcode, rgb, rgba.</td>
            </tr>

            <tr id="font-size">
              <td>*-font-size</td>
              <td>font-size</td>
              <td>Tekstgrootte</td>
              <td>
                Alle waardes die binnen het font-size-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld een numerieke waarde in
                <code>px</code>, <code>rem</code> of <code>em</code>.
              </td>
            </tr>

            <tr id="font-family">
              <td>*-font-family</td>
              <td>font-family</td>
              <td>Lettertype</td>
              <td>
                Alle waardes die binnen het font-family-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld
                <code>sans-serif</code>, <code>serif</code>. Voor het toevoegen van lettertypes aan
                het project zie:
                <a href="{base}/components/font#add-fonts">Lettertype toevoegen</a>.
              </td>
            </tr>

            <tr id="line-height">
              <td>*-line-height</td>
              <td>line-height</td>
              <td>Regelhoogte</td>
              <td>
                Alle waardes die binnen het line-height-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld een numerieke waarde in
                <code>px</code>, <code>rem</code> of <code>em</code>. Line-height kan ook relatief
                weergeven worden. Geef dit aan met enkel een waarde. Bijvoorbeeld:
                <code>2</code>. Hierbij wordt de regelhoogte gezet op 2 keer de hoogte van het
                lettertype. Stel dat het lettertype 16 is wordt de regelhoogte 32.
              </td>
            </tr>

            <tr id="font-weight">
              <td>*-font-weight</td>
              <td>font-weight</td>
              <td>Dikte van de tekst indien beschikbaar binnen het lettertype.</td>
              <td>
                Alle waardes die binnen het font-weight-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld: <code>light</code>, <code>300</code>,
                <code>regular</code>, <code>400</code>, <code>bolder</code>, <code>700</code>
              </td>
            </tr>

            <tr id="striping">
              <td>*-striping</td>
              <td>background-color</td>
              <td>
                Achtergrondkleur van elementen om en om. De achtergrondkleur wordt geplaatst op
                <code>nth-child(odd)</code>
              </td>
              <td>Kleurwaarde. Bijvoorbeeld hex, CSS kleurcode, rgb, rgba.</td>
            </tr>

            <tr id="border-width">
              <td>*-border-width</td>
              <td>border-width</td>
              <td>Breedte van de omlijning</td>
              <td>
                <ul>
                  <li>
                    Alle waardes die binnen het border-width-element binnen CSS gebruikt kunnen
                    worden. Bijvoorbeeld een numerieke waarde in <code>px</code>,
                    <code>rem</code> of <code>em</code>.
                  </li>
                  <li>
                    Enkele waarde: Bijvoorbeeld <code>1px</code>.
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>border-top: 1px;</code></li>
                          <li><code>border-right: 1px;</code></li>
                          <li><code>border-bottom: 1px;</code></li>
                          <li><code>border-left: 1px;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Twee waardes bijvoorbeeld: <code>0 1px</code>
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>border-top: 0;</code></li>
                          <li><code>border-right: 1px;</code></li>
                          <li><code>border-bottom: 0;</code></li>
                          <li><code>border-left: 1px;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vier waardes bijvoorbeeld: <code>0 0 1px 0</code>
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>border-top: 0;</code></li>
                          <li><code>border-right: 0;</code></li>
                          <li><code>border-bottom: 1px;</code></li>
                          <li><code>border-left: 0;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>

            <tr id="border-style">
              <td>*-border-style</td>
              <td>border-style</td>
              <td>Stijl van de omlijning</td>
              <td>
                Alle waardes die binnen het border-style-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld: <code>solid</code>, <code>dashed</code> of
                <code>dotted</code>.
              </td>
            </tr>

            <tr id="border-color">
              <td>*-border-color</td>
              <td>border-color</td>
              <td>Kleur van de omlijning</td>
              <td>Kleurwaarde. Bijvoorbeeld hex, CSS kleurcode, rgb, rgba.</td>
            </tr>

            <tr id="align-items">
              <td>*-align-items</td>
              <td>align-items</td>
              <td>Positionering van de content van het element.</td>
              <td>
                Alle waardes die binnen het align-items-element binnen CSS gebruikt kunnen worden.
                align-items is onderdeel van flexbox. Opties zijn o.a:
                <code>flex-end</code>, <code>flex-start</code>, <code>center</code>.
              </td>
            </tr>

            <tr id="flex-direction">
              <td>*-flex-direction</td>
              <td>flex-direction</td>
              <td>Positionering van de content van het element.</td>
              <td>
                Alle waardes die binnen het flex-direction-element binnen CSS gebruikt kunnen
                worden. flex-direction is onderdeel van flexbox. Opties zijn: <code>row</code>,
                <code>row-reverse</code>, <code>column</code> en <code>column-reverse</code>.
              </td>
            </tr>

            <tr id="justify-content">
              <td>*-justify-content</td>
              <td>justify-content</td>
              <td>Positionering van de content van het element.</td>
              <td>
                Alle waardes die binnen het justify-content-element binnen CSS gebruikt kunnen
                worden. justify-content is onderdeel van flexbox. Opties zijn o.a:
                <code>flex-end</code>, <code>flex-start</code>, <code>center</code>.
              </td>
            </tr>

            <tr id="flex-wrap">
              <td>*-flex-wrap</td>
              <td>flex-wrap</td>
              <td
                >Wrap geeft aan of de content van het component wel of niet over mag gaan op een
                nieuwe regel.</td
              >
              <td>
                Alle waardes die binnen het flex-wrap-element binnen CSS gebruikt kunnen worden.
                flex-wrap is onderdeel van flexbox. Opties zijn bijvoorbeeld:
                <code>wrap</code>, <code>no-wrap</code>, <code>wrap-reverse</code>.
              </td>
            </tr>

            <tr id="gap">
              <td>*-gap</td>
              <td>gap</td>
              <td>Afstand tussen de elementen die direct binnen het element liggen.</td>
              <td>
                <ul>
                  <li>
                    Alle waardes die binnen het gap-element binnen CSS gebruikt kunnen worden.
                  </li>
                  <li>De waarde geldt voor row-gap column-gap in deze volgorde.</li>
                  <li>
                    Enkele waarde: Bijvoorbeeld <code>1rem</code>.
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>row-gap: 1rem;</code></li>
                          <li><code>column-gap: 1rem;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Twee waardes bijvoorbeeld: <code>0.5rem 1rem</code>
                    <ul>
                      <li>
                        Dit vertaalt zich in:
                        <ul>
                          <li><code>row-gap: 0.5rem;</code></li>
                          <li><code>column-gap: 1rem;</code></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>

            <tr id="word-break">
              <td>*-word-break</td>
              <td>word-break</td>
              <td>Hoe een regel afgebroken wordt.</td>
              <td>
                Alle waardes die binnen het word-break-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld: <code>normal</code>,
                <code>break-all</code> en <code>keep-all</code>.
              </td>
            </tr>

            <tr id="hyphens">
              <td>*-hyphens</td>
              <td>hyphens</td>
              <td>Hoe woorden afgebroken worden.</td>
              <td>
                Alle waardes die binnen het hyphens-element binnen CSS gebruikt kunnen worden.
                Bijvoorbeeld: <code>none</code> en <code>auto</code>.
              </td>
            </tr>

            <tr id="icon">
              <td>*-icon-*</td>
              <td></td>
              <td>Weergave van een icoon via pseudo-content.</td>
              <td>
                De manier waarop pseudo-content-iconen geconfigureerd worden, verschilt per
                component. Raadpleeg de broncode van het component.
              </td>
            </tr>

            <tr id="text-align">
              <td>*-text-align</td>
              <td>text-align</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="outline-color">
              <td>*-outline-color</td>
              <td>outline-color</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="outline-offset">
              <td>*-outline-offset</td>
              <td>outline-offset</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="outline-style">
              <td>*-outline-style</td>
              <td>outline-style</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="outline-width">
              <td>*-outline-width</td>
              <td>outline-width</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="position">
              <td>*-position</td>
              <td>position</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="top">
              <td>*-top</td>
              <td>top</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="right">
              <td>*-right</td>
              <td>right</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="bottom">
              <td>*-bottom</td>
              <td>bottom</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="left">
              <td>*-left</td>
              <td>left</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="color">
              <td>*-color</td>
              <td>color</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="display">
              <td>*-display</td>
              <td>display</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="text-decoration">
              <td>*-text-decoration</td>
              <td>text-decoration</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="box-shadow">
              <td>*-box-shadow</td>
              <td>box-shadow</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="accent-color">
              <td>*-accent-color</td>
              <td>accent-color</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="max-z-index">
              <td>*-max-z-index</td>
              <td>max-z-index</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="resize">
              <td>*-resize</td>
              <td>resize</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="content">
              <td>*-content</td>
              <td>content</td>
              <td></td>
              <td></td>
            </tr>

            <tr id="list-style">
              <td>*-list-style</td>
              <td>list-style</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</main>
