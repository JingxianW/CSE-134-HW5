class CustomButton extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    this.count = 0;
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        button {
          background-color: #43312b;
          border: none;
          border-radius: 10px;
          color: white;
          padding: 10px;
          font-size: 1.2vw;
          cursor: pointer;
        }
      </style>
      <button>Times Clicked: ${this.count}</button>
    `;

    const content = template.content.cloneNode(true);
    
    const button = content.querySelector('button');

    button.addEventListener('click', () => {
      // alert('clicked!')
      button.textContent = `Times Clicked: ${++this.count}`;
    });

    shadowRoot.appendChild(content);
  }
}

customElements.define('button-count', CustomButton);
