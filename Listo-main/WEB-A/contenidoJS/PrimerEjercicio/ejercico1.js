"use strict";//directiva que indica que estamos trabajando en modo estricto
/**comentarios de bloque 

//Declaracion de variables o contenedores 
var variable1 = 10;//Caracte global "No recomendado"
let variable2 = 23;//de ambito local
const constante1 = 3.14;//Declarar constantes

if(true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2);
}

console.log(variable2);
*/

//Realizar un codigo que sume 2 numeros y dar resultado

let num1;
let num2;
num1=prompt("Introducir un numero");
num2=prompt("Introducir un numero");
let suma =0;
suma = parseFloat(num1)  + parseFloat(num2);
cconsole.log("El resultado de la suma es: "+suma);
alert("la suma es:" + suma);
