// Esperamos a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleccionamos todos los radio buttons
    const radios = document.querySelectorAll('input[name="lenguaje"]');
  
    // 2. Seleccionamos el elemento donde mostraremos el resultado
    const parrafo = document.getElementById("opcion");
  
    // 3. Recorremos los radios y les agregamos un listener al evento 'change'
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        // 4. Cuando cambia, mostramos el valor seleccionado:
        const valorSeleccionado = radio.value;
  
        // Mostrar en el <p>
        parrafo.textContent = `La opción que elegiste es: ${valorSeleccionado}`;
  
        // Mostrar en consola
        console.log(`Opción seleccionada: ${valorSeleccionado}`);
      });
    });
  });
  