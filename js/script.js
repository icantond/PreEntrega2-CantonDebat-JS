const DESCUENTOEFECTIVO = 0.15;
const DESCUENTOTARJETA = 0.05;

function Producto(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}
const productos = [
    new Producto(1, "Sahumerio Champa", 250),
    new Producto(2, "Sahumerio Palo Santo", 250),
    new Producto(3, "Sahumerio Mirra", 250),
    new Producto(4, "Bombas defumadoras Romero", 350),
    new Producto(5, "Bombas defumadoras Incienso", 350),
    new Producto(6, "Bombas defumadoras Sándalo", 350),
    new Producto(7, "Aceite esencial de Tomillo", 800),
    new Producto(8, "Aceite esencial de Menta", 800),
    new Producto(9, "Aceite esencial 32 hierbas", 800)
];

const carrito = [];
while (true) {
    let codigo = parseInt(prompt("Ingresa el código del producto o 0 para terminar la compra:\n1 - Sahumerios Champa $250\n2 - Sahumerios Palo Santos $250\n3 - Sahumerios Mirra $250\n4 - Bombas defumadoras Romero $350\n5 - Bombas defumadoras Incienso $350\n6 - Bombas defumadoras Sandalo $350\n7 - Aceite Esencial de Tomillo $800\n8 - Aceite Esencial de Menta $800\n9 - Aceite Esencial 32 Hierbasos $800\n"));
    if (codigo === 0) {
        break;
    }

    let productoEncontrado = false;
    for (const producto of productos) {
        if (producto.codigo === codigo) {
            carrito[codigo] = producto;
            productoEncontrado = true;
            break;
        }
    }

    if (!productoEncontrado) {
        alert("No se ha encontrado ningún producto con el código ingresado");
    }
}

let total = 0;
let mensaje = "Productos en el carrito:\n";

for (const codigo in carrito) {
    const producto = carrito[codigo];
    total += producto.precio;
    mensaje += `- ${producto.nombre}: $${producto.precio}\n`;
}
mensaje += `\nTotal: $${total}`;
alert(mensaje);

let metodoPago;
while (metodoPago != 1 && metodoPago != 2 && metodoPago != 3) {
    metodoPago = parseInt(prompt("El total a pagar con IVA es $" + total + ". Ingresá el método de pago\n1 - Efectivo\n2 - Tarjeta\n3 - Transferencia"));
    if (metodoPago != 1 && metodoPago != 2 && metodoPago != 3) {
        alert("Ingresá un método de pago válido");
    }
}

switch (metodoPago) {
    case 1:
        alert("Tenés 15% de descuento por abonar en efectivo. El precio final es $" + (total - (total * DESCUENTOEFECTIVO)));
        break;
    case 2:
        alert("Tenes 5% de descuento por abonar con tarjeta. El precio final es $" + (total - (total * DESCUENTOTARJETA)));
        break;
    case 3:
        alert("El precio final es $" + total);
        break;
}
