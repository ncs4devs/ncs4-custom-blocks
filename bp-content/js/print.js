
{
  function getSlug(id) {
    return id.match(/__[a-zA-Z0-9-]+$/g)[0];
  }

  function setIndustryCheckboxes() {
    const filterBtns = document.getElementsByClassName("ncs4-bp-btn");

    for (let btn of filterBtns) {
      const printFilter = document.getElementById(
        "bp-subtopic__print-filter-checkbox" + getSlug(btn.id)
      );
      if (!printFilter) {
        continue;
      }

      printFilter.checked = btn.checked;
    }
  }

  function generateQuery(page, industries, subtopics) {
    let q = new URLSearchParams();
    q.set("src", page);
    q.set("industries", industries);
    q.set("topics", subtopics);
    return "?" + q.toString();
  }

  function printBPPage() {
    var page, industries, subtopics;
    // get post id
    page = document.querySelector(".status-publish").id.replace(/[^0-9]+/, "");

    // Get industry settings
    industries = [];
    const printBoxes = document.getElementsByClassName(
      "bp-subtopic__print-filter-checkbox"
    )
    for (let checkbox of printBoxes) {
      if (checkbox.checked) {
        industries.push(getSlug(checkbox.id).replace(/^__/, ""));
      }
    }

    // Get subtopics
    subtopics = [];
    const subtopicBoxes = document.getElementsByClassName(
      "ncs4-bp-content__subtopic-print-select"
    );
    for (let checkbox of subtopicBoxes) {
      if (checkbox.checked) {
        subtopics.push(getSlug(checkbox.id).replace(/^__/, ""));
      }
    }

    // Generate query and send to print page
    let q = generateQuery(page, industries, subtopics);
    window.open(window.location.origin + "/resources/best-practices/print/" + q);
  }

  document.getElementById("ncs4-bp-content__widget-panel__1-print")
    .addEventListener("click", printBPPage);

  document.addEventListener("showSubtopicPanel", (e) => {
    if (e.detail.id == 1) {
      setIndustryCheckboxes();
    }
  });
}
