const HEADER = document.querySelector("header")
const MENU_BUTTON = document.querySelector(".btn-menu")

MENU_BUTTON.addEventListener("click", toggle_class)

function toggle_class() {
  HEADER.classList.toggle("menu-open")
}
