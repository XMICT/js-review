const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}



// Niega el valor, y asigna el valor contrario
console.warn('Not o negacion');

console.log(!true); // false
console.log(!regresaFalse()); // true



// Evalua verdadero cuando todos los valores son verdaderos
console.warn('Operador AND');

console.log(true && true); // true

//* Nota: Cuando se comparan los valores, en caso de que js determine que un valor no cumple con el requsito para que una funcion arroje un resultado, entonces solo se ejecuta hasta ahi la operacion.

console.log(
    regresaFalse() // Como regresa falso js determina que el resultado de la operacion sera falso y omite el siguiente valor
    && regresaTrue()
); // false

console.log(regresaTrue() && regresaFalse()); // Ejecuta los dos valores



// Evalua falso solo si todos los valores ingresados son falsos
console.warn('Operador OR');

console.log(true || false);
console.log(false || false)

//* Lo mismo sucede con OR

console.log(
    regresaTrue() // Como solo necesita un true para determinar el resultado, solio evalua el primer valor
    || regresaFalse()
); // true



console.warn('Asignaciones')

// Cualquiera de estos valores es considerado como false
const soyNull = null;
const soyUndefined = undefined;
const soyFalse = false;

//* Operador AND solo necesita un false para determinar el resultado (false)
const a1 = 'Hola'       // pasa
            && 'Mundo'  // pasa
            && soyNull  // pasa (Determino resultado)
            && 'Carlos' // no pasa
            && soyUndefined // no pasa

const a2 = 'Hola' && 'Mundo' // pasa al ultimo valor

console.log('And', a1); // false
console.log('And', a2); // Mundo

//* Operador OR solo necesita un true para determinar el resultado (true)
const a3 =  'Hola'      // Pasa (Determino resultado)
            || soyFalse // No pasa
            || 'Mundo'; // No pasa

const a4 =  soyFalse    // Pasa
            || 'Hola'   // Pasa (Determino resultado)
            || soyNull  // No pasa
            || 'Mundo';  // No pasa

console.log('OR', a3); // 'Hola'
console.log('OR', a4); // 'Hola'