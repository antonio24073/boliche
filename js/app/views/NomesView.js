class NomesView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(model) {
        return `
            ${model.frames.map(n => `
            ${n.contador==0||n.contador==1?`
            ${n.contador==0?`<table border=1 style="float:left">`:``}
            <tr>
                <td>${n.jogador.nome}</td>
            </tr>
            <tr>
                <td>Pontos:</td>
            </tr>
            ${n.contador==1?`</table>`:``}
            `:``}
            `).join('')}
        `;
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}