const password = document.querySelector("#password");
const repeat = document.querySelector("#repeat");
const fb = document.querySelector("#feedback");

repeat.addEventListener('focusout',controlar)

function controlar() {
    console.log('Inside the function')
    if (password.value !== repeat.value) {
        password.value=''
        repeat.value=''
        password.focus()
        fb.textContent = 'Passwords do not match.  Please try again'
    } else {
        fb.textContent = ''
    }
}