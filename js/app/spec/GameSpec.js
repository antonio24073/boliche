describe("Game", function() {
    var jogada;

    beforeEach(function() {
        jogada = new Jogada(3);
    });

    it("should be able to play a Song", function() {
        jogada.play();
        expect(jogada.pinos).toEqual(3);
    });
});
