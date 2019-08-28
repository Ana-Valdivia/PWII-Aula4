class Viagem{
    constructor(public tempoGasto:number,public VelocidadeM:number,public Rendimento:number,public Distancia:number,public Consumo:number)
    {}
    distancia():number{
        return (this.tempoGasto * this.VelocidadeM)

    }

    consumo():number{//distancia()=chamar o metodo
        return (this.distancia() / this.Rendimento)

    }
}