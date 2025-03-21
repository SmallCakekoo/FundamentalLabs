/*
Ejercicio 2: Número par o impar
Crea una función llamada esPar(numero) que reciba un número como argumento y 
retorne "El número es par" si el número es divisible entre 2, o "El número es impar" en caso contrario.
*/
function esPar(numero) {
    if (numero % 2 === 0) {
        return "El número es par (4)";
    } else {
        return "El número es impar (7)";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 2")
console.log("-----------------------------------")
console.log(esPar(4)); // "El número es par"
console.log(esPar(7)); // "El número es impar"