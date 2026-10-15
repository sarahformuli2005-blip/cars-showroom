const vanproducts = [
    {
        id: 1,
        name: "Mercedes-Benz V-Class 2026",
        category: "Mercedes-Benz",
        price: 85000,
        oldprice: 92000,
        discount: 7,
        image: "img/Mercedes-Benz V-Class 2026.jpg",
        description: "2026 · 12 miles · V220d Diessel"
    },

    {
        id: 2,
        name: "Mercedes-Benz Sprinter 2026",
        category: "Mercedes-Benz",
        price: 68000,
        oldprice: 74000,
        discount: 8,
        image: "../img/Mercedes-Benz Sprinter 2.jpg",
        description: "2026 · 25 miles · CDI Turbo"
    },


    {
        id: 3,
        name: "Mercedes-Benz Marco Polo 2026",
        category: "Mercedes-Benz",
        price: 95000,
        oldprice: 102000,
        discount: 6,
        image: "../img/Mercedes-Benz Marco Polo.jpg",
        description: "2026 · 5 miles · Comper Hybrid"
    },

    {
        id: 4,
        name: "Mercedes-Benz  EQV 2026",
        category: "Mercedes-Benz",
        price: 89000,
        oldprice: 96000,
        discount: 7,
        image: "../img/Mercedes-Benz EQV 2026.jpg",
        description: "2026 · 8 miles · Full Electric"
    },

    {
        id: 5,
        name: "Mercedes-Benz  Vito Tourer 2025",
        category: "Mercedes-Benz",
        price: 52000,
        oldprice: 57000,
        discount: 9,
        image: "../img/Mercedes-Benz EQV 2026.jpg",
        description: "2025 · 45 miles · CDI Diessel "
    },

    {
        id: 6,
        name: "Mercedes-Benz  Metris 2025",
        category: "Mercedes-Benz ",
        price: 48000,
        oldprice: 53000,
        discount: 10,
        image: "../img/Mercedes-Benz Metris 2025.jpg",
        description: "2025 · 30 miles · Turbo Gosoline"
    },

    {
        id: 7,
        name: "Mercedes-Benz eSprinter 2026",
        category: "Mercedes-Benz",
        price: 74000,
        oldprice: 80000,
        discount: 7,
        image: "../img/Mercedes-Benz eSprinter 202.jpg",
        description: "2026 · 10 miles · Electric Van"
    },
    {
        id: 8,
        name: "Mercedes-Benz  T-Class 2026",
        category: "Mercedes-Benz",
        price: 36000,
        oldprice: 40000,
        discount: 10,
        image: "../img/Mercedes-Benz T-Class 2025.jpg",
        description: "2026 · 18 miles · Compact Family"
    },
    {
        id: 9,
        name: "Ford Transit Custom  2010",
        category: "Ford",
        price: 52000,
        oldprice: 58000,
        discount: 10,
        image: "../img/Ford Transit Custom 2026.jpg",
        description: "2026 · 10 miles · EcoBlue Diesel"
    },
    {
        id: 10,
        name: "Ford Transit Trail 2026",
        category: "Ford",
        price: 74000,
        oldprice: 80000,
        discount: 8,
        image: "../img/Ford Transit Trail 2026.jpg",
        description: "2026 · 14 miles ·AWD Off-Road"
    },
    {
        id: 11,
        name: "Ford Tourneo Connect 2025",
        category: "Ford",
        price: 37000,
        oldprice: 41000,
        discount: 9,
        image: "../img/Ford Tourneo Connect 2025.jpg",
        description: "2025 · 18 miles · family van"
    },
    {
        id: 12,
        name: "Ford Transit Connect 2025",
        category: "Ford",
        price: 34000,
        oldprice: 38000,
        discount: 10,
        image: "../img/Ford Transit Connect 2025.jpg",
        description: "2026 · 22 miles · Compa"
    },
    {
        id: 13,
        name: "Ford Nugget Camper 2026",
        category: "Ford",
        price: 78000,
        oldprice: 85000,
        discount: 8,
        image: "../img/Ford Nugget Camper 2026.jpg",
        description: "2026 · 8 miles · Westalia Camper"
    },
    {
        id: 14,
        name: "Ford Tourneo Custom  2026",
        category: "Ford ",
        price: 55000,
        oldprice: 60000,
        discount: 8,
        image: "../img/Ford Tourneo Custom 2026.jpg",
        description: "2026 · 12 miles · Plug-in  Hybrid"
    },
];
const cartslidvan = document.getElementById("cars-slid-section-van");
const cartbuttonvan = document.getElementById("cartButton");
const cartcountvan = document.getElementById("cartCount");
const nextBtnvan = document.getElementById("nextBtnvan");
const prevBtnvan = document.getElementById("prevBtnvan");

