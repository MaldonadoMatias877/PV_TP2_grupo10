import { obtenerYMostrarDatos } from './funciones.js';


document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#mostrarDatos");

  if (boton) {
    boton.addEventListener("click", obtenerYMostrarDatos);
  } else {
    console.error("No se encontró el botón con id 'mostrarDatos'");
  }
});