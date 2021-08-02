const colors = require('colors');

const questions = {
    type: 'list',
    name: 'option',
    message: 'Seleccione una opción',
    choices: [
        {
            value: '1', 
            name: colors.green('1. Crear tarea'),
        },
        {
            value: '2', 
            name: colors.green('2. Listar tareas'),
        }, 
        {
            value: '3', 
            name: colors.green('3. Listar tareas completadas'),
        },
        { 
            value: '4',
            name: colors.green('4. Listar tareas pendientes'),
        },
        {
            value: '5',
            name: colors.green('5. Completar tarea(s)'),
        }, 
        {   value: '6',
            name: colors.green('6. Borrar tarea'),
        },
        {
            value: '0',
            name: colors.red('0. Salir'),      
        }
    ],
}

const pause = {
    type: 'input',
    name: 'pause',
    message: `Presione ${colors.blue('ENTER')} para continuar`,
}

module.exports = {pause, questions}