let expandableCheckboxListTitleButton = document.querySelector('.expandable-checkbox-list_title-button')
let uiExpandableCheckboxListTitleBody = document.querySelector('.ui-expandable-checkbox-list_list-body')
let expandableListStyleBody = window.getComputedStyle(uiExpandableCheckboxListTitleBody).display;
expandableCheckboxListTitleButton.onclick = function() {
  expandableListStyleBody = window.getComputedStyle(uiExpandableCheckboxListTitleBody).display;
  if (expandableListStyleBody == "block") {
    uiExpandableCheckboxListTitleBody.style.display = "none";
    expandableCheckboxListTitleButton.style.transform = "rotate(0deg)";
  } else {
    uiExpandableCheckboxListTitleBody.style.display = "block";
    expandableCheckboxListTitleButton.style.transform = "rotate(180deg)";
  }
}