const state = {
  items: [
    {
      id: 1,
      name: "iPhone 11",
      price: 70,
      quantity: 1,
      image: "./img/items/item1.webp",
      tag: "iphone",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 150,
      quantity: 1,
      image: "./img/items/item2.webp",
      tag: "macbook",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 3,
      name: "iPad Pro",
      price: 110,
      quantity: 1,
      image: "./img/items/item3.webp",
      tag: "ipad",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: 60,
      quantity: 1,
      image: "./img/items/item4.webp",
      tag: "watch",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 5,
      name: "Apple Watch 3",
      price: 40,
      quantity: 1,
      image: "./img/items/item5.webp",
      tag: "watch",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 6,
      name: "AirPods Pro",
      price: 35,
      quantity: 1,
      image: "./img/items/item6.webp",
      tag: "airpods",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 7,
      name: "iMac Pro",
      price: 200,
      quantity: 1,
      image: "./img/items/item7.webp",
      tag: "mac",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 8,
      name: "iPhone 13 Pro Max",
      price: 130,
      quantity: 1,
      image: "./img/items/item8.webp",
      tag: "iphone",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 9,
      name: "AirPods 2",
      price: 35,
      quantity: 1,
      image: "./img/items/item9.webp",
      tag: "airpods",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 10,
      name: "iMac 2021 24”",
      price: 240,
      quantity: 1,
      image: "./img/items/item10.webp",
      tag: "mac",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
  ],
  category: "all",
  priceFilter: "HL",
};

const isHome = !(
  location.href.includes("about") || location.href.includes("contact")
);

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
      pushItems(
        state.priceFilter === "LH"
          ? categoryFilter(state.category).sort((a, b) => a.price - b.price)
          : categoryFilter(state.category).sort((a, b) => b.price - a.price),
        shop,
        0
      );
      router(document.querySelectorAll(".shop-item"));
      Array.from(cats)
        .find((el) => el.classList.contains("active"))
        .classList.remove("active");
      e.target.className = "category active";
    };
  });
}

isHome ? handleCategory(categories, state) : 0;

isHome ? pushItems(state.items, shop) : 0;

let shopItems = document.querySelectorAll(".shop-item");

const handleSimilarProduct = (e) => {
  history.pushState(
    null,
    null,
    `item-${e.target.parentNode.children[2].children[0].innerText
      .toLowerCase()
      .replace(/\s/g, "")}`
  );
  itemPage(e.target.parentNode, 1);
};

const closeOrderBlock = () => {
  document.querySelector(".order").remove();
  document.querySelector(".item-page").style.opacity = "1";
};

const handleOrder = (e) => {
  let block = document.createElement("div");
  block.className = "order";
  block.innerHTML = `
  <div class = "order-block">
    <img class = "block-close" src = './img/ico/xmark.webp' alt = 'close order block' width = '15' height = '20'>
      <img src = './img/ico/success.webp' width = '80' height = '80' alt = 'payment was success'>
      <div class = "block-text">
        <p>Product: ${document.querySelector(".item-name").innerText}</p>
        <p>Payment processed!</p>
        <p>Thank you!</p>
      </div>
  </div>`;
  document.body.appendChild(block);
  document.querySelector(".item-page").style.opacity = "0.6";
  document.querySelector(".block-close").onclick = closeOrderBlock;
};

function itemPage(item, fromSimilar = 0) {
  document.querySelector(".item-page")
    ? document.querySelector(".item-page").remove()
    : 0;
  //creating elements
  let itemPage = document.createElement("div");
  itemPage.className = "item-page";
  let itemName = !fromSimilar
    ? item.children[1].innerText
    : item.children[2].children[0].innerText;

  //similart product
  let product = state.items[Math.floor(Math.random() * state.items.length)];

  while (product.name === itemName) {
    product = state.items[Math.floor(Math.random() * state.items.length)];
  }

  itemPage.innerHTML = `
  <img class = 'page-img' src = '${
    item.innerHTML.split("src=")[1].split('"')[1]
  }' width = '400' height = '380'>
  <div class = 'page-controls'>
    <div class = 'product-info'>
      <h3 class = 'item-name'>${itemName}</h3>
      <p>${
        !fromSimilar
          ? state.items.find((item) => item.name === itemName).description
          : state.items.find((el) => el.name === itemName).description
      }</p>
      <button>${
        !fromSimilar
          ? item.children[2].innerText
          : item.children[2].children[1].innerText
      }</button>
      <div class = 'controls-share'>
        <p>Share on</p>
        <div class = 'controls-share-icons'>
          <img src="./img/ico/dribbble-dark.webp">
          <img src="./img/ico/inst-dark.webp">
          <img src="./img/ico/twitter-dark.webp">
        </div>
      </div>
    </div>
      <div class = 'similar-product'>
        <h3 class="product-title">Similar product</h3>
        <img src = '${product.image}'>
        <div class = 'product-text-block'>
          <h3>${product.name}</h3>
          <p>${product.price}$</p>
        </div>
      </div>
    </div>
  </div>`;

  document.body.prepend(itemPage);

  document.querySelector(".similar-product").onclick = handleSimilarProduct;

  document.querySelector(".product-info").children[2].onclick = handleOrder;
}

