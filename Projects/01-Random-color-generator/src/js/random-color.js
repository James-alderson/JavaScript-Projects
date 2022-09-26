const LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const HEX = document.querySelector("#hex")
const RGB = document.querySelector("#rgb")
const HSL = document.querySelector("#hsl")
const HWB = document.querySelector("#hwb")
const BTN_GENERATE = document.querySelector("#btnGenerate")

window.addEventListener("load", random_hex)
BTN_GENERATE.addEventListener("click", random_hex)

/* ===================================
   Create random 'hex' format color
=================================== */
function random_hex(event) {
  let hexValue = ""

  if (event.type === "click") document.body.classList.add("changed")
  for (let i = 0; i < 6; i++) hexValue += LIST[randomItem()]

  HEX.innerText = `#${hexValue}`
  document.body.style.backgroundColor = `#${hexValue}`

  converter(hexValue)
}

/* ==================================================
   Send random value between (0 to 9) and (A to Z)
================================================== */
function randomItem() {
  let random = Math.floor(Math.random() * LIST.length)

  return (random)
}

/* ================================================
   Convert 'hex' format color to [rgb, hsl, hwb]
================================================ */
function converter(hex) {
  RGB.innerText = `rgb(${w3color(hex).red}, ${w3color(hex).green}, ${w3color(hex).blue})`
  HSL.innerText = `hsl(${w3color(hex).hue}, ${w3color(hex).sat}%, ${w3color(hex).lightness}%)`
  HWB.innerText = `hwb(${w3color(hex).hue}, ${w3color(hex).whiteness}%, ${w3color(hex).blackness}%)`
}
