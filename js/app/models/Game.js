class Game {
    constructor() {
        this._listFrames = [];
        this._contador = 0;
    }
    adiciona(listFrame){
        this._listFrames.push(listFrame);
    }
    listFrameAtual(){
        return this._listFrames[this._contador];
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