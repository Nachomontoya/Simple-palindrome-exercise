let result;
let palabra;
let palabraDividida;
let resultOk;
let resultFail; 

result = document.querySelector("#result")

result.innerText = ""

function identificaPalindromo(evento) {
    evento.preventDefault();

    palabra = document.querySelector("#text-to-analize").value;

    palabra = palabra.toLowerCase();

    console.log(palabra)
    palabraDividida = palabra.split([]);

    let i = 0;
    let j = palabraDividida.length - 1;

    while (i < palabraDividida.length - 1 && j > i) {
        if (palabraDividida[i] != palabraDividida[j]) {
            resultOk = document.querySelector("#result")
            resultOk.innerText = "No, " + palabra + " no es una palabra palíndroma"
            return
        }
        i++
        j--
    }
    resultFail = document.querySelector("#result")
    resultFail.innerText = "Correcto, la palabra " + palabra + " es un palíndromo"
}

let formulario = document.querySelector("#check")
formulario.addEventListener("submit", identificaPalindromo);







