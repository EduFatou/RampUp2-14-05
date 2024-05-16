/*
Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre.
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
*/

function contarPalabras(nombre){
    let cuenta = 1;
    nombre = nombre.trim();
    for (let i = 0; i <= nombre.length; i++){
        if (nombre[i] === ' '){
            cuenta++;
        }
    }
    return cuenta;
}
contarPalabras(' Eduardo Fatou Cerrato ');