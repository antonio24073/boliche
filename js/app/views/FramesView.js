class FramesView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(game) {
        return `
            ${game.listFrames.map(l=>`
                ${l.frames.map(n => `<table border=1 style="float:left">
                    <tr>
                        ${n.jogadas.map(m => `
                        <td>${m.pinos}</td>
                            `).join('')}
                    </tr>
                    <tr>
                    <td>${n.pontos}</td>
                        <td>${n.acumuladorDePontos}</td>
                    </tr>
                    </table>
                `).join('')}
            `).join('')}
        `;
    }
    update(game) {
        this._elemento.innerHTML = this.template(game);
    }
}
//<td>${n.jogador.nome}</td>
  //                  <td>Pontos:</td>