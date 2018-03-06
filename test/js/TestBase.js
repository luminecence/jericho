import {expect} from 'chai';

context('Etant donnée un contexte', () => {
  const toto = 5;
  describe("Quand j'ai une condition", () => {
    it("Alors tout fonctionne", () => {
      expect(toto).to.equal(5);
    });
  });
});