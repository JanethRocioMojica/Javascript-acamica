let user_register = (user_name, users_list) => {
    user_name = user_name.toLowerCase()
    let result = users_list.indexOf(user_name); //si el valor no se encuentra en la lista, devuelve -1
    try{
        if (result == -1){//en caso de que no se encuentre dicho usuario lo registraremos
            users_list.push(user_name);
            alert("Bienvenido " + user_name);
        }else{//si ya existe dicho usuario devolvemos un error
            throw new Error (user_name + " ya se encuentra registrado.")
        }
    }catch(error){
        alert(error);
    }
    return users_list;
}
let users_list =[];
do{
    var confirmation = window.confirm("¿Desea ingresar un nuevo usuario?");
    if (confirmation == true){
        let user_name = prompt("Ingrese su nombre: ");
        try{
            if (user_name.length == 0){
                throw new Error("No ingresaste ninguna información");
            }else{
                users_list = user_register(user_name, users_list);
            }
        }catch(error){
            alert(error);
            continue;
        }
    }

}while(confirmation == true);
alert("Usuarios registrados: (" + users_list + ").");