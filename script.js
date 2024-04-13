const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".abrir-btn");
const hideMenuBtn = navbarMenu.querySelector(".cerrar-btn");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());