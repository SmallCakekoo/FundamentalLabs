/*
Ejercicio 7: Validar contraseñas
Crea una función llamada validarContrasena(contrasena) que verifique si una contraseña cumple con las siguientes reglas:

Debe tener al menos 8 caracteres.
Debe contener al menos un número.
Si cumple con ambas, retornar "Contraseña válida", de lo contrario "Contraseña no válida".
*/
function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return "Contraseña no válida";
    }
    const tieneNumero = /\d/.test(contrasena);

    if (!tieneNumero) {
        return "Contraseña no válida";
    }
    return "Contraseña válida";
} 

console.log("-----------------------------------")
console.log("EJERCICIO 7")
console.log("-----------------------------------")
console.log(validarContrasena("pass1234")); // "Contraseña válida"
console.log(validarContrasena("password")); // "Contraseña no válida"