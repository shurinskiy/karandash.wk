import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

(() => {
	// return;
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

	/* gsap.matchMedia().add('(min-width: 1101px)', () => {
		document.querySelectorAll('.decor').forEach(el => {
			const dir = el.dataset.gsapDir ?? 'y';
			const dist = parseFloat(el.dataset.gsapDist) || 500;
			const inHero = el.offsetTop >= window.scrollY && el.offsetTop <= window.scrollY + window.innerHeight;

			gsap.to(el, {
				[dir]: -dist,
				ease: 'none',
				scrollTrigger: {
					trigger: el,
					start: inHero ? () => `top ${el.getBoundingClientRect().top}px` : 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			});
		});
	}); */

})();