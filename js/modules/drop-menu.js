import outsideClick from "./outsideClick.js";

export default class DropMenu {
  constructor(dropMenu, eventos) {
    this.dropDownsMenus = document.querySelectorAll(dropMenu);
    this.classActiveMenu = "ativo";

    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;

    this.activeDropMenu = this.activeDropMenu.bind(this);
  }

  activeDropMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.classActiveMenu);
    outsideClick(element, this.eventos);
  }

  addDropMenuEvent() {
    this.dropDownsMenus.forEach(menu => {
      this.eventos.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropMenu);
      });
    });
  }

  init() {
    if (this.dropDownsMenus.length) {
      this.addDropMenuEvent();
    }
    return this;
  }
}
