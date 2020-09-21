const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ (base * i) }\n`;
        }

        fs.writeFile(`./Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base}.txt`);
        });

    })
}

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        reject(`La base: ${base} no es un numero`);
        return;
    }
    console.log('============'.green);
    console.log(`tabla del ${ base }`.green);
    console.log('============'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ (base * i) }`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}