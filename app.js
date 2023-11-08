function eliminarDuplicados(matriz) {
    // Utiliza un Set para almacenar elementos únicos
    const setDeElementosUnicos = new Set(matriz);
  
    // Convierte el Set de nuevo en una matriz
    const matrizSinDuplicados = Array.from(setDeElementosUnicos);
  
    return matrizSinDuplicados;
  }
  
  
  const matriz = ["Sofia", "Maria", "Pedro", "Sofia"];
  const matrizSinDuplicados = eliminarDuplicados(matriz);
  console.log(matrizSinDuplicados);
  