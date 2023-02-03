import ScrollSmooth from "./modules/scrollSuave.js";
import Acordion from "./modules/acordion.js";
import NavTab from "./modules/navTab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import AnimaScroll from "./modules/animaScroll.js";
import btcFetch from "./modules/btcFetch.js";

import initDropMenu from "./modules/drop-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";

const scrollSmooth = new ScrollSmooth("[data-menu='suave'] a[href^='#']");
scrollSmooth.init();

const acordion = new Acordion("[data-anime='acordion'] dt");
acordion.init();

const navTab = new NavTab(
  "[data-tab='menu'] img",
  "[data-tab='conteudo'] .info"
);
navTab.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]", "ativo");
tooltip.init();

const animaScroll = new AnimaScroll(" [data-anime='scroll'] ");

fetchAnimais("../animais.json", ".numeros-grid");
btcFetch("https://www.blockchain.com/ticker", ".btc-preco");

initDropMenu();
menuMobile();
initFuncionamento();
