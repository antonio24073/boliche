class ListFrames{
    
    constructor(jogador) {
        this._jogador = jogador;
        this._frames = [];
        this._contador = 0;
    }
    
    adiciona(frame) {
        frame._contador=this._contador;
        this._contador++;
        this._frames.push(frame);
        frame.pontos = frame.jogadas.reduce((total, jogada) => total + jogada.pinos, 0.0);
        this.bonus(frame);
        console.log(this._frames);
        // this._frames[this.   frames.length-1].acumuladorDePontos=this.acumuladorDePontos();
    }
    get jogador() {
        return this._jogador;
    }
    get frames() {
        return this._frames;
    }

    bonus(frame) {
        let penultima = this.frames[this.frames.length - 2];
        let antepenultima = this.frames[this.frames.length - 3];
        if (this.penultimaESpare()) {
            penultima.pontos += frame.jogadas[0].pinos;
        }
        if (this.penultimaEStrike() && !(this.atualEStrike())) {
            penultima.pontos += frame.jogadas[0].pinos;
            penultima.pontos += frame.jogadas[1].pinos;
        } else if (!this.antepenultimaEStrike() && this.penultimaEStrike() && this.atualEStrike()) {
            penultima.pontos += frame.jogadas[0].pinos;
            if(frame.jogadas.length>1){
                this.bonusNoFimDoJogo(frame);
            }
        } else if (this.antepenultimaEStrike() && this.penultimaEStrike() && this.atualEStrike()) {
            penultima.pontos += frame.jogadas[0].pinos;
            antepenultima.pontos += frame.jogadas[0].pinos;
            if(frame.jogadas.length>1){
                this.bonusNoFimDoJogo(frame);
            }
        }
        this.recalcularSomatorias();
    }

    bonusNoFimDoJogo(frame) {
        let ultima = this.frames[this.frames.length - 1];
        let penultima = this.frames[this.frames.length - 2];
        penultima.pontos += frame.jogadas[1].pinos;
        if (frame.jogadas[0].pinos + frame.jogadas[1].pinos == 10) { //spare
            ultima.pontos += frame.jogadas[2].pinos;
        }
        if (frame.jogadas[0].pinos == 10) { //strike na primeira
            ultima.pontos += frame.jogadas[1].pinos;
            ultima.pontos += frame.jogadas[2].pinos;
        }
        if (frame.jogadas[1].pinos == 10) { // strike na segunda
            ultima.pontos += frame.jogadas[2].pinos;
        }
    }
    recalcularSomatorias(){
        this._frames.forEach(frame=>{
            frame.acumuladorDePontos = this.somarPontosAte(frame.contador);
        });
    }
    somarPontosAte(end){
        return this._frames.slice(0, end+1).reduce((total, frame) => total + frame.pontos, 0.0);
    }

    totalPinosDerrubadosNaPenultima() {
        if (this._frames.length >= 2) {
            return this._frames[this._frames.length - 2].jogadas.reduce((total, jogada) => total + jogada.pinos, 0.0);
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
        if (this._frames.length >= 3) {
            return this._frames[this._frames.length - 3].jogadas[0].pinos == 10;
        }
        return false;
    }
    penultimaEStrike() {
        if (this._frames.length >= 2) {
            return this._frames[this._frames.length - 2].jogadas[0].pinos == 10;
        }
        return false;
    }
    atualEStrike() {
        if (this._frames.length >= 1) {
            return this._frames[this._frames.length - 1].jogadas[0].pinos == 10;
        }
        return false;
    }
}