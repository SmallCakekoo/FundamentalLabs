function contarMultiplosDe3() {
  let count = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }
  console.log("Hay", count, "números entre 1 y 50 que son múltiplos de 3.");
}

console.log("-----------------------------------")
console.log("EJERCICIO 4")
console.log("-----------------------------------")
contarMultiplosDe3()
// TODO: Contar cuántos números entre 1 y 50 son múltiplos de 3.