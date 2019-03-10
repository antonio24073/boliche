class FramesView{
    constructor(elemento){
        this._elemento = elemento;
    }
    template(){
        return `
        <table>
            <tbody>
            
            </tbody>
        </table>
        `;
    }
    update(model){
        this._elemento.innerHTML=this.template(model);
    }
}