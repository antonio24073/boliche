class Game{
    constructor(jogador1, jogador2){
        this._jogador1=jogador1;
        this._jogador2=jogador2;
        this._frames= [];
    }
    adiciona(frame){
        if(this._frames.length%2 == 0){
            frame.jogador = this._jogador1;
        }else{
            frame.jogador = this._jogador2;
        }
        this._frames.push(frame);
    }
    get frames(){
        return [].concat(this._frames);
    }
    get jogador1(){
        return this._jogador1;
    }
    get jogador2(){
        return this._jogador2;
    }
}