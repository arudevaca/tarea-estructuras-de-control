// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0){ // se establece si el residuo equivale a cero o no
        console.log("El numero es par"); // si el residuo es 0, imprime el nro es par
    }
    else{console.log("El número es impar"); // si el residuo no es 0, imprimo el nro es impar
    }     
    }
verificarParidad(2);

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if(edad < 18){ //si la edad es menor a 18
    console.log("Menor de edad"); // imprime menor de edad
    } 
    else if (edad <= 65){ // si la edad es menor o igual a 65
       console.log("Adulto"); // imprime Adulto
    }else{
        console.log("Adulto Mayor"); //si no se cumple que la edad es menor o igual a 65, imprime adulto mayor
    }
}
clasificarEdad(66);

// Ejercicio 3: Bucles while
/* Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` 
para imprimir todos los números desde ese número hasta 0.*/
function cuentaRegresiva(numeroEntero) {
    while (numeroEntero >= 0){
        console.log(numeroEntero);
        numeroEntero = numeroEntero - 1;
    }
}
cuentaRegresiva(10);
// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let numeroo = 0;
    do{
        console.log("Estoy aprendiendo Javascript")
        numeroo = numeroo + 1;
    }
    while (numeroo < 5);
}
repetirMensaje();
// Ejercicio 5: Bucle for
/* Instrucción: Escribe una función que reciba un número entero positivo 
y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.*/
function imprimirPares(numero) {
    for (let i = 0; i < numero; i++){
        if (i % 2 === 0 ){ // Verifica si el número es par
            console.log(i); // Imprime el número si es par
        }
    }
}
imprimirPares(10);

// Ejercicio 6: Uso de break
/* Instrucción: Escribe una función que recorra los números del 1 al 10, 
pero detén el bucle cuando el número sea igual a 6.*/
function detenerEnSeis() {
    let i = 1;
    while (i <= 10){
        if (i === 6 ){
            break;
        }
        console.log(i);
        i++;
    }
}
detenerEnSeis();

// Ejercicio 7: Uso de continue
/* Instrucción: Crea una función que recorra los números del 1 al 10, 
pero que se salte el número 5 usando `continue`.*/
function saltarCinco() {
    let i = 1;
    while (i <= 10){
        if(i === 5){
            i++;
             continue;
        }
        console.log(i);
        i++;
    }
}
saltarCinco();

// Ejercicio 8: Switch básico
/* Instrucción: Escribe una función que reciba un número del 1 al 7 
y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). 
Usa la estructura `switch`.*/
function obtenerDiaSemana(dia) {
    switch(dia){
        case 1: 
            console.log("Lunes");
            break
        case 2:
            console.log("Martes");
            break
        case 3: 
            console.log("Miercoles");
            break
        case 4: 
            console.log("Jueves");
            break
        case 5: 
            console.log("Viernes");
            break
        case 6: 
            console.log("Sabado");
            break
        case 7: 
            console.log("Domingo");
            break
        default:
            console.log("Ingrese un numero del 1 al 7.")
    }
}
obtenerDiaSemana(2);

// Ejercicio 9: Switch con múltiples casos
/* Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` 
y agrupa los casos para las vocales (a, e, i, o, u).*/
function esVocal(letra) {
    switch(letra){
        case 'a':
            console.log("Es una vocal");
            break;
        case 'e':
            console.log("Es una vocal");
            break;
        case 'i':
            console.log("Es una vocal");
            break;
        case 'o':
            console.log("Es una vocal");
            break;
        case 'u':
            console.log("Es una vocal");
            break;
        default:
            console.log("No es una vocal")  
    }
}
esVocal("l");

// Ejercicio 10: Condicionales complejos con operadores lógicos
/* Instrucción: Escribe una función que reciba tres números 
y determine si todos son positivos, 
al menos uno es negativo, 
o todos son negativos. 
Usa operadores lógicos (`&&`, `||`).*/
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0){
        console.log("Todos los numeros son positivos");
    } else if(a<0 && b<0 && c<0){
        console.log("Todos son negativos");
    } else if(a<0 || b<0 || c<0){
        console.log("Al menos un numero es negativo");
    }
}
    evaluarNumeros(1, 2, 3);

// Exportar todas las funciones
module.exports = {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};