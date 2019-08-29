var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, VelocidadeM, Rendimento, Distancia, Consumo) {
        this.tempoGasto = tempoGasto;
        this.VelocidadeM = VelocidadeM;
        this.Rendimento = Rendimento;
        this.Distancia = Distancia;
        this.Consumo = Consumo;
    }
    Viagem.prototype.distancia = function () {
        return (this.tempoGasto * this.VelocidadeM);
    };
    Viagem.prototype.consumo = function () {
        return (this.distancia() / this.Rendimento);
    };
    return Viagem;
}());
