class Game {
    constructor() {
        this._listFrames = [];
        this._contador = 0;
    }
    adiciona(listFrames){
        this._listFrames.push(listFrames);
    }
    get listFramesAtual(){
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