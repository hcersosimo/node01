const colors = require('colors');

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar')

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.rainbow}`))
            .catch(e => console.log(e));
        break;
}