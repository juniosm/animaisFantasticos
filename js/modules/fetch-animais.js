import AnimaNumeros from "./animaNumeros.js";

export default function fetchAnimais(url, target) {
  function createAnimais(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("numero-animal");
    createDiv.innerHTML = `<h3>${animal.specie}</h3> <span data-numero> ${animal.total}</span>`;
    return createDiv;
  }

  function preencherAnimal(element) {
    const div = document.querySelector(target);
    const divAnimais = createAnimais(element);
    div.appendChild(divAnimais);
  }

  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros(
      "[ data-numero ]",
      "ativo",
      "#numero"
    );
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const response = await fetch(url);
      const bodyAnimais = await response.json();

      bodyAnimais.forEach(element => {
        preencherAnimal(element);
      });

      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }
  criarAnimais();
}
