// Handles subtopic buttons and adding "shown" classes

{
  var btns = document.getElementsByClassName("ncs4-bp-content__subtopic-btn");
  var topics = document.getElementsByClassName("ncs4-bp-subtopic");
  var currentTopic = "ncs4-bp-content__subtopic-btn__0";
  toggleTopic(getSlug(currentTopic), true);

  function getSlug(id) {
    return id.match(/__[0-9-]+$/g);
  }

  function toggleTopic(slug, state) {
    const topic = document.getElementById("ncs4-bp-subtopic" + slug);
    const btn = document.getElementById("ncs4-bp-content__subtopic-btn" + slug);
    if (!state) {
      topic.classList.remove("shown");
      btn.classList.remove("shown");
    } else {
      topic.classList.add("shown");
      btn.classList.add("shown");
    }
  }

  [...btns].forEach( (b) => b.addEventListener("click", () => {
    if (currentTopic) {
      toggleTopic(getSlug(currentTopic), false);
    }
    toggleTopic(getSlug(b.id), true);
    currentTopic = b.id;
  }));

  function onJump() {
    if (!window.location.hash) {
      return;
    }

    const anchor = document.getElementById(window.location.hash.substr(1));
    if (!anchor) {
      return;
    }

    const subtopic = anchor.parentElement;
    if (!subtopic || ! subtopic.classList.contains("ncs4-bp-subtopic")) {
      return;
    }

    if (currentTopic) {
      toggleTopic(getSlug(currentTopic), false);
    }
    toggleTopic(getSlug(subtopic.id), true);
    currentTopic = subtopic.id;
  }

  window.addEventListener("hashchange", onJump);
  window.addEventListener("load", onJump);
}
