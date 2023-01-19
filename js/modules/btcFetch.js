export default function initBtcFetch() {
  async function valorBtc() {
    try {
      const response = await fetch("https://www.blockchain.com/ticker");
      const bodyBTC = await response.json();
      const preco = document.querySelector(".btc-preco");

      preco.innerText = (1000 / bodyBTC.BRL.buy).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  valorBtc();
}
