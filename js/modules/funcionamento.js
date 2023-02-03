export default class Funcionamento {
  constructor(funcionamento, classActive) {
    this.funcionamento = document.querySelector(funcionamento);
    this.classActive = classActive;
  }

  dadosFuncionamento() {
    this.dias = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const diaAberto = this.dias.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioSemana[0] <= this.horarioAgora &&
      this.horarioSemana[1] >= this.horarioAgora;
    return diaAberto && horarioAberto;
  }

  activaAberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.classActive);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.activaAberto();
    }
    return this;
  }
}
