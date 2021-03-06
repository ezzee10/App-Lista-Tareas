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

    this.listadoArr.forEach((task, i) => {
      const { desc, completadoEn } = task;
      const complete = completadoEn
        ? colors.green("Completada")
        : colors.red("Pendiente");
      console.log(`${colors.green( i+1 + '.')} ${desc} :: ${complete}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {

    let contadorTareas = 1;

    this.listadoArr.forEach((task, idx) => {

      const { desc, completadoEn } = task;
      const complete = completadoEn
        ? colors.green("Completada")
        : colors.red("Pendiente");

      if (completadas && completadoEn) {
        console.log(`${colors.green(`${contadorTareas}.`)} ${desc} :: ${colors.green(`${completadoEn}.`)}`);
        contadorTareas ++;
      } else if(!completadas && !completadoEn) {
        console.log(`${colors.green(`${contadorTareas}.`)} ${desc} :: ${complete}`);
        contadorTareas++;
      }
    })
  }

  borrarTarea(id) {

    if( this._listado[id] ) {
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids = []) {

    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach(tarea => {
      const task = ids.filter(id => id === tarea.id);
      if(task.length === 0) {
        this._listado[tarea.id].completadoEn = null; 
      }
    })
  }

}

module.exports = Tareas;
