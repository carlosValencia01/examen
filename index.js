const productController = require("./producto.controller");
const ventaController = require("./ventas.controller");
var mongoose = require("mongoose");
var productSchema = require("./producto.model");
var ventaSchema = require("./ventas.model");

mongoose.connect('mongodb://localhost:27017/examen', { useNewUrlParser: true });
var Producto = mongoose.model('Producto', productSchema, 'productos');
var Venta = mongoose.model('Venta',ventaSchema,'ventas');

async function crearProductoyVenta() {
    var producto = {
        nombre:"producto 3",
        precio:3,
        cantidad:2,
        minimo:15,
        maximo:30,
        costo:20
    };
    var venta = {
        folio:"123",
        cantidad:2,
        subtotal:10,
        iva:10,
        total:100,
        utilidad:10
    };
    var ventaCreated = await ventaController.create(venta,producto,Venta,Producto);
    console.log("------- Venta registrada --------");
    console.log(ventaCreated);
}

crearProductoyVenta();