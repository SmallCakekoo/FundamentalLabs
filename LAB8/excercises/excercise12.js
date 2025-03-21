
function contarNombresLargos(nombress) {
    let contador = 0;
    
    for (let i = 0; i < nombress.length; i++) {
        if (nombress[i].length > 4) {
            contador++;
        }
    }

    console.log(`Cantidad de nombres con más de 4 letras: ${contador}`);
}

console.log("-----------------------------------");
console.log("EJERCICIO 12");
console.log("-----------------------------------");

const nombress = ["Ana", "Juan", "Pedro", "Laura", "Sofía", "Sebastián"];
contarNombresLargos(nombress);

// TODO: Contar cuántos nombres de una lista tienen más de 4 letras usando un ciclo for.