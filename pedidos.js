// Array para almacenar los pedidos
let pedidos = [];

// Función para agregar un pedido
function agregarPedido() {
    const inputPedido = document.getElementById('pedido');
    const nombrePedido = inputPedido.value.trim();

    if (nombrePedido) {
        pedidos.push(nombrePedido);
        mostrarPedidos();
        inputPedido.value = ''; // Limpiar el campo de texto
    } else {
        alert('Por favor, ingrese un nombre para el pedido.');
    }
}

// Función para mostrar los pedidos en la lista
function mostrarPedidos() {
    const listaPedidos = document.getElementById('lista-pedidos');
    listaPedidos.innerHTML = ''; // Limpiar la lista actual

    pedidos.forEach((pedido, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = pedido;

        // Botón para eliminar un pedido
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn btn-danger btn-sm';
        btnEliminar.onclick = () => eliminarPedido(index);

        li.appendChild(btnEliminar);
        listaPedidos.appendChild(li);
    });
}

// Función para eliminar un pedido
function eliminarPedido(index) {
    pedidos.splice(index, 1);
    mostrarPedidos();
}
