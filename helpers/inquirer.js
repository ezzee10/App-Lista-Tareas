const colors = require("colors");
const inquirer = require("inquirer");
const { questions, pause } = require("./objects");

const mostrarMenu = async () => {
  console.clear();
  console.log(
    colors.red(
      "************************** \n   Seleccione una opción \n************************** \n"
    )
  );
  console.log(colors.yellow("¿Qué desea hacer?"));

  return await inquirer.prompt(questions);
};

const pausa = async () => {
  await inquirer.prompt(pause);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "descripcion",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { descripcion } = await inquirer.prompt(question);
  return descripcion;
};

const listadoTareasBorrar = async ( tareas = []) => {

  const choices = tareas.map((tarea, i) => {

    return {
      value: tarea.id,
      name: `${colors.green(`${i + 1}.`)} ${ tarea.desc }`
    }
  })

  choices.unshift({
    value: '0',
    name: colors.green('0. ') + 'Cancelar'
  })

  const question = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices
    },
  ];

  const { id } = await inquirer.prompt(question);

  return id;
  
}

const mostrarListadoChecklist = async ( tareas = []) => {

  const choices = tareas.map((tarea, i) => {

    return {
      value: tarea.id,
      name: `${colors.green(`${i + 1}.`)} ${ tarea.desc }`,
      checked: tarea.completadoEn ? true : false
    }
    
  });

  const question = [
    {
      type: "checkbox",
      name: "ids",
      message: "Selecciones",
      choices
    },
  ];

  const { ids } = await inquirer.prompt(question);

  return ids;
};


const confirmar = async  ( message ) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
}



module.exports = { mostrarMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist };
