/*
Ejercicio 1: Saludo personalizado
Escribe una función llamada saludar(nombre) 
que reciba un nombre como argumento y retorne un mensaje que diga "Hola, [nombre]". 
Si el nombre es vacío o no se proporciona, el mensaje debe ser "Hola, desconocido".
*/

function saludar(nombre) {
    if (!nombre) {
        return "Hola, desconocido";
    } else {
        return "Hola, " + nombre; 
    }
}
console.log("-----------------------------------")
console.log("EJERCICIO 1")
console.log("-----------------------------------")
console.log(saludar("Ana")); // "Hola, Ana"
console.log(saludar()); // "Hola, desconocido"