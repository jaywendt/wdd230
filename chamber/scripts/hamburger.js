const hamburgerElement = document.querySelector("#hamburger");
const navElement = document.querySelector(".navLink");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle('open');
})