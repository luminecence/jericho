const template = `
<style>
</style>
<ul>
  <slot></slot>
</ul>
`;

class Menu extends HTMLElement {

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(document.createRange().createContextualFragment(template));
    const slot = this.shadowRoot.querySelector('slot');
    slot.addEventListener('slotchange', () => {
      const contenu = slot.assignedNodes();
      const elementsDuContenu = contenu.filter(element => element instanceof HTMLElement);

      
      console.log(slot.assignedNodes());
    });
  }

}

customElements.define('j-menu', Menu);