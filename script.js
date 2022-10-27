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

initAcordion();

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSecion(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSecion);
  });
}

initScrollSmooth();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowParte = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowParte;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimaScroll();
