// Animação de scroll

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowParte = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;
      return {
        elemet: section,
        offset: offset - this.windowParte
      };
    });
  }

  checkDistance() {
    this.distance.forEach(item => {
      if (item.offset < window.pageYOffset) {
        item.elemet.classList.add("ativo");
      } else if (item.elemet.classList.contains("ativo")) {
        item.elemet.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
