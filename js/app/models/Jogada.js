class Jogada{
    constructor(pinos){
        this._pinos = pinos;
    }
    get pinos(){
        return this._pinos;
    }
    play(){
        return this._pinos*2;
    }
}