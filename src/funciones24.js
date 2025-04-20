export function obtenerColorAleatorio() {
    const colores = ["#f44336", "#2196F3", "#4CAF50", "#FFEB3B", "#FF9800", "#9C27B0"];
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
  }
  