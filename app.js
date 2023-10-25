const form = document.querySelector("form");
const ujElem = document.querySelector("#uj-elem");
const lista = document.querySelector("#lista");

function letrehoz(mit) {
    lista.innerHTML += '<div class="lista-elem">' +
                         ' <button onclick="torol(this)">&#10006;</button> ' +
                         ' <button onclick="szerkeszt(this)">&#9998;</button> ' +
                         mit + 
                       '</div>'
    ment();
}

form.onsubmit = function(e) {
    e.preventDefault();
    if (!ujElem.value) {
        return; 
    }
    letrehoz(ujElem.value);
    ujElem.value = "";
    ujElem.focus();
}

function torol(mit) {
    mit.parentElement.remove();
    ujElem.focus();
    ment();
}

function szerkeszt(mit) {
    ujElem.value = mit.parentElement.innerText.substring(4);
    torol(mit);
}

function ment() {
    localStorage.bevasarlolista = lista.innerHTML;
}

function betolt() {
    lista.innerHTML = localStorage.bevasarlolista || '';
}

betolt();