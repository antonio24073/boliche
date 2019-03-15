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
        this._game = new Game();
        this._game.adiciona(new ListFrames(new Jogador(this._inputJogador1.value)));
        this._game.adiciona(new ListFrames(new Jogador(this._inputJogador2.value)));
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

        if (this._game.listFramesAtual.frames.length == 18) {
            if (this._frame.jogadas.length == 3) {
                this._game.listFramesAtual.adiciona(this._frame);
                this._game.passaVez();
                this._frame = new Frame();
            }
        } else if (this._game.listFramesAtual.frames.length > 19) {
            throw Error('É necessário criar um novo jogo.');
        } else {
            if (this._frame.jogadas.length == 2 || this._jogada.pinos==10) {
                this._game.listFramesAtual.adiciona(this._frame);
                this._frame.pontos = this._frame.jogadas.reduce((total, jogada) => total + jogada.pinos, 0.0);
                if (this._game.listFramesAtual.penultimaESpare()) {
                    console.log("aqui1");
                    this._game.listFramesAtual.frames[this._game.listFramesAtual.frames.length - 2].pontos += this._frame.jogadas[0].pinos;
                }
                if (this._game.listFramesAtual.penultimaEStrike() && !(this._game.listFramesAtual.atualEStrike())) {
                    console.log("aqui2");
                    this._game.listFramesAtual.frames[this._game.listFramesAtual.frames.length - 2].pontos += this._frame.pontos;
                } else if (!this._game.listFramesAtual.antepenultimaEStrike() && this._game.listFramesAtual.penultimaEStrike() && this._game.listFramesAtual.atualEStrike()) {
                    this._game.listFramesAtual.frames[this._game.listFramesAtual.frames.length - 2].pontos += this._frame.pontos;
                } else if (this._game.listFramesAtual.antepenultimaEStrike() && this._game.listFramesAtual.penultimaEStrike() && this._game.listFramesAtual.atualEStrike()) {
                    this._game.listFramesAtual.frames[this._game.listFramesAtual.frames.length - 2].pontos += this._frame.pontos;
                    this._game.listFramesAtual.frames[this._game.listFramesAtual.frames.length - 3].pontos += this._frame.pontos;
                }
                this._game.listFramesAtual.recalcularSomatorias();
                this._game.passaVez();
                this._frame = new Frame();
            }
        }
        this._vezDoJogadorView.update(this._game);
        this._nomesView.update(this._game);
        this._framesView.update(this._game);
    }
}