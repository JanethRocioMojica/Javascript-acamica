var n = parseInt(prompt ("Ingresa el tamaño de la matriz"));
if (n == 0) 
    console.log("ERROR");
else {
    var impresion = "";
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
        impresion = impresion + ((j==i || j == (n+1-i)) ? 'X': '_' );
        }
        impresion = impresion+  " \n";
    }
    console.log(impresion);
}