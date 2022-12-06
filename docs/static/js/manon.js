(() => {
  // ../manon/utils.js
  function onDomReady(fn) {
    if (document.readyState !== "loading")
      return fn();
    document.addEventListener("DOMContentLoaded", fn);
  }
  function ensureElementHasId(element) {
    if (!element.id) {
      element.id = element.tagName + "-" + (~~(Math.random() * 1e9) + 1e9).toString(16);
    }
  }
  function onMediaQueryMatch(media, handler) {
    var mql = window.matchMedia(media);
    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      mql.addListener(handler);
    }
    handler(mql);
    return function remove() {
      if (mql.addEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }
  function prependNode(parent, child) {
    var children = parent.childNodes;
    if (children.length)
      parent.insertBefore(child, children[0]);
    else
      parent.appendChild(child);
  }
  function onDomUpdate(handler, root) {
    if ("MutationObserver" in window) {
      var observer = new MutationObserver(handler);
      observer.observe(root || document, { childList: true, subtree: true });
      return observer.disconnect.bind(observer);
    }
  }
  function closest(element, selectors) {
    if (Element.prototype.closest) {
      return element.closest(selectors);
    }
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    do {
      if (matches.call(element, selectors)) {
        return element;
      }
      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === 1);
    return null;
  }

  // ../manon/accordion.js
  var initiatedAccordions = /* @__PURE__ */ new WeakMap();
  onDomReady(initAccordions);
  onDomUpdate(initAccordions);
  function initAccordions() {
    var accordions = document.querySelectorAll(".accordion");
    for (var i = 0; i < accordions.length; i++) {
      var accordion = accordions[i];
      if (initiatedAccordions.has(accordion)) {
        continue;
      }
      if (!(accordion instanceof HTMLElement)) {
        continue;
      }
      initAccordion(accordion);
      initiatedAccordions.set(accordion, true);
    }
    document.body.classList.add("js-accordion-loaded");
  }
  function initAccordion(accordion) {
    var hasAriaExpandedMarkup = false;
    var buttons = getButtons(accordion);
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (!button.getAttribute("aria-controls")) {
        var sibling = button.nextElementSibling;
        if (!(sibling instanceof HTMLElement) || sibling.tagName !== "DIV") {
          console.error("No sibling <div> found for accordion button:", button);
          continue;
        }
        ensureElementHasId(sibling);
        button.setAttribute("aria-controls", sibling.id);
      }
      if (button.getAttribute("aria-expanded")) {
        hasAriaExpandedMarkup = true;
      } else {
        button.setAttribute("aria-expanded", "false");
      }
      button.addEventListener("click", function(event) {
        var target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }
        var expanded = target.getAttribute("aria-expanded") === "true";
        target.setAttribute("aria-expanded", expanded ? "false" : "true");
      });
    }
    if (!hasAriaExpandedMarkup) {
      buttons[0].setAttribute("aria-expanded", "true");
    }
  }
  function getButtons(accordion) {
    var buttons = [];
    for (var i = 0; i < accordion.children.length; i++) {
      var container = accordion.children[i];
      for (var j = 0; j < container.children.length; j++) {
        var child = container.children[j];
        if (child.tagName === "BUTTON") {
          buttons.push(child);
        }
      }
    }
    return buttons;
  }

  // ../manon/expando-rows.js
  var managedTables = /* @__PURE__ */ new WeakMap();
  onDomReady(initExpandoRows);
  onDomUpdate(initExpandoRows);
  function initExpandoRows() {
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      if (!(table instanceof HTMLElement)) {
        continue;
      }
      if (!(table instanceof HTMLElement) || !table.querySelector(".expando-button") || managedTables.has(table)) {
        continue;
      }
      initTable(table);
      managedTables.set(table, true);
    }
    document.body.classList.add("js-expando-rows-loaded");
  }
  function initTable(table) {
    initExpandoButtons(table);
    updateZebra(table);
    onDomUpdate(function() {
      initExpandoButtons(table);
      updateZebra(table);
    }, table);
  }
  function initExpandoButtons(table) {
    var buttons = table.querySelectorAll(".expando-button");
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (!(button instanceof HTMLElement) || button.hasAttribute("aria-controls") || button.hasAttribute("disabled")) {
        continue;
      }
      initExpandoButton(button);
    }
  }
  function initExpandoButton(button) {
    var iconOpenClasses = button.dataset.iconOpenClass.split(/\s+/);
    var iconCloseClasses = button.dataset.iconCloseClass.split(/\s+/);
    var buttonRow = closest(button, "tr");
    var row = buttonRow.nextElementSibling;
    if (!(row instanceof HTMLElement) || !(row.tagName === "TR") || !row.classList.contains("expando-row")) {
      console.warn("Could not find .expando-row corresponding to .expando-button:", button);
      button.setAttribute("disabled", "");
      button.classList.add("action-button");
      button.classList.add.apply(button.classList, expanded ? iconCloseClasses : iconOpenClasses);
      return;
    }
    var expanded = button.getAttribute("aria-expanded") === "true";
    var closeLabel, openLabel;
    if (expanded) {
      closeLabel = button.innerText.trim();
      openLabel = button.dataset.openLabel.trim() || "Open details";
      button.setAttribute("aria-expanded", "true");
    } else {
      closeLabel = button.dataset.closeLabel.trim() || "Sluit details";
      openLabel = button.innerText.trim();
      button.setAttribute("aria-expanded", "false");
      row.setAttribute("hidden", "");
    }
    ensureElementHasId(row);
    button.setAttribute("aria-controls", row.id);
    button.classList.add("action-button");
    button.classList.add.apply(button.classList, expanded ? iconCloseClasses : iconOpenClasses);
    button.addEventListener("click", function() {
      var expand = button.getAttribute("aria-expanded") === "false";
      if (expand) {
        button.innerText = closeLabel;
        button.setAttribute("aria-expanded", "true");
        button.classList.remove.apply(button.classList, iconOpenClasses);
        button.classList.add.apply(button.classList, iconCloseClasses);
        row.removeAttribute("hidden");
      } else {
        button.innerText = openLabel;
        button.setAttribute("aria-expanded", "false");
        button.classList.remove.apply(button.classList, iconCloseClasses);
        button.classList.add.apply(button.classList, iconOpenClasses);
        row.setAttribute("hidden", "");
      }
    });
  }
  function updateZebra(table) {
    var rows = table.querySelector("tbody").querySelectorAll("tr:not(.expando-row)");
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (i % 2) {
        row.classList.add("even");
        row.classList.remove("odd");
      } else {
        row.classList.add("odd");
        row.classList.remove("even");
      }
    }
  }

  // ../manon/filters.js
  var initiatedFilterToggles = /* @__PURE__ */ new WeakMap();
  onDomReady(initFilterToggles);
  onDomUpdate(initFilterToggles);
  function initFilterToggles() {
    var filterToggles = document.querySelectorAll(".filter > div > button");
    for (var i = 0; i < filterToggles.length; i++) {
      var filterToggle = filterToggles[i];
      if (initiatedFilterToggles.has(filterToggle) || !(filterToggle instanceof HTMLElement)) {
        continue;
      }
      initFilterToggle(filterToggle);
      initiatedFilterToggles.set(filterToggle, true);
    }
    document.body.classList.add("js-filters-loaded");
  }
  function initFilterToggle(filterToggle) {
    var filter = filterToggle.parentNode.parentNode;
    if (!(filter instanceof HTMLElement)) {
      return;
    }
    var form = filter.querySelector("form");
    if (!(form instanceof HTMLElement)) {
      console.error("Could not find <form> corresponding to filter toggle:", filterToggle);
      return;
    }
    var expanded = filterToggle.getAttribute("aria-expanded") !== "false";
    var hideLabel, showLabel;
    if (expanded) {
      hideLabel = filterToggle.innerText;
      showLabel = filterToggle.dataset.showFiltersLabel || "Toon filters";
    } else {
      hideLabel = filterToggle.dataset.hideFiltersLabel || "Verberg filters";
      showLabel = filterToggle.innerText;
    }
    ensureElementHasId(filter);
    filterToggle.setAttribute("aria-controls", filter.id);
    if (expanded) {
      filterToggle.setAttribute("aria-expanded", "true");
    } else {
      form.setAttribute("hidden", "");
    }
    filterToggle.addEventListener("click", function() {
      var expand = filterToggle.getAttribute("aria-expanded") == "false";
      filterToggle.setAttribute("aria-expanded", expand ? "true" : "false");
      filterToggle.innerHTML = expand ? hideLabel : showLabel;
      if (expand) {
        form.removeAttribute("hidden");
      } else {
        form.setAttribute("hidden", "");
      }
    });
  }

  // ../manon/form-help.js
  onDomReady(initFormHelp);
  onDomUpdate(initFormHelp);
  function initFormHelp() {
    findCollapsibleExplanations().forEach(collapseExplanation);
  }
  function findCollapsibleExplanations() {
    var result = [];
    var explanations = document.querySelectorAll("form.help div input + .explanation,form.help div textarea + .explanation,form.help div select + .explanation,form.help div div + .explanation,form.help div label + .explanation,form.help fieldset input + .explanation,form.help fieldset textarea + .explanation,form.help fieldset select + .explanation,form.help fieldset div + .explanation,form.help fieldset label + .explanation");
    for (var i = 0; i < explanations.length; i++) {
      var explanation = explanations[i];
      if (!(explanation instanceof HTMLElement)) {
        continue;
      }
      var previousSibling = explanation.previousElementSibling;
      if (!(previousSibling instanceof HTMLElement)) {
        continue;
      }
      if (previousSibling.tagName === "DIV" && !previousSibling.querySelector("input, textarea, select")) {
        continue;
      }
      var nextSibling = explanation.nextElementSibling;
      if (!(nextSibling instanceof HTMLElement) || nextSibling.tagName !== "BUTTON" || !nextSibling.classList.contains("help-button")) {
        result.push(explanation);
      }
    }
    return result;
  }
  function collapseExplanation(explanation) {
    explanation.classList.add("collapsed");
    explanation.tabIndex = -1;
    ensureElementHasId(explanation);
    var button = document.createElement("button");
    var openLabel = explanation.dataset.openLabel || "Open uitleg";
    var closeLabel = explanation.dataset.closeLabel || "Sluit uitleg";
    var iconOpenClasses = (explanation.dataset.iconOpenClass || "icon icon-questionmark").split(/\s+/);
    var iconCloseClasses = (explanation.dataset.iconCloseClass || "icon icon-close").split(/\s+/);
    button.classList.add("help-button");
    button.classList.add.apply(button.classList, iconOpenClasses);
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", explanation.id);
    button.innerText = openLabel;
    button.addEventListener("click", function toggleExpanded() {
      var expand = button.getAttribute("aria-expanded") === "false";
      button.setAttribute("aria-expanded", expand ? "true" : "false");
      button.classList.remove.apply(button.classList, expand ? iconOpenClasses : iconCloseClasses);
      button.classList.add.apply(button.classList, expand ? iconCloseClasses : iconOpenClasses);
      button.innerText = expand ? closeLabel : openLabel;
      if (expand) {
        explanation.classList.remove("collapsed");
        explanation.focus();
      } else {
        explanation.classList.add("collapsed");
      }
    });
    if (explanation.nextSibling) {
      explanation.parentNode.insertBefore(button, explanation.nextSibling);
    } else {
      explanation.parentNode.append(button);
    }
  }

  // ../manon/navigation.js
  onDomReady(initNaviation);
  function initNaviation() {
    var headers = document.querySelectorAll("header:not(.breadcrumbs)");
    for (var i = 0; i < headers.length; i++) {
      var nav = headers[i].querySelector("nav");
      if (!(nav instanceof HTMLElement) || nav.querySelector(".menu_toggle")) {
        continue;
      }
      var isCondensed = headers[i].className.indexOf("condensed") !== -1;
      makeResponsive(nav, isCondensed);
    }
  }
  function makeResponsive(nav, isCondensed) {
    var menu = nav.querySelector("ul, ol");
    if (!(menu instanceof HTMLElement)) {
      return;
    }
    ensureElementHasId(menu);
    var button = createMenuButton(menu, nav.dataset.openLabel || "Menu", nav.dataset.closeLabel || "Sluit menu");
    menu.parentNode.insertBefore(button.element, menu);
    if (!isCondensed) {
      onMediaQueryMatch(nav.dataset.media || "(min-width: 42rem)", function(event) {
        button.setExpanded(false);
        if (event.matches) {
          nav.classList.remove("collapsible-menu");
        } else {
          nav.classList.add("collapsible-menu");
        }
      });
    }
  }
  function createMenuButton(ul, openLabel, closeLabel) {
    var button = document.createElement("button");
    button.className = "menu_toggle";
    button.setAttribute("hidden", "false");
    button.setAttribute("aria-controls", ul.id);
    button.setAttribute("aria-expanded", "false");
    var label = document.createElement("span");
    label.innerText = openLabel;
    label.className = "sr-only";
    ensureElementHasId(label);
    button.appendChild(label);
    button.setAttribute("aria-labelledby", label.id);
    function setExpanded(expanded) {
      if (expanded !== (button.getAttribute("aria-expanded") === "true")) {
        button.setAttribute("aria-expanded", String(expanded));
        label.innerText = expanded ? closeLabel : openLabel;
      }
    }
    button.addEventListener("click", function() {
      setExpanded(button.getAttribute("aria-expanded") === "false");
    });
    return {
      element: button,
      setExpanded
    };
  }

  // ../manon/sidemenu.js
  onDomReady(initSidemenus);
  function initSidemenus() {
    var sidemenus = document.querySelectorAll(".sidemenu > nav");
    for (var i = 0; i < sidemenus.length; i++) {
      var sidemenu = sidemenus[i];
      if (!(sidemenu instanceof HTMLElement)) {
        continue;
      }
      if (!sidemenu.querySelector("button.sidemenu-toggle")) {
        addToggleButton(sidemenu);
      }
    }
  }
  function addToggleButton(sidemenu) {
    var main = closest(sidemenu, ".sidemenu");
    var ul = sidemenu.querySelector("ul");
    if (!main || !ul) {
      return;
    }
    ensureElementHasId(ul);
    var openLabel = sidemenu.dataset.openLabel || "Zijbalknavigatie";
    var closeLabel = sidemenu.dataset.closeLabel || "Sluit zijbalknavigatie";
    var iconOpenClasses = (sidemenu.dataset.iconOpenClass || "icon icon-hamburger").split(/\s+/);
    var iconCloseClasses = (sidemenu.dataset.iconCloseClass || "icon icon-close").split(/\s+/);
    var toggleButtonType = sidemenu.dataset.toggleButtonType || "ghost";
    var button = document.createElement("button");
    button.classList.add(toggleButtonType, "sidemenu-toggle");
    button.setAttribute("aria-controls", ul.id);
    function isClosed() {
      return main.classList.contains("sidemenu-closed");
    }
    function setClosed(closed) {
      button.innerText = closed ? closeLabel : openLabel;
      button.classList.remove.apply(button.classList, closed ? iconCloseClasses : iconOpenClasses);
      button.classList.add.apply(button.classList, closed ? iconOpenClasses : iconCloseClasses);
      button.setAttribute("aria-expanded", String(!closed));
      if (closed) {
        main.classList.add("sidemenu-closed");
      } else {
        main.classList.remove("sidemenu-closed");
      }
    }
    setClosed(isClosed());
    button.addEventListener("click", function() {
      setClosed(!isClosed());
    });
    prependNode(sidemenu, button);
  }
})();
