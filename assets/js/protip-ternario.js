//Puede utilizarse en functiones
const numeroMayor = (a,b) => (a >= b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '20 Dolares' : '50 Dolares';

console.log(numeroMayor(10, 15));
console.log(tieneMembresia(true));

// Condicional ternario con arreglos
const amigo = false;

const amigosArr = [
    'Peter',
    'Tony',
    'Hulk',
    (amigo) ? 'Thor' : 'Loki',
    (()=>'Nick Fury')()     // Funcion anonima auto ejecutable
];

console.log(amigosArr);

// Condicional ternario anidado
const nota = 65;
const grado = nota >= 95 ? 'A+' :
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' : 'F';

console.log({nota, grado});