function calcularFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    console.log(factorial);
}
console.log("-----------------------------------");
console.log("EJERCICIO 8");
console.log("-----------------------------------");
calcularFactorial(40);
// TODO: Dado un número y calcular su factorial usando un ciclo for.
