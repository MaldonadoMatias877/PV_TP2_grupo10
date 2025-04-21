import { obtenerColorAleatorio } from './funciones24.js';

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#cambiarColor");

  boton.addEventListener("click", () => {
    const color = obtenerColorAleatorio();
    document.body.style.backgroundColor = color;
    console.log("Color de fondo cambiado a:", color);
  });
});
