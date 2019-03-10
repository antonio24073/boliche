
        let $ = document.querySelector.bind(document);
class FramesController{
    constructor(){
        $('.form').onsubmit = this.pontuar.bind(this);
        $('#novoJogo').onclick = this.novoJogo.bind(this);
        this._inputPinos = $('#pinos');

        this._game=new Game();
        this._framesView = new FramesView($('#framesView'));
        this._framesView.update(this._game);
    }
    pontuar(event){
        event.preventDefault();
        this._game.adiciona(new Frame($('#pinos').value));
        this._framesView.update(this._game);
    }
    novoJogo(){
        this._game=new Game();
        this._framesView.update(this._game);
    }
}