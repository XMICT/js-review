const dia = 1;
const hora = 10;

//Consultar en una tienda que arroja un mensaje con su hora de apertura

// Solucion extensa
/*
let horaApertura;
let mensaje

    if ([0,6].includes(dia)){
        horaApertura = 9
    }else{
        horaApertura = 11
    }

    if (hora >= horaApertura){
        mensaje = 'Esta abierto';
    }else{
        mensaje = `Esta cerrado, abrimos a las ${horaApertura}`;
    }
*/

// Solucion corta, operadores ternarios

const horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

const mensaje = ( hora >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`;

console.log({hora, mensaje})