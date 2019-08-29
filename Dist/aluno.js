"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    //nome=atributo
    //nome-string-1 manera de declarar a variavel
    //outra manera de declarar o atributo
    function Aluno(nome) {
        this.nome = nome;
    }
    //this=atributo/sempre por antes parra ele localizar
    //this.nome=nome 
    Aluno.prototype.exibir = function () {
        console.log("Nome:" + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
