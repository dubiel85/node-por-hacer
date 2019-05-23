const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        description: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('listar', 'Muestra una tarea por hacer', {
        description: {
            alias: 'desc'
        }
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        description: {
            alias: 'desc',
            demand: true,
            completed: true
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea por hacer existente', {
        description: {
            alias: 'desc',
            demand: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}