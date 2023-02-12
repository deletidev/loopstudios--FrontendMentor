// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const menu = document.getElementById("menu");
const header = document.getElementById("header");
const botonMenu = document.getElementById("boton-menu");

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
  if (menu.classList.contains("menu--open")) {
    botonMenu.src = "assets/images/icon-close.svg";
  } else {
    botonMenu.src = "assets/images/icon-hamburger.svg";
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("header--background");
  } else {
    header.classList.remove("header--background");
  }
  menu.classList.remove("open");
});
