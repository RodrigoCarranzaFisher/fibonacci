
alert("Secuncia fibonacci");


function fibonacci(numero) {
    if (!validar_numero(numero)) {
        alert("número no valido, inserta un número menor o igual a 50");
        return;
    }
    let secuencia = [];
    let append = 0;
    let numero_actual = 1;
    while (secuencia.length <= numero) {
        secuencia.push(append);
        append += numero_actual;
        numero_actual = append - numero_actual;
    }
    return secuencia;
}

function validar_numero(numero) {
    let confirmar = false;
    if (numero <= 50) {
        confirmar = true;
    }
    return confirmar;
}


let numero = prompt("Selecciona un número del 1 al 50", 50);

alert(`La secuencia fibonacci del 1 al ${numero} es: ${fibonacci(numero)}`);
