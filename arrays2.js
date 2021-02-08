// **** Dividir un arreglo según el tipo de datos, par e impar
var par=[];
var impar=[];
var NoNumber=[];
var valor;
var num;
while(true){
    valor=prompt("Ingrese dato o 0 para terminar");
    num=parseInt(valor);
    if(!isNaN(num)) {
        if(num===0){
            break;
         } else {
            if (num % 2 == 0){
                par.push(num);
            }
             else {
                impar.push(num);  
            }
         }
    } else {
        NoNumber.push(valor);
    }
}
alert ("los números pares son: ["+par+"] ,los números impares son: ["+impar+"] y los no números son: ["+NoNumber+"]");