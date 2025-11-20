import { ensureElementHasId } from "./utils.js";

class ManonTabs extends HTMLElement {
  constructor() {
    super();

    /** @type {Array<HTMLElement>} */
    this.tabs = [];

    /** @type {Map<HTMLElement, HTMLElement>} */
    this.tabpanels = new Map();
  }

  connectedCallback() {
    // Find tablist
    this.tablist = this.querySelector(":scope > ul");
    if (!this.tablist) return;

    // Find and prepare tabs
    for (const tab of Array.from(this.tablist.querySelectorAll("a"))) {
      this.#initTab(tab);
    }
    if (!this.tabs.length) return;

    // Enable tablist's interactive behaviour
    this.tablist.setAttribute("role", "tablist");
    this.tablist.addEventListener("click", this.handleClick.bind(this));
    this.tablist.addEventListener("keydown", this.handleKeydown.bind(this));

    // Activate first tab
    this.setActiveTab(this.tabs[0], false);
  }

  /**
   * Initializes a single <a> element as a tab and its corresponding
   * target element as a tabpanel.
   *
   * @param {HTMLAnchorElement} tab
   */
  #initTab(tab) {
    ensureElementHasId(tab);

    const target = new URL(tab.href).hash;
    const tabpanel = target && this.querySelector(target);
    if (!(tabpanel instanceof HTMLElement)) return;

    tab.tabIndex = -1;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", "false");
    tab.setAttribute("aria-controls", tabpanel.id);

    tabpanel.tabIndex = 0;
    tabpanel.setAttribute("role", "tabpanel");
    tabpanel.setAttribute("aria-labelledby", tab.id);
    tabpanel.setAttribute("hidden", "");

    this.tabs.push(tab);
    this.tabpanels.set(tab, tabpanel);
  }

  /**
   * Handles clicks on the tablist. Normalizes the target to the nearest
   * element with the "tab" role and activates its associated tabpanel.
   *
   * @param {Event} event
   */
  handleClick(event) {
    if (!(event instanceof PointerEvent)) return;

    let tab = event.target;
    if (!(tab instanceof HTMLElement)) return;
    if (tab.role !== "tab") {
      tab = tab.closest('[role="tab"');
      if (!(tab instanceof HTMLElement)) return;
    }

    if (!this.tabs.includes(tab)) return;
    event.preventDefault();
    this.setActiveTab(tab);
  }

  /**
   * Handles keyboard navigation inside the tablist.
   * Supports ArrowLeft, ArrowRight, Home, and End keys to move
   * focus between tabs and update selection accordingly.
   *
   * @param {Event} event
   */
  handleKeydown(event) {
    if (!(event instanceof KeyboardEvent)) return;
    // Identify key
    let direction;
    if (event.key === "ArrowLeft") direction = -1;
    else if (event.key === "ArrowRight") direction = 1;
    else if (event.key === "Home") direction = -Infinity;
    else if (event.key === "End") direction = Infinity;
    if (!direction) return;

    // Handle event
    event.stopPropagation();
    event.preventDefault();
    const selected = this.querySelector('[aria-selected="true"]');
    if (!(selected === null || selected instanceof HTMLElement)) return;
    let index = selected ? this.tabs.indexOf(selected) : -1;

    // Default to first tab if current state is corrupted
    if (index === -1) index = 0;
    // Handle Home key
    else if (direction === -Infinity) index = 0;
    // Handle End key
    else if (direction === Infinity) index = this.tabs.length - 1;
    // Handle ArrowLeft/ArrowRight, wrapping around if needed
    else {
      index = index + direction;
      if (index >= this.tabs.length) index = 0;
      if (index < 0) index = this.tabs.length - 1;
    }
    this.setActiveTab(this.tabs[index]);
  }

  /**
   * Marks the given tab as active and shows its tabpanel.
   * Hides all other tabpanels and updates ARIA attributes accordingly.
   *
   * @param {Element} activeTab - Which tab to activate.
   * @param {Boolean} [setFocus] - Whether to move focus. Default true.
   */
  setActiveTab(activeTab, setFocus) {
    for (const tab of this.tabs) {
      const panel = this.tabpanels.get(tab);
      if (!panel) continue;
      if (tab === activeTab) {
        tab.setAttribute("aria-selected", "true");
        tab.removeAttribute("tabindex");
        panel.removeAttribute("hidden");
        if (setFocus !== false) tab.focus();
      } else {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
        panel.setAttribute("hidden", "");
      }
    }
  }
}

window.customElements.define("manon-tabs", ManonTabs);
