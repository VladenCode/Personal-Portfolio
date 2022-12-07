// navLink animation
const links = document.querySelectorAll('.nav_link');

window.onload = function () {
  links.forEach((link) => {
    link.addEventListener('mouseenter', function () {
      link.classList.add('active');
    });
    link.addEventListener('mouseleave', function () {
      link.classList.remove('active');
    });
  });
};

// Set the year in copyright
date.innerHTML = new Date().getFullYear();
