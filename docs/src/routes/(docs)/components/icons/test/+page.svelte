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
  <article>
    <div>
      <section id="introduction">
        <h1>Iconen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="icon icon-cat">Kat</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="icon icon-cat">Kat</button>
`}
        />

        <h3><code>button</code> disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button class="icon icon-cat" disabled>Kat</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="icon icon-cat" disabled>Kat</button>
`}
        />
        <h4>States</h4>
        <ul>
          <li><button class="icon icon-cat focus">Focus</button></li>
          <li><button class="icon icon-cat active">Active</button></li>
          <li><button class="icon icon-cat visited">Visited</button></li>
          <li><button class="icon icon-cat hover">Hover</button></li>
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
            <button class="focus">
              Focus <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
          <li>
            <button class="active">
              Active <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
          <li>
            <button class="visited">
              Visited <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
          <li>
            <button class="hover">
              Hover <img src="$img/cat.svg" alt="Kat" />
            </button>
          </li>
        </ul>

        <h3>Link als knop</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/icons/test" class="button icon icon-cat">Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button icon icon-cat">Lorem ipsum</a>
`}
        />

        <h3>Link als knop icoon erachter</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/icons/test">Lorem ipsum<span class="icon icon-cat"></span></a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href="{base}/components/icons/test" class="icon-after icon-cat">Lorem ipsum
`}
        />

        <h4>States</h4>
        <ul>
          <li>
            <a href="{base}/components/icons/test" class="button icon icon-cat focus">Focus</a>
          </li>
          <li>
            <a href="{base}/components/icons/test" class="button icon icon-cat active">Active</a>
          </li>
          <li>
            <a href="{base}/components/icons/test" class="button icon icon-cat visited">Visited</a>
          </li>
          <li>
            <a href="{base}/components/icons/test" class="button icon icon-cat hover">Hover</a>
          </li>
        </ul>

        <h3>Link als knop: met een afbeelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="{base}/components/icons/test" class="button icon icon-cat"
          >Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></a
        >

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<input class="button icon icon-cat">Lorem ipsum <img src="/img/cat.svg" alt="Kat" /></a>
`}
        />

        <h3><code>button type="submit"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="icon icon-cat">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" class="icon icon-cat">Lorem ipsum</button>
`}
        />

        <h3><code>button type="submit"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="submit" class="icon icon-cat" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="submit" value="Button disabled" class="icon icon-cat" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            <button type="submit" class="icon icon-cat focus">Focus</button>
          </li>
          <li>
            <button type="submit" class="icon icon-cat active">Active</button>
          </li>
          <li>
            <button type="submit" class="icon icon-cat visited">Visited</button>
          </li>
          <li>
            <button type="submit" class="icon icon-cat hover">Hover</button>
          </li>
        </ul>

        <h3><code>button type="reset"</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="icon icon-cat">Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" class="icon icon-cat">Lorem ipsum</button>
