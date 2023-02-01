// Navegação por tabs

export default class NavTab {
  constructor(listMenu, listContent) {
    this.tabMenu = document.querySelectorAll(listMenu);
    this.tabContent = document.querySelectorAll(listContent);
  }

  ativeTab(index) {
    this.tabContent.forEach(info => {
      info.classList.remove("ativo");
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add("ativo", direcao);
  }

  addEventNavTab() {
    this.tabMenu.forEach((img, nu) => {
      img.addEventListener("click", () => {
        this.ativeTab(nu);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.ativeTab(0);
      this.addEventNavTab();
    }
  }
}
