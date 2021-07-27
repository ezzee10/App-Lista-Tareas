const {mostrarMenu, pausa} = require('../helpers/inquirer');

const main = async () => {

  let opt = '';

  do {
    let { option } = await mostrarMenu();
    opt = option;
    console.log({opt});
    await pausa();
  } while ( opt !== '0');

};

main();

