const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}
const crear = (description) => {

    cargarDB();

    let porHacer = {
        description,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const borrar = (descripcion) => {

    let tempTareas = [];

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === descripcion;
    });

    for (let i = 0; i < listadoPorHacer.length; i++) {
        if (i != index) {
            tempTareas.push(listadoPorHacer[i]);
        }
    }

    listadoPorHacer = tempTareas;

    guardarDB();

    return listadoPorHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}