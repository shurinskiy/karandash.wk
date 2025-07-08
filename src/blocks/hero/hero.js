import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

(() => {

	new Swiper(".hero__slider", {
		modules: [ Autoplay ],
		loop: true,
		speed: 1000,
		spaceBetween: 0,
		// noSwiping: true,
		// simulateTouch: false, 
		// allowTouchMove: false,
		// preventInteractionOnTransition: true,
		autoplay: { 
			delay: 5000,
			disableOnInteraction: false
		}
	});

})();