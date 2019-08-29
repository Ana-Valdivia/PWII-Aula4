export class Viagem{
    exibir() {
        throw new Error("Method not implemented.");
    }
    constructor(public tempoGasto:number,
                public VelocidadeM:number,
                public Rendimento:number)
    {}
    distancia():number{
        return (this.tempoGasto * this.VelocidadeM)

    }

    consumo():number{//instancia=distancia()=chamar o metodo
        return (this.distancia() / this.Rendimento)

    }
}