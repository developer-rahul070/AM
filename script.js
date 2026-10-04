// ===============================
// MINYA SHOP - JAVASCRIPT
// ===============================


// ===============================
// CART SYSTEM
// ===============================

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartCounter.textContent = cartCount;

        // Button change
        button.textContent = "✓ Added to Cart";

        button.style.background = "#90ee90";

        // Back to normal
        setTimeout(function() {

            button.textContent = "Add to Cart";

            button.style.background = "";

        }, 1200);

    });

});


// ===============================
// SEARCH SYSTEM
// ===============================

const searchInput = document.querySelector(".search-box input");

const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    productCards.forEach(function(card) {

        const productName =
            card.querySelector("h3");

        if (!productName) return;

        const name =
            productName.textContent.toLowerCase();

        if (name.includes(searchText)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});


// ===============================
// SEARCH BUTTON
// ===============================

const searchButton =
    document.querySelector(".search-box button");

searchButton.addEventListener("click", function() {

    const value =
        searchInput.value.trim();

    if (value === "") {

        alert("Please type something to search.");

        searchInput.focus();

        return;

    }

    searchInput.focus();

});


// ===============================
// SHOP NOW BUTTON
// ===============================

const shopButton =
    document.querySelector(".shop-btn");

shopButton.addEventListener("click", function() {

    document
        .getElementById("deals")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ===============================
// CATEGORY CLICK
// ===============================

const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const category =
            card.querySelector("h3").textContent;

        if (category === "Electronics") {

            document
                .getElementById("electronics")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

        else if (category === "Fashion") {

            document
                .getElementById("fashion")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

        else {

            alert(
                category +
                " products will be available soon!"
            );

        }

    });

});


// ===============================
// CART CLICK
// ===============================

const cart =
    document.querySelector(".cart");

cart.addEventListener("click", function() {

    if (cartCount === 0) {

        alert("Your cart is empty.");

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }

});


// ===============================
// ACCOUNT CLICK
// ===============================

const account =
    document.querySelector(".account");

account.addEventListener("click", function() {

    alert(
        "Login / Sign Up feature coming soon!"
    );

});


// ===============================
// ORDERS CLICK
// ===============================

const orders =
    document.querySelector(".orders");

orders.addEventListener("click", function() {

    alert(
        "Please login to see your orders."
    );

});


// ===============================
// NAVBAR ACTIVE EFFECT
// ===============================

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ===============================
// PAGE LOAD MESSAGE
// ===============================

console.log(
    "MINYA SHOP is ready!"
);