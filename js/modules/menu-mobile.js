import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(bntMenu, menuList, eventos) {
    this.bntMenu = document.querySelector(bntMenu);
    this.menuList = document.querySelector(menuList);

    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.bntMenu.classList.toggle("ativo");
    this.menuList.classList.toggle("ativo");
    outsideClick(this.menuList, this.eventos);
  }

  addMenuMobileEvent() {
    this.eventos.forEach(evento => {
      this.bntMenu.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.bntMenu && this.menuList) {
      this.addMenuMobileEvent();
    }
  }
}
