function encontrarNombreMasLargo(nombressss) {
    let nombreMasLargo = nombres[0]; 

    for (let i = 1; i < nombressss.length; i++) {
        if (nombressss[i].length > nombreMasLargo.length) {
            nombreMasLargo = nombressss[i];
        }
    }

    console.log(`El nombre más largo es: ${nombreMasLargo}`);
}

console.log("-----------------------------------");
console.log("EJERCICIO 14");
console.log("-----------------------------------");

const nombressss = ["Ana", "Juan", "Pedro", "Laura", "Sofía", "Sebastián"];
encontrarNombreMasLargo(nombressss);

 // TODO: Encontrar el nombre más largo en una lista de nombres usando un ciclo for.