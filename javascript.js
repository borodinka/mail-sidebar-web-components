const appSidebarButtonTemplate = document.getElementById('app-sidebar-button-template');

class AppSidebarButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
	
		this.shadowRoot.append(appSidebarButtonTemplate.content.cloneNode(true));
	
		const text = this.getAttribute('text');
		const unreadCount = this.getAttribute('unreadCount');
	
		this.shadowRoot.querySelector('.button__text').innerText = text;
		this.shadowRoot.querySelector('.button__unread-counter').innerText = unreadCount;
	}
}

window.customElements.define('app-sidebar-button', AppSidebarButton);
