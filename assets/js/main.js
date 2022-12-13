// Scroll and change hero color (OLD MEG HOGZ CSAK DESKTOP LEGYEN)

const body = document.getElementsByTagName('body')[0];
const nav = document.getElementsByClassName('hover')[0];
const logo = document.querySelector('#nav_logo-change');

// trigger this function every time the user scrolls
window.onscroll = function (event) {
  var scroll = window.pageYOffset;

  if (scroll >= 300) {
    body.classList.remove('colorChange');
    nav.classList.remove('hover');
    logo.src = './assets/img/logo.png';
  } else {
    body.classList.add('colorChange');
    nav.classList.add('hover');
    logo.src = './assets/img/logo-black.png';
  }
};
