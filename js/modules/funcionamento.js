export default function initFuncionamento() {
  const funcionamento = document.querySelector(" [data-semana] ");
  const dias = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const diaAberto = dias.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioSemana[0] <= horarioAgora && horarioSemana[1] >= horarioAgora;

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