function router(items, deleteBlock = 0) {
  //geting all elements from the main page
  let main = document.getElementsByTagName("main")[0];
  let home = document.querySelector(".home");
  let footer = isHome ? document.getElementsByTagName("footer")[0] : 0;

  Array.from(items).forEach(
    (item, arr) =>
      (item.onclick = () => {
        history.pushState(
          null,
          null,
          `item-${item.children[1].outerText.toLowerCase().replace(/\s/g, "")}`
        );
        pageChange(item);
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
      deleteBlock === 1
        ? (document.querySelector(".header-search").value = "")
        : 0;
      deleteBlock === 1 ? document.querySelector(".search-result").remove() : 0;
    } else {
      deleteElements("item");
      renderElements("home");
    }
  }

  //function that deletes all elements from home/item page
  function deleteElements(page) {
    if (page === "home") {
      main.style.display = "none";
      isHome ? (footer.style.display = "none") : 0;
    } else {
      document.querySelector(".item-page").remove();
    }
  }
  //function that renders all elements from home/item page
  function renderElements(page, el) {
    if (page === "home") {
      main.style.display = "block";
      isHome ? (footer.style.display = "flex") : 0;
    } else {
      //function that renders item page
      itemPage(el);
    }
  }

  return 0;
}

isHome ? router(document.querySelectorAll(".shop-item")) : 0;

function filterPrice(arr) {
  document.querySelectorAll(".shop-item").forEach((item) => {
    item.remove();
  });

  pushItems(arr, shop, 0);
  router(document.querySelectorAll(".shop-item"));
}

function filterItems() {
  let arr = [];
  let newArr = [];
  if (state.priceFilter === "HL") {
    arr = state.items.sort((a, b) => b.price - a.price);
  } else if (state.priceFilter === "LH") {
    arr = state.items.sort((a, b) => a.price - b.price);
  }

  state.category === "all"
    ? (newArr = arr)
    : (newArr = arr.filter((item) => item.tag === state.category));

  filterPrice(newArr);
}

const getPriceFilter = (e) => {
  state.priceFilter = e.target.value;
  filterItems();
};

let categoryPrice = isHome ? document.querySelector(".category-price") : 0;
isHome ? (categoryPrice.onchange = getPriceFilter) : 0;

const renderSearchItems = (arr) => {
  arr.forEach((item) => {
    let searchItem = document.createElement("div");
    let itemName = document.createElement("h3");
    let itemPrice = document.createElement("p");
    let itemImg = document.createElement("img");

    searchItem.className = "search-item";
    itemName.innerText = item.name;
    itemPrice.innerText = item.price + "$";
    itemImg.src = item.image;

    searchItem.appendChild(itemImg);
    searchItem.appendChild(itemName);
    searchItem.appendChild(itemPrice);
    document.querySelector(".search-result").appendChild(searchItem);
  });
};

const renderSearchBlock = (arr) => {
  if (!document.querySelector(".search-result")) {
    let div = document.createElement("div");
    div.className = "search-result";
    let h3 = document.createElement("h3");
    h3.innerText = "Search result";
    div.appendChild(h3);
    document.body.appendChild(div);
    renderSearchItems(arr);
    router(document.querySelectorAll(".search-item"), 1);
  }
};

const deleteSearchBlock = (block) => {
  block ? block.remove() : 0;
};

const search = (e) => {
  let arr = [];
  let input = e.target.value.toLowerCase().replace(/\s/g, "");
  state.items.forEach((item) => {
    if (
      (item.name.toLowerCase().replace(/\s/g, "").includes(input) ||
        item.description.toLowerCase().replace(/\s/g, "").includes(input)) &&
      input.length >= 3
    ) {
      arr.push(item);
    }
  });

  input.length >= 3
    ? renderSearchBlock(arr)
    : deleteSearchBlock(document.querySelector(".search-result"));
};

document.querySelector(".header-search").oninput = search;

const getSimilarProduct = (arr) => {
  let similarProduct = document.querySelector(".similar-product");
  similarProduct.innerHTML = "";
  arr.forEach((item) => {
    let product = document.createElement("div");
    let productImg = document.createElement("img");
    let productName = document.createElement("h3");
    let productPrice = document.createElement("p");

    product.className = "product";
    productName.innerText = item.name;
    productPrice.innerText = item.price + "$";
    productImg.src = item.image;

    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productPrice);
    similarProduct.appendChild(product);
  });
};

const isMobile = window.innerWidth > 600 ? 1 : 0;

const handleMenu = (e) => {
  let menuBlock = document.createElement("div");
  menuBlock.className = "menu-block";
  menuBlock.style.display = "none";
  menuBlock.innerHTML = `
    <img class = 'menu-close' src = './img/ico/xmark.webp' width = '30' height = '45'>
    <div class = 'menu-content'>
      <p class = 'menu-item'><a href = './index.html'>Home</a></p>
      <p class = 'menu-item'><a href = './about.html'>About</a></p>
      <p class = 'menu-item'><a href = './contact.html'>Contact</a></p>
    </div>
  `;

  document.getElementsByTagName("main")[0].appendChild(menuBlock);

  const showEl = (el) => {
    el.style.transitionDuration = ".5s";
    el.style.opacity = "1";
  };

  const displayEl = (el) => {
    el.style.display = "block";
    el.style.opacity = "0";
  };

  const hideEl = (el) => {
    el.style.opacity = "0";
  };

  const removeEl = (el) => {
    el.remove();
  };

  displayEl(menuBlock);
  setTimeout(showEl, 100, menuBlock);

  const closeMenu = () => {
    hideEl(menuBlock);
    setTimeout(removeEl, 500, menuBlock);
  };

  document.querySelector(".menu-close").onclick = closeMenu;
};

document.querySelector(".header-menu").onclick = handleMenu;
