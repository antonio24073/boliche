class Game {
    constructor(jogador1, jogador2) {
        this._jogador1 = jogador1;
        this._jogador2 = jogador2;
        this._frames = [];
        this._contador = 0;
    }
    isPar(){
        if(this._frames.length % 2 == 0){
            return 1;
        }else{
            return 0;
        }
    }
    vez() {
        if (this.isPar()) {
            return this._jogador1;
        } else {
            return this._jogador2;
        }
    }

    totalPinosDerrubadosNaPenultima() {
        if (this._frames.length >= 3) {
            return this._frames[this._frames.length - 3].jogadas.reduce((total, jogada) => total + jogada.pinos, 0.0);
        }
        return 0;
    }
    penultimaESpare() {
        if(this.penultimaEStrike()){
            return false;
        }
        return this.totalPinosDerrubadosNaPenultima() == 10;
    }
    antepenultimaEStrike() {
        if (this._frames.length >= 5) {
            return this._frames[this._frames.length - 5].jogadas[0].pinos == 10;
        }
        return false;
    }
    penultimaEStrike() {
        if (this._frames.length >= 3) {
            return this._frames[this._frames.length - 3].jogadas[0].pinos == 10;
        }
        return false;
    }
    atualEStrike() {
        if (this._frames.length >= 1) {
            return this._frames[this._frames.length - 1].jogadas[0].pinos == 10;
        }
        return false;
    }
    adiciona(frame) {
        frame.jogador = this.vez();
        frame._contador=this._contador;
        this._contador++;
        this._frames.push(frame);
        this._frames[this.frames.length-1].acumuladorDePontos=this.acumuladorDePontos();
    }
    get frames() {
        return [].concat(this._frames);
    }
    calculaPontos() {
        if(this._frames.length>=1){
            return this._frames[this._frames.length - 1].jogadas.reduce((total, jogada) => total + jogada.pinos, 0.0);
        }
    }
    acumuladorDePontos(){
        return this._frames.filter(frame => frame._contador%2==this.isPar()).reduce((total, frame) => total + frame.pontos, 0.0);
    }
}