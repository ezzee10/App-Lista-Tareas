const colors = require("colors");
const inquirer = require("inquirer");
const { questions, pause } = require("./objects");

const mostrarMenu = async () => {
  // console.clear();
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

module.exports = { mostrarMenu, pausa, leerInput };
