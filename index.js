const body = document.querySelector(".body");
const nav = document.querySelector(".nav");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
    nav.classList.add("nav__visible");
    open.classList.add("menu-hide");
    close.classList.add("close__show");
});

close.addEventListener("click", () => {
    nav.classList.remove("nav__visible");
    open.classList.remove("menu-hide");
    close.classList.remove("close__show");
})

