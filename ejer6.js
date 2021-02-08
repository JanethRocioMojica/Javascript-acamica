// **** convierte un número ingresado de 1 a 10 a su correspondiente letra en el abecedario
var numero= parseInt(prompt("ingrese número de 1 a 10"));
var letra = letranumero(numero);
alert ("el resultado es: " + letra)
function letranumero (numero){
    switch (numero){
        case 1:
            return 'a';
            break;
        case 2:
            return 'b';
            break;
        case 3:
            return 'c';
            break;
        case 4:
            return 'd';
            break;
        case 5:
            return 'e';
            break;
        case 6:
            return 'f';
            break;
        case 7:
            return 'g';
            break;
        case 8:
            return 'h';
            break;
        case 9:
            return 'i';
            break;
        case 10:
            return 'j';
            break;
        default:
            return "Valor fuera del rango";
            break;
    }
}

