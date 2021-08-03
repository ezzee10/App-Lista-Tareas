const { mostrarMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const main = async () => {

  console.clear();

  let opt = "";
  let tareas = new Tareas();

  const data = leerDB();

  data ? tareas.cargarTareasFromArray(data) : null;

  do {
    let { option } = await mostrarMenu();
    opt = option;

    switch (opt) {
      case "1":
        const descripcion = await leerInput('Descripción: ');
        tareas.crearTarea(descripcion);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr); 

        if ( id !== '0') {
            const ok = await confirmar('¿Está seguro?');

            if (ok) {
                tareas.borrarTarea(id);
                console.log('Tarea borrada');
            }
        }

        break;
    }

    await guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();