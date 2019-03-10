var $ = document.querySelector.bind(document);
class FramesController {
    constructor() {
        this._inputJogador1 = $('#jogador1');
        this._inputJogador2 = $('#jogador2');
        $('.formJogadores').onsubmit = this.novoJogo.bind(this);

        this._inputPinos = $('#pinos');
        $('.formJogadas').onsubmit = this.pontuar.bind(this);

        this._game = null;
        this._frame = new Frame();
        this._framesView = new FramesView($('#framesView'));
    }
    novoJogo(event) {
        event.preventDefault();
        this._jogador1 = new Jogador(this._inputJogador1.value);
        this._jogador2 = new Jogador(this._inputJogador2.value);
        this._game = new Game(this._jogador1, this._jogador2);
        this._framesView.update(this._game);
    }
    pontuar(event) {
        event.preventDefault();
        this._jogada = new Jogada($('#pinos').value);
        this._frame.adiciona(this._jogada);
        if (this._game.frames.length == 4 || this._game.frames.length == 5) {
            if (this._frame.jogadas.length == 3) {
                this._game.adiciona(this._frame);
                this._frame = new Frame();
            }
        } else if (this._game.frames.length > 5) {
            throw Error('É necessário criar um novo jogo.');
        } else {
            if (this._frame.jogadas.length == 2) {
                this._game.adiciona(this._frame);
                this._frame = new Frame();
            }
        }
        this._framesView.update(this._game);
    }
}