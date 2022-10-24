const ACCORDION = document.querySelector(".accordion")
const ACCORDIONS_TITLE = document.querySelectorAll(".accordion__title")

window.addEventListener("load", accordion_liveStatus)
window.addEventListener("resize", accordion_liveStatus)

ACCORDIONS_TITLE.forEach(accordionTitle => {
  accordionTitle.addEventListener("click", event => {
    accordion_status(event, accordionTitle)
  })
})

function accordion_status(event, accTitle) {
  let targetParent = accTitle.parentElement
  let targetContent = accTitle.nextElementSibling
  let activeAccordion = ACCORDION.querySelector(".accordion__item.show")

  // Toggle .show class from .accordion__title
  if (event.target.closest(".accordion__title")) {
    targetParent.classList.toggle("show")
  }

  // Set max-height for .accordion__content
  if (targetParent.classList.contains("show")) {
    targetContent.style.maxHeight = targetContent.scrollHeight + "px"
  } else {
    targetContent.style.maxHeight = null
  }

  // Close the previously opened accordion
  if (activeAccordion && targetParent !== activeAccordion) {
    activeAccordion.classList.remove("show")
    activeAccordion.querySelector(".accordion__content").style.maxHeight = null
  }
}

function accordion_liveStatus() {
  // Set max-height for .accordion__content
  let activeAccordion = ACCORDION.querySelector(".accordion__item.show")
  let accordionContent = activeAccordion.querySelector(".accordion__content")

  accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
}
