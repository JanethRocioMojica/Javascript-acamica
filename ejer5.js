// **** detecta cual es el tipo de número con mayor ingreso, si pares o impares
var cantidad;
var pares = 0;
var impares =0;
while(cantidad!=0){
cantidad = parseInt(prompt("ingrese la cantidad o 0 para terminar"))
var tipo = tiponum(cantidad);
}
function tiponum(cantidad){
    if (cantidad%2 == 0)
        pares ++;
    else 
        impares ++;
if (pares>impares)
    clase = 'par';
else if(pares<impares)
    clase = 'impar';
else 
    clase = 'iguales';
return clase;
}
alert("tiene mas ingresos los números: "+tipo);