/*
Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios.
Ejemplo: Para "Ana" devolverá "A N A".


function espaciarMayusculas(palabraInicio){
    let palabraFinal = '';
    for(let i = 0; i < palabraInicio.length; i++){
        palabraFinal = palabraInicio[i].toUpperCase().push(); y como las separo?
    }
    return palabraFinal;
}
espaciarMayusculas('hola');
*/


function espaciarMayusculas(palabraInicio){
    return palabraInicio.toUpperCase().split('').toString().replace(/,/g,' ');
}

espaciarMayusculas('Cabesa melón');