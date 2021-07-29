const colors = require("colors");
const Tarea = require("./tarea");
class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea = (desc) => {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  };

  get listadoArr() {
    const tareas = [];

    Object.keys(this._listado).forEach((key) => {
      tareas.push(this._listado[key]);
    });

    return tareas;
  }

  cargarTareasFromArray(tareas) {
    if (!tareas) return;

    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {

    let idx = 0;

    this.listadoArr.forEach((task) => {
      const { desc, completadoEn } = task;
      idx++;
      const complete = completadoEn
        ? colors.green("Completada")
        : colors.red("Pendiente");
      console.log(`${colors.green(idx)} ${desc} :: ${complete}`);
    });
  }
}

module.exports = Tareas;
