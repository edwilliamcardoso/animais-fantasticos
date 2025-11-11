import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  /* criar a função para o uso assincrono dos dados*/

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url); /* pega a resposata d URL */
      const animaisJSON =
        await animaisResponse.json(); /* convertendo em json */
      const numeroGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createnimal(animal);
        numeroGrid.appendChild(divAnimal);
        console.log(numeroGrid);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', 'numeros', 'ativo');
      animaNumeros.ini();
    } catch (erro) {}
    // console.log(animaisJson);
  }
  /*função que criara novos animais */

  function createnimal(animal) {
    const div = document.createElement("div"); /* criando a div */
    div.classList.add("numero-animal"); /* adicionando a classe */
    div.innerHTML = `<h3>${animal.especie}</h3>  <span data-numero>${animal.total}</span>`; /* adicionando a classe e total */
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
