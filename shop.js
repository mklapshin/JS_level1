function init() {
    const div = document.getElementById("div");
    const code = document.getElementById("code");

    let totalPrice = 0;
    let newTotalPrice = document.createElement("div");

    item1.addEventListener('click', function (event) {
        totalPrice = totalPrice + 40;
        let item = document.createElement("div");
        item.innerHTML = "<p>Молоко 40 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item2.addEventListener('click', function (event) {
        totalPrice = totalPrice + 20;
        let item = document.createElement("div");
        item.innerHTML = "<p>Хлеб 20 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item3.addEventListener('click', function (event) {
        totalPrice = totalPrice + 15;
        let item = document.createElement("div");
        item.innerHTML = "<p>Вода 15 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

}


window.addEventListener('load', init);
