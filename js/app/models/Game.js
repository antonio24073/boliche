class Game {
    constructor() {
        this._listFrames = [];
        this._contador = 0;
    }
    adiciona(listFrame){
        this._listFrames.push(listFrame);
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

    bonus(frame) {
        if (this.listFramesAtual.penultimaESpare()) {
            this.listFramesAtual.frames[this.listFramesAtual.frames.length - 2].pontos += frame.jogadas[0].pinos;
        }
        if (this.listFramesAtual.penultimaEStrike() && !(this.listFramesAtual.atualEStrike())) {
            this.listFramesAtual.frames[this.listFramesAtual.frames.length - 2].pontos += frame.pontos;
        } else if (!this.listFramesAtual.antepenultimaEStrike() && this.listFramesAtual.penultimaEStrike() && this.listFramesAtual.atualEStrike()) {
            this.listFramesAtual.frames[this.listFramesAtual.frames.length - 2].pontos += frame.pontos;
        } else if (this.listFramesAtual.antepenultimaEStrike() && this.listFramesAtual.penultimaEStrike() && this.listFramesAtual.atualEStrike()) {
            this.listFramesAtual.frames[this.listFramesAtual.frames.length - 2].pontos += frame.pontos;
            this.listFramesAtual.frames[this.listFramesAtual.frames.length - 3].pontos += frame.pontos;
        }
        this.listFramesAtual.recalcularSomatorias();
    }
}