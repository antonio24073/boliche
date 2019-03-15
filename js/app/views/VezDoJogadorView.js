class VezDoJogadorView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(game) {
        return `
        Vez do jogador: ${game.listFramesAtual.jogador.nome}
        `;
    }
    update(game) {
        this._elemento.innerHTML = this.template(game);
    }
}