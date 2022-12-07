// Scroll and change hero color (OLD MEG HOGZ CSAK DESKTOP LEGYEN)

const body = document.getElementsByTagName('body')[0];
const title = document.getElementsByTagName('h1')[0];
const pharagraph = document.getElementsByTagName('p')[0];
const navLink = document.getElementsByTagName('li')[0];
const logo = document.querySelector('#nav_logo-change');

// starting
body.style.backgroundColor = 'white';
title.style.color = 'black';
pharagraph.style.color = 'black';
navLink.style.color = 'black';
logo.src = './assets/img/logo-black.png';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
  var scroll = window.pageYOffset;
  if (scroll < 300) {
    body.style.backgroundColor = 'white';
  } else if (scroll >= 300 && scroll < 400) {
    body.style.backgroundColor = 'white';
    title.style.color = 'black';
    pharagraph.style.color = 'black';
    navLink.style.color = 'black';
    logo.src = './assets/img/logo-black.png';
  } else {
    body.style.backgroundColor = 'black';
    title.style.color = 'white';
    pharagraph.style.color = 'white';
    navLink.style.color = 'white';
    logo.src = './assets/img/logo.png';
  }
};
