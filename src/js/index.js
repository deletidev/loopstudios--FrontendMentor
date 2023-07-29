// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import close from '../assets/images/icon-close.svg';
import menuImg from '../assets/images/icon-hamburger.svg';
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const botonMenu = document.getElementById('boton-menu');

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  if (menu.classList.contains('menu--open')) {
    botonMenu.src = close;
  } else {
    botonMenu.src = menuImg;
  }
});
window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    header.classList.add('header--background');
  } else {
    header.classList.remove('header--background');
  }
  menu.classList.remove('open');
});
