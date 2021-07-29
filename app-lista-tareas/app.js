const { mostrarMenu, pausa, leerInput } = require("../helpers/inquirer");
const Tareas = require("../models/tareas");
const { guardarDB } = require("../helpers/guardarArchivo");

const main = async () => {
  let opt = "";
  let tareas = new Tareas();

  do {
    let { option } = await mostrarMenu();
    opt = option;

    switch (opt) {
      case "1":
        const descripcion = await leerInput();
        tareas.crearTarea(descripcion);
        break;
      case "2":
        await guardarDB(tareas.listadoArr, "listado_tareas");
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
