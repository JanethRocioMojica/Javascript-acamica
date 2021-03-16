let circulo_function = (radio) =>{
    const pi = 3.141592653589793238462643383;
    let resultados = [];
    let diametro = radio*2;
    let area = pi * radio**2;
    resultados.push(diametro);
    resultados.push(area);
    return(resultados);
}

let num_input = parseFloat(prompt("Ingrese el valor del radio en centimetros: "));
let resultados = circulo_function(num_input);
alert( "Radios: " + num_input+" Diametro:" + resultados[0] + " Area: " + resultados[1]);
