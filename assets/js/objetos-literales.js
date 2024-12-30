let personaje = {
    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'Malibu, California'
    },   
}

console.log(personaje);

//? Formas de acceder a los valores de un objeto
//Notacion de punto
console.log('Nombre:', personaje.nombre);

//Notacion de corchetes
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. de trajes: ', (personaje.trajes.length));
console.log('Ultimo traje:', (personaje.trajes[personaje.trajes.length - 1]));

//editar objeto
personaje.vivo = true;

//eliminar propiedad del objeto
delete personaje.edad;

//freeze
Object.freeze(personaje);

//Obtener pares clave valor
const entries = Object.entries(personaje);
console.log(entries);

//Obtener propiedades del objeto
const properties = Object.getOwnPropertyNames(personaje);

//Obtener valores del objeto
const values = Object.values(personaje);

console.log({properties, values});
