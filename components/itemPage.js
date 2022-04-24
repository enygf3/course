const itemPage = (name, price, img, desc) => {
    return `
        <div class="item-page">
        <img src = "${img}">
            <div class = "page-controls">
                <h3>${name}</h3>
                <p>${desc}</p>
                <button>${price}$</button>
                <div class = "controls-share">
                    <p>Share on</p>
                    <div class = "controls-share-icons">
                        <img src = "../img/ico/dribbble.webp">
                        <img src = "../img/ico/inst.webp">
                        <img src = "../img/ico/twitter.webp">
                    </div>
                </div>
            </div>
        </div>
    `;
}