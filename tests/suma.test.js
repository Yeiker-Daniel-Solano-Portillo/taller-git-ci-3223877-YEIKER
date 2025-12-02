const { suma } = require('../src/app.js');

console.log('=== Tests para la función suma ===');

// Test 1
try {
    const resultado = suma(2, 3);
    if (resultado === 5) {
        console.log('✅ Test 1 pasado: 2 + 3 = 5');
    } else {
        console.log(`❌ Test 1 falló: 2 + 3 = ${resultado}`);
    }
} catch (error) {
    console.error('❌ Test 1 fallado:', error.message);
}

// Test 2
try {
    const resultado = suma(0, 5);
    if (resultado === 5) {
        console.log('✅ Test 2 pasado: 0 + 5 = 5');
    } else {
        console.log(`❌ Test 2 falló: 0 + 5 = ${resultado}`);
    }
} catch (error) {
    console.error('❌ Test 2 fallado:', error.message);
}

// Test 3
try {
    const resultado = suma(-2, -3);
    if (resultado === -5) {
        console.log('✅ Test 3 pasado: -2 + -3 = -5');
    } else {
        console.log(`❌ Test 3 falló: -2 + -3 = ${resultado}`);
    }
} catch (error) {
    console.error('❌ Test 3 fallado:', error.message);
}

console.log('=== Tests completados ===');