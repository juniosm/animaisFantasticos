import AnimaNumeros from "./animaNumeros.js";

export default function initFetchAnimais() {
  function createAnimais(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("numero-animal");
    createDiv.innerHTML = `<h3>${animal.specie}</h3> 
    <span data-numero> ${animal.total}</span>`;
    return createDiv;
  }

  async function fetchAnimais() {
    try {
      const response = await fetch("./animais.json");
      const bodyAnimais = await response.json();
      const div = document.querySelector(".numeros-grid");
      bodyAnimais.forEach(element => {
        const divAnimais = createAnimais(element);
        div.appendChild(divAnimais);
      });
      const animaNumeros = new AnimaNumeros(
        "[ data-numero ]",
        "ativo",
        "#numero"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais();
}