`}
        />

        <h3><code>button type="reset"</code>: disabled</h3>
        <h4>Visueel voorbeeld:</h4>
        <button type="reset" class="icon icon-cat" disabled>Lorem ipsum</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button type="reset" value="Button disabled" class="icon icon-cat" disabled>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            <button type="reset" class="icon icon-cat focus">Focus</button>
          </li>
          <li>
            <button type="reset" class="icon icon-cat active">Active</button>
          </li>
          <li>
            <button type="reset" class="icon icon-cat visited">Visited</button>
          </li>
          <li>
            <button type="reset" class="icon icon-cat hover">Hover</button>
          </li>
        </ul>

        <h3>Link</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="test" class="icon icon-cat">Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href="" class="icon icon-cat">Lorem ipsum</a>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            <a href="{base}/components/icons/test" class="icon icon-cat focus">Focus</a>
          </li>
          <li>
            <a href="{base}/components/icons/test" class="icon icon-cat active">Active</a>
          </li>
          <li>
            <a href="{base}/components/icons/test" class="icon icon-cat visited">Visited</a>
          </li>
          <li>
            <a href="{base}/components/icons/test" class="icon icon-cat hover">Hover</a>
          </li>
        </ul>

        <h3>Link met afbeelding als icoon</h3>
        <h4>Visueel voorbeeld:</h4>
        <a href="test"><img src="$img/cat.svg" alt="Kat" class="icon" />Lorem ipsum</a>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<a href=""><img src="/img/cat.svg" alt="Kat" class="icon">Lorem ipsum</a>
`}
        />

        <h4>States</h4>
        <h4>Visueel voorbeeld:</h4>
        <ul>
          <li>
            <a href="{base}/components/icons/test" class="focus"
              ><img src="$img/cat.svg" alt="Kat" class="icon" />Focus</a
            >
          </li>
          <li>
            <a href="{base}/components/icons/test" class="active"
              ><img src="$img/cat.svg" alt="Kat" class="icon" />Active</a
            >
          </li>
          <li>
            <a href="{base}/components/icons/test" class="visited"
              ><img src="$img/cat.svg" alt="Kat" class="icon" />Visited</a
            >
          </li>
          <li>
            <a href="{base}/components/icons/test" class="hover"
              ><img src="$img/cat.svg" alt="Kat" class="icon" />Hover</a
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
                <th scope="col">Wijzig wachtwoord</th>
                <th scope="col">Deactiveer</th>
                <th scope="col">Verwijder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane doe</td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button">
                      Bekijk profiel
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button">
                      Wijzig wachtwoord
                    </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button"> Deactiveer </button>
                  </form>
                </td>
                <td>
                  <form>
                    <button type="submit" class="icon icon-cat action-button">Verwijder</button>
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
  <caption>Tabelvoorbeeld met actieknoppen:</caption>
  <thead>
    <tr>
      <th scope="col">Gebruikersnaam</th>
      <th scope="col">Bekijk profiel</th>
      <th scope="col">Wijzig wachtwoord</th>
      <th scope="col">Deactiveer</th>
      <th scope="col">Verwijder</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Jane doe</td>
        <td>
            <form>
                <button type="submit" class="icon icon-cat action-button">Bekijk profiel</button>
            </form>
        </td>
        <td>
            <form>
                <button type="submit" class="icon icon-cat action-button">Wijzig wachtwoord</button>
            </form>
        </td>
        <td>
            <form>
                <button type="submit" class="icon icon-cat action-button">Deactiveer</button>
            </form>
        </td>
        <td>
            <form>
                <button type="submit" class="icon icon-cat action-button">Verwijder</button>
            </form>
        </td>
    </tr>
  </tbody>
</table>
</div>
`}
        />

        <h3>Language selector</h3>
        <h4>Visueel voorbeeld</h4>
        <div class="language-selector">
          <p>Kies een taal:</p>
          <p class="visually-hidden" id="language-selector-description">Select your language</p>
          <div
            class="language-selector-options"
            aria-describedby="language-selector-description"
            aria-expanded="false"
          >
            <button aria-haspopup="listbox" aria-current="true"> Papiamentu </button>
            <ul role="listbox">
              <li role="option" aria-selected="false">
                <a hreflang="nl" href="test" data-value="Nederlands" lang="nl"
                  >Nederlands</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="en" href="test" data-value="English" lang="en">English</a>
              </li>
              <li>
                <a hreflang="fy" href="test" data-value="Frysk" lang="fy">Frysk</a>
              </li>
              <li role="option" aria-selected="true" aria-current="true">
                <a hreflang="pap-CW" href="test" data-value="Papiamentu" lang="pap-CW"
                  >Papiamentu</a
                >
              </li>
              <li role="option" aria-selected="false">
                <a hreflang="pap-AW" href="test" data-value="Papiamento" lang="pap-AW"
                  >Papiamento</a
                >
              </li>
            </ul>
          </div>
        </div>

        <h4>HTML-Voorbeeld</h4>
        <Code
          language="html"
          code={`
<div class="language-selector">
  <p>Kies een taal:</p>
  <p class="visually-hidden" id="language-selector-description">Select your language</p>
  <div class="language-selector-options" aria-describedby="language-selector-description" aria-expanded="false">
    <button aria-haspopup="listbox" aria-current="true">
      Papiamentu
    </button>
    <ul role="listbox">
        <li role="option" aria-selected="false">
          <a hreflang="nl" href="#" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="en" href="#" data-value="English" lang="en">English</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="fy" href="#" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li role="option" aria-selected="true" aria-current="true">
          <a hreflang="pap-CW" href="#" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="pap-AW" href="#" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
    </ul>
  </div>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
