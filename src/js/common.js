import { throttle } from "./libs/utils";
import { driveAdaptive } from "./libs/driveAdaptive.js";
import { scrollBasedToggle } from "./libs/scrollBasedToggle";
import "../../node_modules/swiped-events/dist/swiped-events.min.js";
import "./polyfills.js";
import "./blocks.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */

// Запуск анимаций
let scrollToggle = scrollBasedToggle({ class: 'run' });

// Ширина скроллбара
document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);

// Единица высоты
function updateVH() {
	const { height = window.innerHeight, width = window.innerWidth } = window.visualViewport || {};
	document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
	// document.documentElement.style.setProperty('--vw', `${width * 0.01}px`);
}

['resize', 'orientationchange'].forEach(event => {
	window.addEventListener(event, throttle(updateVH, 200), { passive: true });
});

updateVH();

// Единица ширины
/* new ResizeObserver(() => {
	const { width = window.innerWidth } = window.visualViewport || {};
	document.documentElement.style.setProperty('--vw', `${width * 0.01}px`);
}).observe(document.documentElement); */

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