const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea el archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
};