class Jogador{
    constructor(nome){
        this._nome = nome;
        this._pontos = 0;
    }
    get nome(){
        return this._nome;
    }
    get pontos(){
        return this._pontos;
    }
    set pontos(pontos){
        this._pontos = pontos;
    }
}