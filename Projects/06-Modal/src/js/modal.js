const MODAL = document.querySelector("#modal")
const DARK_SHADOW = document.querySelector("#darkShadow")
const OPEN_MODAL = document.querySelector("#openModal")
const CLOSE_MODAL = document.querySelector("#closeModal")

OPEN_MODAL.addEventListener("click", open_modal)
CLOSE_MODAL.addEventListener("click", close_modal)
DARK_SHADOW.addEventListener("click", close_modal)

function open_modal() {
  MODAL.classList.add("show")
  DARK_SHADOW.classList.add("active")
}

function close_modal() {
  MODAL.classList.remove("show")
  DARK_SHADOW.classList.remove("active")
}
