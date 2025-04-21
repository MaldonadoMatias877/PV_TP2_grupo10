function sumarRango(inicio, fin) {
    if (inicio > fin) {
      return "El número inicial debe ser menor o igual que el número final.";
    }
  
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }
  
    return suma;
  }
  const resultado = sumarRango(1, 5);
console.log("La suma del rango es:", resultado); // Debería mostrar 15