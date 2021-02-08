// **** Ingresar número dial del radio y verificar que exista según las condiciones
var dial = parseFloat(prompt("Ingrese el numero del dial:"));
var condicion = dial%2 != 0 && dial > 89.9 && dial < 107.9;if (condicion){
    alert("El dial existe");
  } else {
    alert("El dial no existe");
  }
  