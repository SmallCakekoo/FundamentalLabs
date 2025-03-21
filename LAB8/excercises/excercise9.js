function fibonacci() {
    let n1 = 0, n2 = 1, nextTerm;
    const numTerms = 10;

    console.log(n1); // Imprimir el primer término

    for (let count = 1; count < numTerms; count++) {
        console.log(n2); // Imprimir el segundo término y los siguientes
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 9");
console.log("-----------------------------------");
fibonacci();

// TODO: Imprimir los primeros 10 números de la secuencia Fibonacci usando while.
