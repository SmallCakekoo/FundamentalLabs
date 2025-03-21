function sumarHastaNumero(num) {
    let total = 0;
    let i = 1;
    while (i <= num) {
      total += i;
      i++;
    }
    console.log("La suma de los números del 1 hasta", num, "es:", total);
  }
  
  console.log("-----------------------------------")
  console.log("EJERCICIO 6")
  console.log("-----------------------------------")
  sumarHastaNumero(100)
// TODO: Dado un número y sumar los números del 1 hasta ese número usando while.