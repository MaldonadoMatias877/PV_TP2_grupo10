export function activarInputListener() {
    const entrada = document.getElementById("textoEntrada");

    const salida = document.getElementById("textoSalida");

    entrada.addEventListener("input", () => {
        salida.textContent = entrada.value;
    });
}