import outsideClick from "./outsideClick.js";

export default function menuMobile() {
  const bntMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    bntMenu.classList.toggle("ativo");
    menuList.classList.toggle("ativo");
    outsideClick(menuList, eventos);
  }

  if (bntMenu) {
    eventos.forEach(evento => {
      bntMenu.addEventListener(evento, openMenu);
    });
  }
}
