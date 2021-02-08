// creacion clase Personas con dos métodos
class Personas{
	constructor(nombre, apellido, edad){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}

    fullname() {
        return `${this.nombre} ${this.apellido}`;
	}
	
	esMayor() {
		return this.edad > 18;
	}
}


mari = new Personas("Mari", "Tapia", "39");
console.log(mari);
mari.nacionalidad = "argentina";
console.log(mari);
console.log(mari.esMayor());