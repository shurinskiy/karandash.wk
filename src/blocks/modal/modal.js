import { makeModal, slideshow } from "../../js/libs/makeModal";

(() => {
	const modalFrame = makeModal({
		modules: [ slideshow ],
		open: function(modal, el) {
			document.body.classList.add('underlay');
			
			if (modal.slideshow) {
				this.addEventListener('swiped-right', (e) => modalFrame.move(-1));
				this.addEventListener('swiped-left', (e) => modalFrame.move());
			}
		},
		close: function() {
			document.body.classList.remove('underlay');
		}
	});

})();