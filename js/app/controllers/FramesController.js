
var $ = document.querySelector.bind(document);
class FramesController {
    constructor() {
        this._inputJogador1 = $('#jogador1');
        this._inputJogador2 = $('#jogador2');
        $('.formJogadores').onsubmit = this.novoJogo.bind(this);

        this._inputPinos = $('#pinos');
        $('.formJogadas').onsubmit = this.pontuar.bind(this);

        this._game=null;
        this._framesView = new FramesView($('#framesView'));
    }
    novoJogo(event) {
        event.preventDefault();
        this._jogador1 = new Jogador(this._inputJogador1);
        this._jogador2 = new Jogador(this._inputJogador2);
        this._game = new Game(this._jogador1,this._jogador2);
        this._framesView.update(this._game);
    }
    pontuar(event) {
        event.preventDefault();
        this._game.adiciona(new Frame($('#pinos').value));
        this._framesView.update(this._game);
    }
}