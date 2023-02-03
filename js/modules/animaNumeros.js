export default class AnimaNumeros {
  constructor(numeros, classObserver, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.classObserver = classObserver;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incre = Math.floor(total / 100);
    let i = 0;
    const time = setInterval(() => {
      i += incre;
      numero.innerText = i;
      if (total < i) {
        numero.innerText = total;
        clearInterval(time);
      }
    }, 25 * Math.random());
  }

  initAnima() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.classObserver)) {
      this.observer.disconnect();
      this.initAnima();
    }
  }

  addObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addObserver();
    }
    return this;
  }
}
