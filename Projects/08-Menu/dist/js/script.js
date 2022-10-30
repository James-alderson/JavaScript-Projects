const MENU_GRID=document.querySelector(".menu__grid"),MENU_CATEGORY=document.querySelector(".menu__category"),LOADING_DATA=document.querySelector("#loadingData");let getData=fetch("./dist/json/data.json").then((e=>e.json())).then((e=>getData=e));function display_categorys(){let e=getData.reduce(((e,t)=>e.includes(t.category)?e:[...e,t.category]),["all"]).map((e=>`<button class="category__button inline-block text-neutral-100 capitalize py-1 px-4 rounded border border-red-500 transition-colors hover:text-neutral-900 hover:bg-red-500 hover:border-red-700 focus:text-neutral-900 focus:bg-red-500 focus:border-red-700" data-id="${e}">${e}</button>`)).join("");MENU_CATEGORY.innerHTML=e;let t=document.querySelectorAll(".category__button");MENU_CATEGORY.firstChild.classList.add("active"),t.forEach((e=>{e.addEventListener("click",(e=>{let t=MENU_CATEGORY.querySelector(".category__button.active");t&&e.target!==t&&t.classList.remove("active"),e.target.classList.add("active");let r=e.target.dataset.id,d=getData.filter((e=>{if(r===e.category)return e}));display_items("all"===r?getData:d)}))}))}function display_items(e){let t=e.map((e=>`\n      <div class="rounded-lg shadow-md shadow-red-600/25 md:flex">\n        <img class="card__img w-full mx-auto object-cover rounded-t-lg border-2 border-red-500 md:rounded-none md:rounded-l-lg" alt="${e.title}" src="${e.src}" data-src="${e.data_src}">\n        <div class="p-4 rounded-b-lg border-2 border-t-0 border-neutral-300 md:rounded-none md:rounded-r-lg md:border-t-2 md:border-l-0">\n          <div class="flex font-semibold pb-2 border-b border-dotted items-center justify-between">\n            <div class="capitalize tracking-widest">${e.title}</div>\n            <div class="italic text-red-400">$${e.price}</div>\n          </div>\n          <p class="text-neutral-300 my-2">${e.desc}</p>\n        </div>\n      </div>`)).join("");MENU_GRID.innerHTML=t,LOADING_DATA.classList.add("hidden"),setTimeout((()=>{LOADING_DATA.remove()}),500);let r=document.querySelectorAll("[data-src]"),d=new IntersectionObserver((function(e,t){e.forEach((e=>{if(!e.isIntersecting)return;let r=e.target;r.src=r.dataset.src,t.unobserve(r)}))}),{threshold:0,rootMargin:"0px 0px 100px 0px"});r.forEach((e=>{d.observe(e)}))}window.addEventListener("load",(async()=>{await getData,display_categorys(),display_items(getData)}));