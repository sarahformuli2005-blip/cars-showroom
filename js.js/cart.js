const cartBox = document.getElementById("cartBox");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartBox.innerHTML = "";

    if (cart.length === 0) {
        cartBox.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some cars to your cart.</p>
            </div>
        `;

        cartTotal.textContent = "$0";
        return;
    }

    let total = 0;

    cart.forEach((product, index) => {
        const productTotal = product.price * product.quantity;
        total += productTotal;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img 
                src="${product.image}" 
                alt="${product.name}"
                class="cart-image"
            >

            <div class="cart-info">
                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <strong>$${product.price.toLocaleString()}</strong>

                <div class="quantity-box">
                    <button onclick="decreaseQuantity(${index})">−</button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQuantity(${index})">+</button>
                </div>

                <p>
                    Total: 
                    <strong>$${productTotal.toLocaleString()}</strong>
                </p>

                <button 
                    class="remove-btn" 
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>
            </div>
        `;

        cartBox.appendChild(cartItem);
    });

    cartTotal.textContent = `$${total.toLocaleString()}`;
}
function increaseQuantity(index) {
    cart[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
function removeFromCart(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
displayCart();