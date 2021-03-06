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
      title.classList.remove("title_closed");
      title.classList.add("title_expanded");
    } else {
      list.setAttribute("hidden", "hidden");
      title.classList.remove("title_expanded");
      title.classList.add("title_closed");
    };
  };
  
  bindEventListeners()
};

export {listFunctionality};