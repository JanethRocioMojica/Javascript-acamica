// **** De acuerdo a la distancia a recorrer se sabe si llegá con el tanque de Nafta
var maxima = 675;

var distancia = parseInt(prompt("Ingrese la distancia que va a recorrer"));

if (distancia > maxima){
  alert("Deberá abastecerse de Nafta");
} else {
  alert("Sí llega");
}
