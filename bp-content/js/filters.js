// Adds classes to bp content section to show/hide certain industry topics
// Topics are shown by default and the classes *hide* topics
// (This means JS disabled will display all info, and makes it easier to style)

{
  var btns = document.getElementsByClassName("ncs4-bp-btn");
  var content = document.getElementById("ncs4-bp-content__content-area");

  [...btns].forEach( (b) => {
    var slug = b.id.match(/__[\w-]+$/g);

    const updateClasses = () => {
      if (b.checked) {
        content.classList.remove("hide-bp-content" + slug);
        content.classList.add("show-bp-content" + slug);
      } else {
        content.classList.remove("show-bp-content" + slug);
        content.classList.add("hide-bp-content" + slug);
      }
    }
    b.addEventListener("change", updateClasses);
    updateClasses(); // Set classes according to initial checked status
  });
}
