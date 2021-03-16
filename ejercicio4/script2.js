class Users{
    constructor(name,lastName,email,user,password,state){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.user = user;
        this.password = password;
        this.state = state;
    }
}
//Función encargada de logear un usuario existente
let login_function = (user,password,users_list) => {
    let result;
    // filtramos para encontrar el usuario, el devuelve datos tipo array
    const result_user = users_list.filter(filtro => filtro.user == user); //filer recorrera los indices de la lista filtrada
    //verificamos si se encontró el usuario y verificamos la contraseña sobre el usuario encontrado
    const result_password = result_user.length != 0 ? (result_user[0].password == password ? true:false):(false); 
    // result_user[0].password == password ? true:false;
    try{
        //si la long de dichas variables son >0 significa que se encontro la contraseña y usuario
        if (result_user.length == 0 || result_password == false){
            throw new Error ("Usuario o contraseña incorrectas")
        }else{
            //verificamos que se encuentre activo
            if (result_user[0].state == false){
                throw new Error ("Usuarios encontrado pero inactivo")
            }else{
                result = true;
            }
        }
    }catch(error){
        result = false;
        alert(error);
    }
    return result;
}
//Función encargada de solicitar información de nuevo registro
function input_function(){
    let name_input = prompt("Ingrese el nombre: ");
    let Lastname_input = prompt("Ingrese el apellido: ");
    let email_input = prompt("Ingrese el coreeo: ");
    let user_input = prompt("Ingrese el usuario: ");
    let password_input = prompt("Ingrese la contraseña: ");
    let state_input = prompt("Ingrese el estado (activo:1 inactivo:2): ");
    state_input = state_input ==1 ? true:false;
    let user = new Users(name_input,Lastname_input,email_input,user_input,password_input,state_input);
    return user;
}
//Función encargada de modificar información de un usuario
let modify_function = (user, users_list) => {
    let modificacion;
    // filtramos para encontrar el usuario
    const result_user = users_list.filter(filtro => filtro.user == user); //filtro recorrerá los indices de la lista filtrada
    try{
        if (result_user.length == 0){
            throw new Error ("NO existe dicho usuario.");
        }else{

            //findIndex permite callback: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

            alert("Ingrese las nuevos valores para el usuario " + user);
            const index = users_list.findIndex(element => element.user == user);

            if (index !== -1) {
                let result = input_function();
                users_list[index].name = result.name;
                users_list[index].lastName = result.lastName;
                users_list[index].email = result.email;
                users_list[index].user = result.user;
                users_list[index].password = result.password;
                users_list[index].state = result.state;
                modificacion = true;
            }
        }
    }catch(error){
        alert(error);
        modificacion = false;
    }
    return modificacion;
}
//PROCESO
let daniel = new Users("daniel","martinez","daniel@hotmail.com","danma","123",true);
let ivan = new Users("ivan","martinez","ivan@hotmail.com","ivanma","456",true);
let edith = new Users("edith","barrero","edith@hotmail.com","edithba","789",false);

let users_list=[daniel,ivan,edith];

do{
    var process = prompt("¿Que proceso desea realizar?:\n -Ingresar al sistema(1): \n-Ingresar un nuevo usuario(2): \n-Modificar usuario(3): \n-Salir(0):  ")
    if (process == 1){
        let user_input = prompt("Ingrese su usuario: ")
        let password_input = prompt("Infrese su contraseña: ")
        let user_login = login_function(user_input,password_input,users_list);
        if (user_login == true){
            alert("BIENVENIDO.");
        }
    }else if(process ==2){ //verificar primero el username
        let new_user = input_function();
        const result_user = users_list.filter(filtro => filtro.user == new_user.user);
        if (result_user.length == 0){
            users_list.push(new_user);
            alert("Ahora estas registrado.");
        }else{
            alert("Ya existie dicho usuario.");
        }
    }else if(process ==3){
        let user_input = prompt("Ingrese el usuario a modificar: ");
        let result = modify_function(user_input,users_list);
        if (result == true){
            alert("Modificaciones realizadas con exito.");
        }
    }else{
        process = 0;
    }
}while(process != 0);
console.log(users_list);