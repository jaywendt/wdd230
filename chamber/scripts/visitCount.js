const visitsDisplay = document.querySelector(".visits")

let numVisits = Number(windo.localStorage.getItem("numVisits-1s")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits
} else {
    visitsDisplay.textContent = 'Welcome to my page!'
}

numVisits++;

localStorage.setItem("numVisits-1s", numVisits);