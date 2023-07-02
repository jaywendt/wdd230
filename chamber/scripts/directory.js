const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const display = document.querySelector("article");

grid.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

list.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}