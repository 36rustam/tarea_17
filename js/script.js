
//condiciones en bucles
//crea una condición que añada en un cadena los número pares y en otra los impares
//muestralos en el documento

let pares = [];
let inpares = [];
let dato = 0;


// button

/* 
let enviar = document.getElementById("endatos");
enviar.addEventListener("click", prob);
function prob(e) {
dato=document.getElementById("dato").value; 

 */

// input
dato = prompt("da me dato");

if (dato / dato === 1) {
    // revisor
    console.log(dato / dato)
    for (let i = 1; i <= dato; i++) {
        let probador = i / 2;
        // revisor
        console.log(probador);
        if (probador > 0 && probador % 1 === 0) {
            pares = pares.concat(i);
        } else if (probador > 0 && probador % 1 !== 0) {
            inpares = inpares.concat(i);
        }
        probador = 0;
    }
} else {
    alert("error con dato");
}

// revisor
console.log("pares " + pares);
console.log("inpares " + inpares);
// outpud
document.getElementById("pares").textContent = pares;
document.getElementById("inpares").textContent = inpares;

// }