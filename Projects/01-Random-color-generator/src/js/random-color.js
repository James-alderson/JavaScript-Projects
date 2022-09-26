const LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const BTN_GENERATE = document.querySelector("#btnGenerate")
const HEX = document.querySelector("#hex")

window.addEventListener("load", random_hex)
BTN_GENERATE.addEventListener("click", random_hex)

function random_hex(event) {
  let hexValue = ""

  for (let i = 0; i < 6; i++) hexValue += LIST[randomItem()]

  if (event.type === "click") document.body.classList.add("changed")

  HEX.innerText = `#${hexValue}`
  document.body.style.backgroundColor = `#${hexValue}`
}

function randomItem() {
  let random = Math.floor(Math.random() * LIST.length)

  return (random)
}
