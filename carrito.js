let carrito = [];

function agregarAlCarrito(producto) {
    const item = carrito.find(p => p.id === producto.id);
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    console.log(carrito);
}

function mostrarCarrito() {
    carrito.forEach(item => {
        console.log(`Producto: ${item.nombre}, Cantidad: ${item.cantidad}`);
    });
}
