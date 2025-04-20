import { textoActualizado } from "./archivoAuxiliar21.js";

const entrada = document.getElementById("entradaTexto");

entrada.addEventListener("input", () => {
    textoActualizado(entrada.value);
});