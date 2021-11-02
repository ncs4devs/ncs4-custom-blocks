function toggleChecked(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const checkboxBtn = document.getElementById( "btn-" + checkboxId);

  checkbox.checked = !checkbox.checked;
  checkbox.checked ? checkboxBtn.title = "Close topic" : checkboxBtn.title = "Expand topic";
}
