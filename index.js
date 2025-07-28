const core=require('@actions/core');

try {
    // Obtener los inputs
    const nombre = core.getInput('nombre');
    const edad = parseInt(core.getInput('edad'), 10);

    // Validar que la edad sea un número válido
    if (isNaN(edad) || edad <= 0) {
        throw new Error('La edad debe ser un número positivo.');
    }

    // Imprimir el nombre tantas veces como la edad
    for (let i = 0; i < edad; i++) {
        console.log(`${nombre}`);
    }
} catch (error) {
    core.setFailed(`Error: ${error.message}`);
}