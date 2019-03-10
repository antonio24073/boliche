class Game{
    constructor(jogador1, jogador2){
        this._jogador1=jogador1;
        this._jogador2=jogador2;
        this._frames= [];
    }
    vez(){
        if(this._frames.length%2 == 0){
            return this._jogador1;
        }else{
            return this._jogador2;
        }
    }
    ultimoEStrike(){
        return this._frames[this._frames.length - 1] == 10;
    }
    adiciona(frame){
        frame.jogador = this.vez();
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