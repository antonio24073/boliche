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

        this._vezDoJogadorView = new VezDoJogadorView($('#vezDoJogadorView'));
        this._nomesView = new NomesView($('#nomesView'));
        this._framesView = new FramesView($('#framesView'));

    }
    novoJogo(event) {
        event.preventDefault();
        this._jogador1 = new Jogador(this._inputJogador1.value);
        this._jogador2 = new Jogador(this._inputJogador2.value);
        this._game = new Game(this._jogador1, this._jogador2);
        this._vezDoJogadorView.update(this._game);
        this._nomesView.update(this._game);
        this._framesView.update(this._game);
    }
    pontuar(event) {
        event.preventDefault();
        if(this._game==null){
            throw Error('É necessário criar um novo jogo.');
        }
        this._jogada = new Jogada(parseInt($('#pinos').value));
        this._frame.adiciona(this._jogada);
        if (this._game.frames.length == 18 || this._game.frames.length == 19) {
            if (this._frame.jogadas.length == 3) {
                this._game.adiciona(this._frame);
                this._frame = new Frame();
            }
        } else if (this._game.frames.length > 19) {
            throw Error('É necessário criar um novo jogo.');
        } else {
            if (this._frame.jogadas.length == 2 || this._jogada.pinos==10) {
                this._frame.pontos = this._frame.jogadas.reduce((total, jogada) => total + jogada.pinos, 0.0);
                this._game.adiciona(this._frame);
                if (this._game.penultimaESpare()) {
                    this._game.frames[this._game.frames.length - 3].pontos += this._frame.jogadas[0].pinos;
                }
                if (this._game.penultimaEStrike() && !(this._game.atualEStrike())) {
                    this._game.frames[this._game.frames.length - 3].pontos += this._frame.pontos;
                } else if (!this._game.antepenultimaEStrike() && this._game.penultimaEStrike() && this._game.atualEStrike()) {
                    this._game.frames[this._game.frames.length - 3].pontos += this._frame.pontos;
                } else if (this._game.antepenultimaEStrike() && this._game.penultimaEStrike() && this._game.atualEStrike()) {
                    this._game.frames[this._game.frames.length - 3].pontos += this._frame.pontos;
                    this._game.frames[this._game.frames.length - 5].pontos += this._frame.pontos;
                }
                this._frame = new Frame();
            }
        }
        this._vezDoJogadorView.update(this._game);
        this._nomesView.update(this._game);
        this._framesView.update(this._game);
    }
}