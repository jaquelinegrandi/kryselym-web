/*======================================
        MOBILE MENU
======================================*/

const menuToggle = document.getElementById("open-menu");
const closeMenu = document.querySelector(".close-menu");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.add("visible");

    menuToggle.classList.add("hide");

});

closeMenu.addEventListener("click", () => {

    navbar.classList.remove("visible");

    menuToggle.classList.remove("hide");

});


/* Close menu when clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("visible");

        menuToggle.classList.remove("hide");

    });

});


/* Prevent resize glitch */

window.addEventListener("resize", () => {

    if(window.innerWidth > 991){

        navbar.classList.remove("visible");

        menuToggle.classList.remove("hide");

    }

});


/*======================================
        BOOKS SLIDER
======================================*/

const track = document.querySelector(".books-track");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

if(track && prevBtn && nextBtn){

    const scrollAmount = 320;

    nextBtn.addEventListener("click", () => {

        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

    prevBtn.addEventListener("click", () => {

        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

}