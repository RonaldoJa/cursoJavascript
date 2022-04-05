const menuProducto = () => {
    let nombreProducto;
    let precioProducto;

    
    let menu = parseInt(prompt("Menu:\n1. Registrar producto\n2. Calcular el pago segun las cuotas\n3. Salir"));

    while (menu != 3) {
        switch(menu) {
            case 1:
                registrarProducto();
                break;
            case 2:
                cuotasPagos();
                break;
            case 3:
                break;
            default:
                alert("Opcion invalida");
                break;
        }
        menu = parseInt(prompt("Menu:\n1. Registrar producto\n2. Calcular el pago segun las cuotas\n3. Salir"));
    }

    function registrarProducto() {
        nombreProducto = prompt("Ingrese el nombre del producto");
        while(nombreProducto == '' || nombreProducto == null || nombreProducto.length < 3) {
            nombreProducto = prompt("Ingreso un usuario incorrecto, por favor ingrese un nombre de usuario");
        }

        precioProducto = parseInt(prompt("Cual es el precio del producto?"));
        while(precioProducto == '' || precioProducto == null){
            precioProducto = parseInt(prompt("Ingreso el precio del producto por favor"));
        }

        alert(`Su producto es ${nombreProducto} y su precio es ${precioProducto}`);
    }
    
    function cuotasPagos() {
        let pago = parseInt(prompt("Ingrese el valor del pago"));
        let cuotas = parseInt(prompt("A cuantas cuotas desea diferir el pago?"));
        while (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12) {
            cuotas = parseInt(prompt("Recuerde que solo puede diferir a 1, 3, 6 y 12 meses su pago, por favor ingrese a cuantas cuotas va a difrerir el pago"))
        }
        let pagoTotal = pago / cuotas;
        alert(pagoTotal.toFixed(2));
    }
}

menuProducto();