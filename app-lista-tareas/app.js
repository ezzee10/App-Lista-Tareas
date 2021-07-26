const {mostrarMenu, pausa} = require('../helpers/mensajes')

const main = async () => {

  let opt = '';

  do {
    try {
      opt = await mostrarMenu();
    }catch (e) {
      console.log(e);
      opt = '';
    }
    console.log({opt});
    await pausa();
  } while ( opt !== '0');
};

main();

