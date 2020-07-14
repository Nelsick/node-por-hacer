 'use strict'

// const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0]

switch( comando ){
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado( argv);

        for (let tarea of listado){
            console.log('############ Por Hacer ############'.blue);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('-----------------------------------'.blue, `\n`);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        console.log(borrado);
        break;
        
    case 'actualizar':
        
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    default:
        console.log('Comando no es reconocido');
}