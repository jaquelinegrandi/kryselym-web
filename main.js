const menu = document.getElementById("navbar");
const open = document.getElementById("open-menu");
const close = document.querySelector(".close-menu");

open.addEventListener("click", () => {
    menu.classList.add("active");
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
});