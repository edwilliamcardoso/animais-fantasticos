export default class Modal {
  constructor (botaoAbrir, botaoFechar, containerMOdal) {
  this.botaoAbrir = document.querySelector(botaoAbrir);
  this.botaoFechar = document.querySelector(botaoFechar);
  this.containerModal = document.querySelector(containerMOdal);
  this.eventToggleModal = this.eventToggleModal.bind(this);
   this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
 
 toggleModal() {
    event.preventDefault();
    this.containerModal.classList.toggle("ativo");
  }

eventToggleModal(event){
event,preventDefault();
this.toggleModal();
}


 cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }



addModalEvent() {
  this.botaoAbrir.addEventListener("click", this.eventToggleModal);
  this.botaoFechar.addEventListener("click", this.eventToggleModal);
  this.containerModal.addEventListener("click", this.cliqueForaModal);
}

init() {
 if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
  this.addModalEvent();
 }
 return this;
}



// fetch("/some-html-page")
//   .then((response) => response.text())
//   .then((htmlContent) => {
//     console.log(htmlContent);
//     // Process the HTML content
//   })
//   .catch((error) => console.error("Error fetching HTML:", error));
