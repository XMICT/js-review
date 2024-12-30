// ? Formas de definir una funcion
// Funcion declarativa
function saludar(nombre) {
    console.log('Hola', nombre);
}

// Funcion expresiva o anonima
const saludar2 = function(nombre){
    console.log('Hola', nombre);
}

// Funcion de flecha
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

// Funcion de flecha con argumento
const saludarFlecha2 = (nombre) => {
    console.log('Hola', nombre);
}


// ? Formas de retornar una funcion
// Funcion de declarativa con argumento y retorno implicito
function saludarRetorna(nombre){
    return `Hola ${nombre}`;
}

// Funcion de flecha con argumento y retorno implicito
const saludarFlechaRetorno = (nombre) => {
    return `Hola ${nombre}`
};

// Funcion de flecha con argumento y retorno a una linea
const saludarFlechaRetorno2 = (nombre) => `Hola ${nombre}`;

// ? Ejercicios 
// Ejercicio 1
function getAleatorio(){
    return Math.random();
}

// Ejercicio 2
const getAleatorio1 = () => Math.random();

const nombre = 'Carlos Guardiola';

saludar1('Carlos');
console.log(getAleatorio1());