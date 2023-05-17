// Array de productos
const productos = [
  { id: 1, nombre: "Campera", precio: 800 },
  { id: 2, nombre: "Remera", precio: 500 },
  { id: 3, nombre: "Pantalon", precio: 1500 },
];

mostrarProductos();
comprar();

// Función para mostrar los productos
function mostrarProductos() {
  productos.forEach(function (producto) {
    alert(producto.id + "." + producto.nombre + " - $" + producto.precio);
  });
}

// Función para realizar la compra
function comprar() {
  let productoId = parseInt(
    prompt("Ingresa el id del producto que deseas comprar:")
  );
  let cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));

  // Buscar el producto en el array
  const producto = productos.find(function (item) {
    return item.id === productoId;
  });

  // Validar si el producto existe
  if (producto) {
    let total = producto.precio * cantidad;
    alert("--- Detalles de la Compra ---");
    alert("Producto: " + producto.nombre);
    alert("Cantidad: " + cantidad);
    alert("Total a pagar: $" + total);
  } else {
    alert("El producto seleccionado no existe.");
  }
}
