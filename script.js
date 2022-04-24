const state = {
  items: [
    {
      id: 1,
      name: "Item 1",
      price: 10,
      quantity: 1,
      image: "./img/items/item1.webp",
      tag: "iphone",
    },
    {
      id: 2,
      name: "Item 2",
      price: 20,
      quantity: 1,
      image: "./img/items/item2.webp",
      tag: "",
    },
    {
      id: 3,
      name: "Item 3",
      price: 30,
      quantity: 1,
      image: "./img/items/item3.webp",
      tag: "ipad",
    },
    {
      id: 4,
      name: "Item 4",
      price: 40,
      quantity: 1,
      image: "./img/items/item4.webp",
      tag: "watch",
    },
  ],
  category: "all",
  priceFilter: "HL",
};

const shop = document.querySelector(".shop-items");

function pushItems(arr, parent) {
  arr.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("shop-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} $</p>
    `;
    parent.appendChild(div);
  });
}

const categories = document.querySelectorAll(".category");

function handleCategory(cats, state) {
  cats.forEach((item) => {
    item.onclick = (e) => {
      state.category = e.target.innerText.toLowerCase();
      Array.from(cats)
        .find((el) => el.classList.contains("active"))
        .classList.remove("active");
      e.target.className = "category active";
    };
  });
}

handleCategory(categories, state);

pushItems(state.items, shop);

let shopItems = document.querySelectorAll(".shop-item");

const itemPage = (
  name = "Item",
  price = "1000",
  img = "./img/items/item1.webp",
  desc = "qwerty",
  parent = document.body
) => {
  //creating elements
  let itemPage = document.createElement("div");
  let itemImg = document.createElement("img");
  let itemName = document.createElement("h3");
  let itemDesc = document.createElement("p");
  let itemPrice = document.createElement("button");
  let itemControls = document.createElement("div");
  let itemControlsShare = document.createElement("div");
  let itemControlsShareIcons = document.createElement("div");
  let itemControlsShareIconsImg1 = document.createElement("img");
  let itemControlsShareIconsImg2 = document.createElement("img");
  let itemControlsShareIconsImg3 = document.createElement("img");

  //giving elements classes
  itemPage.className = "item-page";
  itemControls.className = "page-controls";
  itemControlsShare.className = "controls-share";
  itemControlsShareIcons.className = "controls-share-icons";

  //putting img sources
  itemImg.src = img;
  itemControlsShareIconsImg1.src = "./img/ico/dribbble.webp";
  itemControlsShareIconsImg2.src = "./img/ico/inst.webp";
  itemControlsShareIconsImg3.src = "./img/ico/twitter.webp";

  //putting text
  itemName.innerText = name;
  itemDesc.innerText = desc;
  itemPrice.innerText = price;

  //putting elements to the page
  itemControlsShareIcons.appendChild(itemControlsShareIconsImg1);
  itemControlsShareIcons.appendChild(itemControlsShareIconsImg2);
  itemControlsShareIcons.appendChild(itemControlsShareIconsImg3);
  itemControlsShare.appendChild(itemControlsShareIcons);
  itemControls.appendChild(itemName);
  itemControls.appendChild(itemDesc);
  itemControls.appendChild(itemPrice);
  itemControls.appendChild(itemControlsShare);
  itemPage.appendChild(itemImg);
  itemPage.appendChild(itemControls);
  parent.prepend(itemPage);
};

function router(items) {
  //geting all elements from the main page
  let main = document.getElementsByTagName("main")[0];
  let home = document.querySelector(".home");

  Array.from(items).forEach(
    (item) =>
      (item.onclick = () => {
        history.pushState(
          null,
          null,
          `${item.children[1].outerText.toLowerCase().replace(/\s/g, "")}`
        );
        pageChange();
      })
  );

  //checking if URL have changed
  window.addEventListener("popstate", () => {
    pageChange();
  });

  home.addEventListener("click", () => {
    history.pushState(null, null, "/");
    pageChange();
  });

  //routing function
  //checking URL if it includes "favourite" and then deleteing/rendering elements
  function pageChange() {
    if (location.href.includes("item")) {
      deleteElements("home");
      renderElements("item");
      console.log("item");
    } else {
      console.log("home");
      deleteElements("item");
      renderElements("home");
    }
  }

  //function that deletes all elements from main/favourite page
  function deleteElements(page) {
    if (page === "home") {
      main.style.display = "none";
    } else {
      document.querySelector(".item-page").remove();
    }
  }
  //function that renders all elements from main/favourite page
  function renderElements(page) {
    if (page === "home") {
      main.style.display = "block";
    } else {
      //function that renders "favourite" page
      itemPage();
    }
  }
}

router(shopItems);
