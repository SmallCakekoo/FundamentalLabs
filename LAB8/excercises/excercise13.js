
function buscarNombre(nombresss, nombreABuscar) {
    let encontrado = false;

    for (let i = 0; i < nombresss.length; i++) {
        if (nombresss[i] === nombreABuscar) {
            encontrado = true;
            break; // Sale del ciclo si encuentra el nombre
        }
    }

    if (encontrado) {
        console.log(`El nombre "${nombreABuscar}" está en la lista.`);
    } else {
        console.log(`El nombre "${nombreABuscar}" no está en la lista.`);
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 13");
console.log("-----------------------------------");

const nombresss = ["Ana", "Juan", "Pedro", "Laura", "Sofía"];
buscarNombre(nombresss, "Pedro");

// TODO: Buscar si un nombre específico está en una lista de nombres usando un ciclo for.