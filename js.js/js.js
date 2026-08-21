const cardslid = document.getElementById("cars-slid-section-two");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let index = 0;
const totalCards = document.querySelectorAll(".car-slide").length;
const showCards = 4;
const maxIndex = totalCards - showCards;
nextBtn.addEventListener("click", function () {
    if (index < maxIndex) {
        index++;
        cardslid.style.transform =
            `translateX(-${index * 25}%)`;
    }
});
prevBtn.addEventListener("click", function () {
    if (index > 0) {
        index--;
        cardslid.style.transform =
        `translateX(-${index * 25}%)`;
    }
});
