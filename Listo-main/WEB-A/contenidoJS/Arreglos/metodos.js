"use strict"
//1. Volver una cadena a arreglo
let cadenaDIas ="lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let miArreglo = cadenaDIas.split("_"); // si se utiliza (-) se vuelve un elemento
console.log(miArreglo);

//2. Buscar
//Funcion anonima ()=>{}  clasica function(){}
const result = miArreglo.find((e)=> e === "viernes"); //Si no encuentra el valor sale undefined
console.log(result);

const index = miArreglo.findIndex((e)=> e === "viernes");
console.log(index);

//3. Comprueba si existe un elemento dentro de un array true o false 
console.log(miArreglo.includes("viernes")); 

//4. Filtrar elementos 
let miArreglo2=[];
for(let i=0; i<25; i++){
    miArreglo2[i]= i + 3;
}
console.log(miArreglo2);
const response = miArreglo2.filter((e)=> e % 2 ===0);
console.log(response);

//Consultar map, some, every, reduce, concat