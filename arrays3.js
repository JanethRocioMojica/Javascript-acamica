// **** Ingresar datos a un arreglo, ordenarlo y quitar sus extremos 
var dato;
var long;
var Numerico=[];
while (true){
    dato= parseInt(prompt("ingrese un dato o 0 para terminar"));
    if (dato==0)
        break;
    else {
        if(!isNaN(dato))    
            Numerico.push(dato);
    }
}
Numerico.sort();
long=Numerico.length;
if (Numerico[0]==Numerico[long])
    Numerico.shift();
else {
    Numerico.shift();
    Numerico.pop();
}
alert("El arreglo Numerico sin extremos es: ["+Numerico+"]");