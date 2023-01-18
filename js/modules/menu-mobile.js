import outsideClick from "./outsideClick.js";

export default function menuMobile() {
  const bntMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (bntMenu) {
    function openMenu() {
      bntMenu.classList.toggle("ativo");
      menuList.classList.toggle("ativo");
      outsideClick(menuList, eventos);
    }

    eventos.forEach(evento => {
      bntMenu.addEventListener(evento, openMenu);
    });
  }
}
