---
title: Tabel met actieknoppen testpagina
breadcrumb: Tabel met actieknoppen testpagina
---

<h1 id="introduction">Tabel met actieknoppen testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Knop als actieknop

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

### HTML-voorbeeld:

#### `class` op indivuele knoppen

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met actieknoppen:
    </caption>
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
```

### Knop als actieknop

<div class="horizontal-scroll">
  <table class="action-buttons">
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
            <button type="submit" class="icon icon-cat">Bekijk profiel</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-cat">Wijzig wachtwoord</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-cat">Deactiveer</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-cat">Verwijder</button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### HTML-voorbeeld:

#### `class` op indivuele knoppen

```html
<div class="horizontal-scroll">
  <table class="action-buttons">
    <caption>
      Tabelvoorbeeld met actieknoppen:
    </caption>
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
            <button type="submit" class="icon icon-cat">Bekijk profiel</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-cat">Wijzig wachtwoord</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-cat">Deactiveer</button>
          </form>
        </td>
        <td>
          <form>
            <button type="submit" class="icon icon-cat">Verwijder</button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
