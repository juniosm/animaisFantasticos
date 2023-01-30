// Acordion

export default function initAcordion() {
  const acordionList = document.querySelectorAll("[data-anime='acordion'] dt");

  function activeAcordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  if (acordionList.length) {
    acordionList[0].classList.add("ativo");
    acordionList[0].nextElementSibling.classList.add("ativo");

    acordionList.forEach(item => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
