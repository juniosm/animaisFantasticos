/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/acordion.js":
/*!********************************!*\
  !*** ./js/modules/acordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Acordion)\n/* harmony export */ });\n// Acordion\r\n\r\nclass Acordion {\r\n  constructor(list) {\r\n    this.acordionList = document.querySelectorAll(list);\r\n    this.classAtivo = \"ativo\";\r\n  }\r\n\r\n  toggleAcordion(item) {\r\n    item.classList.toggle(this.classAtivo);\r\n    item.nextElementSibling.classList.toggle(this.classAtivo);\r\n  }\r\n\r\n  addEventAcordion() {\r\n    this.acordionList.forEach(item => {\r\n      item.addEventListener(\"click\", () => this.toggleAcordion(item));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.acordionList.length) {\r\n      this.toggleAcordion(this.acordionList[0]);\r\n      this.addEventAcordion();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/acordion.js?");

/***/ }),

/***/ "./js/modules/animaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/animaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\r\n  function initAnima() {\r\n    const numeros = document.querySelectorAll(\"[ data-numero ]\");\r\n\r\n    numeros.forEach(numero => {\r\n      const total = +numero.innerText;\r\n      const incre = Math.floor(total / 100);\r\n      let i = 0;\r\n      const time = setInterval(() => {\r\n        i += incre;\r\n        numero.innerText = i;\r\n        if (total < i) {\r\n          numero.innerText = total;\r\n          clearInterval(time);\r\n        }\r\n      }, 25);\r\n    });\r\n  }\r\n\r\n  let observer;\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      observer.disconnect();\r\n      initAnima();\r\n    }\r\n  }\r\n  observer = new MutationObserver(handleMutation);\r\n  const observerTarget = document.querySelector(\"#numero\");\r\n\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/animaNumeros.js?");

/***/ }),

/***/ "./js/modules/animaScroll.js":
/*!***********************************!*\
  !*** ./js/modules/animaScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\n// Animação de scroll\r\n\r\nfunction initAnimaScroll() {\r\n  const sections = document.querySelectorAll(\" [data-anime='scroll'] \");\r\n  const windowParte = window.innerHeight * 0.6;\r\n\r\n  function animaScroll() {\r\n    sections.forEach(section => {\r\n      const sectionTop = section.getBoundingClientRect().top - windowParte;\r\n      if (sectionTop < 0) {\r\n        section.classList.add(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    animaScroll();\r\n\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/animaScroll.js?");

/***/ }),

/***/ "./js/modules/btcFetch.js":
/*!********************************!*\
  !*** ./js/modules/btcFetch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBtcFetch)\n/* harmony export */ });\nfunction initBtcFetch() {\r\n  async function valorBtc() {\r\n    try {\r\n      const response = await fetch(\"https://www.blockchain.com/ticker\");\r\n      const bodyBTC = await response.json();\r\n      const preco = document.querySelector(\".btc-preco\");\r\n\r\n      preco.innerText = (1000 / bodyBTC.BRL.buy).toFixed(4);\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  valorBtc();\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/btcFetch.js?");

/***/ }),

/***/ "./js/modules/drop-menu.js":
/*!*********************************!*\
  !*** ./js/modules/drop-menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\r\n\r\nfunction initDropMenu() {\r\n  const dropDownsMenus = document.querySelectorAll(\" [data-dropdown] \");\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.toggle(\"ativo\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"]);\r\n  }\r\n\r\n  dropDownsMenus.forEach(menu => {\r\n    [\"touchstart\", \"click\"].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/drop-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/modules/animaNumeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  function createAnimais(animal) {\r\n    const createDiv = document.createElement(\"div\");\r\n    createDiv.classList.add(\"numero-animal\");\r\n    createDiv.innerHTML = `<h3>${animal.specie}</h3> \r\n    <span data-numero> ${animal.total}</span>`;\r\n    return createDiv;\r\n  }\r\n\r\n  async function fetchAnimais() {\r\n    try {\r\n      const response = await fetch(\"./animais.json\");\r\n      const bodyAnimais = await response.json();\r\n      const div = document.querySelector(\".numeros-grid\");\r\n      bodyAnimais.forEach(element => {\r\n        const divAnimais = createAnimais(element);\r\n        div.appendChild(divAnimais);\r\n      });\r\n      (0,_animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  fetchAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector(\" [data-semana] \");\r\n  const dias = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n\r\n  const diaAberto = dias.indexOf(diaAgora) !== -1;\r\n  const horarioAberto =\r\n    horarioSemana[0] <= horarioAgora && horarioSemana[1] >= horarioAgora;\r\n\r\n  if (diaAberto && horarioAberto) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\r\n\r\nfunction menuMobile() {\r\n  const bntMenu = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    bntMenu.classList.toggle(\"ativo\");\r\n    menuList.classList.toggle(\"ativo\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos);\r\n  }\r\n\r\n  if (bntMenu) {\r\n    eventos.forEach(evento => {\r\n      bntMenu.addEventListener(evento, openMenu);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.fecharForaModal = this.fecharForaModal.bind(this);\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  fecharForaModal(e) {\r\n    if (e.target === this.containerModal) {\r\n      this.toggleModal();\r\n    }\r\n  }\r\n\r\n  addEventModal() {\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.fecharForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addEventModal();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/navTab.js":
/*!******************************!*\
  !*** ./js/modules/navTab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavTab)\n/* harmony export */ });\n// Navegação por tabs\r\n\r\nclass NavTab {\r\n  constructor(listMenu, listContent) {\r\n    this.tabMenu = document.querySelectorAll(listMenu);\r\n    this.tabContent = document.querySelectorAll(listContent);\r\n  }\r\n\r\n  ativeTab(index) {\r\n    this.tabContent.forEach(info => {\r\n      info.classList.remove(\"ativo\");\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(\"ativo\", direcao);\r\n  }\r\n\r\n  addEventNavTab() {\r\n    this.tabMenu.forEach((img, nu) => {\r\n      img.addEventListener(\"click\", () => {\r\n        this.ativeTab(nu);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.ativeTab(0);\r\n      this.addEventNavTab();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/navTab.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      element.classList.remove(\"ativo\");\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      });\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSmooth)\n/* harmony export */ });\n// scrollSuave\r\n\r\nclass ScrollSmooth {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSecion = this.scrollToSecion.bind(this);\r\n  }\r\n\r\n  scrollToSecion(e) {\r\n    e.preventDefault();\r\n    const href = e.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach(link => {\r\n      link.addEventListener(\"click\", this.scrollToSecion);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  function criarTooltip(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n    }\r\n  };\r\n\r\n  function onMouseOver() {\r\n    const tooltipBox = criarTooltip(this);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach(item => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_acordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/acordion.js */ \"./js/modules/acordion.js\");\n/* harmony import */ var _modules_navTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navTab.js */ \"./js/modules/navTab.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animaScroll.js */ \"./js/modules/animaScroll.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_drop_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/drop-menu.js */ \"./js/modules/drop-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_btcFetch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/btcFetch.js */ \"./js/modules/btcFetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSmooth = new _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-menu='suave'] a[href^='#']\");\r\nscrollSmooth.init();\r\n\r\nconst acordion = new _modules_acordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='acordion'] dt\");\r\nacordion.init();\r\n\r\nconst navTab = new _modules_navTab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  \"[data-tab='menu'] img\",\r\n  \"[data-tab='conteudo'] .info\"\r\n);\r\nnavTab.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n);\r\nmodal.init();\r\n\r\n(0,_modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_drop_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_btcFetch_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;