const colors = require('colors');
const readline = require('readline');

const mostrarMenu = () => {
    console.clear();
    return new Promise((resolve, reject) => {
        console.log(colors.red('************************** \n   Seleccione una opción \n************************** \n'))
        console.log(colors.yellow('¿Qué desea hacer?'))
        console.log(colors.green('1.'), 'Crear tarea')
        console.log(colors.green('2.'), 'Listar tareas')
        console.log(colors.green('3.'), 'Listar tareas completadas')
        console.log(colors.green('4.'), 'Listar tareas pendientes')
        console.log(colors.green('5.'), 'Completar tarea(s)')
        console.log(colors.green('6.'), 'Borrar tarea')
        console.log(colors.green('0.'), 'Salir')

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Seleccione una opción: ', (opt) => {
            if (opt < 0 || opt > 6 || isNaN(opt) || opt === '') {
                reject('La opción debe ser un número entero entre 0 y 6');
            }
            resolve(opt);
            rl.close();
        });
    });
}

const pausa = () => {

    return new Promise((resolve, reject) => {

        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question(`Presione ${colors.blue('ENTER')} para continuar `, (opt) => {
            rl.close();
	        resolve();
        });
    });
}


module.exports = { mostrarMenu , pausa }
