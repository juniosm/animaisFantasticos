// scrollSuave

export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSecion(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach(link => {
    link.addEventListener("click", scrollToSecion);
  });
}
