// Animação de scroll

export default function initAnimaScroll() {
  const sections = document.querySelectorAll(" [data-anime='scroll'] ");

  if (sections.length) {
    const windowParte = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach(section => {
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
