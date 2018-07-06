import Menu from '../../../src/js/composants/Menu';
import {expect} from 'chai';

describe("Je test les fonctionnalités du composant 'Menu'", () => {
  context("Etant donnée un composant 'menu'", () => {
    const parser = new DOMParser();
    const menu = parser.parseFromString('<j-menu><span>PremierLien</span><span>DeuxiemeLien</span></j-menu>', 'application/xml');
    describe("Quand j'affiche le menu", () => {

      before(() => {
        document.body.appendChild(menu);
      });

      after(() => {
        document.body.removeChild(menu);
      });

      const menuDansLeDOM = document.body.querySelector('j-menu');

      it("Alors je retrouve le menu dans le DOM", () => {
        expect(menuDansLeDOM).to.exist;
      });

      it("Alors le slot contenu dans le menu est bien formater", () => {
        const contenuPremierLienAttendu = '<li>PremierLien</li>';
        const contenuSlot = menuDansLeDOM.shadowRoot.querySelector('slot').assignedNodes();

        expect(contenuSlot.length).to.equal(2);
        expect(contenuSlot[0].innerHTML).to.equal(contenuPremierLienAttendu);
      });
    });
  });
});
