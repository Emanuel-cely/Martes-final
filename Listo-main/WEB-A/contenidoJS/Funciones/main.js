"use strict"
//funcion clasica en JS

function nombreFuncion(/**recibo de parametros */){
    /**Cuerpo de la funcon */
    return 0;
}

//Invocacion de la funcion
//nombreFuncion();

function suma(num1, num2){
    return num1 + num2;
}

let result=0;
result= suma(3,5); //Solo lee lo que tiene 
console.log(result);

//Funcion tipo flecha 
const resta = (num1=1, num2=1)=>{
    return num1 - num2;
}
console.log(resta(12,67));
