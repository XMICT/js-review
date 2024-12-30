const videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger', 'Super Metroid', 'Zelda'];
console.log(videojuegos);

// length: determina el tamaño del arreglo
const length = videojuegos.length;

const firstElement = videojuegos[0];
const lastElement = videojuegos[length - 1]

// foreach: Corre cada uno de los elementos del arreglo

videojuegos.forEach((element, index, array) => {
    console.log({element, index, array});
});

// unshift: Inserta un elemento al inicio del arreglo

const newLength = videojuegos.unshift('Castlevania');
console.log({newLength, videojuegos});

// push: Inserta un elmento al final del arreglo

const newLength2 = videojuegos.push('Metroid');
console.log({newLength2, videojuegos});

// pop: Elimina el ultimo elemento del arreglo

const gameRemvoed = videojuegos.pop();
console.log({gameRemvoed, videojuegos});

// splice: Elimina elementos desde una posicion determinada

const gamesRemoved = videojuegos.splice(1, 2);
console.log({gamesRemoved, videojuegos});

// indexOf: Devuelve la posicion de un elemento

const position = videojuegos.indexOf('Super Metroid');
console.log({position});