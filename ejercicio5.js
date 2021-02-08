// Programa que ingresa por teclado el destinatario y la cantidad a transferir
var destinatario = prompt("Ingrese el destinatario");
var dineroTransferir= parseInt(prompt("Valor a transferir"));
var contactos = ["Juan", "David", "Marcela", "Jose", "Miguel"];
var fondo = 2_000_000;
if((dineroTransferir <= fondo) && contactos.includes(destinatario)) {
  alert("Transferencia por un valor de $" + dineroTransferir + " destinada a " + destinatario );
} else if(dineroTransferir > fondo){
  alert("Dinero insuficiente");
} else {
  alert("El usuario no está dentro de sus contactos");
}
