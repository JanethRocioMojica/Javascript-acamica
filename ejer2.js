// **** hallar el promedio de 5 números ingresados
var cont=0;
var num=0;
var sum=0;
var prom=0;
while (cont<5){
    num= parseInt(prompt("ingrese un número: "));
    if (isNaN(num))
        (alert("no es un numero, digite un numero"));
    else{
    sum= sum+num;
    cont ++;}
}
prom = sum / cont;
alert ("la suma es: "+sum +" , el promedio es: "+prom);