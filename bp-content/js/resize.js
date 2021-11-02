/*
  Handles updating --header-height when the window resizes.
*/
{
  const setHeaderHeight = async () => {
    while (!document.getElementById("masthead")) {
      await new Promise(r => setTimeout(r, 500));
    }
    const headerRect = document.getElementById("masthead").getBoundingClientRect();

    document.documentElement.style.setProperty(
      "--header-height",
      (Math.max(0, headerRect.height + headerRect.top)) + "px"
    );
  }

  window.addEventListener("resize", setHeaderHeight);
  window.addEventListener("scroll", setHeaderHeight);
  setHeaderHeight();
}
