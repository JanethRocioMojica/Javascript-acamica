/*Traer información de la API de github*/
//Hacer fetch de la información de un usuario de github por nombre
//Hacer fetch de la información de los followers de ese usuario (con el endpoint devuelto en el fetch anterior) y hacer console.log del nombre de usuario de los primeros 5 followers.


function getGithubUser(username) {
    fetch('https://api.github.com/users/' + username)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            getUserFirst5Followers(json.followers_url);
        }).catch(err => {
            console.error('fetch failed', err);
        });
}
function getUserFirst5Followers(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            for(let i = 0; i < 5; i++){
                console.log(json[i].login);
            }
        }).catch(err => {
            console.error('fetch failed', err);
        });
}

getGithubUser('andrew');
