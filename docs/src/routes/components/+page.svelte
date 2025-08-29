<script module>
  export const breadcrumb = "Components";
</script>

<script lang="ts">
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Componenten</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <h1>Componenten</h1>
    <div class="content-wrapper">
      <p>
        Componenten zijn herbruikbare bouwstenen die gebruikt worden om de gebruikersinterface van
        een webapplicatie te bouwen. Ze zijn ontworpen om consistentie en herbruikbaarheid te
        bevorderen, en kunnen eenvoudig worden aangepast aan specifieke behoeften.
      </p>

      <section id="layout">
        <h2>Layout</h2>
        <div class="column-2">
          <nav aria-labelledby="page-layout-heading">
            <h3 id="page-layout-heading">Page layout</h3>
            <ul>
              <li><a href="{base}/components/layout/main">Main</a></li>
              <li>
                <a href="{base}/components/layout/main-content-wrapper">Main content wrapper</a>
              </li>
              <li><a href="{base}/components/layout/section">Section</a></li>
              <li>
                <a href="{base}/components/layout/section-content-wrapper"
                  >Section content wrapper</a
                >
              </li>
              <li><a href="{base}/components/layout/article">Article</a></li>
              <li>
                <a href="{base}/components/layout/article-content-wrapper"
                  >Article content wrapper</a
                >
              </li>
              <li><a href="{base}/components/layout/div">Div</a></li>
              <li>
                <a href="{base}/components/layout/div-content-wrapper">Div content wrapper</a>
              </li>
              <li><a href="{base}/components/layout/footer">Footer</a></li>
              <li>
                <a href="{base}/components/layout/layout-authentication">Layout authentication</a>
              </li>
              <li><a href="{base}/components/layout/layout-form">Layout form</a></li>
              <li><a href="{base}/components/layout/layout-set">Layout set</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="typography-heading">
            <h3 id="typography-heading">Typography</h3>
            <ul>
              <li><a href="{base}/components/layout/typography/body-text-set">Body text set</a></li>
              <li><a href="{base}/components/layout/typography/de-emphasized">De-emphasized</a></li>
              <li><a href="{base}/components/layout/typography/emphasized">Emphasized</a></li>
              <li>
                <a href="{base}/components/layout/typography/heading-base-set">Heading base set</a>
              </li>
              <li><a href="{base}/components/layout/typography/headings">Headings</a></li>
              <li>
                <a href="{base}/components/layout/typography/max-line-length">Max line length</a>
              </li>
              <li><a href="{base}/components/layout/typography/paragraph">Paragraph</a></li>
              <li><a href="{base}/components/layout/typography/nota-bene">Nota bene</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section id="components">
        <h2>Componenten</h2>
        <div class="column-3">
          <nav>
            <ul>
              <li><a href="{base}/components/components/accordion">Accordion</a></li>
              <li><a href="{base}/components/components/breadcrumb">Breadcrumb</a></li>
              <li><a href="{base}/components/components/button">Button</a></li>
              <li><a href="{base}/components/components/card">Card</a></li>
              <li><a href="{base}/components/components/code">Code & Code block</a></li>
              <li><a href="{base}/components/components/collapsible">Collapsible</a></li>
              <li><a href="{base}/components/components/collapsible-menu">Collapsible menu</a></li>
              <li><a href="{base}/components/components/description-list">Description list</a></li>
              <li><a href="{base}/components/components/filter">Filter</a></li>
              <li><a href="{base}/components/components/logo">logo</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><a href="{base}/components/components/forms">Forms</a></li>
              <li>
                <a href="{base}/components/components/header-navigation">Header navigation</a>
              </li>
              <li><a href="{base}/components/components/icons">Icons</a></li>
              <li><a href="{base}/components/components/image">Image</a></li>
              <li><a href="{base}/components/components/hero">Hero</a></li>
              <li>
                <a href="{base}/components/components/language-selector">Language selector</a>
              </li>
              <li><a href="{base}/components/components/link">Link</a></li>
              <li><a href="{base}/components/components/login-meta">Login Meta</a></li>
              <li><a href="{base}/components/components/navigation">Navigation</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><a href="{base}/components/components/notifications">Notifications</a></li>
              <li><a href="{base}/components/components/pagination">Pagination</a></li>
              <li><a href="{base}/components/components/sidemenu">Sidemenu</a></li>
              <li><a href="{base}/components/components/skip-to-content">Skip to content</a></li>
              <li><a href="{base}/components/components/table">Table</a></li>
              <li><a href="{base}/components/components/tabs">Tabs</a></li>
              <li><a href="{base}/components/components/tag">Tag</a></li>
              <li><a href="{base}/components/components/tags">Tags</a></li>
              <li><a href="{base}/components/components/tile">Tile</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </section>
</main>
