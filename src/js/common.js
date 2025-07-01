import { throttle } from "./libs/utils";
import { driveAdaptive } from "./libs/driveAdaptive.js";
import "../../node_modules/swiped-events/dist/swiped-events.min.js";
import "./polyfills.js";
import "./blocks.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */

function updateVH() {
	const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', throttle(updateVH, 200), { passive: true });
updateVH();

// Динамический адаптив
new driveAdaptive({
	type: 'max',
	className: 'moved',
	aliases: {
		xxxs: 360,
		xxs: 480,
		xs: 640,
		sm: 780,
		md: 960,
		lg: 1100,
		xlg: 1280,
		xxlg: 1440,
		xxxlg: 1680,
		xxxxlg: 1920
	}
});