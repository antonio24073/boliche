class Frame{
    constructor(jogador, pinos){
        this._jogador = jogador;
        this._pinos = pinos;
    }
    get pinos(){
        return this._pinos;
    }
    get jogador(){
        return this._jogador;
    }
    get bonus(){
        return this._bonus;
    }
    set bonus(bonus) {
        this._bonus = bonus;
    }
    get pontos(){
        return this._pontos;
    }
    set pontos(pontos) {
        this._pontos = pontos;
    }
}