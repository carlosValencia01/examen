var productoController = require("./producto.controller");

async function create(venta, producto, Venta, Producto) {
    console.log(venta,"esta es la venta");
    console.log(producto,"producto");
    var producto = {
        producto: producto
    };

    var productoCreado = await productoController.create(producto, Producto);
    
    venta["producto"] = productoCreado._id;

    //venta["subtotal"] = productoCreado.precio * venta.cantidad;
    console.log("subtotal",(producto.precio));

    
    var ventaCreated = await Venta.create(venta)
        .then((data) => {
            console.log("Venta guardada");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return ventaCreated;
    
}

module.exports.create = create;