let cartvan = [];
let index1 = 0;

function displayproductds(productList) {
    if (!cartslidvan) return;

    cartslidvan.innerHTML = "";

    productList.forEach(function (product) {
        const slide = document.createElement("div");
        slide.className = "featured-slide";

        slide.innerHTML = `
            <div class="card-section-two">
                <div class="featured-image-wrap">
                    <span class="discount">${product.discount}% OFF</span>
                    <button type="button" class="favorite-btn" aria-label="Add to favorites">
        <i class="bi bi-heart"></i>
    </button>
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
        cartslidvan.appendChild(slide);
    });
    index1 = 0;
    moveSlider();
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
function moveSlider() {
    if (!cartslidvan) return;

    const slides = cartslidvan.querySelectorAll(".featured-slide");

    const maxIndex = Math.max(
        0,
        slides.length - visibleCount()
    );

    index1 = Math.min(index1, maxIndex);

    if (slides.length > 0) {
        const cardWidth = slides[0].getBoundingClientRect().width;
        const gap = 20;

        cartslidvan.style.transform =
            `translateX(-${index1 * (cardWidth + gap)}px)`;
    }
}

if (nextBtnvan) {
    nextBtnvan.addEventListener("click", function () {
        const slides = cartslidvan.querySelectorAll(".featured-slide");
        const maxIndex = Math.max(0, slides.length - visibleCount());

        index1 = index1 < maxIndex ? index1 + 1 : 0;

        moveSlider();
    });
}

if (prevBtnvan) {
    prevBtnvan.addEventListener("click", function () {
        const slides = cartslidvan.querySelectorAll(".featured-slide");
        const maxIndex = Math.max(0, slides.length - visibleCount());

        index1 = index1 > 0 ? index1 - 1 : maxIndex;

        moveSlider();
    });
}
window.addEventListener("resize", moveSlider);
displayproductds(vanproducts);
moveSlider();



function addTocart(productId) {
    if(!requireLogin()){
        return
    }
    let selectedProduct = null;
    for (let i = 0; i < vanproducts.length; i++) {
        if (vanproducts[i].id === productId) {
            selectedProduct = vanproducts[i];
            break;
        }
    }

    if (selectedProduct === null) return;
    let foundIndex = -1;
    for (let i = 0; i < cartvan.length; i++) {
        if (cartvan[i].id === productId) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {

        cartvan[foundIndex].quantity = cartvan[foundIndex].quantity + 1;
    } else {
        let newItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            quantity: 1
        };
        cartvan.push(newItem);
    }
    localStorage.setItem('myCart', JSON.stringify(cartvan));
    updateCartDisplay();


}
function changeQuantity(productId, action) {
    for (let i = 0; i < cartvan.length; i++) {
        if (cartvan[i].id === productId) {
            if (action === 'plus') {
                cartvan[i].quantity = cartvan[i].quantity + 1;
            } else if (action === 'minus') {
                if (cartvan[i].quantity > 1) {
                    cartvan[i].quantity = cartvan[i].quantity - 1;
                }
            }
            break;
        }
    }
    localStorage.setItem("myCart", JSON.stringify(cartvan));
    updateCartDisplay();
    localStorage.setItem('myCart', JSON.stringify(cartvan));
    updateCartDisplay();
}

function removeItem(productId) {
    cartvan = cartvan.filter(item => item.id !== productId);
    localStorage.setItem("myCart", JSON.stringify(cartvan));
    updateCartDisplay();
}
function updateCartDisplay() {
    let cartBox = document.getElementById("cartBox");
    let cartTotal = document.getElementById("cartTotal");
    cartcountvan.textContent = cartvan.length;

    if (!cartBox) return;
    cartBox.innerHTML = "";

    if (cartvan.length === 0) {
        cartBox.innerHTML = "<p>This cart is empty</p>";
        if (cartTotal) {
            cartTotal.textContent = "$0";
        }
        return;
    }

    let totalPrice = 0;


    for (let i = 0; i < cartvan.length; i++) {
        let item = cartvan[i];
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
        cartvan = JSON.parse(savedCart);
        updateCartDisplay();
    }
};
displayproductds(vanproducts);