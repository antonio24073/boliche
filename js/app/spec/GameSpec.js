describe("Game", function() {
    var jogada;
    var game;


    beforeEach(function() {
        game = new Game();
        let jogador1 = new Jogador();
        let listFrames1 = new ListFrames(jogador1);
        game.adiciona(listFrames1);
        let jogador2 = new Jogador();
        let listFrames2 = new ListFrames(jogador2);
        game.adiciona(listFrames2);

    });

    it("deveria ser capaz de calcular pontos", function() {
        let frame1 = new Frame();
        frame1.adiciona(new Jogada(3));
        frame1.adiciona(new Jogada(2));
        game.listFramesAtual.adiciona(frame1);
        game.passaVez();
        let frame2 = new Frame();
        frame2.adiciona(new Jogada(0));
        frame2.adiciona(new Jogada(10));
        game.listFramesAtual.adiciona(frame2);

        expect(game.listFrames[0].frames[0].pontos).toEqual(5);
        expect(game.listFrames[1].frames[0].pontos).toEqual(10);
    });
});
