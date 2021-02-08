//**** Crear un arreglo númerico con números ingresados por teclado
var dato;
var numero=[];
while (true){
   var dato = parseInt(prompt("Ingrese un número o stop para terminar"))
   if (isNaN(dato))
        break;
   numero.push(dato);
}
alert ("El array es: ["+numero+"]");