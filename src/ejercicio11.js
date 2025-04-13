
const kilometros = parseFloat(prompt("Ingresa el número de kilómetros recorridos:"));
const litros = parseFloat(prompt("Ingresa el número de litros de combustible consumidos:"));


if (!isNaN(kilometros) && !isNaN(litros) && kilometros > 0) {
  const consumo = litros / kilometros;
  console.log("El consumo de combustible por kilómetro es:", consumo.toFixed(2), "litros/km");
} else {
  console.log("Por favor ingresa valores válidos.");
}