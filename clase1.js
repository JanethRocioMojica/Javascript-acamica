//****creación clase Mascotas con sus métodos get y set
class Mascotas{
    constructor(raza, tamaño, edad, adopcion){
        this.raza = raza;
        this.tamaño = tamaño;
        this.edad = edad;
        this.adopcion = adopcion;
    }
    setAdopcion(nuevo_estado){//modificación de parametro
        this.adopcion = nuevo_estado;
    }
    getAdopcion(){// obtener información de un parametro
        return this.adopcion;
    }
}
// crear objetos clase Mascotas

let toby = new Mascotas("Golden", "grande", "5 años", "En adopción");
let sasha = new Mascotas("criollo", "mediano", "1 años", "Proceso de adopción");
let luna = new Mascotas("snawser", "pequeño", "3 años", "Adoptado");
var perros = [toby, sasha, luna];
alert(perros[0].adopcion);
alert(perros[1].edad);
perros[2].setAdopcion("Proceso de adopción");
alert(perros[2].getAdopcion());
//ingreso de perros hasta confirmar que no se desea ingresar mas.
do {
    nuevoRaza = prompt("Ingrese la raza del perro");
    nuevoTamano = prompt("Ingrese el tamaño del perro");
    nuevaEdad = prompt("Ingrese la edad del perro");
    nuevoEstado = prompt("Ingrese el estado del perro");

    if(nuevoEstado === "En adopción" || nuevoEstado === "Proceso de adopción" || nuevoEstado === "Adoptado"){
        let perro = new Mascotas(nuevoRaza, nuevoTamano, nuevaEdad, nuevoEstado);
        perros.push(perro)
    }
    continua = window.confirm("¿Desea cargar otro perro?")

} while (continua == true)
// mostrar por consola 4 filtros según estado de adopción
var enAdopcion = [];
var enProceso = [];
var adoptados = [];

function filtrar(registroTotal){
    for (cadaPerro in registroTotal){
        if(registroTotal[cadaPerro].adopcion == "En adopción")
            enAdopcion.push(registroTotal[cadaPerro]);
        if(registroTotal[cadaPerro].adopcion == "Proceso de adopción")
            enProceso.push(registroTotal[cadaPerro]);
        if(registroTotal[cadaPerro].adopcion == "Adoptado")
            adoptados.push(registroTotal[cadaPerro]);    
    }
}

filtrar(perros);
console.log(perros);
console.log(enAdopcion);
console.log(enProceso);
console.log(adoptados);