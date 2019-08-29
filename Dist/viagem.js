"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, VelocidadeM, Rendimento) {
        this.tempoGasto = tempoGasto;
        this.VelocidadeM = VelocidadeM;
        this.Rendimento = Rendimento;
    }
    Viagem.prototype.exibir = function () {
        throw new Error("Method not implemented.");
    };
    Viagem.prototype.distancia = function () {
        return (this.tempoGasto * this.VelocidadeM);
    };
    Viagem.prototype.consumo = function () {
        return (this.distancia() / this.Rendimento);
    };
    return Viagem;
}());
exports.Viagem = Viagem;
