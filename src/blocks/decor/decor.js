import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

(() => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.matchMedia().add('(min-width: 1101px)', () => {
		document.querySelectorAll('.decor').forEach(el => {
			const dir = el.dataset.gsapDir ?? 'y';
			const dist = parseFloat(el.dataset.gsapDist) || 500;
			const { top, bottom } = el.getBoundingClientRect();
			const inView = top < window.innerHeight && bottom > 0;

			gsap.to(el, {
				[dir]: -dist,
				ease: 'none',
				scrollTrigger: {
					trigger: el,
					start: inView ? () => `top ${el.getBoundingClientRect().top}px` : 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			});
		});
	});

	/* document.querySelectorAll('.hero__decor').forEach(el => {
		const start = el.getBoundingClientRect().top;
		const distance = parseFloat(el.dataset.gsapDist) || 500;
		const direction = el.dataset.gsapDir ?? 'y';

		gsap.to(el, {
				[direction]: -distance,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: () => `top ${start}px`,
					end: 'bottom top',
					scrub: true,
					markers: true
				}
			}
		);
	}); */

})();