export function obtenerYMostrarDatos() {
    const nombre = document.querySelector("#nombre").value.trim();
    const apellido = document.querySelector("#apellido").value.trim();
    const libreta = document.querySelector("#libreta").value.trim();
  
    if (nombre && apellido && libreta) {
      alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
    } else {
      alert("Por favor, completá todos los campos.");
    }
  }