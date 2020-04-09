let expandableCheckboxListTitleButton = document.querySelector('#expandable-checkbox-list_title-button')
let uiExpandableCheckboxListTitleBody = document.querySelector('#ui-expandable-checkbox-list_list-body')

expandableCheckboxListTitleButton.onclick = function() {
  if (uiExpandableCheckboxListTitleBody.style.display == "block") {
    uiExpandableCheckboxListTitleBody.style.display = "none";
    expandableCheckboxListTitleButton.style.transform = "rotate(0deg)";
  } else {
    uiExpandableCheckboxListTitleBody.style.display = "block";
    expandableCheckboxListTitleButton.style.transform = "rotate(180deg)";
  }
}