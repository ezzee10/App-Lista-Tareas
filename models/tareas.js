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
}

module.exports = Tareas;
