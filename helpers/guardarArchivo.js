/* Función que genera un archivo .json */

const fs = require("fs");

const guardarDB = (file) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./db/data.json`, JSON.stringify(file), function (err) {
      if (err) reject(err);
      else resolve(`data.json creado correctamente`);
    });
  });
};

const leerDB = () => {
  if (!fs.existsSync("./db/data.json")) {
    return;
  }

  const data = fs.readFileSync("./db/data.json", { encoding: "utf-8" });
  const dataParser = JSON.parse(data);

  return dataParser;
};

module.exports = { guardarDB, leerDB };
