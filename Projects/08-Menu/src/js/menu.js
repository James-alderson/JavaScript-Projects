const MENU_GRID = document.querySelector(".menu__grid")
const MENU_CATEGORY = document.querySelector(".menu__category")
const LOADING_DATA = document.querySelector("#loadingData")

let getData =
  fetch("./dist/json/data.json")
    .then(res => res.json())
    .then(data => getData = data)

window.addEventListener("load", async () => {
  await getData
  display_categorys()
  display_items(getData)
})

// Create button Dynamically
function display_categorys() {
  let categorys = getData.reduce((prevValue, currentValue) => {
    if (!prevValue.includes(currentValue.category)) {
      return [...prevValue, currentValue.category]
    }

    return prevValue
  }, ["all"])

  // Set data value
  let categoryBtn = categorys.map(category => {
    return `<button class="category__button inline-block text-neutral-100 capitalize py-1 px-4 rounded border border-red-500 transition-colors hover:bg-red-500 hover:border-red-700 focus:bg-red-500 focus:border-red-700" data-id="${category}">${category}</button>`
  }).join("")

  MENU_CATEGORY.innerHTML = categoryBtn

  let categoryButtons = document.querySelectorAll(".category__button")
  MENU_CATEGORY.firstChild.classList.add("active")

  categoryButtons.forEach(categoryButton => {
    categoryButton.addEventListener("click", event => {
      // Toggle .active class from .category__button
      let activeButton = MENU_CATEGORY.querySelector(".category__button.active")

      if (activeButton && event.target !== activeButton) {
        activeButton.classList.remove("active")
      }

      event.target.classList.add("active")

      // Filter data by category
      let category = event.target.dataset.id
      let menuCategory = getData.filter(item => {
        if (category === item.category) return item
      })

      if (category === "all") display_items(getData)
      else display_items(menuCategory)
    })
  })
}

// Set data value
function display_items(menuItems) {
  let menuItem = menuItems.map(item => {
    return `
      <div class="rounded-lg shadow-md shadow-red-600/25 md:flex">
        <img class="card__img w-full mx-auto object-cover rounded-t-lg border-2 border-red-500 md:rounded-none md:rounded-l-lg" alt="${item.title}" src="${item.img}">
        <div class="p-4 rounded-b-lg border-2 border-t-0 border-neutral-300 md:rounded-none md:rounded-r-lg md:border-t-2 md:border-l-0">
          <div class="flex font-semibold pb-2 border-b border-dotted items-center justify-between">
            <div class="capitalize tracking-widest">${item.title}</div>
            <div class="italic text-red-400">$${item.price}</div>
          </div>
          <p class="text-neutral-300 my-2">${item.desc}</p>
        </div>
      </div>`
  }).join("")

  MENU_GRID.innerHTML = menuItem

  // Ajax loading
  LOADING_DATA.classList.add("hidden")
  setTimeout(() => {
    LOADING_DATA.remove()
  }, 500)
}
