/* Función que genera un archivo .json */

const guardarDB = (file, name = "") => {
  const fs = require("fs");

  return new Promise((resolve, reject) => {
    fs.writeFile(`../db/${name}.json`, JSON.stringify(file), function (err) {
      if (err) reject(err);
      else resolve(`${name}.json creado correctamente`);
    });
  });
};
module.exports = { guardarDB };
