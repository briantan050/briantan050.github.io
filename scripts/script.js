function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function revealOnScroll() {
    const posts = document.querySelectorAll('.post, .card');
    let delay = 0; // Initial delay
  
    posts.forEach(post => {
      if (isElementInViewport(post)) {
        setTimeout(() => post.classList.add('reveal'), delay);
        delay += 300; // Increase the delay for the next post by 300ms (adjust as needed)
      }
    });
  }

  // Call revealOnScroll on page load and scroll
  window.addEventListener('load', revealOnScroll);
  window.addEventListener('scroll', revealOnScroll);
  