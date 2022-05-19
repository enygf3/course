(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var r=o.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;const t={items:[{id:1,name:"iPhone 11",price:70,quantity:1,image:"./item1.webp",tag:"iphone",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:2,name:"MacBook Air",price:150,quantity:1,image:"./item2.webp",tag:"macbook",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:3,name:"iPad Pro",price:110,quantity:1,image:"./item3.webp",tag:"ipad",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:4,name:"Apple Watch",price:60,quantity:1,image:"./item4.webp",tag:"watch",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:5,name:"Apple Watch 3",price:40,quantity:1,image:"./item5.webp",tag:"watch",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:6,name:"AirPods Pro",price:35,quantity:1,image:"./item6.webp",tag:"airpods",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:7,name:"iMac Pro",price:200,quantity:1,image:"./item7.webp",tag:"mac",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:8,name:"iPhone 13 Pro Max",price:130,quantity:1,image:"./item8.webp",tag:"iphone",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:9,name:"AirPods 2",price:35,quantity:1,image:"./item9.webp",tag:"airpods",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "},{id:10,name:"iMac 2021 24”",price:240,quantity:1,image:"./item10.webp",tag:"mac",description:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. "}],category:"all",priceFilter:"HL"},o=!(location.href.includes("about")||location.href.includes("contact")),r=document.querySelector(".shop-items");function i(e,t,o=1){e.sort(((e,t)=>o?t.price-e.price:0)).forEach((e=>{const o=document.createElement("div");o.classList.add("shop-item"),o.id=e.tag,o.innerHTML=`\n      <img src="${e.image}" alt="${e.name}">\n      <h3>${e.name}</h3>\n      <p>${e.price} $</p>\n    `,t.appendChild(o)}))}const n=document.querySelectorAll(".category"),c=e=>"all"===e?t.items:t.items.filter((t=>t.tag===e));o&&function(e,t){e.forEach((o=>{o.onclick=o=>{t.category=(e=>e.target.innerText.toLowerCase())(o),document.querySelectorAll(".shop-item").forEach((e=>{e.remove()})),i("LH"===t.priceFilter?c(t.category).sort(((e,t)=>e.price-t.price)):c(t.category).sort(((e,t)=>t.price-e.price)),r,0),m(document.querySelectorAll(".shop-item")),Array.from(e).find((e=>e.classList.contains("active"))).classList.remove("active"),o.target.className="category active"}}))}(n,t),o&&i(t.items,r),document.querySelectorAll(".shop-item");const s=e=>{p(e.target.parentNode,1)},a=()=>{document.querySelector(".order").remove(),document.querySelector(".item-page").style.opacity="1"},l=e=>{let t=document.createElement("div");t.className="order",t.innerHTML=`\n  <div class = "order-block">\n    <img class = "block-close" src = './xmark.webp' alt = 'close order block' width = '15' height = '20'>\n      <img src = './success.webp' width = '80' height = '80' alt = 'payment was success'>\n      <div class = "block-text">\n        <p>Product: ${document.querySelector(".item-name").innerText}</p>\n        <p>Payment processed!</p>\n        <p>Thank you!</p>\n      </div>\n  </div>`,document.body.appendChild(t),document.querySelector(".item-page").style.opacity="0.6",document.querySelector(".block-close").onclick=a};function p(e,o=0){document.querySelector(".item-page")&&document.querySelector(".item-page").remove();let r=document.createElement("div");r.className="item-page";let i=o?e.children[2].children[0].innerText:e.children[1].innerText,n=t.items[Math.floor(Math.random()*t.items.length)];for(;n.name===i;)n=t.items[Math.floor(Math.random()*t.items.length)];r.innerHTML=`\n  <img class = 'page-img' src = '${e.innerHTML.split("src=")[1].split('"')[1]}' width = '400' height = '380'>\n  <div class = 'page-controls'>\n    <div class = 'product-info'>\n      <h3 class = 'item-name'>${i}</h3>\n      <p>${o?t.items.find((e=>e.name===i)).description:t.items.find((e=>e.name===i)).description}</p>\n      <button>${o?e.children[2].children[1].innerText:e.children[2].innerText}</button>\n      <div class = 'controls-share'>\n        <p>Share on</p>\n        <div class = 'controls-share-icons'>\n          <img src="./dribbble-dark.webp">\n          <img src="./inst-dark.webp">\n          <img src="./twitter-dark.webp">\n        </div>\n      </div>\n    </div>\n      <div class = 'similar-product'>\n        <h3 class="product-title">Similar product</h3>\n        <img src = '${n.image}'>\n        <div class = 'product-text-block'>\n          <h3>${n.name}</h3>\n          <p>${n.price}$</p>\n        </div>\n      </div>\n    </div>\n  </div>`,document.body.prepend(r),document.querySelector(".similar-product").onclick=s,document.querySelector(".product-info").children[2].onclick=l}function m(e,t=0){let r=document.getElementsByTagName("main")[0],i=document.querySelector(".home"),n=o?document.getElementsByTagName("footer")[0]:0;function c(e){location.href.includes("item")?(s("home"),a("item",e),1===t&&(document.querySelector(".header-search").value=""),1===t?document.querySelector(".search-result").remove():console.log(t)):(s("item"),a("home"))}function s(e){"home"===e?(r.style.display="none",o&&(n.style.display="none")):document.querySelector(".item-page").remove()}function a(e,t){"home"===e?(r.style.display="block",o&&(n.style.display="flex")):p(t)}return Array.from(e).forEach(((e,t)=>e.onclick=()=>{history.pushState(null,null,`item-${e.children[1].outerText.toLowerCase().replace(/\s/g,"")}`),c(e),console.log(e,t)})),window.onpopstate=()=>{c()},i.onclick=()=>{location.href.includes("github")?history.pushState(null,null,"/course"):history.pushState(null,null,"/"),c()},0}o&&m(document.querySelectorAll(".shop-item"));let d=o?document.querySelector(".category-price"):0;o&&(d.onchange=e=>{t.priceFilter=e.target.value,function(){let e=[],o=[];"HL"===t.priceFilter?e=t.items.sort(((e,t)=>t.price-e.price)):"LH"===t.priceFilter&&(e=t.items.sort(((e,t)=>e.price-t.price))),o="all"===t.category?e:e.filter((e=>e.tag===t.category)),function(e){document.querySelectorAll(".shop-item").forEach((e=>{e.remove()})),i(e,r,0),m(document.querySelectorAll(".shop-item"))}(o)}()});document.querySelector(".header-search").oninput=e=>{let o=[],r=e.target.value.toLowerCase().replace(/\s/g,"");var i;t.items.forEach((e=>{(e.name.toLowerCase().replace(/\s/g,"").includes(r)||e.description.toLowerCase().replace(/\s/g,"").includes(r))&&r.length>=3&&o.push(e)})),r.length>=3?(e=>{if(!document.querySelector(".search-result")){let t=document.createElement("div");t.className="search-result";let o=document.createElement("h3");o.innerText="Search result",t.appendChild(o),document.body.appendChild(t),(e=>{e.forEach((e=>{let t=document.createElement("div"),o=document.createElement("h3"),r=document.createElement("p"),i=document.createElement("img");t.className="search-item",o.innerText=e.name,r.innerText=e.price+"$",i.src=e.image,t.appendChild(i),t.appendChild(o),t.appendChild(r),document.querySelector(".search-result").appendChild(t)}))})(e),m(document.querySelectorAll(".search-item"),1)}})(o):(i=document.querySelector(".search-result"),console.log("lsds"),i&&i.remove())},window.innerWidth,document.querySelector(".header-menu").onclick=e=>{let t=document.createElement("div");t.className="menu-block",t.style.display="none",t.innerHTML="\n    <img class = 'menu-close' src = './img/ico/xmark.webp' width = '30' height = '45'>\n    <div class = 'menu-content'>\n      <p class = 'menu-item'><a href = './index.html'>Home</a></p>\n      <p class = 'menu-item'><a href = './about.html'>About</a></p>\n      <p class = 'menu-item'><a href = './contact.html'>Contact</a></p>\n    </div>\n  ",document.getElementsByTagName("main")[0].appendChild(t);const o=e=>{e.remove()};var r;(r=t).style.display="block",r.style.opacity="0",setTimeout((e=>{e.style.transitionDuration=".5s",e.style.opacity="1"}),100,t),document.querySelector(".menu-close").onclick=()=>{(e=>{e.style.opacity="0"})(t),setTimeout(o,500,t)}}})();