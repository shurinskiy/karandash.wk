import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	document.querySelectorAll('.gallery__slider').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation],
			watchOverflow: true,
			threshold: 10,
			navigation: {
				nextEl: `.gallery__button_next`,
				prevEl: `.gallery__button_prev`,
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1.2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 1.6
				},
				640: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				960: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1100: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 36,
					slidesPerView: 3
				}
			}
		});
	});

})();