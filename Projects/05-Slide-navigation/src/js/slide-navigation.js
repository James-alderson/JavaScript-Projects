const OPEN_MENU = document.querySelector(".open-menu")
const CLOSE_MENU = document.querySelector(".close-menu")
const BLACK_FILTER = document.querySelector(".black-filter")
const SLIDE_NAVIGATION = document.querySelector(".slide-navigation")

OPEN_MENU.addEventListener("click", toggle_class)
CLOSE_MENU.addEventListener("click", toggle_class)
BLACK_FILTER.addEventListener("click", remove_class)

function toggle_class() {
  BLACK_FILTER.classList.toggle("active")
  SLIDE_NAVIGATION.classList.toggle("menu-open")
}

function remove_class() {
  BLACK_FILTER.classList.remove("active")
  SLIDE_NAVIGATION.classList.remove("menu-open")
}
