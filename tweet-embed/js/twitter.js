function injectStyle(frame) {
  let twitterStyle = frame.contentWindow.document.createElement("link");
  twitterStyle.href = window.location.origin + "/wp-content/plugins/ncs4-custom-blocks/tweet-embed/embedStyle.css";
  twitterStyle.rel = "stylesheet";
  twitterStyle.type = "text/css";
  frame.classList.add("drop-shadow");
  frame.contentWindow.document.head.appendChild(twitterStyle);
}
let observer = new MutationObserver( mutations => {
  mutations.forEach(m => {
    m.addedNodes.forEach( n => {
      if (n.nodeName == "DIV") {
        observer.disconnect();
        observer.observe(n, {childList: true});
      } else if (n.nodeName == "IFRAME" ) {
        injectStyle(n);
      }
    })
  });
});

if (document.querySelector(".ncs4-tweet-embed__embed-content")) {
  observer.observe(
    document.querySelector(".ncs4-tweet-embed__embed-content"),
    { childList: true },
  );
}
