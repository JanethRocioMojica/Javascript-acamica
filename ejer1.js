// **** ingresar 5 números y hallar su sumatoria
var cont=0;
var num=0;
var sum=0;
while (cont<5){
    num= parseInt(prompt("ingrese un número: "));
    sum= sum+num;
    cont ++;
}
alert ("la suma es: "+sum);