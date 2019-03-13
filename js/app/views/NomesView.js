class NomesView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(game) {
        return `
        <table border=1 style="float:left">
            ${game.listFrames.map(n => `
            
            <tr>
                <td>${n.jogador.nome}</td>
            </tr>
            <tr>
                <td>Pontos:</td>
            </tr>
            `).join('')}
            </table>
        `;
    }
    update(game) {
        this._elemento.innerHTML = this.template(game);
    }
}