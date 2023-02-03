// Animação de scroll

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowParte = window.innerHeight * 0.6;
  }

  animaScroll() {
    this.sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - this.windowParte;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
  }
}
