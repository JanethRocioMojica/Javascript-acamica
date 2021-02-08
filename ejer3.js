// **** función que detecta si es mayor de edad y cuantos mayores de edad son
var cont=0;
var edad= 1;
while (edad!=0){
   var edad = parseInt(prompt("Ingrese la edad o un 0 para salir"))
   var Mayor = mayoredad (edad);
   if (Mayor==true)
        cont ++;
}
//función que devuelve true si es una persona mayor de edad
function mayoredad(edad){
    return (edad >= 18)? true : false;
}
alert ("El número de personas mayores de edad son: "+cont);