// Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como
// parámetro e imprima cada elemento en una línea aparte.
let arre = [1, 2, 3, 4, 5];
function mostrarArreglo(arre) {
    for (let i = 0; i < arre.length; i++) {
        console.log(arre[i]);
    }
}
const arreglo = mostrarArreglo(arre);
console.log("Numeros:"+arreglo);