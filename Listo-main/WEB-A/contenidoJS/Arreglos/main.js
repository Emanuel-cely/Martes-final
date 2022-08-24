"use strict"
const miArreglo = [2,4,6,8,5,3,2,96,4,8,6,4,5,4,1,"hola mundo"];
miArreglo.push(59)
let miArreglo2 = new Array(1,2,3,4);

for (let i=0; i<miArreglo.length;i++ ) {
    console.log(miArreglo[i]);
}

//otro 
for (let i=0; i<miArreglo.length;i++ ) {
    console.log(miArreglo.length);
    break
}
//variaciones del for

let j;
for(let j of miArreglo2){
    console.log(j);
}

for(let j in miArreglo2){
    console.log(j);
}

miArreglo2.forEach((e)=>{
    console.log(e);
});

miArreglo2.forEach(function(e){
    console.log(e);
});