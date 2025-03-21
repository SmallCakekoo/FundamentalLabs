function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intento = 0;
    let adivinanza = null;

    while (adivinanza !== numeroSecreto) {
        adivinanza = Math.floor(Math.random() * 100) + 1;
        intento++;
        console.log(`Intento ${intento}: El programa adivina ${adivinanza}`);
    }

    console.log(`¡Adivinado! El número secreto era ${numeroSecreto} y tomó ${intento} intentos.`);
}

console.log("-----------------------------------");
console.log("EJERCICIO 10");
console.log("-----------------------------------");
adivinarNumero();
// El programa adivina un número aleatorio entre 1 y 10 usando while