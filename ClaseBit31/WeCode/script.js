//omdb API - The Open Movie Database. 
//Api key se consigue en: http://www.omdbapi.com/
//Registrarse en vivo o utilizar este API KEY: 7fb789f2
let api_key = '';

//Enpoint de titulo de pelicula
async function getMovieByTitle(title) {
    let url = `https://www.omdbapi.com/?apikey=${api_key}&t=${title}`;
    const resp = await fetch(url);
    const data = await resp.json();
    //Puede en vez de crearse y ponerlo en el contenedor, cambiar el src a una imagen ya colocada en el HTML
  
    console.log(data);
};

getMovieByTitle('Donnie Darko');