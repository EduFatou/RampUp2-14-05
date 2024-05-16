/* 1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente' */

function calcularMedia(nota1, nota2, nota3){

    let media = (nota1 + nota2 + nota3) / 3;
    if (media < 5){
        return 'SUSPENSO';
    }
    if (media >= 5 && media <= 7){
        return 'APROBADO';
    }
    if (media >= 7 && media <= 10){
        return 'SOBRESALIENTE';
    }
    return media;
}

console.log(calcularMedia(3, 5, 8));