function listFunctionality(settings) {
  const {titleClass, listClass} = settings;
  
  function getHtmlElements() {
    const title = document.querySelector(titleClass);
    const list = document.querySelector(listClass);
    return {title, list}
  };

  const resultElements = getHtmlElements();
  const {title, list} = resultElements;
  
  function bindEventListeners() {
    title.addEventListener("click", discloseList);
  };

  function discloseList(event) {
    if(list.hasAttribute("hidden")) {
      list.removeAttribute("hidden");
      title.classList.remove("list__title_type_arrow-down");
      title.classList.add("list__title_type_arrow-up");
    } else {
      list.setAttribute("hidden", "hidden");
      title.classList.remove("list__title_type_arrow-up");
      title.classList.add("list__title_type_arrow-down");
    };
  };
  
  bindEventListeners()
};

export {listFunctionality};