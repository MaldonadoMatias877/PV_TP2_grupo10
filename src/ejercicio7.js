const nombres = ["Ana", "Francisco", "Beatriz", "Luis", "Carmen", "Alejandro"];

const obtenerNombreMasLargo = (arr) => {
  let nombreMasLargo = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > nombreMasLargo.length) {
      nombreMasLargo = arr[i];
    }
  }
  return nombreMasLargo;
};

console.log("El nombre más largo es:", obtenerNombreMasLargo(nombres));