import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

(() => {
	// return;
	gsap.registerPlugin(ScrollTrigger);

	gsap.matchMedia().add('(min-width: 1101px)', () => {
		const { top: bodyTop } = document.body.getBoundingClientRect();

		document.querySelectorAll('.decor').forEach((el, i) => {
			const dir = el.dataset.gsapDir ?? 'y';
			const dist = +el.dataset.gsapDist || 500;
			const { top } = el.getBoundingClientRect();
			const inHero = top - bodyTop < window.innerHeight;

			gsap.to(el, {
				[dir]: -dist,
				ease: 'none',
				scrollTrigger: {
					trigger: el,
					start: inHero ? () => `top ${top - bodyTop}px` : 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			});
		});
	});

})();