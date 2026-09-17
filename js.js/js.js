const cardslid = document.getElementById("cars-slid-section-two");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let index = 0;
const totalCards = document.querySelectorAll(".car-slide").length;
const showCards =4;
const maxIndex = totalCards - showCards;
nextBtn.addEventListener("click", function () {
    if (index < maxIndex) {
        index++;
    }
    else{
        index=0;
    }
    cardslid.style.transform =
            `translateX(-${index * 25}%)`;
});
prevBtn.addEventListener("click", function () {
    if (index > 0) {
        index--;
        cardslid.style.transform =
        `translateX(-${index * 25}%)`;
    }
    
});
const cardslidvan= document.getElementById("cars-slid-section-van");
const nextBtnvan = document.getElementById("nextBtnvan");
const prevBtnvan = document.getElementById("prevBtnvan");
let index1 = 0;
const totalCardsvan = document.querySelectorAll(".car-slide-van").length;
const showCardsvan =4;
const maxIndexvan = totalCardsvan - showCardsvan;
nextBtnvan.addEventListener("click", function () {
    if (index1 < maxIndexvan) {
        index1++;
    }
    else{
        index1=0;
    }
     cardslidvan.style.transform =
            `translateX(-${index1 * 25}%)`;
});
prevBtnvan.addEventListener("click", function () {
    if (index1 > 0) {
        index1--;
        cardslidvan.style.transform =
        `translateX(-${index1 * 25}%)`;
    }
    
});
