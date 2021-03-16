//Creación de clase y objeto
class Tec_products{
    constructor(id,img,title,description,price_str,price_int,add_btn_id){
        //this.propiedad= parametro;
        this.id = id;
        this.img = img;
        this.title = title;
        this.description = description;
        this.price_str = price_str;
        this.price_int = price_int;
        this.add_btn_id = add_btn_id;//lo utilizó para identificar el nodo desde donde se ejecuta la función
    }
}
//Creación de nuevos objetos
let alienware = new Tec_products("1","../images/portatil-alienware.png",
"Alien Ware",
"Alienware Area M51 Intel Core I9 - 17.3 pulgadas - Disco Duro Híbrido 1 TB + 256 GB SSD - Negro",
"$ 19'469.000", 19469000,"btn_add_1")

let asus_gaming = new Tec_products("2","../images/Asus-gaming.png",
"Asus Gaming",
"Asus Tuf Fx506li Corei5-10300h 16gb 256 Ssd Gtx1650ti Windows10",
"$ 3'570.000", 3570000,"btn_add_2")

let hp_gaming = new Tec_products("3","../images/hp-gaming.png",
"HP Gaming",
"Computador Portátil HP Gaming 15.6 Pulgadas Ci5 4GB 1TB NVIDIA GTX1050 15-dk0003l",
"$ 3'400.000", 3400000,"btn_add_3")

let lenovo_idealpad = new Tec_products("4","../images/lenovo-idealpad.png",
"Lenovo Ideapad",
"Portátil Gamer Lenovo Ideapad L340 I5 9300hf 8g Gtx 1650",
"$ 3'290.000", 3290000, "btn_add_4")

let lenovo_legion = new Tec_products("5","../images/lenovo-legion.png",
"Lenovo Legion",
"Portátil Gamer Lenovo Legion Ryzen 7 4800h Rtx 2060 16g 512 144h",
"$ 5'400.000", 5400000,"btn_add_5")

let msi_gaming = new Tec_products("6","../images/msi-gaming.png",
"MSI Gaming",
"Portatil Msi Gf75 Thin 10scsr Intel I7 10750h Gtx 1650ti",
"$ 6'350.000", 6350000,"btn_add_6")

//Lista de portatiles
let laptops = [alienware, asus_gaming, hp_gaming, lenovo_idealpad, lenovo_legion, msi_gaming];

let products_laptops = () =>{
    let i;
    let slider_box = document.getElementById("slider-container");//obtenemos el slider al que agregaremos los boxes
    let product_box = document.getElementById("portatil-box");//obtenemos el nodo que clonaremos
    
    //SE TIENE QUE OBTENER LOS NODOS EN CADA CICLO, DE LO CONTRARIO NO TRABAJA EL PROGRAMA
    for(i=0 ; i < laptops.length ; i++){

        let new_box = product_box.cloneNode(true);//clonamos el nodo que contiene el formato a usar
        slider_box.appendChild(new_box);//agregamos el nuevo child en el slider
        //Obtenemos la lista de clases que nos servirán con referencia para modificar y jugamos con las posiciones para modificar las propiedades
        //el elemento 0 en la lista de clases es el div de referencia, por ende, debemos trabajar desde la posición 1
        let laptop_item = document.getElementsByClassName("product-box");
        laptop_item[i+1].id = "portatil-" + laptops[i].id; //modificar el id del producto creado a partir de la lista de laptos
        let laptop_img = document.getElementsByClassName("product-img");
        laptop_img[i+1].src = laptops[i].img;//modificar la img del producto creado a partir de la lista de laptos
        let laptop_title = document.getElementsByClassName("title-product");
        laptop_title[i+1].innerHTML = laptops[i].title;//Modificamos el contenido del titulo
        let laptop_description = document.getElementsByClassName("content-description-product");
        laptop_description[i+1].innerHTML = laptops[i].description;//Modificamos el contenido de la descripción
        let laptop_price = document.getElementsByClassName("cost-product");
        laptop_price[i+1].innerHTML = laptops[i].price_str;//Modificamos el contenido del precio en string
        //intendo de manipulación modificando el ID del boton add
        let btn_add = document.getElementsByClassName("btn-add");
        btn_add[i+1].id = laptops[i].add_btn_id;
    }
    let reference_box = document.getElementById("portatil-box");//obtenemos el nodo que clonaremos
    reference_box.style.display = "none"; //Desactivamos en div de referencia
}

let products_shop = [];//lista de compras

let add_product =(evemt) =>{//la función recibe como parametro el objeto this desde donde es llamado
    console.log(event.target);
    const index = laptops.findIndex(element => element.add_btn_id == event.target.id);//obtenemos la posición del indice donde se encuentra el id especifico del btn
    products_shop.push(laptops[index]);//agregamos a la lista de compras el objeto especifico que identificamos mediante el ID del botón agregar
    alert("Haz agregado " + laptops[index].title + " al carrito.")
    localStorage.setItem("shop",JSON.stringify(products_shop));//lo enviamos al local storage pero antes lo convertimos el objeto a un JSON
}


window.onload = function() {
    products_laptops();//Llamamos a la función
}