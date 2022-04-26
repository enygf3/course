const state = {
  items: [
    {
      id: 1,
      name: "iPhone",
      price: 10,
      quantity: 1,
      image: "./img/items/item1.webp",
      tag: "iphone",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 2,
      name: "MacBook",
      price: 20,
      quantity: 1,
      image: "./img/items/item2.webp",
      tag: "macbook",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 3,
      name: "iPad",
      price: 30,
      quantity: 1,
      image: "./img/items/item3.webp",
      tag: "ipad",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: 40,
      quantity: 1,
      image: "./img/items/item4.webp",
      tag: "watch",
      description:
        "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. ",
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

const handleSimilarProduct = (e) => {
  itemPage(e.target.parentNode, 1);
};

function itemPage(item, fromSimilar = 0) {
  document.querySelector(".item-page")
    ? document.querySelector(".item-page").remove()
    : 0;
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
  let itemControlsText = document.createElement("p");

  let similarProduct = document.createElement("div");
  let similarProductBlockTitle = document.createElement("h3");
  let similarProductTitle = document.createElement("h3");
  let similarProductImg = document.createElement("img");
  let similarProductPrice = document.createElement("p");
  let similarProductTextBlock = document.createElement("div");

  //giving elements classes
  itemPage.className = "item-page";
  itemName.className = "item-name";
  itemControls.className = "page-controls";
  itemControlsShare.className = "controls-share";
  itemControlsShareIcons.className = "controls-share-icons";
  itemImg.className = "page-img";
  similarProductTextBlock.className = "product-text";

  similarProduct.className = "similar-product";
  similarProductTextBlock.className = "product-text-block";
  similarProductBlockTitle.className = "product-title";

  //putting img sources
  itemImg.src = item.innerHTML.split("src=")[1].split('"')[1];
  itemControlsShareIconsImg1.src = "./img/ico/dribbble-dark.webp";
  itemControlsShareIconsImg2.src = "./img/ico/inst-dark.webp";
  itemControlsShareIconsImg3.src = "./img/ico/twitter-dark.webp";

  //putting info to similar product block
  similarProduct.appendChild(similarProductBlockTitle);
  similarProduct.appendChild(similarProductImg);
  similarProductTextBlock.appendChild(similarProductTitle);
  similarProductTextBlock.appendChild(similarProductPrice);
  similarProduct.appendChild(similarProductTextBlock);

  console.log(item.children);

  //putting text
  if (!fromSimilar) {
    itemName.innerText = item.children[1].innerText;
    itemDesc.innerText = state.items.find(
      (item) => item.name === itemName.innerText
    ).description;
    itemPrice.innerText = item.children[2].innerText;
  } else {
    itemName.innerText = item.children[2].children[0].innerText;
    itemDesc.innerText = state.items.find(
      (el) => el.name === itemName.innerText
    ).description;
    itemPrice.innerText = item.children[2].children[1].innerText;
    console.log(
      itemName.innerText,
      itemDesc.innerText,
      itemPrice.innerText,
      itemImg.src
    );
  }

  //similart product
  let product = state.items[Math.floor(Math.random() * state.items.length)];
  similarProductImg.src = product.image;
  similarProductTitle.innerText = product.name;
  similarProductPrice.innerText = product.price + " $";
  similarProductBlockTitle.innerText = "Similar product";

  while (similarProductTitle.innerText === itemName.innerText) {
    product = state.items[Math.floor(Math.random() * state.items.length)];
    similarProductImg.src = product.image;
    similarProductTitle.innerText = product.name;
    similarProductPrice.innerText = product.price + " $";
  }

  itemControlsText.innerText = "Share on";

  //putting elements to the page
  itemControlsShare.appendChild(itemControlsText);
  itemControlsShareIcons.appendChild(itemControlsShareIconsImg1);
  itemControlsShareIcons.appendChild(itemControlsShareIconsImg2);
  itemControlsShareIcons.appendChild(itemControlsShareIconsImg3);
  itemControlsShare.appendChild(itemControlsShareIcons);
  itemControls.appendChild(itemName);
  itemControls.appendChild(itemDesc);
  itemControls.appendChild(itemPrice);
  itemControls.appendChild(itemControlsShare);
  itemControls.appendChild(similarProduct);
  itemPage.appendChild(itemImg);
  itemPage.appendChild(itemControls);
  document.body.prepend(itemPage);

  console.log(document.body);

  document.querySelector(".similar-product").onclick = handleSimilarProduct;
}

function router(items = shopItems, deleteBlock = 0) {
  //geting all elements from the main page
  let main = document.getElementsByTagName("main")[0];
  let home = document.querySelector(".home");
  let footer = document.getElementsByTagName("footer")[0];

  Array.from(items).forEach(
    (item, arr) =>
      (item.onclick = () => {
        history.pushState(
          null,
          null,
          `item-${item.children[1].outerText.toLowerCase().replace(/\s/g, "")}`
        );
        pageChange(item);
        console.log(item, arr);
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
      deleteBlock === 1
        ? document.querySelector(".search-result").remove()
        : console.log(deleteBlock);
    } else {
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

  return 0;
}

router(document.querySelectorAll(".shop-item"));

const filterPrice = (arr) => {
  document.querySelectorAll(".shop-item").forEach((item) => {
    item.remove();
  });

  pushItems(arr, shop, 0);
  router(document.querySelectorAll(".shop-item"));
};

const filterItems = () => {
  let arr = [];
  if (state.priceFilter === "HL") {
    arr = state.items.sort((a, b) => b.price - a.price);
  } else if (state.priceFilter === "LH") {
    arr = state.items.sort((a, b) => a.price - b.price);
  }

  filterPrice(arr);
};

getPriceFilter = (e) => {
  state.priceFilter = e.target.value;
  filterItems();
};

let categoryPrice = document.querySelector(".category-price");
categoryPrice.onchange = getPriceFilter;

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
  console.log("lsds");
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
