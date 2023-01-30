export default function animaNumeros() {
  function initAnima() {
    const numeros = document.querySelectorAll("[ data-numero ]");

    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incre = Math.floor(total / 100);
      let i = 0;
      const time = setInterval(() => {
        i += incre;
        numero.innerText = i;
        if (total < i) {
          numero.innerText = total;
          clearInterval(time);
        }
      }, 25);
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      initAnima();
    }
  }
  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector("#numero");

  observer.observe(observerTarget, { attributes: true });
}
