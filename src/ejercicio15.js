// ejercicio15.js - Función para retornar el mes
const retornarMes = (numero) => {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    if (numero >= 1 && numero <= 12) {
        alert(`El mes es: ${meses[numero - 1]}`);
    } else {
        alert("No es un mes válido");
    }
};

const numero = parseInt(prompt("Ingresa un número del 1 al 12:"));
retornarMes(numero);