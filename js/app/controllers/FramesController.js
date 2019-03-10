class FramesController{
    constructor(){
        let $ = document.querySelector.bind(document);
        console.log($('.form'));
        //$('.form').addEventListener("click", this.jogar(event));
        $('.form').onsubmit = this.jogar.bind(this);
        this._inputPinos = $("pinos");
    }
    jogar(event){
        event.preventDefault();
        console.log("aqui");
    }
}