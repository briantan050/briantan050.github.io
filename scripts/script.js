// add "show" to cards
const observeHidden = new IntersectionObserver((cards) => {
  cards.forEach((card) => {
    if (card.isIntersecting) {
      const visibleRatio = card.intersectionRatio;
      if (visibleRatio >= 0.5) {
        card.target.classList.add('show');
      } else {
        card.target.classList.remove('show');
      }
    } else {
      card.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.5
});
const hiddenElements = document.querySelectorAll('.card-hide');
hiddenElements.forEach((el) => observeHidden.observe(el));


// add "show" to posts
const observeHideOnce = new IntersectionObserver((posts) => {
  posts.forEach((post) => {
    if (post.isIntersecting) {
      const visibleRatio = post.intersectionRatio;
      if (visibleRatio >= 0.5) {
        post.target.classList.add('show');
      }
    }
  });
}, {
  threshold: 0.5
});
const hideOnceElements = document.querySelectorAll('.post-hide');
hideOnceElements.forEach((el) => observeHideOnce.observe(el));


// sticky header
window.addEventListener("scroll", function() {
  const header = document.querySelector(".sticky-header");
  const appearanceLevel = 500;
  if (window.scrollY >= appearanceLevel) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});