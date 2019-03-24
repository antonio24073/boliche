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

    it("Calcula pontos", function() {
        let frame1 = new Frame();
        frame1.adiciona(new Jogada(3));
        frame1.adiciona(new Jogada(2));
        game.listFramesAtual.adiciona(frame1);
        game.passaVez();
        let frame2 = new Frame();
        frame2.adiciona(new Jogada(5));
        frame2.adiciona(new Jogada(5));
        game.listFramesAtual.adiciona(frame2);

        expect(5).toEqual(game.listFrames[0].frames[0].pontos);
        expect(10).toEqual(game.listFrames[1].frames[0].pontos);
    });
    it("Faz Strike", function() {
        let frame1 = new Frame();
        frame1.adiciona(new Jogada(10));
        game.listFramesAtual.adiciona(frame1);
        game.passaVez();
        let frame2 = new Frame();
        frame2.adiciona(new Jogada(5));
        frame2.adiciona(new Jogada(3));
        game.listFramesAtual.adiciona(frame2);
        game.passaVez();
        let frame3 = new Frame();
        frame3.adiciona(new Jogada(2));
        frame3.adiciona(new Jogada(4));
        game.listFramesAtual.adiciona(frame3);
        game.passaVez();

        expect(16).toEqual(game.listFrames[0].frames[0].pontos);
    });
    it("Faz Spare", function() {
        let frame1 = new Frame();
        frame1.adiciona(new Jogada(5));
        frame1.adiciona(new Jogada(5));
        game.listFramesAtual.adiciona(frame1);
        game.passaVez();
        let frame2 = new Frame();
        frame2.adiciona(new Jogada(5));
        frame2.adiciona(new Jogada(3));
        game.listFramesAtual.adiciona(frame2);
        game.passaVez();
        let frame3 = new Frame();
        frame3.adiciona(new Jogada(2));
        frame3.adiciona(new Jogada(4));
        game.listFramesAtual.adiciona(frame3);
        game.passaVez();

        expect(12).toEqual(game.listFrames[0].frames[0].pontos);
    });
    it("E assim por diante ...", function() {
    });
});
