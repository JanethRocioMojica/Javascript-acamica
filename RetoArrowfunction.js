// Escribe una función arrow que reciba como parámetro un array y calcule el
// promedio de los elementos tipo numérico.


let numeros = [2,4,6,"2"];
let promedio = numeros => {
    let suma = 0;
    var cont = 0;
    for(let i = 0; i < numeros.length; i++){
        if (typeof numeros[i] == "number"){
            suma += numeros[i];
            cont ++;
        }
    }
    return `${suma/cont}`;
}
alert(promedio(numeros))