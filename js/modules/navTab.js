// Navegação por tabs

export default function initNavTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] img");
  const tabContent = document.querySelectorAll("[data-tab='conteudo'] .info");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function ativeTab(index) {
      tabContent.forEach(info => {
        info.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((img, nu) => {
      img.addEventListener("click", () => {
        ativeTab(nu);
      });
    });
  }
}