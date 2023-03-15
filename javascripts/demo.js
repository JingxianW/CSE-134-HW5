class MyButton extends HTMLElement {
    constructor() {
        super();

         const shadowRoot = this.attachShadow({ mode : 'open' });

         const template = document.createElement('template');
         template.innerHTML = `
            <style>
                button {
                    background-color: #07bff;
                    color: #fff;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                }
            </style>
            <button><slot></slot></button>
         `

         shadowRoot.appendChild(template.content.cloneNode);
    }
}

customElements.define('my-button', CustomButton);