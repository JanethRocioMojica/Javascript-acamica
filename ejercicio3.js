// **** de acuerdo a un modelo del motor y km a recorrer informa cuantos tanques necesita
var modelo = parseInt(prompt("Ingrese el tipo de modelo del motor (1 = motor1.6) (2 = motor1.8) (3 = motor2.0): "));
var maximaCapacidad = 50;
var distancia = parseInt(prompt("Distancia que va a recorrer [km]:"));
if(modelo == 1){
  var kmLitro1 = 15;
  var litrosRequeridos = (distancia/kmLitro1);
  var tanques1 = litrosRequeridos/maximaCapacidad;
  alert("Necesita " + tanques1 + " tanques.");
} else if (modelo == 2){
  var kmLitro1 = 12;
  var litrosRequeridos = (distancia/kmLitro1);
  var tanques1 = litrosRequeridos/maximaCapacidad;
  alert("Necesita " + tanques1 + " tanques.");
} else if (modelo == 3){
  var kmLitro1 = 10;
  var litrosRequeridos = (distancia/kmLitro1);
  var tanques1 = litrosRequeridos/maximaCapacidad;
  alert("Necesita " + tanques1 + " tanques.");
}
