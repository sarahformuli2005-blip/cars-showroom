
// گرفتن موترهای ذخیره‌شده
function getCars() {
    try {
        return JSON.parse(localStorage.getItem("myCars")) || [];
    } catch (error) {
        return [];
    }
}

// ذخیره موترها
function saveCars(cars) {
    localStorage.setItem("myCars", JSON.stringify(cars));
}

// نمایش تعداد قلب‌ها
function showCount() {
    const cars = getCars();

    document.querySelectorAll("#wishlistCount").forEach(function (item) {
        item.textContent = cars.length;
    });
}

// نمایش موترهای مورد علاقه
function showWishlist() {
    const grid = document.getElementById("wishGrid");

    if (!grid) return;

    const cars = getCars();
    grid.innerHTML = "";

    if (cars.length === 0) {
        grid.innerHTML = `
            <div class="empty-wishlist">
                <i class="bi bi-heart"
                   style="font-size: 45px; color: #dc3545;"></i>
                <h3>Wishlist شما خالی است!</h3>
                <p>لطفاً از صفحه موترها، قلب موتر مورد علاقه‌ات را کلیک کن.</p>
                <a href="./cars.html" class="btn btn-danger">
                    دیدن موترها
                </a>
            </div>
        `;
        showCount();
        return;
    }

    cars.forEach(function (car) {
        const card = document.createElement("div");
        card.className = "inventory-card";

        const image = document.createElement("img");
        image.src = car.image || car.img || "";
        image.alt = car.name || car.title || "Car";
        image.style.cssText =
            "width:100%; height:200px; object-fit:cover;";

        const name = document.createElement("h3");
        name.textContent = car.name || car.title || "Car";

        const price = document.createElement("p");
        price.textContent =
            "$" + Number(car.price || 0).toLocaleString();

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-car btn btn-danger";
        removeBtn.textContent = "Remove from Wishlist";
        removeBtn.dataset.id = car.id;

        card.append(image, name, price, removeBtn);
        grid.appendChild(card);
    });

    showCount();
}

// حذف موتر از Wishlist
document.addEventListener("click", function (event) {
    const button = event.target.closest(".remove-car");

    if (!button) return;

    const id = button.dataset.id;

    const cars = getCars().filter(function (car) {
        return String(car.id) !== String(id);
    });

    saveCars(cars);
    showWishlist();
});

// اجرای کد هنگام باز شدن صفحه
document.addEventListener("DOMContentLoaded", function () {
    showWishlist();
    showCount();
});
