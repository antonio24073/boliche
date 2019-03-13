class FramesView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(model) {
        return `
            ${model.frames.map(n => `
            ${n.contador%2==0?`<table border=1 style="float:left">`:``}
                <tr>
                    ${n.jogadas.map(m => `
                    <td>${m.pinos}</td>
                        `).join('')}
                </tr>
                <tr>
                <td colspan=3>${n.pontos}</td>
                    <td colspan=3>${n.acumuladorDePontos}</td>
                </tr>

                ${n.contador%2==0?``:`</table>`}
                
              `).join('')}
        `;
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
//<td>${n.jogador.nome}</td>
  //                  <td>Pontos:</td>