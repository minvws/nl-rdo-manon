<script module>
  export const breadcrumb = "Iconen testpagina";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Iconen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Iconen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3><code>svg</code></h3>
        <p>
          Voorbeelden met een svg-icoon uit de <a href="https://tabler.io/icons" rel="external"
            >tabler iconen set</a
          >.
        </p>

        <h4>Visueel voorbeeld informatief icoon</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-user"
          role="img"
          aria-label="Gebruikersprofiel"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld pseudo-element op button</h4>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>
        <button class="icon icon-on-off" aria-label="Aan- of uitschakelen"
          >Aan- of uitschakelen</button
        >

        <h4>Visueel voorbeeld <code>button</code> met <code>span</code></h4>
        <button>
          <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
        </button>

        <h3><code>svg</code> binnen een <code>button</code></h3>
        <h4>Visueel voorbeeld</h4>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-power"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M7 6a7.75 7.75 0 1 0 10 0"
            /><path d="M12 4l0 8" /></svg
          >
          Aan- of uitschakelen
        </button>

        <h3><code>button</code> disabled</h3>
        <h4>Visueel voorbeeld pseudo-element op button</h4>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>
        <button class="icon icon-on-off" aria-label="Aan- of uitschakelen" disabled
          >Aan- of uitschakelen</button
        >

        <h4>States</h4>
        <ul>
          <li>
            Focus:
            <button class="focus">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </button>
          </li>
          <li>
            Active:
            <button class="active">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </button>
          </li>
          <li>
            Hover:
            <button class="hover">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </button>
          </li>
        </ul>

        <h3><code>button</code> met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <button>Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></button>

        <h4>States</h4>
        <ul>
          <li>
            Focus:
            <button class="focus">
              Focus <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
          <li>
            Active:
            <button class="active">
              Active <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
          <li>
            Hover:
            <button class="hover">
              Hover <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
        </ul>

        <h3>Link als knop</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>
        <a href="./test" class="button icon icon-user">Lorem ipsum</a>

        <a href="./test" class="button">
          <span class="icon icon-user" aria-hidden="true"></span>Inloggen
        </a>

        <h3>Link als knop icoon erachter</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./test" class="button">
          Inloggen <span class="icon icon-user" aria-hidden="true"></span>
        </a>

        <h3><code>svg</code> binnen een link</h3>
        <h4>Visueel voorbeeld</h4>

        <a href="./test">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
            /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg
          >
          Inloggen
        </a>

        <h4>States</h4>
        <ul>
          <li>
            Focus:
            <a href="./test" class="button focus">
              <span class="icon icon-user" aria-hidden="true"></span> Inloggen
            </a>
          </li>
          <li>
            Active:
            <a href="./test" class="button active">
              <span class="icon icon-user" aria-hidden="true"></span>Inloggen
            </a>
          </li>
          <li>
            Visited:
            <a href="./test" class="button visited">
              <span class="icon icon-user" aria-hidden="true"></span>Inloggen
            </a>
          </li>
          <li>
            Hover:
            <a href="./test" class="button hover">
              <span class="icon icon-user" aria-hidden="true"></span>Inloggen
            </a>
          </li>
        </ul>

        <h3>Link als knop: met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./test" class="button">Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></a>

        <h3>pseudo-element op buttonme type="submit"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="submit">Zoeken</button>

        <h3><code>button type="submit"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="submit">
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h3>pseudo-element op disabled button met type="submit"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="submit" disabled>Zoeken</button>

        <h3><code>button type="submit"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="submit" disabled>
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            Focus:
            <button type="submit" class="focus">
              <span class="icon icon-search" aria-hidden="true"></span>Zoeken
            </button>
          </li>
          <li>
            Active:
            <button type="submit" class="active">
              <span class="icon icon-search" aria-hidden="true"></span>Zoeken
            </button>
          </li>
          <li>
            Hover:
            <button type="submit" class="hover">
              <span class="icon icon-search" aria-hidden="true"></span>Zoeken
            </button>
          </li>
        </ul>

        <h3>pseudo-element op buttonme type="reset"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="reset">Zoeken</button>

        <h3><code>button type="reset"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="reset">
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h3>pseudo-element op disabled button met type="reset"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="reset" disabled>Zoeken</button>

        <h3><code>button type="reset"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="reset" disabled>
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            Focus:
            <button type="reset" class="focus">
              <span class="icon icon-search" aria-hidden="true"></span>Zoeken
            </button>
          </li>
          <li>
            Active:
            <button type="reset" class="active">
              <span class="icon icon-search" aria-hidden="true"></span>Zoeken
            </button>
          </li>
          <li>
            Hover:
            <button type="reset" class="hover">
              <span class="icon icon-search" aria-hidden="true"></span>Zoeken
            </button>
          </li>
        </ul>

        <h3>Link</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./test">
          <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
        </a>

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            Default:
            <a href="./test">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
          <li>
            Focus:
            <a href="./test" class="focus">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
          <li>
            Active:
            <a href="./test" class="active">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
          <li>
            Hover:
            <a href="./test" class="hover">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
          <li>
            Hover visited:
            <a href="./test" class="hover visited">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
          <li>
            Visited:
            <a href="./test" class="visited">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
        </ul>

        <h3>Link met afbeelding als icoon</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./test"><img src="$img/cat.svg" alt="Kat" class="icon" />Lorem ipsum</a>

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            <a href="./test" class="focus"><img src="$img/cat.svg" alt="Kat" class="icon" />Focus</a
            >
          </li>
          <li>
            <a href="./test" class="active"
              ><img src="$img/cat.svg" alt="Kat" class="icon" />Active</a
            >
          </li>
          <li>
            <a href="./test" class="visited"
              ><img src="$img/cat.svg" alt="Kat" class="icon" />Visited</a
            >
          </li>
          <li>
            <a href="./test" class="hover"><img src="$img/cat.svg" alt="Kat" class="icon" />Hover</a
            >
          </li>
        </ul>

        <h3><code>span</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <span class="icon icon-cat">Lorem ipsum</span>

        <h3><code>span</code> met svg-icoon</h3>
        <h4>Visueel voorbeeld</h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
            /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          Inloggen
        </span>

        <h3><code>span</code> met afbeelding als icoon</h3>
        <h4>Visueel voorbeeld:</h4>
        <span><img src="$img/cat.svg" alt="Kat" class="icon" />Lorem ipsum</span>

        <h3><code>li</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li class="icon icon-cat">Lorem ipsum</li>
        </ul>

        <h3><code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="icon icon-cat">Lorem ipsum</div>

        <h3><code>div</code> met afbeelding als icoon</h3>
        <h4>Visueel voorbeeld:</h4>
        <div><img src="$img/cat.svg" alt="Kat" class="icon" />Lorem ipsum</div>

        <h3><code>table</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met actieknoppen: </caption>
            <thead>
              <tr>
                <th scope="col">Gebruikersnaam</th>
                <th scope="col">Bekijk profiel</th>
                <th scope="col">Reset</th>
                <th scope="col">Deactiveer</th>
                <th scope="col">Verwijder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane doe</td>
                <td>
                  <form>
                    <button type="submit" class="icon-only">
                      <span class="icon icon-user" aria-hidden="true"></span>Bekijk profiel
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon-only">
                      <span class="icon icon-reset" aria-hidden="true"></span>Reset
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon-only">
                      <span class="icon icon-lock-closed" aria-hidden="true"></span>Deactiveer
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon-only">
                      <span class="icon icon-trash" aria-hidden="true"></span>Verwijder
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</main>
