(()=>{"use strict";class t{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.classObserver=e,this.observerTarget=document.querySelector(i),this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let o=0;const s=setInterval((()=>{o+=i,t.innerText=o,e<o&&(t.innerText=e,clearInterval(s))}),25*Math.random())}initAnima(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.classObserver)&&(this.observer.disconnect(),this.initAnima())}addObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addObserver(),this}}function e(t,e){const i=document.documentElement,o="data-outside";function s(n){t.contains(n.target)||(t.removeAttribute(o),e.forEach((t=>{i.removeEventListener(t,s)})),t.classList.remove("ativo"))}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,s)}))})),t.setAttribute(o,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSecion=this.scrollToSecion.bind(this)}scrollToSecion(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSecion)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}("[data-menu='suave'] a[href^='#']").init(),new class{constructor(t){this.acordionList=document.querySelectorAll(t),this.classAtivo="ativo"}toggleAcordion(t){t.classList.toggle(this.classAtivo),t.nextElementSibling.classList.toggle(this.classAtivo)}addEventAcordion(){this.acordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAcordion(t)))}))}init(){return this.acordionList.length&&(this.toggleAcordion(this.acordionList[0]),this.addEventAcordion()),this}}("[data-anime='acordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e)}ativeTab(t){this.tabContent.forEach((t=>{t.classList.remove("ativo")}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add("ativo",e)}addEventNavTab(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.ativeTab(e)}))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.ativeTab(0),this.addEventNavTab()),this}}("[data-tab='menu'] img","[data-tab='conteudo'] .info").init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.fecharForaModal=this.fecharForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}fecharForaModal(t){t.target===this.containerModal&&this.toggleModal()}addEventModal(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.fecharForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addEventModal(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}criarTooltip(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mousemove",this.onMouseMove),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave)}onMouseOver(t){this.criarTooltip(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addEventTooltip(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addEventTooltip(),this}}("[data-tooltip]","ativo").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowParte=.6*window.innerHeight,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{elemet:t,offset:Math.floor(e-this.windowParte)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.elemet.classList.add("ativo"):t.elemet.classList.contains("ativo")&&t.elemet.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']").init(),new class{constructor(t,e){this.dropDownsMenus=document.querySelectorAll(t),this.classActiveMenu="ativo",this.eventos=void 0===e?["touchstart","click"]:e,this.activeDropMenu=this.activeDropMenu.bind(this)}activeDropMenu(t){t.preventDefault();const i=t.currentTarget;i.classList.toggle(this.classActiveMenu),e(i,this.eventos)}addDropMenuEvent(){this.dropDownsMenus.forEach((t=>{this.eventos.forEach((e=>{t.addEventListener(e,this.activeDropMenu)}))}))}init(){return this.dropDownsMenus.length&&this.addDropMenuEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,i){this.bntMenu=document.querySelector(t),this.menuList=document.querySelector(e),this.eventos=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(){this.bntMenu.classList.toggle("ativo"),this.menuList.classList.toggle("ativo"),e(this.menuList,this.eventos)}addMenuMobileEvent(){this.eventos.forEach((t=>{this.bntMenu.addEventListener(t,this.openMenu)}))}init(){this.bntMenu&&this.menuList&&this.addMenuMobileEvent()}}('[data-menu="button"]','[data-menu="list"]').init(),new class{constructor(t,e){this.funcionamento=document.querySelector(t),this.classActive=e}dadosFuncionamento(){this.dias=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.dias.indexOf(this.diaAgora),e=this.horarioSemana[0]<=this.horarioAgora&&this.horarioSemana[1]>=this.horarioAgora;return t&&e}activaAberto(){this.estaAberto()&&this.funcionamento.classList.add(this.classActive)}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.activaAberto()),this}}("[data-semana]","aberto").init(),async function(){try{const e=await fetch("/animais.json");(await e.json()).forEach((t=>{!function(t){const e=document.querySelector(".numeros-grid"),i=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3> <span data-numero> ${t.total}</span>`,e}(t);e.appendChild(i)}(t)})),new t("[ data-numero ]","ativo","#numero").init()}catch(t){console.log(t)}}(),async function(){try{const t=await fetch("https://www.blockchain.com/ticker"),e=await t.json();document.querySelector(".btc-preco").innerText=(1e3/e.BRL.buy).toFixed(4)}catch(t){console.log(t)}}()})();