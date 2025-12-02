// Función de suma
function suma(a, b) {
    return a + b;
}

// Mostrar mensaje en consola
console.log('App lista');
console.log('Suma de 2 + 3:', suma(2, 3));

// Exportar funciones para pruebas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { suma };
}