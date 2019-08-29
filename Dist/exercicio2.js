"use strict";
exports.__esModule = true;
var viagem_1 = require("./viagem");
var viagem1 = new viagem_1.Viagem(2, 100, 10);
console.log("A distancia é:" + viagem1.distancia());
console.log("O consumo é:" + viagem1.consumo());
