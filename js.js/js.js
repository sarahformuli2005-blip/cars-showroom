

const btncar = document.getElementById("btncar");
btncar.addEventListener("click", function () {
    window.location.href = "cars.html"
});
const btnaboutus = document.getElementById("btnaboutus");
btnaboutus.addEventListener("click", function() {
    window.location.href = "van.html"
});
const products = [
    {
        id: 1,
        name: "Lamborghini Revuelto 2026",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/1 (2).jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },

    {
        id: 2,
        name: "Lamborghini Terzo 2026",
        category: "Lamborghini",
        price: 2300400,
        oldprice: 2600400,
        discount: 14,
        image: "../img/d48b5c3460cf51fffe6f143b7924ef94.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },


    {
        id: 3,
        name: "Lamborghini Revuelto SV 2026",
        category: "Lamborghini",
        price: 1500800,
        oldprice: 1700800,
        discount: 13,
        image: "../img/revuelto.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },

    {
        id: 4,
        name: "Lamborghini Aventador 2025",
        category: "Lamborghini",
        price: 1900800,
        oldprice: 2700800,
        discount: 13,
        image: "../img/lambor.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },

    {
        id: 5,
        name: "Lamborghini Urus 2026",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/urus2.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },

    {
        id: 6,
        name: "Lamborghini Countach 2024",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/ee3a0ae67a7a4f190fc1cafe3f9b760b.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },

    {
        id: 7,
        name: "Lamborghini Diablo 2022",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/0416783f4db7c9b8c7db296ddda1e9bf.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 8,
        name: "Lamborghini Murcielago 2026",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/murcil.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 9,
        name: "Lamborghini Gallardo 2010",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/Zu Verkaufen_ Porsche 991_2 Speedster 2019 - elferspot.com",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 10,
        name: "Lamborghini Reventon 2007",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/34936201041fb5721920136ee13ce924.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 11,
        name: "Lamborghini Soian FKP 37 2026",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/sian37.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 12,
        name: "Lamborghini Revuelto 2026",
        category: "Lamborghini",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/revuelto.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 13,
        name: "Ferrari SF90 Stradale 2021 ",
        category: "Ferrari ",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/98bd52f9a73d29e7a9fd0e669e5ee8d5.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 14,
        name: "Ferrari  296 GTB 2021",
        category: "Ferrari ",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/Ferrari 296 GTB.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    }]
const cartslid = document.getElementById("cartslid");
const cartbutton = document.getElementById("cartButton");
const cartcount = document.getElementById("cartCount");

let cart = [];
let index = 0;

function displayproductds(productList) {
    if (!cartslid) return;

    cartslid.innerHTML = "";

    productList.forEach(function (product) {
        const slide = document.createElement("div");
        slide.className = "featured-slide";

        slide.innerHTML = `
            <div class="card-section-two">
                <div class="featured-image-wrap">
                    <span class="discount">${product.discount}% OFF</span>
                    <button type="button" class="favorite-btn" aria-label="Add to favorites"> <i class="bi bi-heart"></i> </button>
                    <img
                        class="product-img"
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >
                </div>

                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>

                    <div class="price">
                        $${Number(product.price).toLocaleString()}
                        <span class="old-price">
                            $${Number(product.oldprice).toLocaleString()}
                        </span>
                    </div>

                    <button
                        type="button"
                        class="add-cart"
                        onclick="addTocart(${product.id})"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        `;

        const image = slide.querySelector(".product-img");
        image.addEventListener("error", function () {
            this.alt = "Image not found: " + product.name;
        });

        cartslid.appendChild(slide);
    });
}
function visibleCount() {
    if (window.innerWidth <= 480) {
        return 1;
    } else if (window.innerWidth <= 991) {
        return 2;
    } else {
        return 4;
    }
}
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function moveSlidercar() {
    let slides = document.getElementsByClassName("featured-slide");
    let visible = visibleCount();
    let maxIndex = slides.length - visible;

    if (maxIndex < 0) {
        maxIndex = 0;
    }

    if (index > maxIndex) {
        index = maxIndex;
    }

    if (slides.length > 0) {
        let cardWidth = slides[0].offsetWidth;
        let gap = 20;

        cartslid.style.transform =
            "translateX(-" + index * (cardWidth + gap) + "px)";
    }
}
nextBtn.addEventListener("click", function () {
    let slides = document.getElementsByClassName("featured-slide");
    let maxIndex = slides.length - visibleCount();

    if (maxIndex < 0) {
        maxIndex = 0;
    }

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }

    moveSlidercar();
});

prevBtn.addEventListener("click", function () {
    let slides = document.getElementsByClassName("featured-slide");
    let maxIndex = slides.length - visibleCount();

    if (maxIndex < 0) {
        maxIndex = 0;
    }

    if (index > 0) {
        index--;
    } else {
        index = maxIndex;
    }
    moveSlidercar();
});
window.addEventListener("resize", function () {
    moveSlidercar();
});

displayproductds(products);
moveSlidercar();
function addTocart(productId) {
     if(!requireLogin()){
        return
    }
    let selectedProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            selectedProduct = products[i];
            break;
        }
    }
    if (selectedProduct === null) return;
    let foundIndex = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {

        cart[foundIndex].quantity = cart[foundIndex].quantity + 1;
    } else {
        let newItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            quantity: 1
        };
        cart.push(newItem);
    }
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartDisplay();


}
function changeQuantity(productId, action) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            if (action === 'plus') {
                cart[i].quantity = cart[i].quantity + 1;
            } else if (action === 'minus') {
                if (cart[i].quantity > 1) {
                    cart[i].quantity = cart[i].quantity - 1;
                }
            }
            break;
        }
    }
    localStorage.setItem("myCart", JSON.stringify(cart));
    updateCartDisplay();
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("myCart", JSON.stringify(cart));
    updateCartDisplay();
}
function updateCartDisplay() {
    let cartBox = document.getElementById("cartBox");
    let cartTotal = document.getElementById("cartTotal");
    cartcount.textContent = cart.length;

    if (!cartBox) return;
    cartBox.innerHTML = "";

    if (cart.length === 0) {
        cartBox.innerHTML = "<p>سبد خرید شما خالی است.</p>";
        if (cartTotal) {
            cartTotal.textContent = "$0";
        }
        return;
    }

    let totalPrice = 0;


    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotalPrice = item.price * item.quantity;
        totalPrice = totalPrice + itemTotalPrice;


        let productDiv = document.createElement("div");
        productDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border:none; padding-bottom: 10px;";

        productDiv.innerHTML = `
            <div class="cart-line container" style="display: flex; flex:row; align-items: center;">
            <div class=" col-lg-3">
                <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="col-lg-4">
                    <h4 style="margin: 0;">${item.name}</h4>
                    <p style="margin: 5px 0 0 0; color: gray;">$${item.price}  <br>$${itemTotalPrice}</p>
                </div>
                <div class="col-lg-4 d-flex flex-row flex-nowrap">
                 <button class="p-mbutton" onclick="changeQuantity(${item.id}, 'plus')" style="padding: 2px 8px; cursor: pointer;">+</button>
                <span class="mt-3" style="margin: 0 8px;">${item.quantity}</span>
                <button class="p-mbutton" onclick="changeQuantity(${item.id}, 'minus')" style="padding: 2px 8px; cursor: pointer ">-</button>
                <button class="btn-ghost mx-3" onclick="removeItem(${item.id})" >Remove</button>
                </div>
            </div>
          
        `;

        cartBox.appendChild(productDiv);
    }

    if (cartTotal) {
        cartTotal.textContent = "$" + totalPrice.toLocaleString();
    }
}
window.onload = function () {
    let savedCart = localStorage.getItem('myCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
};
displayproductds(products);