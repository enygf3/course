const state = {
  items: [
    {
      id: 1,
      name: "iPhone",
      price: 10,
      quantity: 1,
      image: "./img/items/item1.webp",
      tag: "iphone",
    },
    {
      id: 2,
      name: "MacBook",
      price: 20,
      quantity: 1,
      image: "./img/items/item2.webp",
      tag: "macbook",
    },
    {
      id: 3,
      name: "iPad",
      price: 30,
      quantity: 1,
      image: "./img/items/item3.webp",
      tag: "ipad",
    },
    {
      id: 4,
      name: "Apple Watch",
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

function pushItems(arr, parent, noSort = 1) {
  arr
    .sort((a, b) => (noSort ? b.price - a.price : 0))
    .forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("shop-item");
      div.id = item.tag;
      div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} $</p>
    `;
      parent.appendChild(div);
    });
}

const categories = document.querySelectorAll(".category");

const getCategory = (e) => {
  return e.target.innerText.toLowerCase();
};

const categoryFilter = (value) => {
  if (value === "all") {
    return state.items;
  } else {
    return state.items.filter((item) => item.tag === value);
  }
};

const removeItems = (items) => {
  items.forEach((item) => {
    item.remove();
  });
};

function handleCategory(cats, state) {
  cats.forEach((item) => {
    item.onclick = (e) => {
      state.category = getCategory(e);
      removeItems(document.querySelectorAll(".shop-item"));
      pushItems(categoryFilter(state.category), shop);
      router(document.querySelectorAll(".shop-item"));
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

const itemPage = (item) => {
  console.log(item);
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
  itemImg.src = item.innerHTML.split("src=")[1].split('"')[1];
  itemControlsShareIconsImg1.src = "./img/ico/dribbble.webp";
  itemControlsShareIconsImg2.src = "./img/ico/inst.webp";
  itemControlsShareIconsImg3.src = "./img/ico/twitter.webp";

  //putting text
  itemName.innerText = item.children[1].innerText;
  itemDesc.innerText = "qwerty";
  itemPrice.innerText = item.children[2].innerText;

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
  document.body.prepend(itemPage);
};

function router(items = shopItems) {
  //geting all elements from the main page
  let main = document.getElementsByTagName("main")[0];
  let home = document.querySelector(".home");
  let footer = document.getElementsByTagName("footer")[0];

  Array.from(items).forEach(
    (item) =>
      (item.onclick = () => {
        history.pushState(
          null,
          null,
          `item-${item.children[1].outerText.toLowerCase().replace(/\s/g, "")}`
        );
        pageChange(item);
        console.log(item);
      })
  );

  //checking if URL have changed
  window.onpopstate = () => {
    pageChange();
  };

  home.onclick = () => {
    location.href.includes("github")
      ? history.pushState(null, null, "/course")
      : history.pushState(null, null, "/");
    pageChange();
  };

  //routing function
  //checking URL if it includes item and then deleteing/rendering elements
  function pageChange(el) {
    if (location.href.includes("item")) {
      deleteElements("home");
      renderElements("item", el);
      console.log("item");
    } else {
      console.log("home");
      deleteElements("item");
      renderElements("home");
    }
  }

  //function that deletes all elements from home/item page
  function deleteElements(page) {
    if (page === "home") {
      main.style.display = "none";
      footer.style.display = "none";
    } else {
      document.querySelector(".item-page").remove();
    }
  }
  //function that renders all elements from home/item page
  function renderElements(page, el) {
    if (page === "home") {
      main.style.display = "block";
      footer.style.display = "flex";
    } else {
      //function that renders item page
      itemPage(el);
    }
  }
}

router(document.querySelectorAll(".shop-item"));

const filterPrice = (arr) => {
  document.querySelectorAll(".shop-item").forEach((item) => {
    item.remove();
  });

  pushItems(arr, shop, 0);
  router(document.querySelectorAll(".shop-item"));
};

const filterItems = (e) => {
  let arr = [];
  console.log(e.target.value);
  if (e.target.value === "HL") {
    arr = state.items.sort((a, b) => b.price - a.price);
  } else if (e.target.value === "LH") {
    arr = state.items.sort((a, b) => a.price - b.price);
  }

  filterPrice(arr);
};

let categoryPrice = document.querySelector(".category-price");
categoryPrice.onchange = filterItems;
