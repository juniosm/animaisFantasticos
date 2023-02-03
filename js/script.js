import ScrollSmooth from "./modules/scrollSuave.js";
import Acordion from "./modules/acordion.js";
import NavTab from "./modules/navTab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import btcFetch from "./modules/btcFetch.js";
import AnimaScroll from "./modules/animaScroll.js";
import DropMenu from "./modules/drop-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";

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

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

const dropMenu = new DropMenu("[data-dropdown]");
dropMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("/animais.json", ".numeros-grid");
btcFetch("https://www.blockchain.com/ticker", ".btc-preco");
