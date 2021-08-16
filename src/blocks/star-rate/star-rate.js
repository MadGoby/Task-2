function starRatting(settings) {
  const {containerClass} = settings;

  function initializeElements() {
    let container = document.querySelector(containerClass);
    let stars = [...container.querySelectorAll(".star-rate__star")];
    let currentStar;
    stars.map(function(star) {
      if(!star.classList.contains(".star-rate__star_active")) currentStar = star;
    })

    return {container, stars, currentStar};
  }

  const {container, stars, currentStar} = initializeElements();

  function bindEventListeners() {
    stars.map(function(star) {
      star.addEventListener("click", starClicked)
    });
  };

  function starClicked(event) {
    let eStar = event.target;
    
    function cleanActiveClass() {
      stars.map(function(star) {
        star.classList.remove("star-rate__star_active");
      });
    };

    function addActiveClass() {
      let index = stars.indexOf(eStar);
      for(let i = 0; i<= index; i++) {
        stars[i].classList.add("star-rate__star_active");
      };
    };

    cleanActiveClass();
    addActiveClass();
  };

  bindEventListeners();
};

export {starRatting};