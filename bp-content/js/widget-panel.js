// Handles swapping widget panels

let sidebar = document.getElementById("ncs4-bp-content__subtopics-sidebar");
let panel = 0;

function setPanel(id) {
  if (id === panel) {
    return;
  }

  sidebar.classList.remove("show-panel-" + panel);
  sidebar.classList.add("show-panel-" + id);
  document.dispatchEvent(new CustomEvent(
    "showSubtopicPanel",
    { detail: {
        id: id,
        oldId: panel,
      }
    }
  ));
  panel = id;
}
