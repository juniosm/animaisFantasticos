// Navegação por tabs

function initNavTab() {
  const tabMenu = document.querySelectorAll(".js-tabMenu img");
  const tabContent = document.querySelectorAll(".js-conteudo .info");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function ativeTab(index) {
      tabContent.forEach((info) => {
        info.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((img, nu) => {
      img.addEventListener("click", () => {
        ativeTab(nu);
      });
    });
  }
}

initNavTab();

function initAcordion() {
  const acordionList = document.querySelectorAll(".js-acordion dt");

  if (acordionList.length) {
    acordionList[0].classList.add("ativo");
    acordionList[0].nextElementSibling.classList.add("ativo");

    function activeAcordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    acordionList.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
