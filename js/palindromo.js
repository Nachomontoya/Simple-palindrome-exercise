let result;
let palabra;
let palabraDividida;
let resultOk;
let resultFail; 
let palabraLow
let palabraNoEspaces

result = document.querySelector("#result")

result.innerText = ""

function identificaPalindromo(evento) {
    evento.preventDefault();

    palabra = document.querySelector("#text-to-analize").value;

    palabraNoEspaces = palabra.replace(/ /g, "")

    palabraLow = palabraNoEspaces.toLowerCase();

    palabraDividida = palabraLow.split([]);

    let i = 0;
    let j = palabraDividida.length - 1;

    while (i < palabraDividida.length - 1 && j > i) {
        if (palabraDividida[i] != palabraDividida[j]) {
            resultOk = document.querySelector("#result")
            resultOk.innerText = "No, " + palabra + " it's not a palindrome. Try another one"
            return
        }
        i++
        j--
    }
    resultFail = document.querySelector("#result")
    resultFail.innerText = "Sure!, " + palabra + " it's a palindrome"
}

let formulario = document.querySelector("#check")
formulario.addEventListener("submit", identificaPalindromo);







