import { onDomReady } from "@minvws/manon/utils.js";

onDomReady(initSortableTable);

function initSortableTable() {
  var thead = document.querySelector("#sortable-table-example thead");
  var tbody = document.querySelector("#sortable-table-example tbody");
  if (!(thead instanceof HTMLTableSectionElement) || !(tbody instanceof HTMLTableSectionElement)) {
    return;
  }
  thead.addEventListener("click", function(event) {
    var button = event.target;
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }
    var sortStatus = getSortStatus(thead);
    var columnIndex = getColumnIndex(button.parentElement);
    if (columnIndex === sortStatus.columnIndex) {
      sortStatus.direction = sortStatus.direction === 'ascending' ? 'descending' : 'ascending';
    } else {
      sortStatus.columnIndex = columnIndex;
      sortStatus.direction = 'ascending';
    }
    updateSortButtons(thead, sortStatus);
    sortTableBody(tbody, sortStatus);
  });
}

function getColumnIndex(th) {
  return Array.prototype.indexOf.call(th.parentElement.children, th);
}

function getSortStatus(thead) {
  var sorted = thead.querySelector("[aria-sort]");
  if (!sorted) {
    return { columnIndex: -1, direction: null };
  }
  return {
    columnIndex: getColumnIndex(sorted),
    direction: sorted.getAttribute("aria-sort")
  }
}

function updateSortButtons(thead, sortStatus) {
  var ths = thead.querySelectorAll("th");
  var sorted = thead.querySelector("th[aria-sort]");
  if (sorted && getColumnIndex(sorted) !== sortStatus.columnIndex) {
    sorted.removeAttribute("aria-sort");
    var icon = sorted.querySelector(".icon");
    if (icon) {
      icon.classList.remove("icon-sortable", "icon-ascending", "icon-descending");
      icon.classList.add("icon-sortable");
    }
  }
  var sort = ths[sortStatus.columnIndex];
  if (sort) {
    sort.setAttribute("aria-sort", sortStatus.direction);
    var icon = sort.querySelector(".icon");
    if (icon) {
      icon.classList.remove("icon-sortable", "icon-ascending", "icon-descending");
      icon.classList.add("icon-" + sortStatus.direction);
    }
  }
}

function sortTableBody(tbody, sortStatus) {
  var cells = tbody.querySelectorAll("tr > td:nth-of-type(" + (sortStatus.columnIndex + 1) + ")");
  var comparator = sortStatus.direction === "ascending"
    ? function (a, b) { return ('' + a.innerText).localeCompare(b.innerText); }
    : function (a, b) { return ('' + b.innerText).localeCompare(a.innerText); };
  Array.prototype.slice.call(cells).sort(comparator).forEach(function (cell) {
    tbody.appendChild(cell.parentNode);
  });
}
