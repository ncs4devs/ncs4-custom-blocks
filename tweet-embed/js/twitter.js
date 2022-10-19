// console.log("Script is running 1");

// const loaderFunc = (twitterFrame) => {
//     console.log("Script is running");
//     const twitterStyle = document.createElement("link");
//     twitterStyle.href = window.location.origin + "/wp-content/plugins/ncs4-custom-blocks/tweet-embed/embedStyle.css";
//     twitterStyle.rel = "stylesheet";
//     twitterStyle.type = "text/css";
//     console.log("Line 9 " +"Loaded");
//     console.log("Line 10 " +twitterFrame.contentWindow.document.body);
//     console.log("Line 11 " +twitterStyle);
//     twitterFrame.classList.add("drop-shadow");
//     // twitterFrame.contentWindow.document.body.appendChild(twitterStyle);
//     console.log("Line 14" + " exit loop");
//     }




// // Select the node that will be observed for mutations
// const targetNode = document.querySelectorAll('.ncs4-tweet-embed__embed-content');
// console.log("Line 22 " + targetNode);

// // Options for the observer (which mutations to observe)
// const config = { childList: true};

// // Callback function to execute when mutations are observed
// const callback = (mutationList, observer) => {
//   console.log(mutationList);
//   mutationList.forEach(mi=> {
//     console.log(mi.addedNodes.length);
//     if (mi.addedNodes.length) {  
//       mi.addedNodes.forEach (ml=> {
//         console.log("Line 32 ")
//         console.log(ml.contentWindow);
//         mi.contentWindow.window.addEventListner('onload', () => loaderFunc(ml));
//         // loaderFunc(ml);
//       })
//     } else {
//       console.log("Line 39");
//     }
//   })
  
  
//   // const twitterFrames = document.querySelectorAll(".ncs4-tweet-embed__embed-content iframe");
//   // if (twitterFrames.length) {
//   //   console.log("iframe found");
//   //   loaderFunc();
//   // } else {
//   //   console.log("iframe not found");
//   // }
//   };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode[0], config);

console.log("called")
function injectStyle(frame) {
  let twitterStyle = frame.contentWindow.document.createElement("link");
  twitterStyle.href = window.location.origin + "/wp-content/plugins/ncs4-custom-blocks/tweet-embed/embedStyle.css";
  twitterStyle.rel = "stylesheet";
  twitterStyle.type = "text/css";
  // console.log("injectStyle frame:", frame);
  frame.classList.add("drop-shadow");
  // console.log(frame.contentWindow.document.body);
  frame.contentWindow.document.head.appendChild(twitterStyle);
}
let observer = new MutationObserver( mutations => {
  console.log(mutations);
  mutations.forEach(m => {
    m.addedNodes.forEach( n => {
      // console.log("observer callback Node:", n);
      if (n.nodeName == "DIV") {
        observer.disconnect();
        console.log("disconnected");
        observer.observe(n, {childList: true});
      } else if (n.nodeName == "IFRAME" ) {
        console.log("constat");
        injectStyle(n);
      }
    })
  });
});
observer.observe(
  document.querySelector(".ncs4-tweet-embed__embed-content"),
  { childList: true },
);
console.log("exited");