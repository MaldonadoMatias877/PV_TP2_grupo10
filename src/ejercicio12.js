// Función flecha para verificar si el número es par o impar
const verificarPar = () => {
    let numero = prompt("Ingresá un número:");434
  
    if (!isNaN(numero)) {
      if (numero % 2 === 0) {
        alert("El número es par");
      } else {
        alert("El número es impar");
      }
    } else {
      alert("Eso no es un número válido");
    }
  };
  
  // Ejecutamos la función
  verificarPar();
  