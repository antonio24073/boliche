class Game {
    constructor() {
        this._listFrames = [];
        this._contador = 0;
    }
    adiciona(listFrame){
        this._listFrames.push(listFrame);
    }
    vez() {
        if (this.isPar()) {
            return this._jogador1;
        } else {
            return this._jogador2;
        }
    }
    passaVez(){
        this._contador++;
        if(this._contador==this._listFrames.length)
            this._contador=0;
    }
    get listFrames() {
        return [].concat(this._listFrames);
    }
}