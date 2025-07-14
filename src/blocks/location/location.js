(() => {

	const markers = document.querySelectorAll('.location__map .location__marker');
	const items = document.querySelectorAll('.location__items .location__item');
	const sibs = document.querySelectorAll('.location__items .location__marker');

	function clearActive() {
		[...markers, ...items].forEach(el => el.classList.remove('active'));
	}

	markers.forEach(marker => {
		['click', 'mouseenter'].forEach(event => {
			marker.addEventListener(event, e => {
				const id = marker.dataset.id;

				const matchItem = [...sibs].find(sib => {
					const ids = sib.dataset.id.split(',').map(s => s.trim());
					return ids.includes(id);
				})?.parentNode;

				clearActive();
				matchItem?.classList.add('active');
				marker.classList.add('active');
			});
		});
	});

	items.forEach(item => {
		['click', 'mouseenter'].forEach(event => {
			item.addEventListener(event, e => {
				const ids = [...item.querySelectorAll('.location__marker')]
					.flatMap(m => m.dataset.id.split(',').map(s => s.trim()));

				clearActive();
				markers.forEach(marker => ids.includes(marker.dataset.id) && marker.classList.add('active'));
				item.classList.add('active');
			});
		});
	});

	['click','touchstart'].forEach(event => {
		document.addEventListener(event, (e) => {
			if (!e.target.closest('.location__items, .location__map')) {
				clearActive();
			}
		}, { passive: false });
	});

})();