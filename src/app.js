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
function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista) {
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
    }
}

function agregarItemDesdeInput() {
    const input = document.getElementById('nuevoItem');
    if (input && input.value.trim() !== '') {
        agregarItem(input.value.trim());
        input.value = '';
    }
}

function limpiarLista() {
    const lista = document.getElementById('lista');
    if (lista) {
        lista.innerHTML = '';
    }
}
