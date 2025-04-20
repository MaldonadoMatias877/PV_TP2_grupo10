export function cambioDeTexto() {
    const boton = document.getElementById("boton");

    const parrafo = document.getElementById("textOriginal");

    boton.addEventListener("click", () => {
        parrafo.textContent = "Se ha cambiado el parrafo mediante una funcion en javascript."
    });
}