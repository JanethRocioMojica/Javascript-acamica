// **** Dividir un arreglo en tres partes, si sobra un dato debe quitar el primer elemento,
// si sobran dos debe quitar los dos extremos
var dato;
var long;
var div;
var arreglo=[];
var arregloA=[];
var arregloB=[];
var arregloC=[];
while(true){
    dato= prompt("Ingrese un carácter o 0 para terminar");
    if(dato==0)
        break;
    arreglo.push(dato);
}
long=arreglo.length;
if(long%3==2){
    arreglo.shift();
    arreglo.pop();
    long=arreglo.length;
}
else 
    if((long%3)==1){
        arreglo.shift();
        long=arreglo.length;
    }
div=long/3;
for (i=0; i<div; i++){
arregloA.push(arreglo[i]);
}
for (i=div; i<(div*2); i++){
    arregloB.push(arreglo[i]);
}
for (i=(div*2); i<long; i++){
    arregloC.push(arreglo[i]);
}


alert("los arrays son: ["+arregloA+"] ["+arregloB+"] ["+arregloC+"]");