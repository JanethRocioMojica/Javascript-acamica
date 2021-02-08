// ****calcula el promedio solo de números de un dígito
var cantidad = 0;
var suma=0;
var c=0;
var salga = false;
while (salga!=true){
    dato = prompt("Ingrese una cantidad o salir para cerrar el programa");
    if (isNaN(dato)){
        if (dato=='salir')
            salga=true;
        else 
            alert("es una palabra invalida");
    }
    else {
    cantidad = parseInt(dato);
    var promedio= calcPromedio(cantidad);
    }
}
alert ("el promedio es: "+promedio)
//función que calcula el promedio solo de números de un dígito
function calcPromedio(cantidad){
    if (cantidad <10){
        suma = suma+cantidad;
        c ++; 
        promedio = suma/c;
    }
    return promedio;
}