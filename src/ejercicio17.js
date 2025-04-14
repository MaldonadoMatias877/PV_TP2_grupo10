//Escribir una función llamada contarLetraA que reciba un string y retorne el número de
//veces que aparece la letra "a"
let palabra = prompt("Ingrese una palabra: ");
function contarLetra(palabra) {
   let contador = 0;
    for ( let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "a") {
            contador++;
        }
    }
    if (contador === 1 ) {
    console.log("La letra ´a´ aparece: " +contador+ " vez en la palabra: " +palabra);
    } else {
    console.log("La letra ´a´ aparece: " +contador+ " veces en la palabra: " +palabra);
    }
    return contador;
}
let cant = contarLetra(palabra);
