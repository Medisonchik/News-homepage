const navElement = document.querySelector("nav");
const hamburgerMenuElement = document.querySelector("#hamburger-menu");
const bodyElement = document.querySelector("body");
const closeIconElement = document.querySelector(".icon-menu-close")

hamburgerMenuElement.addEventListener("click", () => {
    navElement.classList.add("open");
    closeIconElement.style.display = "block"; 
    bodyElement.classList.toggle('menu-open');
})

closeIconElement.addEventListener("click", () => {
    navElement.classList.remove("open");
    closeIconElement.style.display = "none"; 
    bodyElement.classList.remove('menu-open');
})