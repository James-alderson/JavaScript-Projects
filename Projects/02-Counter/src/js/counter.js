const INCREASE = document.querySelector("#increase")
const DECREASE = document.querySelector("#decrease")
const RESET = document.querySelector("#reset")
const STEP = document.querySelector("#step")
const COUNTER = document.querySelector("#counter")

INCREASE.addEventListener("click", check_event)
DECREASE.addEventListener("click", check_event)
RESET.addEventListener("click", check_event)
window.addEventListener("load", () => STEP.value = 1)

function check_event(event) {
  let value = 0
  let target = event.target
  let stepValue = Number(STEP.value)
  let counterValue = Number(COUNTER.innerText)

  if (isNaN(stepValue) || stepValue <= 0) return

  if (target.id == "increase") value = counterValue + stepValue
  if (target.id == "decrease") value = counterValue - stepValue
  if (target.id == "reset") value = 0

  COUNTER.innerText = value
  set_color(COUNTER.innerText)
}

function set_color(value) {
  if (value > 0) COUNTER.style.color = "#198754"
  if (value == 0) COUNTER.style.color = "#fff"
  if (value < 0) COUNTER.style.color = "#dc3545"
}
