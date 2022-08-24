"use strict"

/*let num1;
num1=prompt("intro troducir calificacion del estudiante");

if(num1<3){
    console.log("La ponderacion es Insuficioente")
}*/

let calificacion;
calificacion =3.0;
let mensaje;
mensaje ="";
switch(true){ /**true = siempre ingresa */
    case calificacion >= 0 && calificacion <= 2.9:
        //temple string
        mensaje = `Insuficiente la calificacion: ${calificacion}`;
            break;
        case calificacion >= 3.0 && calificacion <= 3.5:
        mensaje = `Regular la calificacion: ${calificacion}`;
            break;
        case calificacion >= 3.6 && calificacion <= 4.0:
        mensaje = `Bien la calificacion: ${calificacion}`;
            break;
        case calificacion >= 4.1 && calificacion <= 4.5:
        mensaje = `Muy bien la calificacion: ${calificacion}`;
            break;
        case calificacion >= 4.6 && calificacion <= 5.0:
        mensaje = `Exelente la calificacion: ${calificacion}`;
            break;
    default:
        mensaje = `Exelente la calificacion: ${calificacion}`;
            break;

}
console.log(mensaje);
