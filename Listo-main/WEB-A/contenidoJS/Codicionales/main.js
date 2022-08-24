"use strict"

let num1;
let num2;
num1 = 9;
num2 = "9";

if(num1 < 0){

}else if(num1 > 0){
    if ((num1 % 3 === 0) && (parseInt(num2)>0)) {
        console.log(" num1 es multiplo de 3 y num2 >0 ");
    }else{
        if(num1 % 2 === 0) console.log("num1 es multiplo de 2");
    }
}
 
//switch
let opcion;
opcion = prompt("introducir una opcion 1-4");

switch(opcion){
    case "1":
        alert("selecciono opcion 1");
        break; //Romper condicion 
    case "2":
        alert("selecciono opcion 2");
        break;
    case "3":
        alert("selecciono opcion 3");
        break;
    case "4":
        alert("selecciono opcion 4");
        break;
    default:
        alert("invalido");  
        break;
}