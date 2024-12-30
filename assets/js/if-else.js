const a = 10;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, ..., 6: Sabado

console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes')
} else {
    console.log('No es Lunes, Martes o Domingo');
}

const dictionaryDays = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(dictionaryDays[dia] || 'Dia no definido'); // Si la llave es null o undefined, se imprime 'Dia no definido'

const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(days[dia] || 'Dia no definido');
