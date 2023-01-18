import outsideClick from "./outsideClick.js";

export default function initDropMenu() {
  const dropDownsMenus = document.querySelectorAll(" [data-dropdown] ");

  dropDownsMenus.forEach(menu => {
    ["touchstart", "click"].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, ["touchstart", "click"]);
  }
}
