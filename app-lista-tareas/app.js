const { mostrarMenu, pausa, leerInput } = require("../helpers/inquirer");
const Tareas = require("../models/tareas");
const { guardarDB, leerDB } = require("../helpers/guardarArchivo");

const main = async () => {
  let opt = "";
  let tareas = new Tareas();

  const data = leerDB();
  console.log(data);

  do {
    let { option } = await mostrarMenu();
    opt = option;

    switch (opt) {
      case "1":
        const descripcion = await leerInput();
        tareas.crearTarea(descripcion);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    await guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
