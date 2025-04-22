// ejercicio22.js - Mostrar texto en tiempo real y cambiar color
const inputTexto = document.getElementById('inputTexto');
const mostrarTexto = document.getElementById('mostrarTexto');

inputTexto.addEventListener('input', () => {
    const texto = inputTexto.value;
    mostrarTexto.textContent = texto;

    // Cambiar color si el texto supera 20 caracteres
    if (texto.length > 20) {
        mostrarTexto.style.backgroundColor = '#ffcccc'; // Rojo claro
    } else {
        mostrarTexto.style.backgroundColor = ''; // Sin color
    }
});