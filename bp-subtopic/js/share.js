
{
  function addButtons() {
    const shareBtns = document.getElementsByClassName("share-section");

    for (let btn of shareBtns) {
      btn.addEventListener("click", () => share(btn));
    }
  }

  function share(btn) {
    const title = document.title;

    if (navigator.share) {
      // share api
      navigator.share({
        title: title,
        url: btn.href,
      })
      .catch(console.error);
    } else {
      // no share api
      copyText(btn.href);
      shareBubble(btn);
      // put popup here
    }
  }

  function copyText(str) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(str).catch(console.error);
    } else {
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Text copy fallback: ', err);
      }

      document.body.removeChild(textArea);
    }
  }

  async function shareBubble(btn) {
    btn.classList.add("copied");
    await new Promise(r => setTimeout(r, 2000));
    btn.classList.remove("copied");
  }

  window.addEventListener("load", addButtons);
}
