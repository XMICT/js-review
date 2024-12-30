//Retornar objeto en ambas funciones
function crearPersona(nombre, apellido) {
    return { nombre, apellido }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

//Imprimir objeto
console.log(crearPersona('Carlos', 'Guardiola'));
console.log(crearPersona2('Carlos', 'Guardiola'));


//?Formas de obtener los argumentos
//Funcion declarativa utilizando la propiedad exclusiva arguments
function imprimeArgumentos(){
    console.log(arguments)
    return {...arguments};
}

//Funcion flecha utilizando spread para obtener los argumentos
const imprimeArgumentos2 = (edad, ...args) => {
    console.log({edad, args});
    return args;
}

console.log(imprimeArgumentos(10, true, false, 'Carlos', 'Hola'));
console.log(imprimeArgumentos2(10, true, false, 'Carlos', 'Hola'));

//? Formas de obtener los valores de una funcion que retorna arreglos u objetos
// Destructurando arrreglos
const [casado, vivo, sobrenombre, saludo] = imprimeArgumentos2(10, true, false, 'Carlos', 'Hola');
console.log({casado})
console.log({vivo})
console.log({sobrenombre})
console.log({casado})
console.log({saludo})

// Destructurando objetos
const {nombre, apellido} = crearPersona('Carlos', 'Guardiola');
console.log({nombre})
console.log({apellido})

//Objetos alternando la propiedad
const {apellido: nuevoApellido} = crearPersona('Fernando', 'Herrera');

//? Destructurando objeto en los argumentos
const imprimirPropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}

const personaje = {
    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo:false,
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
}

imprimirPropiedades(personaje);

