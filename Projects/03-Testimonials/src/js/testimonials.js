const CLIENT_NAME = document.querySelector("#userName")
const CLIENT_JOB = document.querySelector("#userJob")
const NEXT_BUTTON = document.querySelector("#nextBtn")
const PREVIOUS_BUTTON = document.querySelector("#prevBtn")
const TESTIMONIAL = document.querySelector(".testimonial")
const TESTIMONIAL_IMAGE = document.querySelector(".testimonial__img")
const TESTIMONIAL_QUOTE = document.querySelector(".testimonial__quote")

/*
The delay is caused by doing things in sync 
(set new value and change .testimonial and buttons status)
*/
const DELAY = 500
let counter = 0

NEXT_BUTTON.addEventListener("click", set_counter)
PREVIOUS_BUTTON.addEventListener("click", set_counter)

// Get data and change counter value
function set_counter(event) {
  let statusCode = 0
  response_status(statusCode)

  fetch("dist/json/testimonials.json")
    .then(response => {
      response_status(response.status)
      return response.json()
    })
    .then(data => {
      if (event && event.target.id === "prevBtn") {
        counter <= 0 ? counter = data.length - 1 : counter--
      } else {
        counter >= data.length - 1 ? counter = 0 : counter++
      }
      set_value(data, counter)
    })
}

// Set new value
function set_value(value, index) {
  setTimeout(() => {
    CLIENT_NAME.textContent = value[index].name
    CLIENT_JOB.textContent = value[index].job
    TESTIMONIAL_IMAGE.src = value[index].img
    TESTIMONIAL_IMAGE.alt = value[index].name
    TESTIMONIAL_QUOTE.textContent = value[index].text
  }, DELAY)
}

// Change .testimonial and buttons status
function response_status(status) {
  if (status === 0) {
    TESTIMONIAL.classList.add("loading")
    NEXT_BUTTON.setAttribute("disabled", "")
    PREVIOUS_BUTTON.setAttribute("disabled", "")
  }
  else {
    setTimeout(() => {
      TESTIMONIAL.classList.remove("loading")
      NEXT_BUTTON.removeAttribute("disabled")
      PREVIOUS_BUTTON.removeAttribute("disabled")
    }, DELAY)
  }
}
