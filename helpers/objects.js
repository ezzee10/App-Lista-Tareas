const colors = require('colors');

const questions = {
    type: 'list',
    name: 'option',
    message: 'Seleccione una opción',
    choices: [
        {
            value: '1', 
            name: colors.green('Crear tarea'),
        },
        {
            value: '2', 
            name: colors.green('Listar tareas'),
        }, 
        {
            value: '3', 
            name: colors.green('Listar tareas completadas'),
        },
        { 
            value: '4',
            name: colors.green('Listar tareas pendientes'),
        },
        {
            value: '5',
            name: colors.green('Completar tarea(s)'),
        }, 
        {   value: '6',
            name: colors.green('Borrar tarea'),
        },
        {
            value: '0',
            name: colors.red('Salir'),      
        }
    ],
}

const pause = {
    type: 'input',
    name: 'pause',
    message: `Presione ${colors.blue('ENTER')} para continuar`,
}

module.exports = {pause, questions}