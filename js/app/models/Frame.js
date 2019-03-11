class Frame{
    constructor(){
        this._jogadas= [];
    }
    adiciona(jogada){
        this._jogadas.push(jogada);
    }
    get jogadas(){
        return this._jogadas;
    }
    get jogador(){
        return this._jogador;
    }
    set jogador(jogador){
        this._jogador=jogador;
    }
    get contador(){
        return this._contador;
    }
    set contador(contador) {
        this._contador = contador;
    }
    get pontos(){
        return this._pontos;
    }
    set pontos(pontos) {
        this._pontos = pontos;
    }
    get acumuladorDePontos(){
        return this._acumuladorDePontos;
    }
    set acumuladorDePontos(acumuladorDePontos) {
        this._acumuladorDePontos = acumuladorDePontos;
    }
}