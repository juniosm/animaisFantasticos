import debounce from "./debounce.js";

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowParte = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;
      return {
        elemet: section,
        offset: Math.floor(offset - this.windowParte)
      };
    });
  }

  checkDistance() {
    console.log("rs");
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
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
