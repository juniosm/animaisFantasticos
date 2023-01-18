export default function animaNumeros() {
  function initAnima() {
    const numeros = document.querySelectorAll("[ data-numero ]");

    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incre = Math.floor(total / 100);
      let i = 0;
      const time = setInterval(() => {
        i = i + incre;
        numero.innerText = i;
        if (total < i) {
          numero.innerText = total;
          clearInterval(time);
        }
      }, 25);
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect(  );
      initAnima();
    }
  }

  const observerTarget = document.querySelector("#numero");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
