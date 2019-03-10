class Game{
    constructor(){
        this._frames= [];
    }
    adiciona(frame){
        this._frames.push(frame);
    }
    get frames(){
        return [].concat(this._frames);
    }
}