console.log("ShopEase Loaded Successfully");

// Get elements
const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const clearCartBtn = document.getElementById("clearCartBtn");
const searchBox = document.getElementById("searchBox");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ===========================
   PRODUCTS PAGE
=========================== */

if (productGrid) {

    fetch("/products")
        .then(response => response.json())
        .then(products => {

            showProducts(products);

            if (searchBox) {

                searchBox.addEventListener("keyup", function () {

                    const keyword = searchBox.value.toLowerCase();

                    const filtered = products.filter(product =>
                        product.name.toLowerCase().includes(keyword)
                    );

                    showProducts(filtered);

                });

            }

        })
        .catch(error => console.log(error));

}

function showProducts(products) {

    productGrid.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML =
        `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="price">$${product.price}</p>

            <button class="buy-btn">
                Add to Cart
            </button>
        `;

        const button = card.querySelector(".buy-btn");

        button.addEventListener("click", function () {

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(product.name + " added to cart!");

        });

        productGrid.appendChild(card);

    });

}
if (cartItems) {
    loadCart();
}
function loadCart() {
    cartItems.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
        cartItems.innerHTML = "<h2>Your cart is empty.</h2>";
        if (totalPrice) {
            totalPrice.innerHTML = "Total: $0";
        }
        return;
    }
    cart.forEach((item, index) => {
        total += item.price;
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML =
        `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">$${item.price}</p>
            <button class="buy-btn remove-btn">
                Remove
            </button>
        `;
        card.querySelector(".remove-btn").addEventListener("click", function () {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        });
        cartItems.appendChild(card);
    });
    if (totalPrice) {
        totalPrice.innerHTML = "Total: $" + total;
    }
}
if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
        cart = [];
        localStorage.removeItem("cart");
        loadCart();
    });

}