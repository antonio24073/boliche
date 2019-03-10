class FramesView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(model) {
        return `
        Vez do jogador: ${model.vez().nome}
        <table>
            <tbody>
            ${model.frames.map(n => `
                <tr>
                    <td>${n.jogador.nome}</td>
                    ${n.jogadas.map(m => `
                    <td>${m.pinos}</td>
                        `).join('')}
                </tr>
              `).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}