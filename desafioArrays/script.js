class Productos {
    constructor(nombre, descripcion, precio, stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }

    comprar(cantidad) {
        if (this.stock > cantidad) {
            this.stock -= cantidad;
            let precioFinal = this.precio * cantidad;
            console.log(`Compraste ${cantidad} de ${this.nombre}. Quedan ${this.stock}.
            El costo total es de ${precioFinal}`);
        }else {
            console.log(`Solo quedan ${this.stock}`);
        }
    }
    
    
}

let carrito = [];

const agregarProd = () => {
    let nombre = prompt("Nombre del producto");
    let descripcion = prompt("Descripcion del producto");
    let precio = parseFloat(prompt("Cual es el precio?"));
    let stock = prompt("Stock del producto");
    let prod = new Productos(nombre,descripcion, precio, stock);
    carrito.push(prod);
}

const mostrarProd = () => {
    for (const producto of carrito){
        console.log(`El nombre del producto es ${producto.nombre} La descripcion del producto es ${producto.descripcion} El precio del producto es ${producto.precio} y el stock del producto es ${producto.stock}`);
    }
}

const buscarProd = () => {
    let productoBuscar = prompt("Cual es el nombre del producto que desea buscar?");
    let buscarNombreProd = carrito.find((carrito) => carrito.nombre === productoBuscar);
    console.log(buscarNombreProd);
}


const eliminarProd = () => {
    let buscarNombre = prompt("Cual es el nombre del producto?");
    const producto = carrito.filter((carrito) => {
        return carrito.nombre !== buscarNombre;
    })
    console.log(producto);
}

const limpiarCarrito = () => {
    carrito.splice(0, carrito.length);
    alert("Carrito limpiado")
}

const comprarProducto = () => {
    for (const producto of carrito){
        console.log(`Se tiene los siguientes productos ${producto.nombre} con un precio de ${producto.precio} y un stock de ${producto.stock}`);
    }
    let productoComprar = prompt("Cual es el nombre del producto que desea comprar?");
    let buscarNombreProd = carrito.find((carrito) => carrito.nombre === productoComprar);
    let numeroProdcuto = parseInt(prompt(`Cuantas ${buscarNombreProd.nombre} desea comprar?`))
    buscarNombreProd.comprar(numeroProdcuto);
}

const menuProducto = () => {
    let menu = parseInt(prompt("Menu:\n1. Agregar producto\n2. Mostrar producto\n3. Buscar Producto\n4. Eliminar producto\n5. Comprar producto\n6. Limpiar carrito\n7. Salir"));

    while (menu != 6) {
        switch(menu) {
            case 1:
                agregarProd();
                break;
            case 2:
                buscarProd();
                break;
            case 3:
                buscarProd();
                break;
            case 4:
                eliminarProd();
                break;
            case 5:
                comprarProducto();
                break;
            case 6:
                limpiarCarrito();
                break;
            case 7:
                break;
            default:
                alert("Opcion invalida");
                break;
        }
        menu = parseInt(prompt("Menu:\n1. Agregar producto\n2. Mostrar producto\n3. Buscar Producto\n4. Eliminar producto\n5. Comprar producto\n6. Salir"));
    }
}

menuProducto();