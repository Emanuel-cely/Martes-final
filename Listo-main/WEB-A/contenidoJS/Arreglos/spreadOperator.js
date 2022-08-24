"use strict"
let miArreglo2=[];
for(let i=0; i<25; i++){
    miArreglo2[i]= i + 2;
}
//console.log(miArreglo2);
//Spread Operator ...
//console.log(...miArreglo2);

//Agregar elementos a un arreglo

miArreglo2.push(3,85,45,65,25);
//console.log(...miArreglo2);

let miArreglo3 = [...miArreglo2,34, 85, 45, 90];
//console.log(...miArreglo2);
let resultado = miArreglo2.concat(miArreglo3);
//console.log(...resultado);

let arrayFinal = [...miArreglo2, ...miArreglo3, ...resultado];
//console.log(arrayFinal);

//Propagacion en funciones 
let lenguajes = ["php", "java", "JS", "Ruby", "c#", "c++"]

const printLenguajes =(len1, len2, len3 = "assembler", ...len4) => {
    console.log(`***Los lenguajes top***
                ${len1}, ${len2}, ${len3}, ${len4}
                **************************`);
}
printLenguajes(...lenguajes, "cobol", "f#");

