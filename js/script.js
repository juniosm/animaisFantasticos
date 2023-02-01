import ScrollSmooth from "./modules/scrollSuave.js";
import Acordion from "./modules/acordion.js";
import NavTab from "./modules/navTab.js";
import Modal from "./modules/modal.js";

import initAnimaScroll from "./modules/animaScroll.js";
import initTooltip from "./modules/tooltip.js";
import initDropMenu from "./modules/drop-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initBtcFetch from "./modules/btcFetch.js";

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

initAnimaScroll();
initTooltip();
initDropMenu();
menuMobile();
initFuncionamento();
initFetchAnimais();
initBtcFetch();
