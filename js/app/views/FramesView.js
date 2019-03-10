class FramesView{
    constructor(elemento){
        this._elemento = elemento;
    }
    template(model){
        return `
        <table>
            <tbody>
            ${model.frames.map(n => `
                <tr>
                    <td>${n.pinos}</td>
                </tr>
              `).join('')}
            </tbody>
        </table>
        `;
    }
    update(model){
        this._elemento.innerHTML=this.template(model);
    }
}