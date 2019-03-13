class ListFrames{
    
    constructor() {
        this._frames = [];
    }
    
    adiciona(frame) {
        // frame._contador=this._contador;
        // this._contador++;
        this._frames.push(frame);
        this._frames[this.frames.length-1].acumuladorDePontos=this.acumuladorDePontos();
    }
    get frames() {
        return [].concat(this._frames);
    }
    somarPontosAte(end){
        return this._frames.slice([0, end]).reduce((total, frame) => total + frame.pontos, 0.0);
    }
}