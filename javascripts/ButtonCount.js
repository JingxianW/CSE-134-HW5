class CustomButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    this.count = 0;

    const button = document.createElement('button');
    button.textContent = `Times Clicked: ${this.count}`;
    
    button.addEventListener('click', () => {
      button.textContent = `Times Clicked: ${++this.count}`;
    });

    shadowRoot.appendChild(button);
  }
}

customElements.define('button-count', CustomButton);
