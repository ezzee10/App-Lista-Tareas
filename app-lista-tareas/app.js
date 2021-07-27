const { mostrarMenu, pausa } = require("../helpers/inquirer");
const Tarea = require("../models/tarea");
const Tareas = require("../models/tareas");

const main = async () => {
  // let opt = "";

  // do {
  //   let { option } = await mostrarMenu();
  //   opt = option;
  //   console.log({ opt });
  //   await pausa();
  // } while (opt !== "0");

  //Ejemplo de como se visualizan las tareas
  let tarea = new Tarea("Comprar comida");
  console.log(tarea);

  let tareas = new Tareas();

  tareas._listado[tarea.id] = tarea;
  console.log(tareas);
};

main();
