let shop_function = () =>{

    if(localStorage.getItem("shop")){
        let shop_list = JSON.parse(localStorage.getItem("shop"));//forma de transformar un JSON a objeto, el cual, es llamado del local storage // va en el carrito
        let i;
        let final_price = 0;
        for (i in shop_list){
            let nodo_container = document.getElementById("products-car-container");
            let nodo_reference = document.getElementById("product-car-box");
            let clone_nodo = nodo_reference.cloneNode(true);
            nodo_container.appendChild(clone_nodo);
            //imagen
            let img_product = document.getElementsByClassName("img-product");
            img_product[parseInt(i)+1].src = shop_list[i].img;
            //titulo producto
            let title_product = document.getElementsByClassName("title-product");
            title_product[parseInt(i)+1].innerHTML = shop_list[i].title;
            //price producto
            let price_product = document.getElementsByClassName("price-product");
            price_product[parseInt(i)+1].innerHTML = shop_list[i].price_str;
            //precio final de la compra
            final_price += shop_list[i].price_int;
        }
        //ocultar el nodo de referencia
        let nodo_reference = document.getElementById("product-car-box");
        nodo_reference.style.display = "none";
        //devolver el valor a pagar
        let final_cost = document.getElementsByClassName("final-cost");
        final_cost[0].innerHTML = final_price;
        //mostrar el boton para pagar
        let btn_pagar = document.getElementsByClassName("btn-pay-box");
        btn_pagar[0].style.display = "block";
    }else{
        alert("Sin productos en el carrito.");
    }
}

window.onload = function() {
    shop_function();
}