class Frame{
    constructor(){
        this._jogadas= [];
    }
    adiciona(jogada){
        this._jogadas.push(jogada);
    }
    get jogadas(){
        return [].concat(this._jogadas);
    }
    get jogador(){
        return this._jogador;
    }
    set jogador(jogador){
        this._jogador=jogador;
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