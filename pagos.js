function procesarPago(metodo, monto) {
    console.log(`Procesando pago de $${monto} con ${metodo}...`);
    // Simulación de procesamiento
    setTimeout(() => {
        console.log("Pago procesado con éxito.");
    }, 2000);
}
