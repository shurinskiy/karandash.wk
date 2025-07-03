import { driveMenu } from "../../js/libs/driveMenu";

(() => {
	const header = document.querySelector('.header');
	if (! header) return;

	const navi = header.querySelector('.header__navi');
	const toggle = header.querySelector('.header__toggle');
	const close = header.querySelector('.header__close');

	const menu = driveMenu(navi, [toggle, close], {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			toggle.classList.add('opened');
			document.body.classList.add('underlay');
	
			this.querySelectorAll('a.header__link[href*="#"]').forEach(link => {
				link.addEventListener('click', (e) => menu.menuClose(e));
			});
		},
		close: function() {
			toggle.classList.remove('opened');
			document.body.classList.add('underlay_closing');
			
			this.addEventListener('transitionend', e => {
				document.body.classList.remove('underlay', 'underlay_closing');
			}, { once: true });
		}
	});

	navi.addEventListener('swiped-left', (e) => menu.menuClose(e));

})();
