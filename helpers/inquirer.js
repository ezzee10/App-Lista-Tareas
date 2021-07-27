const colors = require('colors');
const inquirer = require('inquirer');
const {questions, pause} = require('./objects');

const mostrarMenu = async () => {
    console.clear();
    console.log(colors.red('************************** \n   Seleccione una opción \n************************** \n'))
    console.log(colors.yellow('¿Qué desea hacer?'))

    return await inquirer.prompt(questions);
}

const pausa = async () => {

    await inquirer.prompt(pause);
}

module.exports = { mostrarMenu , pausa }
