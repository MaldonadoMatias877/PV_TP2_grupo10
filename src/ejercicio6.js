const edades = [18, 25, 30, 22, 40, 35, 27, 19];

let suma = 0;

for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}

const promedio = suma / edades.length;

console.log("El promedio de las edades es:", promedio);