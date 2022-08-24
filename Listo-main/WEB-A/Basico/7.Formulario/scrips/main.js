"use strict";
//crear contenedores
/*
1. var = global
2. let = local - variables y es el mas recomendable
3. const = constantes*/
const btValidar= document.getElementById("validar");
//al addEventListener debo pasar 2 parametros
btValidar.addEventListener("click",function(e) {

    e.preventDefault();
    let form= document.getElementById("dataform");
    console.log(form[1].value);
    console.log(form[2].value);
});
