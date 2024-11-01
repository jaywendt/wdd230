const visitDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = 'Welcome to my home page!';
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);