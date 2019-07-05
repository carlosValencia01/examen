async function create(product, Product) {

    var productCreated = await Product.create(product)
        .then((data) => {
            console.log("Producto Guardado!!!");
            return data;
        })
        .catch((error) => {
            console.log("Error producto controller");
            return error;
        });
    return productCreated;
}

module.exports.create = create;