class Users {
    constructor(name,user_name,password,cash){
        this.name = name;
        this.user_name = user_name;
        this.password = password;
        this.cash = cash;
    }
}
let daniel = new Users("daniel","danma","123",10000000);
let ivan = new Users("ivan","ivanma","456",6000000);
let users_list = [daniel,ivan];

function pay_function(){
    //solicitamos los datos del usuario
    name_input = prompt("Ingrese su nombre de usuario: ");
    password_input = prompt("Ingrese su contraseña: ");
    try{
        if(name_input != "" && password_input != ""){//verificamos que haya diligenciado los datos solicitados
            let user = users_list.filter(x => x.user_name == name_input);//filtramos la users_list para verificar que el user name se encuentre
            if(user.length != 0 && user[0].password == password_input){//verificamos que se haya encontrado el usuario y que la contraseña que este tenga corresponda a la solicitada
                let final_cost =document.getElementsByClassName("final-cost");//obtenemos el nodo en donde se encuentra el valor a pagar
                if(parseInt(final_cost[0].innerHTML) <= user[0].cash){//verificamos que el usuario tenga suficiente dinero para realizar el pago
                    //para modificar el nuevo saldo del comprador
                    let index = users_list.findIndex(x => x.user_name == name_input); //buscamos la posición del inidice del usuario
                    let new_cash = users_list[index].cash -parseInt(final_cost[0].innerHTML)//obtenemos la diferencia entre la compra y el saldo
                    users_list[index].cash = new_cash;//modificamos el saldo del usuario que realizó la compra
                    let hoy = new Date();//obtener la información de fecha y hora de la compra
                    let hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds(); //organizamos la información de la hora
                    let fecha = hoy.getDate() + "-" + (hoy.getMonth()+1) + "-" + hoy.getFullYear();//organizamos la información de la fecha
                    
                    alert(//damos un mensaje de compra realizada
                        "GRACIAS por tu compra " + user[0].name +" \n" +
                        "Valor de la compra: $ " + final_cost[0].innerHTML + "\n"+
                        "Nuevo saldo: $" + users_list[index].cash +"\n"+
                        "Hora de la compra: " + hora + "\n"+
                        "Fecha de la compra: "+ fecha
                    );
                    console.log(users_list[index]);
                    localStorage.removeItem("shop");//limpiamos el local storage
                    location.reload(); //recargamos la pagina para que se reflejen los cambios
                }else{
                    throw new Error("No cuenta con dinero suficiente.");
                }
            }else{
                throw new Error ("Usuario o contraseña incorrectas.")
            }
        }else{
            throw new Error ("Ingresa todos los datos para realizar el pago.")
        }
    }catch(error){
        alert(error);
    }
}