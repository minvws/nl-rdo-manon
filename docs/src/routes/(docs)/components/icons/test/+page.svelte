<script context="module">
  export const breadcrumb = "Iconen testpagina";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Iconen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Iconen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

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
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-on-off" aria-label="Aan- of uitschakelen">Aan- of uitschakelen</button>`}
        />

        <h4>Visueel voorbeeld <code>button</code> met <code>span</code></h4>
        <button>
          <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
</button>
          `}
        />

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
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-on-off" aria-label="Aan- of uitschakelen" disabled>Aan- of uitschakelen</button>`}
        />

        <h4>Visueel voorbeeld <code>button</code> met <code>span</code></h4>
        <button disabled>
          <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button disabled>
  <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
</button>
          `}
        />

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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button>Lorem ipsum <img src="/img/cat.svg" alt="Kat"></button>
`}
        />

        <h3><code>button</code> met een afbeelding: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button disabled>Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button disabled>Lorem ipsum <img src="/img/cat.svg" alt="Kat"></button>
`}
        />

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
        <a href="./icon/components/icons/test" class="button icon icon-user">Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button icon icon-cat">Lorem ipsum</a>
`}
        />

        <a href="./test" class="button">
          <span class="icon icon-user" aria-hidden="true"></span>Inloggen
        </a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href="./test" class="button">
  <span class="icon icon-user" aria-hidden="true"></span>Inloggen
</a>
`}
        />

        <h3>Link als knop icoon erachter</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="./test" class="button">
          Inloggen <span class="icon icon-user" aria-hidden="true"></span>
        </a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href="./test" class="button">
  Inloggen <span class="icon icon-user" aria-hidden="true"></span>
</a>
`}
        />

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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button">Lorem ipsum <img src="/img/cat.svg" alt="Kat" /></a>
`}
        />

        <h3>pseudo-element op buttonme type="submit"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="submit">Zoeken</button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-search" aria-label="Zoeken" type="submit">Zoeken</button>`}
        />

        <h3><code>button type="submit"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="submit">
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button type="submit">
  <span class="icon icon-search" aria-hidden="true"></span>Zoeken
</button>
          `}
        />

        <h3>pseudo-element op disabled button met type="submit"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="submit" disabled>Zoeken</button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-search" aria-label="Zoeken" type="submit" disabled>Zoeken</button>`}
        />

        <h3><code>button type="submit"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="submit" disabled>
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button type="submit" disabled>
  <span class="icon icon-search" aria-hidden="true"></span>Zoeken
</button>
          `}
        />

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

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-search" aria-label="Zoeken" type="reset">Zoeken</button>`}
        />

        <h3><code>button type="reset"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="reset">
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button type="reset">
  <span class="icon icon-search" aria-hidden="true"></span>Zoeken
</button>
          `}
        />

        <h3>pseudo-element op disabled button met type="reset"</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-search" aria-label="Zoeken" type="reset" disabled>Zoeken</button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-search" aria-label="Zoeken" type="reset" disabled>Zoeken</button>`}
        />

        <h3><code>button type="reset"</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button type="reset" disabled>
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button type="reset" disabled>
  <span class="icon icon-search" aria-hidden="true"></span>Zoeken
</button>
          `}
        />

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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href="./test">
  <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
</a>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            Focus:
            <a href="./test" class="focus">
              <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
            </a>
          </li>
          <li>
            Focus visited:
            <a href="./test" class="focus visited">
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
            Active visited:
            <a href="./test" class="active visited">
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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href="./test"><img src="/img/cat.svg" alt="Kat" class="icon">Lorem ipsum</a>
`}
        />

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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<span class="icon icon-cat">Lorem ipsum</span>
`}
        />

        <h3><code>span</code> met afbeelding als icoon</h3>
        <h4>Visueel voorbeeld:</h4>
        <span><img src="$img/cat.svg" alt="Kat" class="icon" />Lorem ipsum</span>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<span><img src="/img/cat.svg" alt="Kat" class="icon">Lorem ipsum</span>
`}
        />

        <h3><code>li</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li class="icon icon-cat">Lorem ipsum</li>
        </ul>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<ul>
  <li class="icon icon-cat">Lorem ipsum</li>
</ul>
`}
        />

        <h3><code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="icon icon-cat">Lorem ipsum</div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="icon icon-cat">Lorem ipsum</div>
`}
        />

        <h3><code>div</code> met afbeelding als icoon</h3>
        <h4>Visueel voorbeeld:</h4>
        <div><img src="$img/cat.svg" alt="Kat" class="icon" />Lorem ipsum</div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div><img src="/img/cat.svg" alt="Kat">Lorem ipsum</div>
`}
        />

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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
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
`}
        />
      </section>
    </div>
  </article>
</main>
