const listitem = document.querySelectorAll("a");
const dream = document.querySelectorAll("span");
const paragrapshs = document.querySelectorAll(".description p");


listitem.forEach((item, index) => {

    item.style.animation = `moveup 2s ease-in-out forwards ${index / 7}s `;

    item.addEventListener("animationend", () => {
        paragrapshs.forEach((item, index) => {
            item.style.animation = `moveup 1s ease-in-out forwards ${index / 10}s`;
        })
        dream.style.animation = "moveleft 0.5s ease-in-out forwards"
    })

})