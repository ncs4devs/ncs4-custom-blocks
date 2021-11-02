function bpFilterClicked(industry) {
    const check = document.getElementById("ncs4-bp-check__" + industry);
    const notCheck = document.getElementById("ncs4-bp-check-not__" + industry);
    notCheck.checked = check.checked;
    check.checked = !check.checked;
}
