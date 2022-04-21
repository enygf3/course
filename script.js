const state = {
  items: [
    {
      id: 1,
      name: "Item 1",
      price: 10,
      quantity: 1,
      image: "./img/items/item1.webp",
      tag: "iphone"
    },
    {
      id: 2,
      name: "Item 2",
      price: 20,
      quantity: 1,
      image: "./img/items/item2.webp",
      tag: ""
    },
    {
      id: 3,
      name: "Item 3",
      price: 30,
      quantity: 1,
      image: "./img/items/item3.webp",
      tag: "ipad"
    },
    {
      id: 4,
      name: "Item 4",
      price: 40,
      quantity: 1,
      image: "./img/items/item4.webp",
      tag: "watch"
    }
  ],
  category: "all",
  priceFilter: "HL"
}

const shop = document.querySelector(".shop-items")

function pushItems(arr, parent) {
  arr.forEach(item => {
    const div = document.createElement("div")
    div.classList.add("shop-item")
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} $</p>
    `
    parent.appendChild(div)
  })
}

const categories = document.querySelectorAll(".category")

function handleCategory(cats, state) {
  cats.forEach(item => {
    item.onclick =  (e) => {
      state.category = e.target.innerText.toLowerCase()
      Array.from(cats).find(el => el.classList.contains("active")).classList.remove("active")
      e.target.className = "category active"
    }
  })
}

handleCategory(categories, state)

pushItems(state.items, shop)

let shopItems = document.querySelectorAll(".shop-item")

function router(items) {
  //geting all elements from the main page
  let main = document.getElementsByTagName("main")
  let home = document.querySelector(".home")

  Array.from(items).forEach(item => item.addEventListener("click", () => {
        history.pushState(null, null, `/${item.children[1].outerText.toLowerCase().replace(/\s/g, '')}`)
      })
  );

  home.addEventListener("click", (e) => {
      history.pushState(null, null, "/");
  });
  
  //checking if URL have changed
  window.addEventListener("popstate", () => {
      pageChange();
  });

  //routing function
  //checking URL if it includes "favourite" and then deleteing/rendering elements
  function pageChange() {
      if (location.href.includes("item")) {
          deleteElements("home");
          renderElements("item");
      } else {
          deleteElements("item");
          renderElements("home");
      }
  }

  //function that deletes all elements from main/favourite page
  function deleteElements(page) {
      if (page === "home") {
          main.style.display = "none"
      } else {
          document.querySelector(".app-favourite").remove();
      }
  }
  //function that renders all elements from main/favourite page
  function renderElements(page) {
      if (page === "home") {
          appInput.style.display = "block";
          appCityBlock.style.display = "block";
          block.style.display = "flex";
          appCloud.style.display = "block";
          appTemp.style.display = "block";
          appDetails.style.display = "grid";
      } else {
          //function that renders "favourite" page
          favouritePage();
      }
  }
}


router(shopItems)