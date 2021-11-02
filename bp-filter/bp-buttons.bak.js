var cats = [
     {button: "ncs4-bp-btn__pro", text: "wp-block-ncs4-custom-blocks-pro-section", enabled: false}
    ,{button: "ncs4-bp-btn__college", text: "wp-block-ncs4-custom-blocks-college-section", enabled: false}
    ,{button: "ncs4-bp-btn__hs", text: "wp-block-ncs4-custom-blocks-hs-section", enabled: false}
    ,{button: "ncs4-bp-btn__marathon", text: "wp-block-ncs4-custom-blocks-marathon-section", enabled: false}
];


window.onload = function() {
    hideAll();
}

function hideAll() {
    var i;
    var j;
    var xs;

    for (i = 0; i < cats.length; i++) {
        xs = document.getElementsByClassName(cats[i].text);
        cats[i].enabled = false;
        for (j = 0; j < xs.length; j++) {
            xs[j].style.display = "none";
        }
    }
}

function bpFilterClicked(id) {
    var cat = cats[id]
    var texts = document.getElementsByClassName(cat.text);
    var i;
    var j;
    var cl;

    cat.enabled = !cat.enabled;
    if (cat.enabled) {
        // Color bg
        document.getElementById(cat.button).classList.add("bp-btn-clicked");
        // Show category
        for (i = 0; i < texts.length; i++) {
            texts[i].style.removeProperty("display");
        }
    } else {
        // Hide bg
        document.getElementById(cat.button).classList.remove("bp-btn-clicked");
        // Hide category
        for (i = 0; i < texts.length; i++) {
            // Disable text only if no other class it has is enabled
            cl = texts[i].classList;
            var doHide = true;
            for (j = 0; j < cats.length; j++) {
                if (cats[j].enabled && cl.contains(cats[j].text)) {
                    doHide = false;
                    break;
                }
            }
            // Hide text
            if (doHide) {
                texts[i].style.display = "none";
            }
        }
    }
}
