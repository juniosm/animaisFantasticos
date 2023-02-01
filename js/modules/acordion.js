// Acordion

export default class Acordion {
  constructor(list) {
    this.acordionList = document.querySelectorAll(list);
    this.classAtivo = "ativo";
  }

  toggleAcordion(item) {
    item.classList.toggle(this.classAtivo);
    item.nextElementSibling.classList.toggle(this.classAtivo);
  }

  addEventAcordion() {
    this.acordionList.forEach(item => {
      item.addEventListener("click", () => this.toggleAcordion(item));
    });
  }

  init() {
    if (this.acordionList.length) {
      this.toggleAcordion(this.acordionList[0]);
      this.addEventAcordion();
    }
  }
}
