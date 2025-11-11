export default class AnimaNumeros {
  constructor(numeroa, observerTarget, observerClass) {
    this.numeroa = document;
    querySelectorAll(numeroa);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.observerClass = this.observerClass.bind(this).MutationObserver;
  }

  static ncrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.inscrementarNumrro(numero)
    );
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
