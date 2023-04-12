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
		const isSelected = this.getAttribute('selected');
	
		const buttonText = this.shadowRoot.querySelector('.button__text');
		buttonText.innerText = text;
		const unreadCounter = this.shadowRoot.querySelector('.button__unread-counter');
		unreadCounter.innerText = unreadCount;
		const sidebarButton = this.shadowRoot.querySelector('.sidebar-button');

		if (unreadCount > 0 || isSelected === 'true') {
			buttonText.style['font-weight'] = 550;
			unreadCounter.style['font-weight'] = 550;
		}

		if (isSelected === 'true') {
			sidebarButton.style['background'] = "#d3e3fd";
			buttonText.style['color'] = "#051d49";
		}
	}
}

window.customElements.define('app-sidebar-button', AppSidebarButton);
