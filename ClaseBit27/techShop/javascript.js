// Agregar un nuevo Item al nav

// (function addItem() {
//   let menuNav = document.getElementById('menu-nav');
//   let aboutUs = document.createElement('a');
//   aboutUs.textContent = "About Us";
//   menuNav.appendChild(aboutUs);
// })();

// Agregar negrita a una palabra del parrafo
/*
(function addBold() {
  let textPrincipalTesla = document.getElementById('text-principal-tesla');
  textPrincipalTesla.style.fontWeight = 500;
}) ();
*/

// Funcionalidad para cambiar de imagen cada 3s.
let cont = 0;
let image = document.getElementById('img-products-hero');
function changeImage() {
  cont = cont % 3;
  if (cont === 0) {
    image.src="./assets/Gafas-realidad-virtual.png";
  }
  else if (cont === 1) {
    image.src="./assets/asistente-voz.jpeg";
  } else {
    image.src="./assets/PS4-white.jpg";
  }
  cont++;
}



// https://es.stackoverflow.com/questions/302617/como-dar-transition-a-imagenes-cambiante-mediante-javascript


// imvertir las dos imagenes

let imageAirpods = document.getElementById('airpods');
let textAirpods = document.getElementById("text-airpods");
let imageGafasVirtual = document.getElementById('gafas-virtual');
let textGafasVirtual = document.getElementById("text-gafas-virtual");
function changeOrder() {
  // imageAirpods.src="./assets/Gafas-realidad-virtual.png";
  imageAirpods.setAttribute('src', './assets/Gafas-realidad-virtual.png');
  imageAirpods.setAttribute('alt','Gafas de Realidad Virtual');
  replaceTextAirpods = textAirpods.replace = "Gafas de Realidad Virtual";
  textAirpods.innerHTML = replaceTextAirpods;
  // imageGafasVirtual.src="./assets/samsung-galaxy-s20.jpg";
  imageGafasVirtual.setAttribute('src', "./assets/samsung-galaxy-s20.jpg");
  imageGafasVirtual.setAttribute('alt', 'Samsung Galaxy S20');
  replaceTextGafasVirtual = textGafasVirtual.replace = "Samsung Galaxy S20";
  textGafasVirtual.innerHTML = replaceTextGafasVirtual;
}


function startProcess() {
  setInterval(changeImage, 3000);
  setTimeout(changeOrder, 3000);
}

window.onload = startProcess();

// Evento de cambio del titulo con Click

let productos = document.getElementById("container-airpods");
console.log(productos);
