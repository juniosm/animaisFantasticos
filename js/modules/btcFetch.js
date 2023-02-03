export default function btcFetch(url, target) {
  async function valorBtc() {
    try {
      const response = await fetch(url);
      const bodyBTC = await response.json();
      const preco = document.querySelector(target);

      preco.innerText = (1000 / bodyBTC.BRL.buy).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  valorBtc();
}
