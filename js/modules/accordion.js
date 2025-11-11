export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClas);
    item.nextElementSibling.classList.toggle(this.activeClas);
  }
  //adiciona os eventos ao accordion
  addAccordionevent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  //iniciar função
  init() {
    if (accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionevent();
    }
    return this;
  }
}
