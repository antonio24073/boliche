class VezDoJogadorView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(model) {
        return `
        Vez do jogador: ${model.vez().nome}
        `;
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}