class FramesView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(game) {
        return `
        <table style="float:left">
            ${game.listFrames.map(l=>`
            <tr>
            ${l.jogador}
                ${l.frames.map(f => `
                <td>
                <table border=1>
                    <tr>
                        ${f.jogadas.map(j => `
                        <td>${j.pinos}</td>
                            `).join('')}
                    </tr>
                    <tr>
                    <td>${f.pontos}</td>
                        <td>${f.acumuladorDePontos}</td>
                    </tr>
                </table>
                </td>
                `).join('')}
            </tr>
            `).join('')}
            </table>
        `;
    }
    update(game) {
        this._elemento.innerHTML = this.template(game);
    }
}
//<td>${n.jogador.nome}</td>
  //                  <td>Pontos:</td>