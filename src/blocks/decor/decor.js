import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

(() => {
	
	gsap.registerPlugin(ScrollTrigger);

	gsap.matchMedia().add("(min-width: 1101px)", () => {
		document.querySelectorAll('.decor').forEach(el => {
			const distance = parseFloat(el.dataset.gsapDist) || 500;
			const direction = el.dataset.gsapDir ?? 'y';

			const from = {
				...(direction === 'x' ? { x: distance } : { y: distance }),
			};

			const to = {
				x: direction === 'x' ? 0 : undefined,
				y: direction === 'y' ? 0 : undefined,
				ease: 'none',
				scrollTrigger: {
					trigger: el,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			};

			gsap.fromTo(el, from, to);
		});
	});

})();
